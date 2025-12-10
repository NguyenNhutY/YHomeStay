import React, { memo } from "react";

const stats = [
  { value: "10K+", label: "Nights Booked" },
  { value: "500+", label: "Verified Hosts" },
  { value: "4.9★", label: "Average Rating" },
  { value: "12", label: "Cities Covered" },
];

const Stats = () => {
  return (
    <section className='max-padd-container py-20'>
      <div className='rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 p-10 md:p-16 text-center'>
          {stats.map((item, i) => (
            <div key={i}>
              <p className='text-3xl md:text-4xl font-bold mb-2'>
                {item.value}
              </p>
              <p className='text-sm text-slate-300'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Stats);
