import React, { memo } from "react";
import assets from "../assets/data.js";
import { cities } from "../assets/data.js";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 max-padd-container h-full flex flex-col justify-center gap-6 text-white'>
        <h1 className='text-5xl font-bold'>Y Homestay Page</h1>

        <button className=' duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer inline-flex items-center bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full w-fit'>
          <span>Explore how we simplify stays and spaces</span>
          <img src={assets.right} alt='arrow right' className='ml-2 w-4 h-4' />
        </button>

        <h2 className='text-xl max-w-2xl'>
          Explore
          <span className='bg-linear-to-br from-blue-400 to-white bg-clip-text text-transparent'>
            {" "}
            rentals, exceptional properties
          </span>{" "}
          located in stunning surroundings.
        </h2>
      </div>

      {/* Floating Search Form */}
      <form className='absolute left-1/2 -translate-x-1/2 bottom-[-50px] w-full max-w-4xl bg-white rounded-lg ring-1 ring-slate-900/5 px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
        {/* Check In */}
        <div className='flex flex-col items-start gap-2 '>
          <img src={assets.calendar} alt='calendar' className='w-6 h-6' />
          <label className='text-gray-700 text-sm mt-1'>Check In</label>
          <input
            type='date'
            required
            className='border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none'
          />
        </div>
        {/* Check Out */}
        <div className='flex flex-col items-start gap-2'>
          <img src={assets.calendar} alt='calendar' className='w-6 h-6' />
          <label className='text-gray-700 text-sm mt-1'>Check Out</label>
          <input
            type='date'
            required
            className='border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none'
          />
        </div>

        {/* Location */}
        <div className='flex flex-col items-start gap-2'>
          <img src={assets.pin} alt='location' className='w-6 h-6' />
          <label className='text-gray-700 text-sm mt-1'>Location</label>
          <input
            required
            placeholder='Where to?'
            list='destinations'
            className='border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none'
          />

          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Guests */}
        <div className='flex flex-col items-start gap-2'>
          <img src={assets.user} alt='guests' className='w-6 h-6' />
          <label className='text-gray-700 text-sm mt-1'>Guests</label>
          <input
            type='number'
            min={1}
            max={5}
            required
            placeholder='1'
            className='border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none'
          />
        </div>

        {/* Search Button */}
        <div className='flex flex-col justify-end gap-2'>
          <button
            type='submit'
            className=' duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition w-full'
          >
            <img src={assets.search} alt='search' className='w-5 h-5' />
            <span>Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default memo(Hero);
