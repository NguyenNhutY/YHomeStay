import React, { memo } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 text-center bg-linear-to-br from-gray-50 to-white'>
      <h1 className='text-8xl font-bold text-secondary tracking-tight'>404</h1>

      <h2 className='md:text-4xl text-3xl font-semibold text-gray-800 mt-4'>
        Trang bạn tìm không tồn tại
      </h2>

      <p className='text-gray-500 mt-3 max-w-md'>
        Có thể đường dẫn đã bị thay đổi, bị xoá, hoặc chưa bao giờ tồn tại.
      </p>

      <div className='flex items-center gap-4 mt-8'>
        <Link
          to='/'
          className='bg-secondary hover:shadow-lg px-7 py-2.5 text-white rounded-lg active:scale-95 transition-all shadow-sm'
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default memo(Error);
