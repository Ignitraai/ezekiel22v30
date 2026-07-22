import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Ezekiel 22:30</h3>
            <p className="text-gray-300 text-sm">
              I looked for someone who would build up the wall and stand in the gap
              on behalf of the land, so that I would not have to destroy it.
              But I found no one. Not one.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/book" className="hover:text-gold-light transition-colors">Download the Book</Link></li>
              <li><Link href="/pledge" className="hover:text-gold-light transition-colors">Stand in the Gap</Link></li>
              <li><Link href="/resources" className="hover:text-gold-light transition-colors">Resources</Link></li>
              <li><Link href="/support" className="hover:text-gold-light transition-colors">Support This Work</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Share</h4>
            <p className="text-gray-300 text-sm mb-4">
              Help spread the word. Share this with your church, your pastor, and everyone you know.
            </p>
            <a
              href="https://wa.me/?text=Check%20out%20The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love%3A%20https://ezekiel22v30.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple hover:bg-purple-light text-white px-4 py-2 rounded text-sm transition-colors"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            This book is free. This website is free. If it has blessed you, consider{" "}
            <Link href="/support" className="text-gold hover:text-gold-light transition-colors">
              supporting
            </Link>{" "}
            to keep it running.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} ezekiel22v30.com - All rights reserved. Free to share.
          </p>
        </div>
      </div>
    </footer>
  );
}
