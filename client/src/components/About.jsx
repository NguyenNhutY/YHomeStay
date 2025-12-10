import React, { memo } from "react";
import Title from "./Title";
import { assets } from "../assets/data.js";

const About = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28 pt-36! flex flex-col md:flex-row items-center gap-16'>
      {/* LEFT */}
      <div className='flex-1'>
        <Title
          title1='Your Trusted Real Estate Partner'
          title2='Helping You Every Step of the Way'
          para='Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy.'
          titleStyles='text-3xl font-bold mb-4'
          paraStyles='text-gray-600 max-w-lg'
        />

        {/* FEATURES */}
        <div className='flex flex-col gap-6 mt-8'>
          {[
            {
              icon: assets.calendarSecondary,
              title: "In-app scheduling for property viewings",
              desc: "Book appointments effortlessly and manage your viewing schedule in one place.",
            },
            {
              icon: assets.graph,
              title: "Real-time market price updates",
              desc: "Stay informed with the latest pricing trends to make smarter investment decisions.",
            },
            {
              icon: assets.map,
              title: "User-friendly interface for smooth browsing",
              desc: "Designed for simplicity, helping you navigate property listings with ease.",
            },
            {
              icon: assets.pound,
              title: "Access to off-market properties",
              desc: "Unlock exclusive deals you won’t find on public listing platforms.",
            },
          ].map((item, i) => (
            <div key={i} className='flex gap-3'>
              <img src={item.icon} alt='' width={22} />
              <div className='text-gray-700'>
                <p className='font-semibold'>{item.title}</p>
                <p className='text-sm text-gray-500'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CLIENT AVATARS + RATING */}
        <div className='mt-10 flex items-center gap-5'>
          {/* Avatars */}
          <div className='flex -space-x-3'>
            {[
              assets.client1,
              assets.client2,
              assets.client3,
              assets.client4,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt='client'
                className='w-12 h-12 rounded-full border-2 border-white shadow hover:-translate-y-1 transition'
              />
            ))}
          </div>

          {/* Rating */}
          <div>
            <div className='flex items-center'>
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={assets.star} alt='star' width={17} />
              ))}
              <span className='text-gray-700 font-medium ml-2'>5.0</span>
            </div>
            <p className='text-sm text-gray-500'>
              Trusted by{" "}
              <span className='font-semibold text-gray-800'>100,000+</span>{" "}
              users
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className='flex-1 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]'>
        <div className='relative'>
          <img
            src={assets.about}
            alt='about'
            className='rounded-3xl w-full h-full object-cover shadow-lg'
          />

          <div className=' absolute top-4 left-4 bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-xl shadow-md'>
            <p className='text-xl font-bold text-gray-900'>25k+</p>
            <p className='text-xs text-gray-600 whitespace-nowrap'>
              Successful deals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
