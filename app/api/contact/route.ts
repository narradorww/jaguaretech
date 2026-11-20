import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function sendFailure(status: number) {
  return NextResponse.json({ error: "Failed to send message" }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, locale } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form email provider is not configured");
      return sendFailure(500);
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Jaguaretech <dev@jaguaretech.com.br>",
      to: "dev@jaguaretech.com.br",
      replyTo: email,
      subject: `Novo lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #000; margin-bottom: 24px;">Novo contato pelo site</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #666; width: 120px;">Nome</td>
              <td style="padding: 12px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #666;">Email</td>
              <td style="padding: 12px 0; font-weight: 500;"><a href="mailto:${email}" style="color: #000;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #666;">Idioma</td>
              <td style="padding: 12px 0;">${locale || "pt"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666; vertical-align: top;">Mensagem</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; color: #999; font-size: 12px;">Enviado via jaguaretech.com.br</p>
        </div>
      `,
    });

    if (error) {
      const providerStatus =
        typeof error.statusCode === "number" ? error.statusCode : null;
      console.error("Contact form email provider rejected send", providerStatus);
      return sendFailure(502);
    }

    if (typeof data?.id !== "string" || !data.id.trim()) {
      console.error("Contact form email provider returned no message ID");
      return sendFailure(502);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    console.error("Contact form failed unexpectedly");
    return sendFailure(500);
  }
}
