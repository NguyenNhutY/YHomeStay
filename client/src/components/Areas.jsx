import { memo } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { areas } from "../data/areas";

const Areas = () => {
  return (
    <div className='max-padd-container px-6 py-20 text-[#0F172A]'>
      <div className='max-w-6xl mx-auto'>
        <Title
          title1='Explore Local Areas'
          title2='Phan Thiet Neighborhoods'
          titleStyles='mb-10'
          para='Each coastal area carries its own rhythm — from breezy beaches to peaceful hillside views. Find the location that resonates with your lifestyle or investment goals.'
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {areas.map((item) => (
            <Link
              key={item.name}
              to={`/area/${item.name}`}
              className='bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] border border-gray-200'
            >
              <img
                src={item.img}
                alt={item.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-3 text-secondary'>
                  {item.name}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Areas);
