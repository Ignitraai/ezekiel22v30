export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple to-purple-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Support This Work
          </h1>
          <p className="text-xl text-gray-200">
            Help keep this book free and its message running
          </p>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
                Why We Ask
              </h2>
              <p className="text-text mb-4">
                Every amount helps. Whether it is the cost of a coffee or the cost of a meal,
                your generosity keeps this message free for others.
              </p>
              <p className="text-text mb-4">
                This book will always be free. The website will always be free. But there are
                real costs to keeping it that way.
              </p>
              <p className="text-text mb-4">
                We need domain name registration, internet connection, upgrading of current
                desktop, electrical supplies and food. Hosting costs money. Creating
                resources to help the body of Christ executing this vision costs money. Every
                donation helps us keep the message free for everyone, everywhere. Most of
                all: We NEED your prayers and you sharing this message.
              </p>
              <p className="text-text italic text-lg border-l-4 border-gold pl-4 mt-6">
                &ldquo;A closed fist cannot receive anything. A person turned entirely 
                inward toward their own needs has shut the very channels through 
                which God loves to move.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-playfair text-2xl font-bold text-dark mb-6 text-center">
                Where Your Donation Goes
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-text">Domain name renewal</span>
                  <span className="text-purple font-bold">~$15/year</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-text">Website hosting</span>
                  <span className="text-purple font-bold">Free (for now)</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-text">Resource creation</span>
                  <span className="text-text-light italic">Ongoing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text">Future: outreach & translation</span>
                  <span className="text-text-light italic">Vision</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-text-light text-sm mb-4">
                  No obligation. Give only if God puts it on your heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Button */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
            Your Gift
          </h2>

          {/* PayPal Donate Button - Replace with actual PayPal link */}
          <div className="bg-cream rounded-lg p-8 mb-8">
            <p className="text-text-light text-sm mb-4">
              Donation integration coming soon.
            </p>
            <p className="text-text">
              In the meantime, if you would like to support this work, 
              please <a href="/contact" className="text-purple underline hover:text-purple-light">contact us</a> and we will provide donation details.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-text-light text-sm">
              &ldquo;He gave you that skill. He gave you that mind. He opened the doors. 
              Who made the sacrifices for you to have what you have? 
              What did you do with it?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-8 text-center">
            Other Ways to Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-dark mb-2">Share the Book</h3>
              <p className="text-text-light text-sm">
                Send it to your pastor, your church leaders, and everyone you know. 
                Sharing is free and powerful.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="font-bold text-dark mb-2">Pray</h3>
              <p className="text-text-light text-sm">
                Pray that God uses this letter to change hearts, end the pretence, 
                and bring real love back to His church.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="font-bold text-dark mb-2">Act</h3>
              <p className="text-text-light text-sm">
                The best support is living out the message. 
                Stand in the gap for someone today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
