import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaMedkit,
  FaExclamationTriangle,
  FaSwimmer,
} from "react-icons/fa";

const GuestSafety = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 px-6 space-y-12'>
      <h1 className='text-5xl text-secondary font-bold text-center mb-8'>
        Guest Safety
      </h1>
      <p className='text-lg text-center max-w-3xl mx-auto mb-12'>
        Your safety is our top priority. At Phan Homestay, we are committed to
        providing a secure environment for all guests. Please familiarize
        yourself with our safety measures and guest guidelines.
      </p>

      {/* Safety Measures */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2 flex items-center gap-2'>
          <FaShieldAlt className='text-blue-500' /> Safety Measures
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'></li>
          <li className='flex items-center gap-3'>
            <FaLock className='text-green-500' /> Secure room locks and key card
            access
          </li>
          <li className='flex items-center gap-3'>
            <FaMedkit className='text-red-500' /> Regular sanitation, cleaning,
            and hygiene protocols
          </li>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Emergency
            response procedures and staff training
          </li>
        </ul>
      </section>

      {/* Guest Guidelines */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2 flex items-center gap-2'>
          <FaShieldAlt className='text-blue-500' /> Guest Guidelines
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <FaExclamationTriangle className='text-yellow-500' /> Report any
            suspicious activity immediately to staff
          </li>
          <li className='flex items-center gap-3'>
            <FaLock className='text-green-500' /> Keep your personal belongings
            secured at all times
          </li>
          <li className='flex items-center gap-3'>
            <FaShieldAlt className='text-blue-500' /> Follow safety instructions
            provided by our staff
          </li>
          <li className='flex items-center gap-3'>
            <FaSwimmer className='text-blue-400' /> Use designated swimming and
            recreation areas only
          </li>
        </ul>
      </section>

      {/* COVID & Hygiene Tips */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2'>🧴 Hygiene & Health</h2>
        <ul className='space-y-2 list-disc pl-6'>
          <li>Wash hands regularly and use provided sanitizer stations</li>
          <li>Wear masks in indoor shared spaces if required</li>
          <li>Report any illness or symptoms to staff immediately</li>
          <li>Maintain social distancing where necessary</li>
        </ul>
      </section>

      {/* Emergency Contacts */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-semibold mb-2 flex items-center gap-2'>
          <FaMedkit className='text-red-500' /> Emergency Contacts
        </h2>
        <ul className='space-y-2 list-disc pl-6'>
          <li>Local Police: 113</li>
          <li>Fire Department: 114</li>
          <li>Medical Emergency: 115</li>
          <li>
            Front Desk / Staff: Dial 0 from your room or call +84 123 456 789
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className='text-center mt-12'>
        <p className='text-lg mb-4'>
          Your safety matters to us. For more tips, explore our{" "}
          <span className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] text-blue-600 underline cursor-pointer'>
            House Rules
          </span>{" "}
          or{" "}
          <span className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] text-blue-600 underline cursor-pointer'>
            Book Your Stay
          </span>{" "}
          today!
        </p>
      </div>
    </div>
  );
};

export default GuestSafety;
