// Cta.jsx
import React, { memo } from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className='max-padd-container py-24 text-center'>
      <h2 className='text-2xl md:text-4xl font-light mb-4'>
        Your next peaceful stay is waiting
      </h2>

      <p className='text-gray-600 max-w-xl mx-auto mb-8'>
        Take your time. Browse carefully. Choose a place that feels right — not
        just looks good.
      </p>

      <button className='px-8 py-3 rounded-full bg-black text-white text-sm hover:bg-black/90'>
        <Link to='/listing'>Browse all homes</Link>
      </button>
    </section>
  );
};

export default memo(Cta);
