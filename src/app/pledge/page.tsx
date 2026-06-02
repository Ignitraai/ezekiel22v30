"use client";

import { useState } from "react";

export default function PledgePage() {
  const [submitted, setSubmitted] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(127);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeCount((prev) => prev + 1);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            I Will Stand
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            In the Gap
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            God is looking at your city. He is looking at your congregation. He is looking at you. 
            Will He find you?
          </p>
          <div className="bg-white/10 rounded-lg px-8 py-4 inline-block">
            <p className="text-3xl font-bold text-gold">{pledgeCount}</p>
            <p className="text-sm text-gray-300">people have pledged to stand</p>
          </div>
        </div>
      </section>

      {/* Pledge Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">✓</div>
              <h2 className="font-playfair text-3xl font-bold text-dark mb-4">
                Thank You for Standing
              </h2>
              <p className="text-text-light mb-6">
                You have made a commitment that matters. Now go and live it out. 
                One person at a time. One act of love at a time.
              </p>
              <p className="text-text italic">
                &ldquo;Pick up the starfish. Throw it back. Keep walking and picking up more.&rdquo;
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-playfair text-3xl font-bold text-dark mb-6 text-center">
                My Pledge
              </h2>
              <p className="text-text-light text-center mb-8">
                Choose one or more commitments. Start small. Start honest. Start today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Your Name (or &ldquo;Anonymous&rdquo;)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Email (optional - for updates)
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-3">
                    I will stand in the gap by:
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: "pray", label: "Praying daily for my church and community" },
                      { id: "see", label: "Seeing the person in front of me and actually caring" },
                      { id: "give", label: "Giving my skills, time, or resources to someone in need" },
                      { id: "share", label: "Sharing this book with my pastor and church leaders" },
                      { id: "mentor", label: "Mentoring someone younger in the faith" },
                      { id: "listen", label: "Listening to someone who is struggling without judging" },
                      { id: "action", label: "Taking one practical step this week to close the gap" },
                    ].map((item) => (
                      <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          value={item.id}
                          className="mt-1 w-5 h-5 text-purple border-gray-300 rounded focus:ring-purple"
                        />
                        <span className="text-text group-hover:text-purple transition-colors">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    My commitment (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple text-text"
                    placeholder="In my own words, I commit to..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  I Will Stand
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Encouragement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl text-dark italic max-w-3xl mx-auto">
            &ldquo;Rise up. Open your eyes. See the person in front of you. Raise your rod. The sea will part.&rdquo;
          </blockquote>
        </div>
      </section>
    </>
  );
}
