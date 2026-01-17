export default function FAQ() {
  const faqs = [
    "What are the upfront costs?",
    "Who will be working on my case?",
    "Will my information be safe?",
    "How long will it take to resolve?",
    "What cases do you handle?",
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Blue Panel */}
        <div className="rounded-[40px] bg-[#0b4da2] px-12 py-16">

          {/* Title */}
          <h2 className="text-4xl font-serif text-white">
            Questions? Contact Us
          </h2>

          {/* FAQ Items */}
          <div className="mt-12 space-y-5">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl bg-[#083a75] px-8 py-6"
              >
                <p className="text-lg text-white">
                  {question}
                </p>

                {/* Plus Button */}
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-blue-900">
                  +
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
