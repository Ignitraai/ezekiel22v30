"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const chapters = [
  { number: "Introduction", title: "I Found None — Not One", summary: "God looks at His people and finds no one standing in the gap. A question that should stop every one of us cold." },
  { number: "Chapter One", title: "The Woman in the Single Room", summary: "A domestic worker who had nothing by the world's measure, yet died richer than almost anyone the author has ever known." },
  { number: "Chapter Two", title: "The Baby at the Door", summary: "A desperate mother, a hydrocephalus baby, a distracted man at the door. God healed that child in spite of him." },
  { number: "Chapter Three", title: "The Great Pretence", summary: "A pastor's birthday celebration, an empty fridge at home, and a church that has perfected the language of love while abandoning its practice." },
  { number: "Chapter Four", title: "Where Did We Come From?", summary: "The church we came from — not a building with a programme, but a living community of people who truly cared for one another." },
  { number: "Chapter Five", title: "The Starfish", summary: "You cannot fix the banking system by lunchtime. But there is someone in your world right now who is that starfish." },
  { number: "Chapter Six", title: "The Recipe", summary: "What do we have? Who around us has need? The matches are already there. Start small. Start honest." },
  { number: "Chapter Seven", title: "Raise Your Rod", summary: "God is not waiting for you to have a better prayer life before He moves. He is waiting for you to raise your rod." },
];

export default function BookPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function forceDownload() {
    setDownloading(true);
    try {
      const response = await fetch("/the-great-pretence.pdf");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "The_Great_Pretence.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open("/the-great-pretence.pdf", "_blank");
    }
    setDownloading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name || !email) {
      setError("Please fill in both your name and email.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "957efb04-0c41-4099-8f59-ef5c87a74bd1",
          subject: "New download: The Great Pretence",
          name,
          email,
          message: `Download request for The Great Pretence from ${name} (${email})`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
        setSending(false);
        return;
      }

      setSubmitted(true);
      setSending(false);
      // Start download automatically
      forceDownload();
    } catch {
      setError("Network error. Please check your connection.");
      setSending(false);
    }
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image src="/cover.webp" alt="The Great Pretence - Book Cover" width={350} height={490} className="rounded-lg shadow-2xl" priority />
            </div>
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">The Great Pretence</h1>
              <p className="text-xl text-gray-200 mb-4">A Call to Love That Costs Something</p>
              <p className="text-gray-300 mb-8">This is not a book written by a theologian. It is a letter from a man who has seen things he cannot unsee, who has been on both sides of the gap, and who finally felt compelled to speak.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} ref={formRef} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4 max-w-md">
                  <h3 className="font-playfair text-xl font-bold">Enter your details to download:</h3>
                  <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold" />
                  <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold" />
                  {error && <p className="text-red-300 text-sm">{error}</p>}
                  <button type="submit" disabled={sending} className="w-full bg-gold hover:bg-gold-light text-dark font-bold px-6 py-3 rounded-lg transition-colors disabled:opacity-50">
                    {sending ? "Please wait..." : "Get the Book"}
                  </button>
                  <p className="text-xs text-gray-300 text-center">We respect your privacy. No spam, ever.</p>
                </form>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-gold">Thank you, {name}!</h3>
                  <button onClick={forceDownload} disabled={downloading} className="inline-block bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg disabled:opacity-50">
                    {downloading ? "Preparing..." : "Download Now"}
                  </button>
                  <p className="text-sm text-gray-300 mt-4">If the download does not start, <button onClick={forceDownload} className="underline text-gold cursor-pointer">click here</button>.</p>
                </div>
              )}

              <p className="text-sm text-gray-300 mt-4">No cost. No catch. Share freely with everyone you know.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-3xl font-bold text-center text-dark mb-4">What&apos;s Inside</h2>
          <p className="text-center text-text-light mb-12">8 chapters that will challenge everything you thought you knew about church, community, and love.</p>
          <div className="space-y-6">
            {chapters.map((ch) => (
              <div key={ch.number} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gold hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-purple font-bold text-sm whitespace-nowrap">{ch.number}</span>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-dark mb-2">{ch.title}</h3>
                    <p className="text-text-light">{ch.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            {!submitted ? (
              <button onClick={scrollToForm} className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">Download the Full Book</button>
            ) : (
              <button onClick={forceDownload} disabled={downloading} className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors disabled:opacity-50">
                {downloading ? "Preparing..." : "Download the Full Book"}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">Share This Book</h2>
          <p className="text-text-light mb-8">Send this to your pastor, your elders, your church leaders, and everyone you know. This letter is asking the whole body of Christ a question.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/?text=Check%20out%20The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love%3A%20https://ezekiel22v30.vercel.app/book" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">Share on WhatsApp</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://ezekiel22v30.vercel.app/book" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">Share on Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love&url=https://ezekiel22v30.vercel.app/book" target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">Share on X / Twitter</a>
          </div>
        </div>
      </section>
    </>
  );
}
