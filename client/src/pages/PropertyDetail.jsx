import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets, cities } from "../assets/data";
import PropertyImages from "../components/PropertyImages";
import Error from "../pages/Error";

const PropertyDetail = () => {
  const { id } = useParams();
  const { properties, currency } = useAppContext();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (!properties.length) return;
    const found = properties.find((item) => item._id === id);
    property && setProperty(property);
    setProperty(found || null);
  }, [id, properties]);
  1;
  if (!property) return <Error />;

  return (
    <div className='max-w-7xl mx-auto px-4 py-16'>
      <PropertyImages property={property} />

      <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {/* LEFT */}
        <div className='lg:col-span-2'>
          <div className='flex items-center gap-2 text-gray-500 mb-2'>
            <img src={assets.pin} width={16} />
            <span>{property.address}</span>
          </div>

          <div className='flex justify-between items-start flex-wrap gap-4'>
            <h1 className='text-3xl font-semibold'>{property.title}</h1>
            <div className='text-2xl font-semibold text-secondary'>
              {currency}
              {property.price?.sale || property.price?.rent}
              <span className='text-sm text-gray-500'> / night</span>
            </div>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <span className='text-secondary font-medium'>
              {property.propertyType}
            </span>
            <div className='flex items-center gap-1'>
              <span className='font-medium'>5.0</span>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={assets.star} width={14} />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className='flex flex-wrap gap-6 mt-6 text-gray-600'>
            <div className='flex items-center gap-2'>
              <img src={assets.bed} width={18} /> {property.facilities.bedrooms}{" "}
              Beds
            </div>
            <div className='flex items-center gap-2'>
              <img src={assets.bath} width={18} />{" "}
              {property.facilities.bathrooms} Baths
            </div>
            <div className='flex items-center gap-2'>
              <img src={assets.car} width={18} />{" "}
              {property.facilities?.garages ?? 0} Garage
            </div>
            <div className='flex items-center gap-2'>
              <img src={assets.ruler} width={18} /> 400 sqft
            </div>
          </div>

          {/* Description */}
          <div className='mt-10'>
            <h3 className='text-xl font-semibold mb-3'>Property Details</h3>
            <p className='text-gray-600 leading-relaxed'>
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className='mt-8'>
            <h3 className='text-xl font-semibold mb-4'>Amenities</h3>
            <div className='flex flex-wrap gap-3'>
              {property.amenities.map((a, i) => (
                <span
                  key={i}
                  className='px-4 py-2 rounded-full bg-gray-100 text-sm'
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='lg:sticky lg:top-24 space-y-8 h-fit '>
          {/* Booking Card */}
          <div className='bg-white border rounded-2xl shadow-md p-6 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'>
            <h3 className='text-lg font-semibold mb-5'>Check Availability</h3>

            <form className='space-y-4 '>
              {[
                ["Check In", "date"],
                ["Check Out", "date"],
              ].map(([label, type], i) => (
                <div key={i}>
                  <label className='text-sm text-gray-600'>{label}</label>
                  <input
                    type={type}
                    required
                    className=' cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary outline-none'
                  />
                </div>
              ))}

              <div>
                <label className='text-sm text-gray-600'>Location</label>
                <input
                  list='destinations'
                  placeholder='Where to?'
                  className='cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary outline-none'
                />
                <datalist
                  id='destinations'
                  className='cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'
                >
                  {cities.map((c, i) => (
                    <option key={i} value={c} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className='text-sm text-gray-600'>Guests</label>
                <input
                  type='number'
                  min={1}
                  max={5}
                  defaultValue={1}
                  className='cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary outline-none'
                />
              </div>

              <button className='cursor-pointer duration-300 hover:scale-105 active:scale-95 w-full mt-4 bg-secondary text-white py-3 rounded-full hover:opacity-90 transition'>
                Search Availability
              </button>
            </form>
          </div>

          {/* Agent Card */}
          <div className='bg-white border rounded-2xl p-6 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'>
            <h4 className='font-semibold mb-4'>Contact Agent</h4>

            <div className='flex items-center justify-between mb-4'>
              <div>
                <div className='flex items-center gap-2'>
                  <span className='font-medium'>{property.agency.name}</span>
                  <span className='text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full'>
                    Agency
                  </span>
                </div>
                <p className='text-sm text-gray-500'>Agency Office</p>
              </div>
              <img
                src={property.agency.owner.image}
                className='w-12 h-12 rounded-full object-cover'
              />
            </div>

            <div className='space-y-3 text-sm '>
              <div className='flex items-center gap-2'>
                <img src={assets.phone} width={16} />
                <span>{property.agency.contract}</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={assets.mail} width={16} />
                <span>{property.agency.email}</span>
              </div>
            </div>

            <div className=' grid grid-cols-2 gap-3 mt-5'>
              <button className='border rounded-lg py-2 hover:bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'>
                Send Email
              </button>
              <button className='bg-secondary text-white rounded-lg py-2 hover:opacity-90 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PropertyDetail);
