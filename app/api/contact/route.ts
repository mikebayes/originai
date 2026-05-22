import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/contact
 *
 * Receives the contact form payload, validates it, and forwards as an
 * email via Resend. Sends from a verified send.originai.ca subdomain
 * to mike@originai.ca. The Reply-To header is set to the submitter's
 * email so Mike can hit reply and respond directly.
 *
 * Required env vars (set in Vercel project settings):
 *   RESEND_API_KEY — Resend API key, "re_..."
 *
 * Honeypot: includes a "website" hidden field. Bots typically fill it.
 * If present, we silently 200 the request so the bot thinks it worked
 * but no email is sent.
 */
export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    website?: string; // honeypot
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot: if a bot filled the hidden website field, silently drop.
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const company = (payload.company || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  // RFC 5321 caps email addresses at 254 chars. Bounding length here
  // before the regex eliminates any theoretical ReDoS surface and gives
  // an early reject for obviously bogus input.
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const textBody = [
    `New contact form submission from originai.ca`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || "(not provided)"}`,
    ``,
    `Message:`,
    message,
    ``,
    `---`,
    `Reply directly to this email to respond to ${name}.`,
  ].join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from: "Origin AI <noreply@send.originai.ca>",
      to: ["mike@originai.ca"],
      replyTo: email,
      subject: `Origin AI contact: ${name}${company ? ` (${company})` : ""}`,
      text: textBody,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact form unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
