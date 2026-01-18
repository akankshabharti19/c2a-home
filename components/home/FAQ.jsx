"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are the upfront costs?",
    answer:
      "There are no upfront costs. You only pay if we successfully win your case.",
  },
  {
    question: "Who will be working on my case?",
    answer:
      "Your case will be handled by experienced attorneys specialized in your claim type.",
  },
  {
    question: "Will my information be safe?",
    answer:
      "Yes. We use secure systems and strict confidentiality protocols to protect your data.",
  },
  {
    question: "How long will it take to resolve?",
    answer:
      "Most cases resolve within 18–36 months depending on complexity.",
  },
  {
    question: "What cases do you handle?",
    answer:
      "We handle mass torts, class actions, toxic exposure, and personal injury cases.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0b4da2] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* HEADER */}
        <h2 className="mb-8 sm:mb-12 text-center sm:text-left text-3xl sm:text-4xl font-serif text-white">
          Questions? Contact Us
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#08346b] px-4 sm:px-6 py-4 sm:py-5"
            >
              {/* QUESTION ROW */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-base sm:text-lg font-medium text-white">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg sm:text-xl font-bold text-[#0b4da2]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
