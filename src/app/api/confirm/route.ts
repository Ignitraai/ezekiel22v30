import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const SECRET = "tgp-2026-confirm-secret-key";

function verifyToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const colon = decoded.lastIndexOf(":");
    if (colon === -1) return null;
    const email = decoded.slice(0, colon);
    const sig = decoded.slice(colon + 1);
    const expected = crypto.createHmac("sha256", SECRET).update(email).digest("hex");
    if (crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
      return email;
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) {
    return new Response("Missing token", { status: 400 });
  }

  const email = verifyToken(token);
  if (!email) {
    return new Response("Invalid or expired confirmation link.", { status: 400 });
  }

  const pdfPath = path.join(process.cwd(), "public", "the-great-pretence.pdf");
  const pdfBuffer = fs.readFileSync(pdfPath);

  console.log("[CONFIRMED] " + new Date().toISOString() + " | " + email);

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="The_Great_Pretence.pdf"',
      "Content-Length": pdfBuffer.length.toString(),
    },
  });
}