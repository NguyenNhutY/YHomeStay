import React from "react";

const staff = [
  { id: 1, name: "Lan", role: "Cleaner", phone: "0901xxxxxx" },
  { id: 2, name: "Khoa", role: "Maintenance", phone: "0902xxxxxx" },
];

const StaffPanel = () => {
  return (
    <div className='space-y-3 text-sm'>
      {staff.map((s) => (
        <div key={s.id} className='flex items-center justify-between'>
          <div>
            <div className='font-medium'>{s.name}</div>
            <div className='text-xs text-gray-500'>{s.role}</div>
          </div>
          <div className='text-right'>
            <div className='text-xs text-gray-500'>{s.phone}</div>
            <button className='text-xs text-blue-600 mt-1'>Assign task</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(StaffPanel);
