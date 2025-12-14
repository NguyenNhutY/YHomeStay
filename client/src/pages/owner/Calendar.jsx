import React, { memo, useMemo, useState } from "react";
import dayjs from "dayjs";

/* ================= MOCK BOOKINGS ================= */
// startTime & endTime là ISO string (chuẩn backend)
const BOOKINGS = [
  {
    id: 1,
    startTime: "2025-03-10T08:00",
    endTime: "2025-03-10T12:00",
  },
  {
    id: 2,
    startTime: "2025-03-10T14:00",
    endTime: "2025-03-10T18:00",
  },
  {
    id: 3,
    startTime: "2025-03-12T00:00",
    endTime: "2025-03-12T23:59",
  },
];

/* ================= TIME UTILS ================= */

const isOverlap = (startA, endA, startB, endB) => {
  return dayjs(startA).isBefore(endB) && dayjs(endA).isAfter(startB);
};

const getDayStatus = (date, bookings) => {
  const dayStart = date.startOf("day");
  const dayEnd = date.endOf("day");

  let hasBooking = false;
  let fullyBooked = true;

  for (const b of bookings) {
    const bStart = dayjs(b.startTime);
    const bEnd = dayjs(b.endTime);

    if (isOverlap(bStart, bEnd, dayStart, dayEnd)) {
      hasBooking = true;

      if (bStart.isAfter(dayStart) || bEnd.isBefore(dayEnd)) {
        fullyBooked = false;
      }
    }
  }

  if (!hasBooking) return "AVAILABLE";
  if (fullyBooked) return "FULL";
  return "PARTIAL";
};

/* ================= COMPONENT ================= */

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();

  const days = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) =>
      startOfMonth.add(i, "day")
    );
  }, [currentMonth]);

  return (
    <section className='p-6 space-y-6'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <button onClick={() => setCurrentMonth((m) => m.subtract(1, "month"))}>
          ←
        </button>

        <h2 className='text-xl font-semibold'>
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <button onClick={() => setCurrentMonth((m) => m.add(1, "month"))}>
          →
        </button>
      </div>

      {/* Month grid */}
      <div className='grid grid-cols-7 gap-3'>
        {days.map((date) => {
          const status = getDayStatus(date, BOOKINGS);

          const style = {
            AVAILABLE: "bg-white hover:bg-gray-50",
            PARTIAL: "bg-yellow-50 border-yellow-300",
            FULL: "bg-red-50 border-red-300",
          };

          return (
            <div
              key={date.format("YYYY-MM-DD")}
              onClick={() => setSelectedDate(date)}
              className={`h-24 p-2 rounded-xl border cursor-pointer transition ${style[status]}`}
            >
              <div className='flex justify-between text-sm'>
                <span>{date.date()}</span>
                <span className='text-xs'>
                  {status === "FULL" && "Full"}
                  {status === "PARTIAL" && "Partial"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Day detail */}
      {selectedDate && (
        <DayTimeline
          date={selectedDate}
          bookings={BOOKINGS}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </section>
  );
};

/* ================= DAY TIMELINE ================= */

const DayTimeline = ({ date, bookings, onClose }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const isHourBooked = (hour) => {
    const start = date.hour(hour).minute(0);
    const end = start.add(1, "hour");

    return bookings.some((b) =>
      isOverlap(dayjs(b.startTime), dayjs(b.endTime), start, end)
    );
  };

  return (
    <div className='mt-8 bg-white rounded-2xl border p-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold'>{date.format("DD MMMM YYYY")}</h3>
        <button onClick={onClose}>✕</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        {hours.map((h) => {
          const booked = isHourBooked(h);

          return (
            <div
              key={h}
              className={`p-2 text-center rounded-lg text-sm border
                ${
                  booked
                    ? "bg-red-100 text-red-700 cursor-not-allowed"
                    : "bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer"
                }`}
            >
              {String(h).padStart(2, "0")}:00
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Calendar);
