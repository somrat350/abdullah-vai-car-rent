"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How do I rent a car?",
    answer:
      "Simply select your car, choose your dates, and complete the booking online. It’s fast and secure.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes, you can modify or cancel your booking up to 24 hours before pickup without any extra charges.",
  },
  {
    question: "Do you offer insurance with rentals?",
    answer:
      "Yes, all rentals include basic insurance. Additional coverage options are available at checkout.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees! The price you see at checkout is the price you pay. Transparent and fair.",
  },
  {
    question: "Can I pick up the car at the airport?",
    answer:
      "Absolutely! We offer pickup from all major airports with convenient and quick service.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#ff4d30] font-bold text-lg mb-2 block">
          FAQ's
        </span>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left text-lg font-medium text-[#0a1d37]">
                {faq.question}
              </span>
              <span className="text-2xl text-[#ff5a30]">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-slate-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
