import React, { memo } from "react";

/**
 * BookingList
 * props:
 * - compact: boolean (narrower display)
 *
 * Replace sampleData with real API data later.
 */

const sampleData = [
  {
    id: "B-1001",
    guest: "Nguyễn An",
    room: "OceanView Villa",
    start: "2025-12-10",
    end: "2025-12-13",
    status: "Confirmed",
    total: 360,
  },
  {
    id: "B-1002",
    guest: "Mai H.",
    room: "Sunhouse",
    start: "2025-12-11",
    end: "2025-12-12",
    status: "Pending",
    total: 80,
  },
  {
    id: "B-1003",
    guest: "John Doe",
    room: "Forest Cabin",
    start: "2025-12-18",
    end: "2025-12-20",
    status: "Completed",
    total: 200,
  },
];

const BookingList = ({ compact = false }) => {
  return (
    <div className={compact ? "space-y-3 " : ""}>
      {!compact && (
        <div className='mb-4 text-sm text-gray-500'>
          Latest bookings — click a row to see details, confirm or cancel.
        </div>
      )}

      <div className='divide-y '>
        {sampleData.map((b) => (
          <div
            key={b.id}
            className='py-3 flex items-center justify-between hover:bg-gray-50 rounded px-2'
          >
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-3'>
                <div className='text-sm font-medium'>{b.guest}</div>
                <div className='text-xs text-gray-400'>{b.id}</div>
              </div>
              <div className='text-xs text-gray-500 mt-1 truncate '>
                {b.room} • {b.start} → {b.end}
              </div>
            </div>

            <div className='text-right ml-4'>
              <div className='text-sm font-medium'>${b.total}</div>
              <div className='text-xs mt-1'>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    b.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : b.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(BookingList);
