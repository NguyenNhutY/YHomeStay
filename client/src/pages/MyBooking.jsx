import React, { memo, useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import assets, { dummyBookingsData } from "../assets/data";

// MyBooking.jsx – refined, elegant UI

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { currency, user } = useAppContext();

  const getUserBooking = () => {
    // simulate API
    setBookings(dummyBookingsData || []);
  };

  useEffect(() => {
    if (user) getUserBooking();
  }, [user]);

  return (
    <section className='min-h-screen bg-linear-to-r from-[#fffbee] to-white pt-28 pb-16'>
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-2xl font-semibold mb-8'>My Bookings</h1>

        {bookings.length === 0 && (
          <p className='text-zinc-500'>You have no bookings yet.</p>
        )}

        <div className='space-y-6'>
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className='cursor-pointer  duration-300 hover:scale-[1.03] ring-slate-900/5 pr-4 mt-3 ring-1 active:scale-[0.98] bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5 hover:shadow-md transition'
            >
              {/* Top */}
              <div className='flex gap-4 items-center'>
                <img
                  src={booking.property.images[0]}
                  alt='property'
                  className='h-20 w-28 object-cover rounded-xl'
                />
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold line-clamp-1'>
                    {booking.property.title}
                  </h3>
                  <p className='flex items-center gap-1 text-sm text-zinc-500 mt-0.5 place-items-baseline'>
                    <img src={assets.pin} alt='' width={14} />
                    {booking.property.address}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-xs text-zinc-400'>Total</p>
                  <p className='font-semibold'>
                    {currency}
                    {booking.totalPrice}
                  </p>
                </div>
              </div>

              {/* Middle */}
              <div className='grid sm:grid-cols-4 gap-4 text-sm item-start lg:items-center justify-between'>
                <div className='gap-2 gap-x-4 '>
                  <p className='text-zinc-400'>Booking ID:</p>
                  <p className='font-medium'>{booking._id}</p>
                </div>
                <div>
                  <p className='text-zinc-400'>Guests</p>
                  <p className='font-medium'>{booking.guests}</p>
                </div>
                <div>
                  <p className='text-zinc-400'>Check-in</p>
                  <p className='font-medium'>
                    {new Date(booking.checkInDate).toDateString()}
                  </p>
                </div>
                <div>
                  <p className='text-zinc-400'>Check-out</p>
                  <p className='font-medium'>
                    {new Date(booking.checkOutDate).toDateString()}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className='flex flex-wrap items-center justify-between gap-4 pt-4 border-t'>
                <div className='flex items-center gap-2 text-sm'>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  />
                  <span className='font-medium'>
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </span>
                  <span className='text-zinc-400'>· ID:</span>
                  <span className='text-zinc-400 text-xs break-all'>
                    {booking._id}
                  </span>
                </div>

                {!booking.isPaid && (
                  <button className='cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] px-4 py-1.5 rounded-md text-sm font-medium bg-black text-white hover:bg-zinc-800 transition'>
                    Pay now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MyBooking);
