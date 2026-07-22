import Link from "next/link";

const resources = [
  {
    title: "The Love Action Launch",
    description: "A one-evening guide for any church to start living the Recipe. Print-ready certificate-style PDF. Hand it to a pastor and say: start here.",
    type: "PDF",
    comingSoon: false,
    link: "/The_Love_Action_Launch.pdf",
  },
  {
    title: "Church Group Discussion Guide",
    description: "A step-by-step guide for leading your small group through The Great Pretence. Includes discussion questions for each chapter.",
    type: "PDF",
    comingSoon: true,
  },
  {
    title: "Sermon Starters",
    description: "Key themes and scripture references to help pastors craft sermons inspired by the book's message.",
    type: "Guide",
    comingSoon: true,
  },
  {
    title: "Shareable Social Media Graphics",
    description: "Beautiful quotes and images from the book, ready to share on WhatsApp, Facebook, Instagram, and X.",
    type: "Images",
    comingSoon: true,
  },
  {
    title: "Chapter Summary Cards",
    description: "Quick-reference cards summarising each chapter. Perfect for church bulletins or sharing in groups.",
    type: "PDF",
    comingSoon: true,
  },
  {
    title: "Start an Acts Group in Your Community",
    description: "A comprehensive guide on how to start and maintain an Acts Group in your community.",
    type: "Guide",
    comingSoon: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-200">
            Tools to help you share the message and lead your community
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gold hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-dark">
                    {resource.title}
                  </h3>
                  <span className="text-xs bg-purple/10 text-purple px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <p className="text-text-light mb-4">{resource.description}</p>
                {resource.comingSoon ? (
                  <span className="text-text-light text-sm italic">
                    Coming soon — we&apos;re working on it
                  </span>
                ) : (
                  <a
                    href={resource.link}
                    download
                    className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-4 py-2 rounded transition-colors"
                  >
                    Download
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
            Share the Book
          </h2>
          <p className="text-text-light mb-8">
            The most powerful resource is the book itself. Send it to everyone you know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-purple hover:bg-purple-light text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Go to The Book
            </Link>
            <a
              href="https://wa.me/?text=Check%20out%20The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love%3A%20https://ezekiel22v30.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Request */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-2xl font-bold text-dark mb-4">
            Need Something Specific?
          </h2>
          <p className="text-text-light mb-6">
            If you need a resource that isn&apos;t listed here, let us know. We&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
