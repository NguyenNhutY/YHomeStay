import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/data.js";
import Navbar from "./Navbar.jsx";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext.jsx";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { navigate, user } = useAppContext();
  const { openSignIn } = useClerk();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setActive(y > 50);
      if (y > 200) {
        setMenuOpened(false);
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const BookingIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='3' y='4' width='18' height='18' rx='2' />
      <line x1='16' y1='2' x2='16' y2='6' />
      <line x1='8' y1='2' x2='8' y2='6' />
      <line x1='3' y1='10' x2='21' y2='10' />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 
      ${active ? "bg-white shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/'>
            <img
              src={assets.logoImg}
              className={`h-10 transition-all ${active ? "invert" : ""}`}
              alt='logo'
            />
          </Link>

          {/* Navbar */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${
              menuOpened
                ? "fixed top-16 right-4 flex flex-col items-start gap-6 p-5 bg-white shadow-xl rounded-xl z-50 w-56"
                : "hidden lg:flex gap-x-6"
            } ${!menuOpened && !active ? "text-white" : "text-gray-800"}`}
          />

          {/* Right section */}
          <div className='flex items-center gap-4'>
            {/* Search (desktop) */}
            <div className='relative hidden xl:flex items-center'>
              <div
                className={`transition-all duration-300 rounded-full overflow-hidden ring-1 ring-black/10 
                ${showSearch ? "w-64 opacity-100 p-2" : "w-10 opacity-0 p-0"} 
                ${active ? "bg-gray-100" : "bg-white"}`}
              >
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full text-sm outline-none px-3 bg-transparent'
                />
              </div>

              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className={`ml-3 ${!active ? "invert" : "text-gray-700"}`}
              >
                <img src={assets.search} className='w-6 h-6' alt='search' />
              </button>
            </div>

            {/* Menu (mobile) */}
            <button
              className={`lg:hidden transition ${!active ? "invert" : ""}`}
              onClick={() => setMenuOpened((b) => !b)}
            >
              <img
                src={menuOpened ? assets.close : assets.menu}
                className='w-7 h-7'
                alt='menu'
              />
            </button>

            {/* Login / User */}
            <div className='relative top-1'>
              {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label='MyBookings'
                      labelIcon={BookingIcon}
                      onClick={() => navigate("/my-bookings")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <button
                  onClick={() => openSignIn()}
                  className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition'
                >
                  Login
                  <img
                    src={assets.user}
                    className='w-5 h-5 bg-white rounded-full p-0.5'
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
