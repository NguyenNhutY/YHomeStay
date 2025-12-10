import React, { memo, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { cities, assets } from "../assets/data";

const AgencyReq = () => {
  const { setShowAgencyReq } = useAppContext();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: gọi API ở đây
    console.log("Agency register:", form);

    setShowAgencyReq(true);
  };

  return (
    <div
      onClick={() => setShowAgencyReq(true)}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className='flex bg-white rounded-xl max-w-4xl w-full max-md:mx-2 relative overflow-hidden'
      >
        {/* Close button */}
        <button
          type='button'
          onClick={() => setShowAgencyReq(true)}
          className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] absolute top-4 right-4 z-10 text-gray-600 hover:text-black text-xl'
        >
          ✕
        </button>

        {/* Image */}
        <div className='w-1/2 hidden md:block'>
          <img
            src={assets.createPrp1}
            alt='Register agency'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Content */}
        <div className='flex flex-col md:w-1/2 p-8 md:p-10'>
          <h3 className='h4 mb-6'>Register Agency</h3>

          <div className='flex flex-col gap-4'>
            <div>
              <label className='medium-14'>Agency Name</label>
              <input
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                placeholder='Your agency name'
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] regular-14 border border-slate-300 rounded-lg w-full px-3 py-1.5 mt-1 outline-none focus:border-black'
              />
            </div>

            <div>
              <label className='medium-14'>Contact</label>
              <input
                name='contact'
                value={form.contact}
                onChange={handleChange}
                required
                placeholder='Phone number'
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] regular-14 border border-slate-300 rounded-lg w-full px-3 py-1.5 mt-1 outline-none focus:border-black'
              />
            </div>

            <div>
              <label className='medium-14'>Email</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                placeholder='Email address'
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] regular-14 border border-slate-300 rounded-lg w-full px-3 py-1.5 mt-1 outline-none focus:border-black'
              />
            </div>

            <div>
              <label className='medium-14'>Address</label>
              <input
                name='address'
                value={form.address}
                onChange={handleChange}
                required
                placeholder='Agency address'
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] regular-14 border border-slate-300 rounded-lg w-full px-3 py-1.5 mt-1 outline-none focus:border-black'
              />
            </div>

            <div className='max-w-60 '>
              <label className='medium-14'>City</label>
              <select
                name='city'
                value={form.city}
                onChange={handleChange}
                required
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] regular-14 border border-slate-300 rounded-lg w-full px-3 py-1.5 mt-1 outline-none focus:border-black'
              >
                <option value=''>Select city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <button
              type='submit'
              onClick={() => setShowAgencyReq(true)}
              className='cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] mt-6 w-full bg-dark text-white py-2 rounded-lg hover:opacity-90 transition bg-black'
            >
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(AgencyReq);
