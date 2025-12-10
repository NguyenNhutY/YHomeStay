import React, { memo } from "react";

const ServerError = () => {
  return (
    <div className='min-h-[500px] flex flex-col items-center justify-center px-6 text-center'>
      <p className='text-secondary font-medium text-lg'>500 Error</p>

      <h1 className='md:text-6xl text-4xl font-semibold text-gray-800 mt-1'>
        Internal Server Error
      </h1>

      <p className='text-gray-600 text-base max-w-md mt-4 leading-relaxed'>
        Something went wrong on our end. Our team has been notified and is
        working to fix it. Please try again in a few moments.
      </p>

      <div className='flex items-center gap-4 mt-6'>
        <button
          onClick={() => (window.location.href = "/")}
          type='button'
          className='bg-secondary hover:bg-indigo-600 text-white px-7 py-2.5 rounded-lg active:scale-95 transition-all shadow-sm'
        >
          Go back home
        </button>

        <button
          type='button'
          className='group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition text-gray-700 hover:text-gray-900'
        >
          Try again
          <svg
            className='group-hover:rotate-180 transition-transform'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 8h10M9 4l4 4-4 4'
              stroke='#1F2937'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      <p className='text-xs text-gray-400 mt-6'>
        If the problem persists, please contact support.
      </p>
    </div>
  );
};

export default memo(ServerError);
