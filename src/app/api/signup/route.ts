import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

const SECRET = "tgp-2026-confirm-secret-key";

function verifyToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const colon = decoded.lastIndexOf(":");
    if (colon === -1) return null;
    const email = decoded.slice(0, colon);
    const sig = decoded.slice(colon + 1);
    const expected = crypto.createHmac("sha256", SECRET).update(email).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)) ? email : null;
  } catch {
    return null;
  }
}

function generateToken(email: string): string {
  const hmac = crypto.createHmac("sha256", SECRET).update(email).digest("hex");
  return Buffer.from(`${email}:${hmac}`).toString("base64url");
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    if (!json.name || !json.email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }
    const name = json.name;
    const email = json.email.toLowerCase().trim();

    const token = generateToken(email);
    const confirmUrl = "https://ezekiel22v30.vercel.app/api/confirm?token=" + token;

    const transporter = nodemailer.createTransport({
      host: "mail.thesecretplace.today",
      port: 587,
      secure: false,
      auth: { user: "thepretence@thesecretplace.today", pass: "TGP_Download_2026!" },
    });

    const text = [
      "Hello " + name + ",",
      "",
      "Thank you for your interest in 'The Great Pretence.'",
      "",
      "To download your free copy, please confirm your email address by clicking the link below:",
      "",
      confirmUrl,
      "",
      "If you did not request this download, please ignore this email.",
      "",
      "May God bless you as you stand in the gap.",
      "",
      "— The Great Pretence",
    ].join("
");

    await transporter.sendMail({
      from: ""The Great Pretence" <thepretence@thesecretplace.today>",
      to: email,
      subject: "Please confirm your download — The Great Pretence",
      text: text,
    });

    console.log("[SIGNUP] " + new Date().toISOString() + " | " + name + " | " + email);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[SIGNUP ERROR]", err);
    return NextResponse.json({ error: "Failed to send confirmation. Try again." }, { status: 500 });
  }
}
