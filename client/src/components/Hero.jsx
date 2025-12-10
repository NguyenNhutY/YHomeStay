// Hero.jsx
import React, { memo } from "react";
import assets from "../assets/data.js";
import { cities } from "../assets/data.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[url('/src/assets/bg1.png')] bg-cover bg-center">
      <div className='absolute inset-0 bg-black/45' />

      <div className='relative z-10 max-padd-container h-full flex flex-col justify-center text-white gap-6'>
        <span className='tracking-widest uppercase text-sm text-white/70'>
          YHomestay Collection
        </span>

        <h1 className='text-4xl md:text-6xl font-light max-w-3xl leading-tight'>
          A calm place <br />
          <span className='font-medium'>to feel truly at home</span>
        </h1>

        <p className='text-white/80 max-w-xl'>
          Carefully selected homes for silence, comfort, and meaningful stays
          away from the rush.
        </p>

        <button className='mt-4 w-fit px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition'>
          <Link to='/listing'>Explore stays</Link>
        </button>
      </div>

      {/* SEARCH FORM – giữ nguyên UX */}
      <form className='absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-full max-w-4xl bg-white rounded-2xl ring-1 ring-black/5 px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
        {/* Check in */}
        <div>
          <label className='text-sm text-gray-500'>Check in</label>
          <input
            type='date'
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
        </div>

        {/* Check out */}
        <div>
          <label className='text-sm text-gray-500'>Check out</label>
          <input
            type='date'
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
        </div>

        {/* Location */}
        <div>
          <label className='text-sm text-gray-500'>Location</label>
          <input
            list='destinations'
            placeholder='Where to?'
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
          <datalist id='destinations'>
            {cities.map((city, i) => (
              <option key={i} value={city} />
            ))}
          </datalist>
        </div>

        {/* Guests */}
        <div>
          <label className='text-sm text-gray-500'>Guests</label>
          <input
            type='number'
            min={1}
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
        </div>

        <button className='bg-black text-white rounded-full h-full flex items-center justify-center hover:bg-black/90'>
          Search
        </button>
      </form>
    </section>
  );
};

export default memo(Hero);
