import React, { memo, useEffect, useState } from "react";
import BookingList from "../../components/owner/BookingList";
import CalendarView from "../../components/owner/CalendarView";
import RevenuePanel from "../../components/owner/RevenuePanel";
import ReviewsPanel from "../../components/owner/ReviewsPanel";
import TicketsPanel from "../../components/owner/TicketsPanel";
import StaffPanel from "../../components/owner/StaffPanel";
import MessageCenter from "../../components/owner/MessageCenter";
import { useAppContext } from "../../context/AppContext";
import { dummyDashboardData } from "../../assets/data";
import { Link } from "react-router-dom";

const StatCard = ({ label, value, hint }) => (
  <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm'>
    <p className='text-sm text-gray-500'>{label}</p>
    <p className='text-2xl font-semibold mt-1'>{value}</p>
    {hint && <p className='text-xs text-gray-400 mt-1'>{hint}</p>}
  </div>
);

const AlertItem = ({ text, to }) => (
  <Link
    to={to}
    className='block text-sm text-gray-700 hover:text-black hover:underline'
  >
    • {text}
  </Link>
);

const Dashboard = () => {
  const { user, currency } = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBooking: 0,
    totalRevenue: 0,
    occupancyRate: 0,
    pendingReviews: 0,
    todayCheckins: 0,
  });

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      // sau này gọi API ở đây
      setDashboardData(dummyDashboardData);
    };

    fetchData();
  }, [user]);

  return (
    <section className='p-6 md:p-10'>
      {/* Header */}
      <header className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-semibold'>Owner Dashboard</h1>
        <p className='text-sm text-gray-500 mt-1'>
          Tổng quan vận hành homestay hôm nay
        </p>
      </header>

      {/* Quick stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
        <StatCard
          label='Occupancy rate'
          value={`${dashboardData.occupancyRate || 72}%`}
          hint='7 ngày gần nhất'
        />
        <StatCard
          label='Revenue this month'
          value={`${currency || "$"}${dashboardData.totalRevenue || 3200}`}
        />
        <StatCard
          label='Today check-ins'
          value={dashboardData.todayCheckins || 3}
        />
        <StatCard
          label='Pending reviews'
          value={dashboardData.pendingReviews || 1}
        />
      </div>

      {/* Alerts */}
      <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8'>
        <h3 className='text-sm font-medium mb-3'>Action needed</h3>
        <div className='space-y-2'>
          <AlertItem text='2 bookings chưa gán cleaner' to='/owner/staff' />
          <AlertItem text='1 review 2⭐ chưa phản hồi' to='/owner/reviews' />
          <AlertItem
            text='1 phòng trống 5 ngày liên tiếp'
            to='/owner/pricing'
          />
        </div>
      </div>

      {/* Main grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <div className='lg:col-span-2 space-y-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-sm text-gray-500'>Bookings</h3>
              <Link
                to='/owner/bookings'
                className='text-sm text-gray-600 hover:underline'
              >
                View all
              </Link>
            </div>
            <BookingList compact />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <h3 className='text-sm text-gray-500 mb-3'>Calendar</h3>
            <CalendarView />
          </div>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
          <h3 className='text-sm text-gray-500 mb-3'>Revenue (last 7 days)</h3>
          <RevenuePanel />
        </div>
      </div>

      {/* Bottom */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='col-span-2 space-y-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <h3 className='text-sm text-gray-500 mb-3'>Maintenance Tickets</h3>
            <TicketsPanel />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-sm text-gray-500'>Recent Reviews</h3>
              <Link
                to='/owner/reviews'
                className='text-sm text-gray-600 hover:underline'
              >
                View all
              </Link>
            </div>
            <ReviewsPanel />
          </div>
        </div>

        <div className='space-y-6'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <h3 className='text-sm text-gray-500 mb-3'>Staff / Cleaners</h3>
            <StaffPanel />
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
            <h3 className='text-sm text-gray-500 mb-3'>Messages</h3>
            <MessageCenter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Dashboard);
