import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezekiel22v30.vercel.app"),
  title: "The Great Pretence - A Call to Love That Costs Something",
  description: "A free e-book calling the body of Christ to end the pretence and love one another for real. Download your free copy at ezekiel22v30.com",
  openGraph: {
    title: "The Great Pretence - A Call to Love That Costs Something",
    description: "A free e-book calling the body of Christ to end the pretence and love one another for real.",
    url: "https://ezekiel22v30.vercel.app",
    siteName: "Ezekiel 22:30",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "The Great Pretence - Book Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Pretence - A Call to Love That Costs Something",
    description: "A free e-book calling the body of Christ to end the pretence and love one another for real.",
    images: ["/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
