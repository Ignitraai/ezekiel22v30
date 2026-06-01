import Image from "next/image";

const chapters = [
  {
    number: "Introduction",
    title: "I Found None — Not One",
    summary: "God looks at His people and finds no one standing in the gap. A question that should stop every one of us cold.",
  },
  {
    number: "Chapter One",
    title: "The Woman in the Single Room",
    summary: "A domestic worker who had nothing by the world's measure, yet died richer than almost anyone the author has ever known.",
  },
  {
    number: "Chapter Two",
    title: "The Baby at the Door",
    summary: "A desperate mother, a hydrocephalus baby, a distracted man at the door. God healed that child in spite of him.",
  },
  {
    number: "Chapter Three",
    title: "The Great Pretence",
    summary: "A pastor's birthday celebration, an empty fridge at home, and a church that has perfected the language of love while abandoning its practice.",
  },
  {
    number: "Chapter Four",
    title: "Where Did We Come From?",
    summary: "The church we came from — not a building with a programme, but a living community of people who truly cared for one another.",
  },
  {
    number: "Chapter Five",
    title: "The Starfish",
    summary: "You cannot fix the banking system by lunchtime. But there is someone in your world right now who is that starfish.",
  },
  {
    number: "Chapter Six",
    title: "The Recipe",
    summary: "What do we have? Who around us has need? The matches are already there. Start small. Start honest.",
  },
  {
    number: "Chapter Seven",
    title: "Raise Your Rod",
    summary: "God is not waiting for you to have a better prayer life before He moves. He is waiting for you to raise your rod.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage to-sage-light text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/cover.jpg"
                alt="The Great Pretence - Book Cover"
                width={350}
                height={490}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                The Great Pretence
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                A Call to Love That Costs Something
              </p>
              <p className="text-gray-300 mb-8">
                This is not a book written by a theologian. It is a letter from a man who has seen things he cannot unsee, 
                who has been on both sides of the gap, and who finally felt compelled to speak.
              </p>
              <a
                href="/the-great-pretence.pdf"
                download
                className="inline-block bg-gold hover:bg-gold-light text-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                Download Free PDF
              </a>
              <p className="text-sm text-gray-300 mt-4">
                No cost. No catch. Share freely with everyone you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter List */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-3xl font-bold text-center text-dark mb-4">
            What&apos;s Inside
          </h2>
          <p className="text-center text-text-light mb-12">
            8 chapters that will challenge everything you thought you knew about church, community, and love.
          </p>

          <div className="space-y-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gold hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sage font-bold text-sm whitespace-nowrap">
                    {chapter.number}
                  </span>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-dark mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-text-light">{chapter.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/the-great-pretence.pdf"
              download
              className="inline-block bg-sage hover:bg-sage-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Download the Full Book
            </a>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
            Share This Book
          </h2>
          <p className="text-text-light mb-8">
            Send this to your pastor, your elders, your church leaders, and everyone you know. 
            This letter is asking the whole body of Christ a question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/?text=Check%20out%20The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love%3A%20https://ezekiel22v30.vercel.app/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Share on WhatsApp
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://ezekiel22v30.vercel.app/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Share on Facebook
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=The%20Great%20Pretence%20-%20a%20free%20e-book%20calling%20the%20church%20to%20real%20love&url=https://ezekiel22v30.vercel.app/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Share on X / Twitter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
