import React, { memo } from "react";

const TrustedBrand = () => {
  const companiesLogo = [
    {
      name: "Booking",
      logo: "https://logos-marcas.com/wp-content/uploads/2021/08/Booking.com-Logotipo-2006-2012.jpg",
    },
    {
      name: "Traveloka",
      logo: "https://th.bing.com/th/id/OIP.GFI0q6UabE_6WMML7OGi5gHaDQ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Agoda",
      logo: "https://logos-world.net/wp-content/uploads/2024/07/Agoda-Logo.png",
    },
    {
      name: "Expedia",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Expedia-Logo.png",
    },
    {
      name: "Luxstay",
      logo: "https://tse1.mm.bing.net/th/id/OIP.5nlNQ_tVKaIuAW64Dh9TqAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Airbnb",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png",
    },
    {
      name: "Grab",
      logo: "https://th.bing.com/th/id/OIP.wpup_GLUu4-AfY1WTD4fVAHaDt?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Vietjet",
      logo: "https://www.liblogo.com/img-logo/vi5387v44c-vietjet-air-logo-vietjet-logo-updated-2022-.png",
    },
    {
      name: "Bamboo Airways",
      logo: "https://toppng.com/uploads/preview/bamboo-airways-brand-logo-in-vector-format-11573864514eisvwwdoe5.png",
    },
    {
      name: "Tripadvisor",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png",
    },
  ];
  return (
    <>
      <style>
        {`
                .marquee-inner {
                    animation: marqueeScroll 15s linear infinite;
                }

                .marquee-inner-testimonials {
                    animation: marqueeScroll 35s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}
      </style>

      <div className='overflow-hidden w-full relative max-w-5xl mx-auto select-none'>
        <div className='absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent' />

        <div className='flex marquee-inner will-change-transform max-w-5xl mx-auto'>
          {[...companiesLogo, ...companiesLogo].map((company, index) => (
            <img
              key={index}
              className='mx-11 w-6'
              src={company.logo}
              alt={company.name}
            />
          ))}
        </div>

        <div className='absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent' />
      </div>
    </>
  );
};

export default memo(TrustedBrand);
