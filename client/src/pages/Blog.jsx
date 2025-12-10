import React, { memo } from "react";
import { Calendar, User } from "lucide-react";
import { posts } from "../data/posts";
const Blog = () => {
  return (
    <div className='min-h-screen bg-[#F8FAFC] text-[#0F172A]'>
      <div className='max-w-7xl mx-auto px-6 py-24'>
        {/* HEADER */}
        <div className='max-w-3xl mb-20'>
          <p className='text-sm font-medium tracking-widest text-secondary uppercase'>
            Journal
          </p>
          <h1 className='text-4xl md:text-5xl font-semibold mt-3 leading-tight'>
            Stories, Spaces
            <br />& Slow Travel
          </h1>
          <p className='text-gray-600 mt-5 text-lg'>
            Thoughtful insights on travel, interior design, and local living —
            written for those who value atmosphere over rush.
          </p>
        </div>

        {/* GRID */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16'>
          {posts.map((post) => (
            <article key={post.id} className='group cursor-pointer'>
              {/* IMAGE */}
              <div className='relative w-full aspect-4/3 rounded-3xl overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover transition duration-700 group-hover:scale-105'
                />
                {/* subtle overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition' />
              </div>

              {/* CONTENT */}
              <div className='mt-6 space-y-3'>
                <h3 className='text-xl font-medium leading-snug group-hover:text-secondary transition'>
                  {post.title}
                </h3>

                <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                  {post.description}
                </p>

                {/* META */}
                <div className='flex items-center gap-6 text-xs text-gray-500 pt-2'>
                  <div className='flex items-center gap-1.5'>
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>

                {/* READ MORE */}
                <div className='pt-3'>
                  <span className='inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:gap-3 transition-all'>
                    Read article
                    <span className='block w-6 h-px bg-secondary' />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className='mt-32 text-center text-gray-500 text-sm'>
          More essays coming soon — on space, silence, and the art of staying
          well.
        </div>
      </div>
    </div>
  );
};

export default memo(Blog);
