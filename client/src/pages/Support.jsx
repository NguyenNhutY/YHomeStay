import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 px-6 space-y-12'>
      <h1 className='text-5xl font-bold text-center mb-6 text-slate-900'>
        Customer Support
      </h1>

      <p className='text-lg text-center mb-12 text-slate-600 max-w-3xl mx-auto'>
        We are here to help you 24/7 with any questions or concerns about your
        stay at Phan Homestay. Our team is committed to providing quick and
        helpful assistance.
      </p>

      {/* Contact Us */}
      <section
        className='p-8 rounded-xl border border-neutral-200 bg-white
                    hover:shadow-lg transition'
      >
        <h2 className='text-3xl font-semibold mb-4 text-slate-800 flex items-center gap-3'>
          <FaEnvelope className='text-secondary' /> Contact Us
        </h2>

        <ul className='space-y-2 text-lg'>
          <li className='flex items-center gap-3'>
            <FaEnvelope className='text-slate-500' />
            Email:{" "}
            <a
              href='mailto:support@phanhomestay.com'
              className='text-secondary underline'
            >
              support@phanhomestay.com
            </a>
          </li>
          <li className='flex items-center gap-3'>
            <FaPhone className='text-slate-500' /> Phone:{" "}
            <a href='tel:+84123456789' className='text-secondary underline'>
              +84 123 456 789
            </a>
          </li>
          <li className='flex items-center gap-3'>
            <FaComments className='text-slate-500' />
            Live Chat: Available 24/7 on our website
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-3xl font-semibold mb-4 text-secondary flex items-center gap-2'>
          <FaQuestionCircle className='text-blue-500' /> Frequently Asked
          Questions
        </h2>
        <ul className='space-y-4 text-lg'>
          <li>
            <strong>Q:</strong> How do I book a room?
            <br />
            <strong>A:</strong> You can book directly via our website or contact
            our support team.
          </li>
          <li>
            <strong>Q:</strong> What is the cancellation policy?
            <br />
            <strong>A:</strong> Free cancellation up to 48 hours before
            check-in.
          </li>
          <li>
            <strong>Q:</strong> Do you offer airport pickup?
            <br />
            <strong>A:</strong> Yes, at an additional fee.
          </li>
          <li>
            <strong>Q:</strong> Can I request a special room?
            <br />
            <strong>A:</strong> Yes, subject to availability. Contact us for
            details.
          </li>
          <li>
            <strong>Q:</strong> Are pets allowed?
            <br />
            <strong>A:</strong> Pets are only allowed if pre-approved in
            advance.
          </li>
        </ul>
      </section>

      {/* Live Assistance */}
      <section className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] p-6 rounded-lg shadow-md space-y-4'>
        <h2 className='text-3xl font-semibold mb-4 text-secondary flex items-center gap-2'>
          <FaComments className='text-purple-500' /> Live Assistance
        </h2>
        <p className='text-lg'>
          Our support agents are ready to assist via chat, email, or phone
          anytime you need help. Quick responses and friendly guidance are
          guaranteed.
        </p>
      </section>

      {/* Call to Action */}
      <div className='text-center mt-12'>
        <p className='text-lg mb-4'>
          Need immediate help? Visit our{" "}
          <span className='transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] text-blue-600 underline cursor-pointer'>
            <Link className='text-blue-600 underline' to='/house-rules'>
              House Rules{" "}
            </Link>
          </span>{" "}
          or contact us directly to resolve your concerns.
        </p>
      </div>
    </div>
  );
};

export default Support;
