import React, { memo } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeatureProperties from "../components/FeatureProperties";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";
import Areas from "../components/Areas";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className='h-auto bg-linear-to-br from-[#fffbee] to-white'>
      <Hero />
      <About />
      <Areas />
      <FeatureProperties />
      <Banner />
      <Faq />
      <Cta />
      <Testimonial />
      <Reviews />
      <Contact />
    </div>
  );
};

export default memo(Home);
