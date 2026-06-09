import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
