import React, { memo } from "react";

const steps = [
  {
    step: "01",
    title: "Discover Unique Stays",
    desc: "Browse handpicked homestays in your favorite locations.",
  },
  {
    step: "02",
    title: "Book with Confidence",
    desc: "Transparent pricing, secure payments, no hidden fees.",
  },
  {
    step: "03",
    title: "Enjoy & Share",
    desc: "Relax, experience local living, and leave your review.",
  },
];

const HowItWorks = () => {
  return (
    <section className='max-padd-container py-20 xl:py-28'>
      <div className='text-center max-w-2xl mx-auto mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>How It Works</h2>
        <p className='text-gray-600'>
          A simple, transparent process designed for comfort and peace of mind.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-10'>
        {steps.map((item, i) => (
          <div
            key={i}
            className='relative p-8 rounded-3xl bg-white border border-slate-900/5 shadow-sm hover:-translate-y-1 transition'
          >
            <span className='absolute -top-5 left-6 text-6xl font-bold text-slate-900/5 select-none'>
              {item.step}
            </span>

            <h4 className='text-xl font-semibold mb-3 mt-8'>{item.title}</h4>
            <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(HowItWorks);
