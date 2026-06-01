"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sage text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-playfair text-xl font-bold tracking-wide">
            Ezekiel 22:30
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold-light transition-colors">
              Home
            </Link>
            <Link href="/book" className="hover:text-gold-light transition-colors">
              The Book
            </Link>
            <Link href="/pledge" className="hover:text-gold-light transition-colors">
              I Will Stand
            </Link>
            <Link href="/resources" className="hover:text-gold-light transition-colors">
              Resources
            </Link>
            <Link href="/testimonies" className="hover:text-gold-light transition-colors">
              Testimonies
            </Link>
            <Link href="/support" className="hover:text-gold-light transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-gold-light transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/book" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              The Book
            </Link>
            <Link href="/pledge" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              I Will Stand
            </Link>
            <Link href="/resources" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="/testimonies" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              Testimonies
            </Link>
            <Link href="/support" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              Support
            </Link>
            <Link href="/contact" className="block py-2 hover:text-gold-light transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
