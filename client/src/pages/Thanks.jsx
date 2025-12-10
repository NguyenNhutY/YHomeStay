import React, { memo } from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-cyan-100 px-6'>
      <div className='bg-white shadow-xl rounded-3xl p-10 max-w-2xl text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Thank You for Reaching Out!
        </h1>

        <p className='text-gray-700 text-lg leading-relaxed mb-8'>
          We truly appreciate your interest in our homes, land opportunities,
          and homestays in beautiful Phan Thiet. Our team has received your
          message and will get back to you as soon as possible. Whether you're
          booking a stay, looking for a new home, or exploring investment
          options, we're here to make your journey simple, clear, and enjoyable.
        </p>

        <div className='py-6 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-xl mb-8'>
          <p className='text-gray-900 font-medium'>
            Your next home — or investment — starts here. Thank you for trusting
            us.
          </p>
        </div>

        <div className='flex items-center justify-center gap-4'>
          <Link
            to='/'
            className='px-6 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-blue-700 transition'
          >
            Back to Home
          </Link>

          <Link
            to='/listing'
            className='px-6 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition'
          >
            Explore Listings
          </Link>
        </div>

        <p className='text-sm text-gray-500 mt-8'>
          Need urgent support? Contact us anytime — we're always happy to help.
        </p>
      </div>
    </section>
  );
};

export default memo(ThankYou);
