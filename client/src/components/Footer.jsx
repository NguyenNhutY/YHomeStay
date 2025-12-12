import React, { memo } from "react";
import { assets } from "../assets/data.js";
import { Link } from "react-router-dom";
import TrustedBrand from "./TrustedBrand.jsx";

const Footer = ({ active }) => {
  return (
    <footer className='pt-12 px-6 md:px-16 lg:px-24 xl:px-32 '>
      <div className='max-w-7xl mx-auto flex flex-wrap justify-between gap-12 md:gap-6'>
        {/* Logo + Description + Social */}
        <div className='max-w-xs'>
          <Link to='/'>
            <img
              src={assets.logoImg}
              className={`h-10 transition-all ${active ? "invert" : ""}`}
              alt='logo'
            />
          </Link>
          <p className='text-sm mt-3 text-gray-700'>
            Welcome to Y Homestay, your perfect coastal getaway in Phan Thiet.
            Experience comfort, hospitality, and unforgettable memories.
          </p>
          <div className='flex items-center gap-3 mt-4 text-gray-600'>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-transform duration-300 hover:scale-110'
            >
              <img src={assets.instagram} alt='instagram' />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-transform duration-300 hover:scale-110'
            >
              <img src={assets.facebook} alt='facebook' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-transform duration-300 hover:scale-110'
            >
              <img src={assets.twitter} alt='twitter' />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className='text-lg text-gray-800 font-semibold'>Company</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            {["Careers", "Blog", "Gallery", "Thank you"].map((item) => (
              <li key={item}>
                <Link
                  className='transition-transform duration-300 hover:scale-105 active:scale-95 text-gray-600 hover:text-secondary'
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className='text-lg text-gray-800 font-semibold'>Support</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            {[
              "Help Center",
              "Guest Safety",
              "House Rules",
              "Refund Policy",
            ].map((item) => (
              <li key={item}>
                <Link
                  className='transition-transform duration-300 hover:scale-105 active:scale-95 text-gray-600 hover:text-secondary'
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className='max-w-xs'>
          <p className='text-lg text-gray-800 font-semibold'>Stay Updated</p>
          <p className='mt-3 text-sm text-gray-700'>
            Subscribe to our newsletter for inspiration, deals, and updates.
          </p>
          <div className='flex items-center mt-4 max-w-md w-full border border-gray-300 rounded-full overflow-hidden bg-white'>
            <input
              required
              type='email'
              className='w-full px-4 h-10 outline-none text-sm rounded-l-full'
              placeholder='Your email'
            />
            <button
              type='submit'
              className='cursor-pointer bg-black text-white h-10 px-4 rounded-r-full transition-transform duration-300 hover:scale-105 active:scale-95'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className='border-gray-300 mt-8' />

      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm text-gray-500'>
        <p>
          © {new Date().getFullYear()}{" "}
          <span className='font-semibold'>YHomestay</span>. All rights reserved.
          (+84) 987 6542 321
        </p>
        <ul className='flex items-center gap-4'>
          {["Privacy", "Terms"].map((item) => (
            <li key={item}>
              <Link
                className='transition-transform duration-300 hover:scale-105 active:scale-95 text-gray-500 hover:text-secondary'
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=' flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm text-gray-500'>
        <TrustedBrand />
      </div>
    </footer>
  );
};

export default memo(Footer);
