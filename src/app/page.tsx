import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple to-purple-light text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold-light text-sm md:text-base uppercase tracking-widest mb-6">
            A Letter to the Church
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight mb-8">
            &ldquo;I looked for someone to stand in the gap... I found no one. Not one.&rdquo;
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Ezekiel 22:30
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Would He find you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Download Free
            </Link>
            <Link
              href="/pledge"
              className="border-2 border-white hover:bg-white hover:text-purple font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              I Will Stand
            </Link>
          </div>
        </div>
      </section>

      {/* Book Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/cover.webp"
                alt="The Great Pretence - Book Cover"
                width={400}
                height={560}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-6">
                The Great Pretence
              </h2>
              <p className="text-lg text-text-light mb-6">
                A Call to Love That Costs Something
              </p>
              <p className="text-text mb-4">
                We have mastered the language of &ldquo;speaking by faith&rdquo; while living in the silence of need. 
                We have perfected the Sunday performance while our neighbour starves behind his front door. 
                We have built bigger buildings and preached louder sermons, yet Jesus said that by our love 
                for one another the world would know we are His disciples.
              </p>
              <p className="text-text mb-8">
                Not by our buildings. Not by our conferences. Not by our sermons.
                <strong> By our love.</strong>
              </p>
              <Link
                href="/book"
                className="inline-block bg-purple hover:bg-purple-light text-white font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Quotes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-3xl font-bold text-center text-dark mb-12">
            From the Book
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-text italic mb-4">
                &ldquo;The only thing that will bring real revival is not more prayer &mdash; The Great Pretence has to end.&rdquo;
              </p>
              <cite className="text-text-light text-sm not-italic">&mdash; Chapter Three</cite>
            </blockquote>
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-text italic mb-4">
                &ldquo;You cannot save all of them. But you can save that one.&rdquo;
              </p>
              <cite className="text-text-light text-sm not-italic">&mdash; Chapter Five: The Starfish</cite>
            </blockquote>
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-text italic mb-4">
                &ldquo;He gave you that skill. He gave you that mind. What did you do with it?&rdquo;
              </p>
              <cite className="text-text-light text-sm not-italic">&mdash; Chapter Six: The Recipe</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-6">
            This is not a book. It is a letter.
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            And it is asking you a question: If God looked at your church, your city, your congregation, 
            and He searched for someone standing in that gap, would He find you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-purple hover:bg-purple-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Download Free
            </Link>
            <Link
              href="/pledge"
              className="bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Take the Pledge
            </Link>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-purple text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-2xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-200 mb-6">
            Join others who are reading this letter. Get updates and stories of lives being changed.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-dark font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
