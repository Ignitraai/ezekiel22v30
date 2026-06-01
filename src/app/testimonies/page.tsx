import Link from "next/link";

const testimonies = [
  {
    name: "A Pastor in Windhoek",
    text: "I read this book in one sitting. It broke me. I have been leading my church for fifteen years and I realised I have been building a performance, not a community. Something has to change.",
  },
  {
    name: "A Mother of Three",
    text: "I shared this with my small group and we all cried together. For the first time, we were honest about our struggles. That night, we started planning how to help the family down the street who has nothing.",
  },
  {
    name: "A Young Professional",
    text: "I left the church five years ago because it felt fake. This book explained why. I am going back — not to the performance, but to find the real church described in Acts.",
  },
];

export default function TestimoniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage to-sage-light text-white">
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
                <p className="text-sage font-bold">
                  &mdash; {testimony.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
            Share Your Story
          </h2>
          <p className="text-text-light mb-8">
            Has this book changed something in you? Has it sparked action in your church or community? 
            We would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-light text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Send Us Your Testimony
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage text-white">
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
              className="border-2 border-white hover:bg-white hover:text-sage font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Take the Pledge
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
