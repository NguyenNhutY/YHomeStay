import React, { memo } from "react";
import { Link } from "react-router-dom";

const ListProperty = () => {
  const sampleData = [
    {
      id: 1,
      name: "OceanView Villa",
      location: "Phan Thiết",
      price: "$120/night",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Forest Cabin",
      location: "Mũi Né",
      price: "$80/night",
      status: "Draft",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className='p-6 md:p-10'>
      <h1 className='text-2xl md:text-3xl font-semibold tracking-tight mb-6'>
        Your Properties
      </h1>

      <div className='bg-white shadow-sm rounded-2xl border border-gray-100 p-6'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='text-gray-500 text-sm border-b'>
                <th className='py-3'>Property</th>
                <th className='py-3'>Location</th>
                <th className='py-3'>Price</th>
                <th className='py-3'>Status</th>
                <th className='py-3 text-right'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sampleData.map((item) => (
                <tr
                  key={item.id}
                  className='border-b hover:bg-gray-50 transition'
                >
                  <td className='py-4 flex items-center gap-3'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-14 h-14 rounded-xl object-cover'
                    />
                    <span className='font-medium'>{item.name}</span>
                  </td>

                  <td className='py-4'>{item.location}</td>
                  <td className='py-4'>{item.price}</td>

                  <td className='py-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className='py-4 text-right'>
                    <Link
                      to={`/owner/edit/${item.id}`}
                      className='text-blue-600 hover:underline mr-4'
                    >
                      Edit
                    </Link>
                    <button className='text-red-600 hover:underline'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default memo(ListProperty);
