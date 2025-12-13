import React, { memo } from "react";

const AddProperty = () => {
  return (
    <section className='p-6 md:p-10 max-w-3xl'>
      <h1 className='text-2xl md:text-3xl font-semibold tracking-tight mb-6'>
        Add New Property
      </h1>

      <div className='bg-white shadow-sm rounded-2xl border border-gray-100 p-6'>
        <form className='space-y-5'>
          <div>
            <label className='block mb-1 text-sm font-medium'>
              Property Name
            </label>
            <input
              type='text'
              className='w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800/80'
            />
          </div>

          <div>
            <label className='block mb-1 text-sm font-medium'>Location</label>
            <input
              type='text'
              className='w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800/80'
            />
          </div>

          <div>
            <label className='block mb-1 text-sm font-medium'>
              Description
            </label>
            <textarea
              rows='4'
              className='w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800/80'
            ></textarea>
          </div>

          <button
            type='submit'
            className='mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition'
          >
            Save Property
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(AddProperty);
