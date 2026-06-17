"use client";

import { useState, useRef } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
          subject: formData.get("subject"),
          message: formData.get("message"),
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
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200">
            Questions, testimonies, or just want to say hello
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">✓</div>
              <h2 className="font-playfair text-3xl font-bold text-dark mb-4">
                Message Sent
              </h2>
              <p className="text-text-light">
                Thank you for reaching out. We will get back to you as soon as we can.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-dark mb-6 text-center">
                Send Us a Message
              </h2>

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
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Subject
                  </label>
                  <select name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text">
                    <option value="General Question">General Question</option>
                    <option value="Share My Testimony">Share My Testimony</option>
                    <option value="Resource Request">Request a Resource</option>
                    <option value="Support / Donate">Support / Donate</option>
                    <option value="Church Group Inquiry">Church Group Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="Write your message here..."
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-playfair text-xl font-bold text-dark mb-2">
                Share a Testimony
              </h3>
              <p className="text-text-light text-sm">
                Has this book changed something in you? We want to hear about it.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-dark mb-2">
                Church Groups
              </h3>
              <p className="text-text-light text-sm">
                Want to use this book for your small group? We have resources to help.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-dark mb-2">
                Support
              </h3>
              <p className="text-text-light text-sm">
                Want to help keep this work running? Let us know.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
