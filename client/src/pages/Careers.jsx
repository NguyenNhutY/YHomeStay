import React from "react";

const Careers = () => {
  const jobs = [
    {
      title: "Front Desk Manager",
      location: "Phan Thiet",
      description: "Manage guest check-ins and oversee front desk operations.",
    },
    {
      title: "Housekeeping Staff",
      location: "Phan Thiet",
      description: "Ensure rooms are clean and comfortable for guests.",
    },
    {
      title: "Marketing Coordinator",
      location: "Remote / Phan Thiet",
      description: "Handle digital campaigns and social media.",
    },
    {
      title: "Chef / Kitchen Staff",
      location: "Phan Thiet",
      description: "Prepare meals with quality and hygiene.",
    },
    {
      title: "Maintenance Technician",
      location: "Phan Thiet",
      description: "Maintain facilities and equipment in top condition.",
    },
    {
      title: "Guest Experience Specialist",
      location: "Phan Thiet",
      description: "Enhance guest experience and handle feedback.",
    },
    {
      title: "Social Media Content Creator",
      location: "Remote",
      description: "Create engaging content for social platforms.",
    },
    {
      title: "Event Coordinator",
      location: "Phan Thiet",
      description: "Plan and manage events at the homestay.",
    },
  ];

  return (
    <div className='px-8 py-12 max-w-6xl mx-auto space-y-12'>
      <h1 className='text-5xl font-bold text-center mb-6 text-slate-900'>
        Careers at YHomestay
      </h1>

      <p className='text-lg text-center mb-12'>
        Join our growing team and help create unforgettable experiences for our
        guests!
      </p>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 text-secondary'>
          Open Positions
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className='p-6 border border-neutral-200 rounded-xl bg-white
             hover:border-secondary hover:shadow-lg transition'
            >
              <h3 className='text-2xl font-semibold mb-2 text-slate-800'>
                {job.title}
              </h3>

              <p className='text-gray-500 mb-2 italic'>{job.location}</p>
              <p className='mb-4'>{job.description}</p>
              <button
                className='cursor-pointer mt-4 px-5 py-2.5 bg-secondary text-white rounded-lg
                   hover:bg-secondary/90 transition'
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-semibold mb-6 text-slate-900'>
          Why Work With Us?
        </h2>

        <ul className='list-disc pl-6 space-y-2 text-lg'>
          <li>Friendly and inclusive work environment</li>
          <li>Opportunities for growth and development</li>
          <li>Competitive salary and benefits</li>
          <li>Flexible work locations and schedules</li>
          <li>Team-building activities and events</li>
        </ul>
      </section>
    </div>
  );
};

export default Careers;
