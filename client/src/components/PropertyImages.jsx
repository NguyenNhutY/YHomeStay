import React, { memo, useState } from "react";

const PropertyImages = ({ property }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!property?.images?.length) return null;

  return (
    <div className='mt-10'>
      {/* Title */}
      <h1 className='text-4xl font-bold text-center'>Property Gallery</h1>
      <p className='text-base text-slate-500 text-center mt-3  mx-auto'>
        Explore every corner of this space through carefully captured visuals.
      </p>

      {/* Gallery */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto h-[600px]'>
        {/* Main Image */}
        <div className='lg:col-span-2 relative overflow-hidden rounded-3xl'>
          <img
            src={property.images[0]}
            alt='main'
            className='cursor-pointer w-full h-full object-cover transition-transform duration-500 hover:scale-105'
          />
        </div>

        {/* Side Images */}
        <div className='grid grid-rows-2 gap-6'>
          {property.images.slice(1, 3).map((img, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-3xl group cursor-pointer'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img}
                alt='property'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />

              <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-6'>
                <p className='text-white text-lg font-medium'>
                  View {index + 2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PropertyImages);
