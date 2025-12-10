import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { areas } from "../data/areas"; // file bạn đã tạo
import { areas as allProperties } from "../data/areas"; // mock properties (see note)
import Error from "./Error";

export default function AreasDetail() {
  const { name } = useParams();
  const area = areas.find((a) => a.name === name);
  if (!area) return <Error />;

  // Tạo các block động dựa trên area.name (template-driven)
  const content = useMemo(() => {
    const base = area.name;
    return {
      highlights: [
        `${base} coastline with long sandy beaches`,
        `Local seafood markets and fresh catches every morning`,
        `Friendly cafés and small restaurants with local flavor`,
      ],
      bestTime: "November – April (dry season) for calm seas and sunny days.",
      localTips: [
        `Try the local seafood breakfast markets near the pier.`,
        `Rent a scooter early morning to avoid traffic and catch sunrise.`,
        `Carry some cash — many small stalls prefer cash payments.`,
      ],
      threeDayItinerary: [
        {
          day: "Day 1",
          activities: [
            `Morning: Walk the main beach and coffee at a beachfront café.`,
            `Afternoon: Visit the fishing village and sample grilled seafood.`,
            `Evening: Sunset at a dune viewpoint.`,
          ],
        },
        {
          day: "Day 2",
          activities: [
            `Morning: Short boat trip or lighthouse visit.`,
            `Afternoon: Explore local shops and a small museum (if any).`,
            `Evening: Dinner at a recommended family-run restaurant.`,
          ],
        },
        {
          day: "Day 3",
          activities: [
            `Morning: Relax at a quieter beach or pool.`,
            `Afternoon: Optional spa or coastal drive to nearby villages.`,
            `Evening: Pack, buy local snacks for the road.`,
          ],
        },
      ],
      events: [
        { month: "Jan", title: `${base} New Year Market` },
        { month: "Jul", title: `${base} Kite Festival (if available)` },
      ],
      gallery: area.gallery || [area.img],
      seoParagraph: `${base} — a coastal area where beachfront mornings meet gentle community life. Whether you want a long-stay homestay, a vacation rental, or a quiet villa, ${base} offers balance: convenience without urban noise.`,
    };
  }, [area]);

  // Related properties (mock): filter properties by area slug
  const related = useMemo(() => {
    return (allProperties || []).filter((p) => p.areaSlug === name).slice(0, 4);
  }, [name]);

  return (
    <div className='max-w-7xl mx-auto px-6 py-16 space-y-12 text-[#0F172A]'>
      {/* HERO */}
      <div className='grid lg:grid-cols-3 gap-8 items-center'>
        <div className='lg:col-span-2 rounded-3xl overflow-hidden transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98'>
          <img
            src={area.img}
            alt={area.name}
            className='w-full h-[480px] object-cover'
          />
        </div>

        <div className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98 p-6 rounded-2xl bg-white shadow'>
          <h1 className='text-4xl font-bold mb-3 text-secondary'>
            {area.name}
          </h1>
          <p className='text-gray-600 mb-4'>{content.seoParagraph}</p>

          <div className='space-y-3'>
            <div>
              <h4 className='font-semibold text-sm text-gray-500'>Best time</h4>
              <p className='text-sm'>{content.bestTime}</p>
            </div>
            <div>
              <h4 className='font-semibold text-sm text-gray-500'>
                Quick tips
              </h4>
              <ul className='list-disc pl-5 text-sm'>
                {content.localTips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <Link
              to={`/listing?area=${name}`}
              className='inline-block mt-4 px-4 py-2 bg-secondary text-white rounded-lg transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98'
            >
              View properties in {area.name}
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section>
        <h2 className='text-2xl font-semibold mb-4'>Highlights</h2>
        <div className='flex flex-wrap gap-4 '>
          {content.highlights.map((h, i) => (
            <div
              key={i}
              className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98 px-4 py-2 border rounded-lg bg-white shadow-sm text-sm'
            >
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section>
        <h2 className='text-2xl font-semibold mb-4'>Gallery</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {content.gallery.map((g, i) => (
            <div
              key={i}
              className='rounded-2xl overflow-hidden h-48 transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98'
            >
              <img
                src={g}
                alt={`${area.name} ${i}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className='grid md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>3-Day Itinerary</h2>
          <div className='space-y-4'>
            {content.threeDayItinerary.map((d, idx) => (
              <div
                key={idx}
                className='p-4 border rounded-lg bg-white transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98'
              >
                <h3 className='font-semibold mb-2'>{d.day}</h3>
                <ul className='list-disc pl-5 text-sm'>
                  {d.activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Events & Testimonials (mock) */}
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Local Events</h2>
          <ul className='space-y-3'>
            {content.events.map((e, i) => (
              <li
                key={i}
                className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98 p-3 border rounded-lg flex justify-between items-center'
              >
                <div>
                  <div className='text-sm text-gray-500'>{e.month}</div>
                  <div className='font-medium'>{e.title}</div>
                </div>
                <button className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98 px-3 py-1 border rounded text-sm'>
                  Learn
                </button>
              </li>
            ))}
          </ul>

          <h2 className='text-2xl font-semibold mt-8 mb-4'>What guests say</h2>
          <div className='space-y-3'>
            {/* Mock testimonials: generate 2 simple entries */}
            {[1, 2].map((n) => (
              <div
                key={n}
                className='p-3 border rounded-lg bg-white transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98'
              >
                <div className='font-semibold '>Guest {n}</div>
                <div className='text-sm text-gray-600'>
                  Lovely stay — quiet mornings and excellent seafood. Great for
                  work & rest.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related properties */}
      <section>
        <h2 className='text-2xl font-semibold mb-4'>Related properties</h2>
        {related.length ? (
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {related.map((p) => (
              <div key={p._id} className='border rounded-2xl overflow-hidden'>
                <img
                  src={p.images?.[0]}
                  alt={p.title}
                  className='h-36 w-full object-cover'
                />
                <div className='p-3'>
                  <div className='font-semibold'>{p.title}</div>
                  <div className='text-sm text-gray-600'>
                    {p.type} • ${p.price}/night
                  </div>
                  <Link
                    to={`/property/${p._id}`}
                    className='text-secondary text-sm mt-2 inline-block'
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600'>
            No properties listed for this area yet.
          </p>
        )}
      </section>
    </div>
  );
}
