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
import WhyChooseUs from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-[#fffbee] to-white'>
      <Hero />
      <HowItWorks />
      <Areas />
      <WhyChooseUs />
      <FeatureProperties />

      <Banner />
      <Testimonial />
      <About />
      <Faq />
      <Cta />

      <Contact />
    </div>
  );
};

export default memo(Home);
