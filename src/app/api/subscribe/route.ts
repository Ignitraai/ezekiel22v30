import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY = "957efb04-0c41-4099-8f59-ef5c87a74bd1";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Log submission (visible in Vercel logs)
    console.log(`[DOWNLOAD] ${new Date().toISOString()} | ${name} | ${email}`);

    // Forward to Web3Forms
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New download: The Great Pretence`,
          name,
          email,
          message: `Download request for The Great Pretence from ${name} (${email})`,
        }),
      });
    } catch {
      console.error("Web3Forms submission failed");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your download is ready.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
