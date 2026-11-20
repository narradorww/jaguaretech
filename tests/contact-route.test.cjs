const assert = require("node:assert/strict");
const { beforeEach, test } = require("node:test");
const { inspect } = require("node:util");
const { Resend } = require("resend");
const { POST } = require("../.next/contact-route-test/route.js");

const contact = {
  name: "Pessoa de teste",
  email: "lead@example.test",
  message: "Gostaria de conversar sobre um projeto.",
  locale: "pt",
};
const serviceInquiry = {
  ...contact,
  name: contact.email,
  message: "Serviço: Mobile\n\nPrazo: 3 meses\n\nInvestimento: A definir",
};
const genericError = { error: "Failed to send message" };

function request(payload) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

beforeEach((t) => {
  const originalKey = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "re_test_not_a_real_key";
  t.after(() => {
    if (originalKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalKey;
  });
  t.mock.method(console, "error", () => {});
  t.mock.method(globalThis, "fetch", () => {
    throw new Error("Unexpected HTTP request in offline test");
  });
});

for (const [flow, payload] of Object.entries({ contact, serviceInquiry })) {
  test(`${flow}: returns success only when Resend accepts the message`, async () => {
    fetch.mock.mockImplementation(() => Response.json({ id: "test-message-id" }));

    const response = await POST(request(payload));

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { success: true });
    assert.equal(fetch.mock.callCount(), 1);
    const [, options] = fetch.mock.calls[0].arguments;
    const email = JSON.parse(options.body);
    assert.equal(email.reply_to, payload.email);
    assert.ok(email.html.includes(payload.message));
  });

  test(`${flow}: reports provider rejection without exposing its error details`, async () => {
    fetch.mock.mockImplementation(() => Response.json({
      name: "validation_error",
      statusCode: 403,
      message: "Provider details for lead@example.test",
    }, { status: 403 }));

    const response = await POST(request(payload));

    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), genericError);
    assert.equal(fetch.mock.callCount(), 1);
    assert.equal(console.error.mock.callCount(), 1);
    assert.ok(!inspect(console.error.mock.calls[0].arguments).includes(payload.email));
  });
}

test("rejects successful provider responses with an absent or blank message ID", async () => {
  for (const payload of [{}, { id: "  " }]) {
    fetch.mock.mockImplementation(() => Response.json(payload));
    const response = await POST(request(contact));
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), genericError);
  }
});

test("handles an exception from the SDK without exposing its details", async (t) => {
  const emails = new Resend("re_test_not_a_real_key").emails;
  t.mock.method(Object.getPrototypeOf(emails), "send", async () => {
    throw new Error("Unexpected error for lead@example.test");
  });

  const response = await POST(request(contact));

  assert.equal(response.status, 500);
  assert.deepEqual(await response.json(), genericError);
  assert.equal(fetch.mock.callCount(), 0);
  assert.equal(console.error.mock.callCount(), 1);
  assert.ok(!inspect(console.error.mock.calls[0].arguments).includes(contact.email));
});

test("handles missing provider configuration without making a request", async () => {
  delete process.env.RESEND_API_KEY;

  const response = await POST(request(contact));

  assert.equal(response.status, 500);
  assert.deepEqual(await response.json(), genericError);
  assert.equal(fetch.mock.callCount(), 0);
});

test("retains form validation and does not call the provider for invalid input", async () => {
  const invalidEmail = await POST(request({ ...contact, email: "invalid" }));
  const missingMessage = await POST(request({ ...contact, message: "" }));

  assert.equal(invalidEmail.status, 400);
  assert.equal(missingMessage.status, 400);
  assert.equal(fetch.mock.callCount(), 0);
});
