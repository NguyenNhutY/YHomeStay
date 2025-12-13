import React, { memo } from "react";
import BookingList from "../../components/owner/BookingList";
import CalendarView from "../../components/owner/CalendarView";
import RevenuePanel from "../../components/owner/RevenuePanel";
import ReviewsPanel from "../../components/owner/ReviewsPanel";
import TicketsPanel from "../../components/owner/TicketsPanel";
import StaffPanel from "../../components/owner/StaffPanel";
import MessageCenter from "../../components/owner/MessageCenter";

const Dashboard = () => {
  return (
    <section className='p-6 md:p-10'>
      <header className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold'>
            Owner Dashboard
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            Tóm tắt hoạt động & quản lý nhanh
          </p>
        </div>
      </header>

      {/* Top: Stats + revenue */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-1 gap-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Bookings</h3>
            <BookingList compact />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Calendar</h3>
            <CalendarView />
          </div>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
          <h3 className='text-sm text-gray-500 mb-3'>Revenue (last 7 days)</h3>
          <RevenuePanel />
        </div>
      </div>

      {/* Bottom: columns */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='col-span-2 space-y-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Maintenance Tickets</h3>
            <TicketsPanel />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Recent Reviews</h3>
            <ReviewsPanel />
          </div>
        </div>

        <div className='space-y-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Staff / Cleaners</h3>
            <StaffPanel />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'>
            <h3 className='text-sm text-gray-500 mb-3'>Messages</h3>
            <MessageCenter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Dashboard);
