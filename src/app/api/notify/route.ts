import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function makeTransporter(user: string, pass: string) {
  return nodemailer.createTransport({
    host: "mail.thesecretplace.today",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

const COMPANY = "thepretence@thesecretplace.today";
const COMPANY_PASS = "Johnnyboy@9$%";
const NOREPLY = "noreply@thesecretplace.today";
const NOREPLY_PASS = "TGP_Noreply_2026!";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, type } = await request.json();

    if (!name || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const userEmail = email || "not provided";

    // 1. Send acknowledgement to the user
    let ackSubject = "";
    let ackBody = "";

    if (type === "testimony") {
      ackSubject = "Thank you for your testimony - The Great Pretence";
      ackBody = "Hello " + name + ",\n\nThank you for sharing your testimony. We will review it and confirm when it is published.\n\nYour story matters. It may encourage someone else to take that first step.\n\nMay God bless you as you stand in the gap.\n\n- The Ezekiel 22v30 Team";
    } else if (type === "pledge") {
      ackSubject = "Thank you for standing with us - The Great Pretence";
      ackBody = "Hello " + name + ",\n\nThank you for supporting the work and standing with us. Your commitment matters.\n\nMay God bless you as you stand in the gap.\n\n- The Ezekiel 22v30 Team";
    } else if (type === "contact") {
      ackSubject = "We received your message - The Great Pretence";
      ackBody = "Hello " + name + ",\n\nThank you for reaching out. We have received your message and will get back to you as soon as possible.\n\nMay God bless you.\n\n- The Ezekiel 22v30 Team";
    }

    if (ackSubject && userEmail !== "not provided") {
      const userTransporter = makeTransporter(COMPANY, COMPANY_PASS);
      await userTransporter.sendMail({
        from: COMPANY,
        to: userEmail,
        subject: ackSubject,
        text: ackBody,
      });
    }

    // 2. Send notification to Coenie (from noreply to avoid self-to-self)
    const notifyTransporter = makeTransporter(NOREPLY, NOREPLY_PASS);
    await notifyTransporter.sendMail({
      from: NOREPLY + " (The Great Pretence)",
      to: COMPANY,
      subject: "[The Great Pretence] " + subject,
      text: "New submission from ezekiel22v30.vercel.app\n\nSubject: " + subject + "\nFrom: " + name + " <" + userEmail + ">\n\nMessage:\n" + message,
    });

    console.log("[NOTIFY] " + subject + " | " + name + " | " + userEmail);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[NOTIFY ERROR]", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
