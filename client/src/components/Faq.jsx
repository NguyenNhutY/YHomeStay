// Faq.jsx
import React, { memo, useState } from "react";
import { assets } from "../assets/data.js";
import Title from "./Title.jsx";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqsData = [
    {
      question: "Are the homes exactly as shown in photos?",
      answer:
        "Yes. Every listing is reviewed before going live. What you see is what you stay in — no surprises.",
    },
    {
      question: "How does check-in and check-out work?",
      answer:
        "Most homes offer flexible self check-in. Details are shared clearly before arrival so you can arrive at your own pace.",
    },
    {
      question: "Are these places suitable for quiet stays?",
      answer:
        "We prioritize privacy and calm surroundings. These homes are best for rest, slow travel, and uninterrupted time.",
    },
    {
      question: "What if I need to cancel or change my dates?",
      answer:
        "Each home has a clear cancellation policy shown before booking. No hidden rules or fine print.",
    },
    {
      question: "Is support available during my stay?",
      answer:
        "Yes. Our support team is available throughout your stay if you need help with access or urgent matters.",
    },
  ];

  return (
    <section className='max-padd-container py-24'>
      <div className='flex flex-col md:flex-row gap-16'>
        {/* LEFT */}
        <div className='flex-1 flex flex-col gap-10'>
          <h2 className='text-3xl md:text-4xl font-light text-gray-900'>
            Common questions
          </h2>

          <div className='relative rounded-3xl overflow-hidden shadow-lg'>
            <img
              src={assets.faq1}
              alt='quiet stay'
              className='w-full h-full object-cover'
            />

            <div className='absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur p-4 rounded-xl'>
              <p className='font-medium text-gray-900'>
                Carefully selected homes
              </p>
              <p className='text-sm text-gray-600'>
                Calm, privacy, and comfort come first
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex-1'>
          <Title
            title1='Before you book'
            title2='Here’s what most guests ask'
            para='Clear answers help you choose calmly. If something still feels unclear, we’re always here to help.'
            titleStyles='text-3xl font-light mb-4'
            paraStyles='text-gray-600 max-w-lg'
          />

          <div className='mt-8 space-y-4'>
            {faqsData.map((item, idx) => (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                className='bg-white rounded-xl border border-black/5 p-5 cursor-pointer transition hover:bg-black/[0.02]'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-gray-900'>{item.question}</h3>
                  <span className='text-xl text-gray-500'>
                    {openIndex === idx ? "–" : "+"}
                  </span>
                </div>

                <div
                  className={`mt-2 text-sm text-gray-600 overflow-hidden transition-all ${
                    openIndex === idx ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Faq);
