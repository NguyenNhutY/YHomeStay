// About.jsx
import React, { memo } from "react";
import Title from "./Title";
import { assets } from "../assets/data.js";

const About = () => {
  return (
    <section className='max-padd-container py-24 flex flex-col md:flex-row items-center gap-16'>
      {/* LEFT */}
      <div className='flex-1'>
        <Title
          title1='Not just a place to stay'
          title2='A place to slow down'
          para='We curate quiet homes for people who value comfort, privacy, and meaningful time away from noise. Every stay is chosen with care — not quantity.'
          titleStyles='text-3xl md:text-4xl font-light mb-6'
          paraStyles='text-gray-600 max-w-lg leading-relaxed'
        />

        <div className='mt-10 flex flex-col gap-6'>
          {[
            {
              icon: assets.map,
              title: "Thoughtfully selected locations",
              desc: "Peaceful surroundings, natural light, and a sense of place you can feel.",
            },
            {
              icon: assets.calendarSecondary,
              title: "Flexible stays, simple booking",
              desc: "No pressure, no rush. Choose dates and homes that fit your rhythm.",
            },
            {
              icon: assets.star,
              title: "Homes with character",
              desc: "Each space reflects the host — not mass-produced interiors.",
            },
          ].map((item, i) => (
            <div key={i} className='flex gap-4'>
              <img src={item.icon} alt='' width={22} />
              <div>
                <p className='font-medium text-gray-900'>{item.title}</p>
                <p className='text-sm text-gray-500 max-w-md'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className='flex-1'>
        <div className='relative'>
          <img
            src={assets.about}
            alt='about'
            className='rounded-3xl w-full object-cover shadow-lg'
          />
          <div className=' bottom-5 left-5 bg-white/80 backdrop-blur px-4 py-3 rounded-xl'>
            <p className='text-lg font-medium'>Handpicked homes</p>
            <p className='text-xs text-gray-500'>Quality over quantity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
