import React, { memo, useMemo, useState } from "react";
import Item from "../components/Item";
import { useAppContext } from "../context/AppContext";

const Listing = () => {
  const { properties = [] } = useAppContext();

  // ===== STATE =====
  const [sortBy, setSortBy] = useState("Relevant");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // ===== CONST =====
  const sortOptions = ["Relevant", "Low to High", "High to Low"];

  const propertyTypes = [
    "House",
    "Apartment",
    "Villa",
    "Penthouse",
    "Townhouse",
    "Commercial",
    "Land Plot",
  ];

  const priceRange = [
    { label: "0 - 10,000", min: 0, max: 10000 },
    { label: "10,000 - 20,000", min: 10000, max: 20000 },
    { label: "20,000 - 40,000", min: 20000, max: 40000 },
    { label: "40,000 - 80,000", min: 40000, max: 80000 },
  ];

  // ===== HANDLERS =====
  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const togglePrice = (range) => {
    setSelectedPrices((prev) =>
      prev.some((p) => p.label === range.label)
        ? prev.filter((p) => p.label !== range.label)
        : [...prev, range]
    );
  };

  // ===== FILTER + SORT LOGIC =====
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Filter by type
    if (selectedTypes.length > 0) {
      result = result.filter((p) => selectedTypes.includes(p.type));
    }

    // Filter by price
    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((r) => p.price >= r.min && p.price <= r.max)
      );
    }

    // Sort
    if (sortBy === "Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [properties, sortBy, selectedTypes, selectedPrices]);

  return (
    <div className='bg-linear-to-r from-[#fffbee] to-white py-28'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10'>
        {/* ===== FILTER PANEL ===== */}
        <aside className='w-full lg:w-72 shrink-0 bg-white rounded-2xl p-6 shadow-md'>
          <h4 className='text-xl font-semibold mb-6'>Filter</h4>

          {/* Sort */}
          <div className='mb-8'>
            <p className='font-medium mb-2'>Sort by</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='w-full h-11 border rounded-lg px-3'
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div className='mb-8'>
            <p className='font-medium mb-3'>Property type</p>
            <div className='space-y-2'>
              {propertyTypes.map((type) => (
                <label
                  key={type}
                  className='flex items-center gap-2 text-sm cursor-pointer'
                >
                  <input
                    type='checkbox'
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <p className='font-medium mb-3'>Price range</p>
            <div className='space-y-2'>
              {priceRange.map((range) => (
                <label
                  key={range.label}
                  className='flex items-center gap-2 text-sm cursor-pointer'
                >
                  <input
                    type='checkbox'
                    checked={selectedPrices.some(
                      (p) => p.label === range.label
                    )}
                    onChange={() => togglePrice(range)}
                  />
                  ${range.label}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ===== LISTING ===== */}
        <main className='flex-1'>
          {filteredProperties.length > 0 ? (
            <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-3'>
              {filteredProperties.map((property) => (
                <Item key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-500 mt-24 text-lg'>
              No matching properties found.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default memo(Listing);
