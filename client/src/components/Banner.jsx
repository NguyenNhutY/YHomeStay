// Banner.jsx
import React, { memo } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative my-32 h-[60vh] w-full bg-[url('/src/assets/banner.jpg')] bg-cover bg-center">
      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6'>
        <h2 className='text-3xl md:text-4xl font-light max-w-2xl'>
          Some places are not meant to impress —
          <br />
          <span className='font-medium'>
            they are meant to let you breathe.
          </span>
        </h2>

        <button className='mt-8 px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition'>
          <Link to='./listing'> Discover quiet stays</Link>
        </button>
      </div>
    </section>
  );
};

export default memo(Banner);
