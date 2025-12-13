import React, { useMemo, useState } from "react";

/**
 * Simple month grid + booking blocks (mocked).
 * For production replace with full calendar library (FullCalendar) or custom.
 */

const mockBookings = [
  {
    id: 1,
    title: "OceanView - B-1001",
    start: "2025-12-10",
    end: "2025-12-13",
    room: "OceanView Villa",
  },
  {
    id: 2,
    title: "Sunhouse - B-1002",
    start: "2025-12-11",
    end: "2025-12-11",
    room: "Sunhouse",
  },
  {
    id: 3,
    title: "Forest - B-1003",
    start: "2025-12-18",
    end: "2025-12-20",
    room: "Forest Cabin",
  },
];

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const CalendarView = () => {
  const today = new Date();
  const [display, setDisplay] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  }); // month: 0-index

  const days = useMemo(() => {
    const dCount = getDaysInMonth(display.year, display.month);
    return Array.from({ length: dCount }, (_, i) => i + 1);
  }, [display]);

  const bookingsByDay = useMemo(() => {
    const map = {};
    mockBookings.forEach((b) => {
      const s = new Date(b.start);
      const e = new Date(b.end);
      for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
        const key = d.toISOString().slice(0, 10);
        map[key] = map[key] || [];
        map[key].push(b);
      }
    });
    return map;
  }, []);

  const prev = () => {
    setDisplay((p) => {
      const month = p.month - 1 < 0 ? 11 : p.month - 1;
      const year = p.month - 1 < 0 ? p.year - 1 : p.year;
      return { year, month };
    });
  };
  const next = () => {
    setDisplay((p) => {
      const month = p.month + 1 > 11 ? 0 : p.month + 1;
      const year = p.month + 1 > 11 ? p.year + 1 : p.year;
      return { year, month };
    });
  };

  const monthName = new Date(display.year, display.month).toLocaleString(
    undefined,
    { month: "long" }
  );

  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <div className='text-sm font-medium'>
          {monthName} {display.year}
        </div>
        <div className='flex gap-2'>
          <button onClick={prev} className='px-2 py-1 rounded-md bg-gray-100'>
            Prev
          </button>
          <button onClick={next} className='px-2 py-1 rounded-md bg-gray-100'>
            Next
          </button>
        </div>
      </div>

      <div className='grid grid-cols-7 gap-1 text-xs'>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className='text-center font-medium text-gray-500'>
            {d}
          </div>
        ))}
        {/* blank days for first weekday */}
        {(() => {
          const firstDay = new Date(display.year, display.month, 1).getDay();
          return Array.from({ length: firstDay }).map((_, idx) => (
            <div key={"b" + idx} />
          ));
        })()}

        {days.map((day) => {
          const dateKey = new Date(display.year, display.month, day)
            .toISOString()
            .slice(0, 10);
          const list = bookingsByDay[dateKey] || [];
          return (
            <div
              key={day}
              className='min-h-14 border rounded p-1 text-[11px] transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'
            >
              <div className='text-right text-gray-500'>{day}</div>
              <div className='mt-1 space-y-1'>
                {list.slice(0, 2).map((bk) => (
                  <div
                    key={bk.id}
                    className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] bg-blue-50 text-blue-700 text-[11px] px-1 rounded'
                  >
                    {bk.title}
                  </div>
                ))}
                {list.length > 2 && (
                  <div className='text-xs text-gray-400'>
                    +{list.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(CalendarView);
