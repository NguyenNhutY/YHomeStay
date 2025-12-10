import React from "react";

const Maintenance = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4 text-center'>
      <h1 className='text-5xl font-bold mb-6'>We'll Be Back Soon</h1>
      <p className='text-xl mb-4'>
        Our website is currently undergoing scheduled maintenance. Thank you for
        your patience!
      </p>
      <p className='mb-6'>
        Check back later or contact support if you need assistance.
      </p>
      <a
        href='/support'
        className='px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-blue-700 transition'
      >
        Contact Support
      </a>
    </div>
  );
};

export default Maintenance;
