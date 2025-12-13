import React, { useState } from "react";

const initial = [
  {
    id: "T-001",
    issue: "Máy lạnh hỏng",
    room: "OceanView Villa",
    status: "Open",
    created: "2025-12-09",
  },
  {
    id: "T-002",
    issue: "Rò nước bồn tắm",
    room: "Sunhouse",
    status: "In Progress",
    created: "2025-12-08",
  },
];

const TicketsPanel = () => {
  const [tickets, setTickets] = useState(initial);

  const updateStatus = (id, status) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <div className='space-y-3 '>
      {tickets.map((t) => (
        <div
          key={t.id}
          className='flex items-center justify-between p-3 border rounded transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98]'
        >
          <div>
            <div className='font-medium'>{t.issue}</div>
            <div className='text-xs text-gray-500'>
              {t.room} • {t.created}
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div
              className='text-sm px-2 py-0.5 rounded-full text-white'
              style={{
                background:
                  t.status === "Open"
                    ? "#ef4444"
                    : t.status === "In Progress"
                    ? "#f59e0b"
                    : "#10b981",
              }}
            >
              {t.status}
            </div>
            <div>
              {t.status !== "Done" && (
                <button
                  onClick={() => updateStatus(t.id, "Done")}
                  className='text-sm text-blue-600'
                >
                  Mark done
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TicketsPanel);
