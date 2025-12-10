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
      question: "Lightning-Fast Booking",
      answer:
        "Designed for speed – instant search and seamless property viewing.",
    },
    {
      question: "Fully Customizable Homes",
      answer:
        "Easily change layouts, features, and designs to fit your lifestyle.",
    },
    {
      question: "Responsive by Location",
      answer:
        "Every property is accessible by area – no extra effort required.",
    },
    {
      question: "Real Estate Powered",
      answer:
        "Backed using trusted property data – no extra agents or steps needed.",
    },
    {
      question: "Smart Home Support",
      answer:
        "All houses come ready with modern smart living features included.",
    },
  ];

  return (
    <section className=' max-padd-container py-20 xl:py-32 mt-20'>
      <div className='flex flex-col md:flex-row items-start gap-12 lg:gap-20'>
        {/* LEFT SECTION */}
        <div className='flex-1 flex flex-col gap-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Frequently Asked Questions
          </h2>

          <div className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] relative rounded-3xl overflow-hidden shadow-lg'>
            <img
              src={assets.faq}
              alt='faq'
              className='w-full h-full object-cover '
            />

            <div className='absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-md flex items-center gap-4'>
              <img src={assets.signature} alt='signature' width={55} />

              <div className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]'>
                <h5 className='text-lg font-semibold mb-1'>
                  Trusted Real Estate Experts
                </h5>
                <p className='text-sm text-gray-700'>
                  Trust, clarity, and simplicity are the core of our service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='flex-1 relative'>
          <Title
            title1='Your Trusted Real Estate Partner'
            title2='Helping You Every Step of the Way'
            para='From finding the right location to finalizing the deal, we ensure your real estate journey is smooth, efficient, and fulfilling...'
            titleStyles='text-3xl font-bold mb-4'
            paraStyles='text-gray-600 max-w-lg'
          />

          {/* Gradient background */}
          <div className='absolute inset-0 bg-linear-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl pointer-events-none -z-10' />

          {/* FAQ LIST */}
          <div className='mt-6 space-y-4'>
            {faqsData.map((item, idx) => (
              <div
                key={idx}
                className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] bg-white/80 backdrop-blur-md rounded-xl border border-slate-900/10 shadow-sm p-5 cursor-pointer '
                onClick={() => toggle(idx)}
              >
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold text-lg'>{item.question}</h3>

                  <span className='text-xl'>
                    {openIndex === idx ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
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
