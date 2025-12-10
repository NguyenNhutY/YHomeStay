import React, { memo } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className='min-h-screen py-16 pt-28 bg-linear-to-r  text-[#0F172A]'>
      <div className='max-w-5xl mx-auto px-6 py-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-secondary font-semibold tracking-wide text-sm'>
            Contact Us
          </p>
          <h1 className='text-4xl md:text-5xl font-bold mt-2'>Get in Touch</h1>
          <p className='text-gray-600 max-w-xl mx-auto mt-3'>
            Whether you're booking a stay or have questions about our services,
            we’re here to help you every step of the way.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* LEFT — INFO */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-2xl font-semibold mb-3'>Contact Details</h2>
              <p className='text-gray-600'>
                Reach out through any method below. Our support team responds
                quickly and professionally.
              </p>
            </div>

            <div className='space-y-5'>
              <div className='flex items-start gap-4'>
                <div className='bg-indigo-100 p-3 rounded-xl'>
                  <Mail size={22} className='text-secondary' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Email</h3>
                  <p className='text-gray-600 text-sm'>support@yhomestay.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-indigo-100 p-3 rounded-xl'>
                  <Phone size={22} className='text-secondary' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Phone</h3>
                  <p className='text-gray-600 text-sm'>+84 987 654 321</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-indigo-100 p-3 rounded-xl'>
                  <MapPin size={22} className='text-secondary' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Location</h3>
                  <p className='text-gray-600 text-sm'>
                    Phan Thiet, Binh Thuan– Viet Nam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className='cursor-pointer transition duration-300 hover:scale-[1.03] active:scale-[0.98] bg-white shadow-xl rounded-2xl p-8 border border-gray-100'>
            <h2 className='text-2xl font-semibold mb-6'>Send us a message</h2>

            <form className='space-y-5'>
              <div>
                <label className='text-sm font-medium'>Your Name</label>
                <input
                  required
                  type='text'
                  className='w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label className='text-sm font-medium'>Email Address</label>
                <input
                  required
                  type='email'
                  className='w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition'
                  placeholder='you@example.com'
                />
              </div>

              <div>
                <label className='text-sm font-medium'>Message</label>
                <textarea
                  required
                  rows='4'
                  className='w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition'
                  placeholder='How can we assist you?'
                ></textarea>
              </div>

              <button
                type='submit'
                className='cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] w-full flex items-center justify-center gap-2 bg-secondary hover:bg-indigo-700 text-white py-3 rounded-xl active:scale-95 transition font-medium'
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className='text-center mt-20'>
          <p className='text-gray-500'>
            We typically respond within{" "}
            <span className='text-secondary font-semibold'>1–2 hours</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
