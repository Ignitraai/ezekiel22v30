"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage to-sage-light text-white">
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
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-text"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-text"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-text">
                    <option value="general">General Question</option>
                    <option value="testimony">Share My Testimony</option>
                    <option value="resource">Request a Resource</option>
                    <option value="support">Support / Donate</option>
                    <option value="church">Church Group Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-text"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage hover:bg-sage-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Send Message
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
                Want to help keep this ministry running? Let us know.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
