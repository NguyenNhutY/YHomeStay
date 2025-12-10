import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

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
import Sidebar from "./pages/Sidebar.jsx";

const App = () => {
  const { showAgencyReq } = useAppContext();
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <ScrollToTop />
        <Chatbot />
        <BackToTop />
        {showAgencyReq && <AgencyReq />}

        {/* đặt ở đây để scroll mỗi lần đổi route */}
        <Routes>
          <Route path='/area/:name' element={<AreasDetail />} />
          <Route path='/my-bookings' element={<MyBooking />} />
          <Route path='/owner' element={<Sidebar />} />
          <Route path='/500' element={<ServerError />} />
          <Route path='/help-center' element={<Support />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/guest-safety' element={<GuestSafety />} />
          <Route path='/house-rules' element={<HouseRules />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='listing/:id' element={<Property />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/refund-policy' element={<Refund />} />
          <Route path='/terms' element={<TermService />} />
          <Route path='*' element={<Error />} />
          <Route index element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default memo(App);
