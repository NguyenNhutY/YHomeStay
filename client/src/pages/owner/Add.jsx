import React, { memo, useState } from "react";

const Add = () => {
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    area: "",
    address: "",
    propertyType: "House",
    priceRent: "",
    priceSale: "",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    amenities: {
      Parking: false,
      Wifi: false,
      Backyard: false,
      Terrace: false,
    },
  });

  const handleChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAmenity = (key) => {
    setInputs((prev) => ({
      ...prev,
      amenities: { ...prev.amenities, [key]: !prev.amenities[key] },
    }));
  };

  const handleImageChange = (slot, file) => {
    setImages((prev) => ({ ...prev, [slot]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { ...inputs, images };
    console.log("SUBMIT PROPERTY:", payload);

    setTimeout(() => {
      setLoading(false);
      alert("Property added (mock)");
    }, 1000);
  };

  return (
    <section className='p-6 md:p-10 max-w-4xl mx-auto'>
      <header className='mb-10'>
        <h1 className='text-3xl font-semibold'>Add New Property</h1>
        <p className='text-sm text-neutral-500 mt-1'>
          Create property base info. Rooms & booking come next.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-2xl border shadow-sm p-8 space-y-8'
      >
        {/* BASIC INFO */}
        <div className='space-y-4'>
          <div>
            <label className='text-sm font-medium text-neutral-600'>
              Property name
            </label>
            <input
              placeholder='Type here ...'
              required
              value={inputs.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-neutral-600'>
              Description
            </label>
            <textarea
              placeholder='Type here ...'
              rows='4'
              value={inputs.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className='mt-1 w-full px-4 py-3 rounded-xl border resize-none'
            />
          </div>
        </div>

        {/* LOCATION */}
        <div className='space-y-4'>
          <p className='font-medium text-neutral-700'>Location</p>
          <div className='grid grid-cols-3 gap-4'>
            <div>
              <label className='text-sm text-neutral-500'>City</label>
              <input
                required
                placeholder='Type here ...'
                value={inputs.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className='mt-1 w-full px-4 py-2 rounded-xl border'
              />
            </div>
            <div>
              <label className='text-sm text-neutral-500'>Country</label>
              <input
                placeholder='Type here ...'
                required
                value={inputs.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className='mt-1 w-full px-4 py-2 rounded-xl border'
              />
            </div>
            <div>
              <label className='text-sm text-neutral-500'>Property type</label>
              <select
                value={inputs.propertyType}
                onChange={(e) => handleChange("propertyType", e.target.value)}
                className='mt-1 w-full px-4 py-2 rounded-xl border bg-white'
              >
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Townhouse</option>
                <option>Commercial</option>
                <option>Land Plot</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-sm text-neutral-500'>Full address</label>
              <input
                placeholder='Type here ...'
                required
                value={inputs.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className='mt-1 w-full px-4 py-2 rounded-xl border'
              />
            </div>
            <div>
              <label className='text-sm text-neutral-500'>
                Area / District
              </label>
              <input
                required
                placeholder='Area (Sq,ft)'
                value={inputs.area}
                onChange={(e) => handleChange("area", e.target.value)}
                className='mt-1 w-full px-4 py-2 rounded-xl border'
              />
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='text-sm text-neutral-500'>Price / night</label>
            <input
              type='number'
              value={inputs.priceRent}
              onChange={(e) => handleChange("priceRent", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>
          <div>
            <label className='text-sm text-neutral-500'>Price for sale</label>
            <input
              type='number'
              value={inputs.priceSale}
              onChange={(e) => handleChange("priceSale", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <label className='text-sm text-neutral-500'>Bedrooms</label>
            <input
              type='number'
              placeholder='1'
              value={inputs.bedrooms}
              onChange={(e) => handleChange("priceRent", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>
          <div>
            <label className='text-sm text-neutral-500'>Bathrooms</label>
            <input
              placeholder='1'
              type='number'
              value={inputs.bathrooms}
              onChange={(e) => handleChange("priceSale", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>
          <div>
            <label className='text-sm text-neutral-500'>Garages</label>
            <input
              placeholder='1'
              type='number'
              value={inputs.garages}
              onChange={(e) => handleChange("priceSale", e.target.value)}
              className='mt-1 w-full px-4 py-2 rounded-xl border'
            />
          </div>
        </div>
        {/* AMENITIES */}
        <div>
          <p className='font-medium text-neutral-700 mb-3'>Amenities</p>
          <div className='grid grid-cols-2 gap-3'>
            {Object.keys(inputs.amenities).map((key) => (
              <label key={key} className='flex items-center gap-2 text-sm'>
                <input
                  type='checkbox'
                  checked={inputs.amenities[key]}
                  onChange={() => toggleAmenity(key)}
                />
                {key}
              </label>
            ))}
          </div>
        </div>

        {/* IMAGES */}
        <div>
          <p className='font-medium text-neutral-700 mb-3'>Property images</p>
          <div className='grid grid-cols-4 gap-4'>
            {[1, 2, 3, 4].map((slot) => (
              <label
                key={slot}
                className='h-32 border rounded-xl flex items-center justify-center text-sm text-neutral-400 cursor-pointer hover:border-neutral-400 transition'
              >
                {images[slot] ? images[slot].name : `Upload ${slot}`}
                <input
                  type='file'
                  accept='image/*'
                  hidden
                  onChange={(e) => handleImageChange(slot, e.target.files[0])}
                />
              </label>
            ))}
          </div>
        </div>

        {/* ACTION */}
        <div className='pt-6 flex justify-end'>
          <button
            type='submit'
            disabled={loading}
            className='px-6 py-2 rounded-xl bg-neutral-900 text-white disabled:opacity-60'
          >
            {loading ? "Adding..." : "Add property"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default memo(Add);
