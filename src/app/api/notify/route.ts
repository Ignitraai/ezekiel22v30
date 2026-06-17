import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const { name, email, subject, message } = json;

    if (!name || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.thesecretplace.today",
      port: 587,
      secure: false,
      auth: { user: "thepretence@thesecretplace.today", pass: "Johnnyboy@9$%" },
    });

    const text = [
      "New submission from ezekiel22v30.vercel.app",
      "",
      "Subject: " + subject,
      "From: " + name + " <" + (email || "not given") + ">",
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: "thepretence@thesecretplace.today",
      to: "thepretence@thesecretplace.today",
      subject: "[The Great Pretence] " + subject,
      text: text,
    });

    console.log("[NOTIFY] " + subject + " | " + name + " | " + (email || "no email"));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[NOTIFY ERROR]", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
