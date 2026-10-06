import nodemailer from "nodemailer";

export const runtime = "nodejs";
const hits = new Map(); // simple per-IP limit: 3 messages / 10 min (resets on cold start)

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 600000);
  if (recent.length >= 3) return Response.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });

  let b;
  try { b = await req.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  if (b.website) return Response.json({ ok: true }); // honeypot
  const { name, email, subject, message } = b;
  if (![name, email, subject, message].every((v) => typeof v === "string" && v.trim()))
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Enter a valid email address." }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS)
    return Response.json({ error: "Email is not configured yet. Set the SMTP variables in .env.local." }, { status: 500 });

  try {
    const port = Number(SMTP_PORT) || 465;
    const tx = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await tx.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name.slice(0, 80).replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `[Portfolio] ${subject.slice(0, 120).replace(/[\r\n]/g, " ")}`,
      text: `From: ${name} <${email}>\n\n${message.slice(0, 3000)}`,
    });
    hits.set(ip, [...recent, now]);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send the message. Please email me directly." }, { status: 500 });
  }
}
