import Title from "../components/Title";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
    "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1200",
    "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200",
    "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1200",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200",
    "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1200",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200",
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1200",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1200",
    "https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&w=1200",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=1200",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
  ];
  return (
    <div className='min-h-screen w-full  bg-white px-6 py-20 text-[#0F172A]'>
      <div className=' mx-auto'>
        <Title
          title1='Explore Our Space'
          title2='Gallery'
          para='A curated look into our rooms, spaces, and atmosphere. What you see is what you experience.'
        />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
          {images.map((src, idx) => (
            <div
              key={idx}
              className='overflow-hidden rounded-xl shadow-md group'
            >
              <img
                src={src}
                alt='gallery'
                className='w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-all duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
