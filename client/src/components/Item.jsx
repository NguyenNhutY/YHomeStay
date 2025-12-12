import React, { memo } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/data";

const Item = ({ property, currency }) => {
  const { images, title, price, propertyType, facilities, area, description } =
    property;

  const icons = [
    { img: assets.bed, value: facilities.bedrooms },
    { img: assets.bath, value: facilities.bathrooms },
    { img: assets.car, value: facilities.garages },
    { img: assets.ruler, value: area },
  ];

  return (
    <Link
      to={`/listing/${property._id}`}
      className=' duration-300 hover:scale-[1.03] active:scale-[0.98] group block rounded-lg bg-white ring-1 ring-slate-900/5 hover:shadow-lg transition'
    >
      {/* IMAGE */}
      <div className='relative'>
        <img
          src={images[0]}
          alt={title}
          className='h-53 w-full object-cover rounded-t-lg'
        />
      </div>

      {/* CONTENT */}
      <div className='p-4'>
        {/* Property Type */}
        <h5 className='text-sm font-semibold text-gray-600'>{propertyType}</h5>

        {/* PRICE */}
        <p className='mt-1 font-semibold text-gray-900'>
          {currency}
          {price.sale.toLocaleString()} <span className='text-gray-400'>|</span>{" "}
          ${price.rent.toLocaleString()}
          <span className='text-xs text-gray-500'>/night</span>
        </p>

        {/* TITLE */}
        <h3 className='mt-1 text-lg font-medium text-gray-900 line-clamp-1 group-hover:text-secondary transition'>
          {title}
        </h3>

        {/* FEATURES */}
        <div className='flex items-center gap-4 py-3'>
          {icons.map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-2 pr-4 border-r last:border-none last:pr-0 text-gray-700 font-medium'
            >
              <img src={item.img} width={20} alt='' />
              {item.value}
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className='text-sm text-gray-600 line-clamp-2 mb-2'>{description}</p>
      </div>
    </Link>
  );
};

export default memo(Item);
