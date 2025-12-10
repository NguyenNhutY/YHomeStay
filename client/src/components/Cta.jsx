import React, { memo } from "react";
import { assets } from "../assets/data";

const Cta = () => {
  return (
    <section className='w-full max-padd-container  py-16 mt-16 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]'>
      <div className=' mx-auto px-4'>
        {/* Outer Gradient Border */}
        <div className='p-0.5 rounded-2xl bg-linear-to-br from-secondary to-blue-500 shadow-xl'>
          {/* Inner Content */}
          <div className='rounded-2xl bg-white py-14 px-6 md:px-12 text-center'>
            {/* Badge */}
            <div className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium shadow-sm'>
              <img
                src={assets.rocket}
                alt='rocket'
                width={18}
                className='opacity-90'
              />
              <span>Trusted by Experts</span>
            </div>

            {/* Title */}
            <h2 className='text-3xl md:text-5xl font-extrabold mt-5 leading-[1.2] text-secondary'>
              Sell or Rent Faster with
              <span className='text-blue-600'> Expert Strategies</span>
              <br />
              and Real Support & Proven Results!
            </h2>

            {/* Description */}
            <p className='text-slate-600 mt-4 max-w-xl mx-auto'>
              Achieve your goals faster with personalized strategies, hands-on
              guidance, and modern solutions that deliver real, measurable
              results.
            </p>

            {/* Button */}
            <button
              type='button'
              className='mt-6 bg-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300'
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Cta);
