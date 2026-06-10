import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Log submission (visible in Vercel logs)
    console.log(`[DOWNLOAD] ${new Date().toISOString()} | ${name} | ${email}`);

    // If Web3Forms access key is set, forward the submission
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New download: The Great Pretence`,
            name,
            email,
            message: `Download request for The Great Pretence from ${name} (${email})`,
          }),
        });
      } catch {
        console.error("Web3Forms submission failed — check access key");
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your download is ready.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
