import React from "react";

const mock = [
  {
    id: 1,
    guest: "Linh",
    rating: 5,
    text: "Phòng sạch, view đẹp. Chủ thân thiện.",
  },
  {
    id: 2,
    guest: "Tom",
    rating: 4,
    text: "Ổn, hơi xa biển nhưng thích yên tĩnh.",
  },
  { id: 3, guest: "Anna", rating: 5, text: "Bếp đầy đủ, nấu ngon." },
];

const ReviewsPanel = () => {
  return (
    <div className='space-y-4'>
      {mock.map((r) => (
        <div key={r.id} className='flex items-start gap-4'>
          <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium'>
            {r.guest[0]}
          </div>
          <div className='flex-1'>
            <div className='flex items-center justify-between'>
              <div className='font-medium'>{r.guest}</div>
              <div className='text-sm text-yellow-600'>
                {"★".repeat(r.rating)}
              </div>
            </div>
            <p className='text-sm text-gray-600 mt-1'>{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ReviewsPanel);
