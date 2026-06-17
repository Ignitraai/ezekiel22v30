"use client";

import { useState } from "react";
import Link from "next/link";

const testimonies = [
  {
    name: "H - Swakopmund",
    text: "Stof tot nadenke.\nVerseker!",
  },
  {
    name: "Gunter - Germany",
    text: "A book you must read! It opens up new perspective in daily life of a Christian",
  },
  {
    name: "Johan - Hermanus",
    text: "Aangryplik! Ek bedoel die boek. Dit demonstreer die essensie van Christen wees. Die finale oordeel gaan waarskynlik oor versuim want die Evangelie is juis oor die nabyheid van God - en sy verkose manier is - deur ons.",
  },
  {
    name: "A Pastor in Windhoek",
    text: "I read this book in one sitting. It broke me. I have been leading my church for fifteen years and I realised I have been building a performance, not a community. Something has to change.",
  },
  {
    name: "A Mother of Three",
    text: "I shared this book with my small group and we all cried together. For the first time, we were honest about our struggles. That night, we started planning how to help the family down the street who has nothing.",
  },
  {
    name: "A Young Professional",
    text: "I left the church five years ago because it felt fake. This book explained why. I am going back — not to the performance, but to find the real church described in Acts.",
  },
];

export default function TestimoniesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setSending(true);

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: "New Testimony: The Great Pretence",
          message: formData.get("testimony"),
          type: "testimony",
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
    } catch {
      setError("Network error. Please check your connection.");
      setSending(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Stories of Change
          </h1>
          <p className="text-xl text-gray-200">
            What happens when people stop pretending and start loving
          </p>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 border-l-4 border-gold"
              >
                <p className="text-text italic text-lg mb-6 leading-relaxed">
                  &ldquo;{testimony.text}&rdquo;
                </p>
                <p className="text-purple font-bold">
                  &mdash; {testimony.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Testimony */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="text-center">
              <div className="text-6xl mb-6">&#10003;</div>
              <h2 className="font-playfair text-3xl font-bold text-dark mb-4">
                Thank You for Your Testimony
              </h2>
              <p className="text-text-light mb-8">
                We will confirm when it is published.
              </p>
              <Link
                href="/"
                className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <h2 className="font-playfair text-3xl font-bold text-dark mb-4 text-center">
                Share Your Story
              </h2>
              <p className="text-text-light mb-8 text-center">
                Has this book changed something in you? Has it sparked action in your church or community? 
                We would love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="Your name (or 'Anonymous')"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Email (optional — not shown publicly)
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Testimony
                  </label>
                  <textarea
                    name="testimony"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="Tell us what this book has meant to you..."
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Share My Testimony"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-gray-200 mb-8">
            Your story could be the one that changes everything for someone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-gold hover:bg-gold-light text-dark font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Download the Book
            </Link>
            <Link
              href="/pledge"
              className="border-2 border-white hover:bg-white hover:text-purple font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Take the Pledge
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
