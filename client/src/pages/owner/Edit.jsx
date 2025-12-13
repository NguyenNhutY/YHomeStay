import React, { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "OceanView Villa",
    location: "Phan Thiết",
    price: 120,
    status: "active",
    description: "A peaceful beachfront villa with panoramic ocean views.",
    images: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=60",
    ],
  });

  const [dirty, setDirty] = useState(false);

  const handleChange = (e) => {
    setDirty(true);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving", form);
    setDirty(false);
  };

  return (
    <section className='p-6 md:p-10 max-w-5xl mx-auto'>
      {/* Header */}
      <header className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>
          Edit Property
        </h1>
        <p className='text-sm text-neutral-500 mt-1'>
          Update details, pricing and visibility
        </p>
      </header>

      {/* Form */}
      <div className='bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 space-y-8'>
        {/* Name */}
        <div>
          <label className='text-sm text-neutral-500'>Property name</label>
          <input
            name='name'
            value={form.name}
            onChange={handleChange}
            className='
              mt-1 w-full px-4 py-2 rounded-xl
              border border-neutral-200
              hover:border-neutral-300
              focus:border-neutral-400 focus:ring-0
              transition
            '
          />
        </div>

        {/* Location + Price */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='text-sm text-neutral-500'>Location</label>
            <input
              name='location'
              value={form.location}
              onChange={handleChange}
              className='
                mt-1 w-full px-4 py-2 rounded-xl
                border border-neutral-200
                hover:border-neutral-300
                focus:border-neutral-400 focus:ring-0
                transition
              '
            />
          </div>

          <div>
            <label className='text-sm text-neutral-500'>
              Price per night ($)
            </label>
            <input
              type='number'
              name='price'
              value={form.price}
              onChange={handleChange}
              className='
                mt-1 w-full px-4 py-2 rounded-xl
                border border-neutral-200
                hover:border-neutral-300
                focus:border-neutral-400 focus:ring-0
                transition
              '
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className='text-sm text-neutral-500'>Description</label>
          <textarea
            name='description'
            rows={4}
            value={form.description}
            onChange={handleChange}
            className='
              mt-1 w-full px-4 py-3 rounded-xl
              border border-neutral-200
              hover:border-neutral-300
              focus:border-neutral-400 focus:ring-0
              transition resize-none
            '
          />
        </div>

        {/* Status */}
        <div>
          <label className='text-sm text-neutral-500'>Status</label>
          <select
            name='status'
            value={form.status}
            onChange={handleChange}
            className='
              mt-1 w-full px-4 py-2 rounded-xl
              border border-neutral-200
              hover:border-neutral-300
              focus:border-neutral-400 focus:ring-0
              transition bg-white
            '
          >
            <option value='active'>Active</option>
            <option value='draft'>Draft</option>
            <option value='hidden'>Hidden</option>
          </select>
        </div>

        {/* Images */}
        <div>
          <label className='text-sm text-neutral-500 mb-2 block'>Images</label>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {form.images.map((img, idx) => (
              <div
                key={idx}
                className='relative group rounded-xl overflow-hidden border'
              >
                <img src={img} alt='' className='w-full h-32 object-cover' />

                <button
                  className='
                    absolute top-2 right-2
                    text-xs text-neutral-700
                    bg-white/90 backdrop-blur
                    px-2 py-1 rounded-lg
                    opacity-0 group-hover:opacity-100
                    transition-all duration-200
                  '
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className='
                h-32 rounded-xl border border-dashed
                border-neutral-300 text-neutral-500
                hover:border-neutral-400 hover:text-neutral-700
                transition flex items-center justify-center
              '
            >
              + Add image
            </button>
          </div>
        </div>
      </div>

      {/* Save Bar */}
      {dirty && (
        <div
          className='
            fixed bottom-6 left-1/2 -translate-x-1/2
            bg-white border border-neutral-200
            shadow-lg rounded-2xl px-6 py-3
            flex items-center gap-4
          '
        >
          <span className='text-sm text-neutral-500 mr-4'>
            You have unsaved changes
          </span>

          <button
            onClick={() => navigate(-1)}
            className='text-sm text-neutral-600 hover:text-neutral-900'
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className='
              text-sm px-4 py-2 rounded-xl
              bg-neutral-900 text-white
              hover:bg-neutral-800
              transition
            '
          >
            Save changes
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(Edit);
