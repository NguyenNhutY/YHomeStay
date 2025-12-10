import React, { memo } from "react";
import {
  FaCheckCircle,
  FaBan,
  FaPaw,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HouseRules = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 px-6 space-y-12'>
      <h1 className='text-secondary text-5xl font-bold text-center mb-8'>
        House Rules
      </h1>
      <p className='text-lg text-center max-w-3xl mx-auto mb-12'>
        To ensure a safe, comfortable, and enjoyable stay for all our guests,
        please follow these house rules. Violations may result in removal
        without refund.
      </p>

      {/* Check-in & Check-out */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>⏰ Check-In & Check-Out</h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaClock className='text-blue-500' /> Check-in: 2:00 PM | Check-out:
            12:00 PM
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Early check-in / late
            check-out may be requested.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Valid ID required at
            check-in.
          </li>
        </ul>
      </section>

      {/* Safety & Security */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>🛡️ Safety & Security</h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Keep rooms locked;
            secure valuables.
          </li>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Report
            suspicious activity immediately.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Follow posted fire &
            safety procedures.
          </li>
        </ul>
      </section>

      {/* Noise & Respect */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>🔇 Noise & Respect</h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Quiet hours: 10 PM – 7
            AM.
          </li>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Parties and
            disruptive behavior prohibited.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Be mindful of shared
            spaces.
          </li>
        </ul>
      </section>

      {/* Pets & Animals */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>🐾 Pets & Animals</h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaBan className='text-red-500' /> Pets not allowed unless
            pre-approved.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Service animals welcome
            with notice.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Guests must clean up
            after pets.
          </li>
        </ul>
      </section>

      {/* Cleanliness & Maintenance */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>
          🧹 Cleanliness & Maintenance
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Keep your room tidy.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Dispose of trash in
            designated areas.
          </li>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Report damages
            immediately.
          </li>
        </ul>
      </section>

      {/* Prohibited Activities */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>
          ❌ Prohibited Activities
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaBan className='text-red-500' /> Illegal substances prohibited.
          </li>
          <li className='flex items-center gap-3'>
            <FaBan className='text-red-500' /> Smoking inside rooms or common
            areas prohibited.
          </li>
          <li className='flex items-center gap-3'>
            <FaBan className='text-red-500' /> Unauthorized commercial
            activities prohibited.
          </li>
        </ul>
      </section>

      {/* Emergency & Contact */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>🚨 Emergency & Contact</h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Call local
            authorities for emergencies.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Contact front desk for
            assistance.
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckCircle className='text-green-500' /> Familiarize with
            emergency exits and first aid kits.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className='text-center mt-12'>
        <p className='text-lg mb-4'>
          Ready to stay with us? Explore our{" "}
          <span className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] font-semibold text-blue-600 underline cursor-pointer'>
            <Link to='/gallery'>Gallery</Link>
          </span>{" "}
          or{" "}
          <span className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] font-semibold text-blue-600 underline cursor-pointer'>
            <Link to='/listing'>Book Now</Link>
          </span>
          !
        </p>
      </div>
    </div>
  );
};

export default memo(HouseRules);
