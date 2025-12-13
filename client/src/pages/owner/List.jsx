import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { dummyProperties } from "../../assets/data";

/* ===== CONFIG ===== */

const STATUS_STYLE = {
  Active: "bg-emerald-100 text-emerald-700",
  Draft: "bg-gray-100 text-gray-600",
  Booked: "bg-blue-100 text-blue-700",
  Maintenance: "bg-amber-100 text-amber-700",
};

/* ===== COMPONENT ===== */

const List = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const { user, currency } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(dummyProperties);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  /* ===== HANDLERS ===== */

  const handleDelete = (_id) => {
    if (!window.confirm("Remove this property?")) return;
    setProperties((prev) => prev.filter((p) => p._id !== _id));
  };

  const toggleStatus = (_id) => {
    setProperties((prev) =>
      prev.map((item) =>
        item._id === _id
          ? {
              ...item,
              status: item.status === "available" ? "Draft" : "available",
            }
          : item
      )
    );
  };

  /* ===== FILTER + SORT ===== */

  const filtered = properties.filter((item) => {
    const matchStatus =
      statusFilter === "All" ||
      item.status ===
        (statusFilter === "Active" ? "available" : statusFilter.toLowerCase()); // map status

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase());

    const matchPrice =
      priceRange === "All" ||
      (priceRange === "0-100" && item.price.rent <= 100) ||
      (priceRange === "100-200" &&
        item.price.rent > 100 &&
        item.price.rent <= 200) ||
      (priceRange === "200+" && item.price.rent > 200);

    return matchStatus && matchSearch && matchPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "PriceAsc") return a.price.rent - b.price.rent;
    if (sortBy === "PriceDesc") return b.price.rent - a.price.rent;
    if (sortBy === "Name") return a.title.localeCompare(b.title);
    return new Date(b.createdAt) - new Date(a.createdAt); // newest
  });

  /* ===== RENDER ===== */

  return (
    <section className='p-6 md:p-10 space-y-6'>
      {/* Header */}
      <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>Your Properties</h1>
          <p className='text-sm text-neutral-500 mt-1'>
            Manage listings & availability
          </p>
        </div>

        <div className='flex flex-wrap gap-3'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search...'
            className='px-4 py-2 text-sm rounded-xl border'
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className='px-4 py-2 rounded-xl border bg-white'
          >
            <option value='All'>All status</option>
            <option value='Active'>Active</option>
            <option value='Draft'>Draft</option>
            <option value='Booked'>Booked</option>
            <option value='Maintenance'>Maintenance</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className='px-4 py-2 rounded-xl border bg-white'
          >
            <option value='All'>All price</option>
            <option value='0-100'>$0 – $100</option>
            <option value='100-200'>$100 – $200</option>
            <option value='200+'>$200+</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='px-4 py-2 rounded-xl border bg-white'
          >
            <option value='Newest'>Newest</option>
            <option value='PriceAsc'>Price ↑</option>
            <option value='PriceDesc'>Price ↓</option>
            <option value='Name'>Name A–Z</option>
          </select>

          <Link
            to='/owner/add-property'
            className='px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm'
          >
            + Add
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className='bg-white rounded-2xl border shadow-sm overflow-hidden'>
        <table className='w-full'>
          <thead className='border-b text-xs text-gray-500'>
            <tr>
              <th className='px-6 py-4 text-left'>Property</th>
              <th className='px-6 py-4'>Price</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((item) => (
              <tr
                key={item._id}
                className='group border-b hover:bg-gray-50 transition'
              >
                <td className='px-6 py-4 flex gap-4 items-center'>
                  <img
                    src={item.images[0]}
                    className='w-14 h-14 rounded-xl object-cover'
                  />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.city}</p>{" "}
                  </div>
                </td>

                <td className='px-6 py-4'>
                  ${item.price.rent}
                  <span className='text-sm text-gray-500'> / night</span>
                </td>

                <td className='px-6 py-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      STATUS_STYLE[
                        item.status === "available" ? "Active" : item.status
                      ]
                    }`}
                  >
                    {item.status === "available" ? "Active" : item.status}
                  </span>
                </td>

                <td className='px-6 py-4 text-right'>
                  <div className='flex justify-end gap-4 opacity-60 group-hover:opacity-100 transition'>
                    <button
                      onClick={() => toggleStatus(item._id)}
                      className='text-sm hover:text-black'
                    >
                      Toggle
                    </button>
                    <Link
                      to={`/owner/${item._id}/edit`}
                      className='text-sm hover:text-black'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className='text-sm text-red-500 hover:text-red-700'
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {sorted.length === 0 && (
              <tr>
                <td colSpan='4' className='py-16 text-center text-gray-500'>
                  No properties found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default memo(List);
