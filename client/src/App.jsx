import React, { memo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Listing from "./pages/Listing.jsx";
import ThankYou from "./pages/Thanks.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Refund from "./pages/Refund.jsx";
import Error from "./pages/Error.jsx";
import Gallery from "./pages/Gallery.jsx";
import TermService from "./pages/TermService.jsx";
import ServerError from "./pages/ServerError";
import Support from "./pages/Support";
import Careers from "./pages/Careers";
import GuestSafety from "./pages/GuestSafety";
import HouseRules from "./pages/HouseRules";
import Maintenance from "./pages/Maintenance";
import Chatbot from "./components/Chatbot";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Property from "./pages/PropertyDetail";
import AreasDetail from "./pages/AreaDetail.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import { useAppContext } from "./context/AppContext.jsx";
import AgencyReq from "./components/AgencyReq.jsx";

import Sidebar from "./components/owner/Sidebar.jsx";
import Add from "./pages/owner/Add.jsx";
import List from "./pages/owner/List.jsx";
import Dashboard from "./pages/owner/Dashboard.jsx";
import Edit from "./pages/owner/Edit.jsx";
import Inbox from "./pages/owner/Inbox.jsx";
import Analytics from "./pages/owner/Analytics.jsx";
import Staff from "./pages/owner/Staff.jsx";
import Reviews from "./pages/owner/Reviews.jsx";
import Calendar from "./pages/owner/Calendar.jsx";

const App = () => {
  const location = useLocation();
  const isOwner = location.pathname.startsWith("/owner");
  const { showAgencyReq } = useAppContext();

  return (
    <>
      {!isOwner && <Header />}

      <main className='min-h-screen'>
        <ScrollToTop />
        <Chatbot />
        <BackToTop />

        {showAgencyReq && <AgencyReq />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/listing/:id' element={<Property />} />

          <Route path='/area/:name' element={<AreasDetail />} />
          <Route path='/my-bookings' element={<MyBooking />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/refund-policy' element={<Refund />} />
          <Route path='/terms' element={<TermService />} />

          <Route path='/500' element={<ServerError />} />
          <Route path='/help-center' element={<Support />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/guest-safety' element={<GuestSafety />} />
          <Route path='/house-rules' element={<HouseRules />} />
          <Route path='/maintenance' element={<Maintenance />} />

          {/* OWNER ROUTES */}
          <Route path='/owner' element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path='/owner/add' element={<Add />} />
            <Route path='/owner/:id/edit' element={<Edit />} />
            <Route path='/owner/list' element={<List />} />
            <Route path='/owner/inbox' element={<Inbox />} />
            <Route path='/owner/analytics' element={<Analytics />} />
            <Route path='/owner/staff' element={<Staff />} />
            <Route path='/owner/reviews' element={<Reviews />} />
            <Route path='/owner/calendar' element={<Calendar />} />
          </Route>

          <Route path='*' element={<Error />} />
        </Routes>
      </main>

      {!isOwner && <Footer />}
    </>
  );
};

export default memo(App);
