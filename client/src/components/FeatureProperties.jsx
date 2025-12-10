import React, { memo } from "react";
import { Link } from "react-router-dom";

import assets, { dummyProperties } from "../assets/data";
import Item from "./Item";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const FeatureProperties = () => {
  return (
    <section className='max-padd-container py-16 xl:py-22'>
      <span className='medium-18'>Your New Home Awaits!</span>
      <h2 className='bold-36'>Discover Our Featured Properties</h2>

      <div className='flexBetween mt-8 mb-6'>
        <h5 className='max-w-[60%] leading-relaxed'>
          Explore handpicked properties that combine comfort, style, and prime
          locations. Your dream home is just a click away!
          <br />
          <span className='font-bold'>Display 1–9</span> from 3k listings
        </h5>

        <Link
          className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] bg-secondary/10 ring-1 ring-slate-900/15 text-white text-2x1 rounded-md p-2 flexCenter'
          to='/listing'
          onClick={() => scrollTo(0, 0)}
        >
          <img src={assets.sliders} alt='' />
        </Link>
      </div>

      <Swiper
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 30 },
          1200: { slidesPerView: 4, spaceBetween: 40 },
        }}
        modules={[Autoplay]}
        className='mySwiper mt-5'
      >
        {dummyProperties.slice(0, 6).map((property) => (
          <SwiperSlide key={property._id}>
            <Item property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(FeatureProperties);
