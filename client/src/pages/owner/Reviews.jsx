import React, { memo, useState } from "react";

const mockReviews = [
  {
    id: 1,
    guest: "Linh",
    property: "OceanView Villa",
    rating: 5,
    comment: "Phòng sạch, view đẹp. Chủ thân thiện.",
    date: "2025-12-08",
    replied: false,
  },
  {
    id: 2,
    guest: "Tom",
    property: "Forest Cabin",
    rating: 4,
    comment: "Yên tĩnh, hợp nghỉ dưỡng nhưng đường vào hơi khó đi.",
    date: "2025-12-05",
    replied: true,
  },
];

const Star = ({ filled }) => (
  <span className={filled ? "text-yellow-500" : "text-gray-300"}>★</span>
);

const Reviews = () => {
  const [filter, setFilter] = useState("all");

  const reviews = mockReviews.filter((r) => {
    if (filter === "replied") return r.replied;
    if (filter === "unreplied") return !r.replied;
    return true;
  });

  return (
    <section className='p-6 md:p-10 max-w-5xl'>
      <header className='mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>
            Guest Reviews
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            Đánh giá từ khách & phản hồi của bạn
          </p>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='border rounded-xl px-3 py-2 text-sm'
        >
          <option value='all'>All reviews</option>
          <option value='unreplied'>Unreplied</option>
          <option value='replied'>Replied</option>
        </select>
      </header>

      <div className='space-y-4'>
        {reviews.map((r) => (
          <div
            key={r.id}
            className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm'
          >
            <div className='flex items-start justify-between gap-4'>
              <div>
                <div className='flex items-center gap-2'>
                  <span className='font-medium'>{r.guest}</span>
                  <span className='text-xs text-gray-400'>• {r.property}</span>
                </div>

                <div className='flex items-center mt-1'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < r.rating} />
                  ))}
                </div>

                <p className='text-sm text-gray-700 mt-3 leading-relaxed'>
                  {r.comment}
                </p>

                <p className='text-xs text-gray-400 mt-2'>{r.date}</p>
              </div>

              <div>
                {r.replied ? (
                  <span className='text-xs px-3 py-1 rounded-full bg-green-100 text-green-700'>
                    Replied
                  </span>
                ) : (
                  <button className='text-xs px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition'>
                    Reply
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {reviews.length === 0 && (
          <div className='text-center text-gray-500 text-sm py-10'>
            No reviews found
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Reviews);
