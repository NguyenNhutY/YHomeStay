import React, { memo } from "react";

const WhyChooseUs = () => {
  return (
    <section className='max-padd-container py-20'>
      <div className='text-center max-w-2xl mx-auto mb-14'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Why Choose Our Homestays
        </h2>
        <p className='text-gray-600'>
          Carefully curated stays designed for comfort, trust, and local
          experience — not mass listings.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {[
          {
            title: "Curated Homes",
            desc: "Every home is manually reviewed for quality and comfort.",
          },
          {
            title: "Transparent Pricing",
            desc: "No hidden fees. What you see is what you pay.",
          },
          {
            title: "Verified Hosts",
            desc: "Trusted hosts with clear profiles and support.",
          },
          {
            title: "Local Experience",
            desc: "Stay like a local, not like a tourist.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className='p-6 rounded-2xl bg-white shadow-sm border border-slate-900/5 hover:-translate-y-1 transition'
          >
            <h4 className='font-semibold text-lg mb-2'>{item.title}</h4>
            <p className='text-gray-600 text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
