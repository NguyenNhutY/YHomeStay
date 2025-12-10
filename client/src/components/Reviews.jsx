import { memo } from "react";
import Title from "./Title";

const reviews = [
  {
    name: "Emma Thompson",
    text: "The stay was perfect. Clean room, amazing support, and a peaceful atmosphere. Truly felt like a home away from home.",
    rating: 5,
  },
  {
    name: "Kenji Nakamura",
    text: "Professional, friendly, and reliable. Booking was smooth and everything looked exactly like the photos.",
    rating: 5,
  },
  {
    name: "Sofia Martinez",
    text: "I extended my stay twice because the place was so comfortable. Highly recommended for anyone traveling solo or with family.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className='  px-6 py-20 text-[#0F172A]'>
      <div className='max-w-5xl mx-auto'>
        <Title
          title1='What Guests Say'
          title2='Reviews & Testimonials'
          para='Real experiences from guests who stayed, relaxed, and trusted our service.'
        />

        <div className='grid md:grid-cols-3 gap-6 mt-12'>
          {reviews.map((r, i) => (
            <div
              key={i}
              className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'
            >
              <p className='text-gray-600 italic'>" {r.text} "</p>

              <div className='mt-4'>
                <p className='font-semibold text-secondary'>{r.name}</p>
                <div className='flex mt-1'>
                  {Array(r.rating)
                    .fill()
                    .map((_, idx) => (
                      <svg
                        key={idx}
                        width='20'
                        height='20'
                        fill='#FBBF24'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 .587l3.668 7.567L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.594z' />
                      </svg>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Reviews);
