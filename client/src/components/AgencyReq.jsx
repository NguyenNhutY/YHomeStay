import React, { memo } from "react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";

const AgencyReq = () => {
  return (
    <section className='max-padd-container py-20 xl:py-28'>
      <div className='relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white'>
        {/* Background glow */}
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-amber-400/20 blur-3xl rounded-full' />
        <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full' />

        <div className='relative z-10 grid md:grid-cols-2 gap-16 items-center p-10 md:p-16'>
          {/* LEFT */}
          <div>
            <span className='inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 border border-white/10'>
              For Hosts & Agencies
            </span>

            <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-6'>
              Turn Your Property <br /> into a Profitable Stay
            </h2>

            <p className='text-gray-300 max-w-xl mb-8'>
              Join our curated homestay network. We handle visibility, bookings,
              and trusted guests — you stay in control and earn consistently.
            </p>
          </div>

          {/* RIGHT */}
          <div className='grid grid-cols-2 gap-6'>
            {[
              { value: "500+", label: "Verified Hosts" },
              { value: "12", label: "Cities Covered" },
              { value: "4.9★", label: "Average Guest Rating" },
              { value: "24/7", label: "Host Support" },
            ].map((item, i) => (
              <div
                key={i}
                className='rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10'
              >
                <p className='text-2xl font-bold'>{item.value}</p>
                <p className='text-sm text-gray-300 mt-1'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AgencyReq);
