import React, { useState, memo } from "react";

const initialStaff = [
  {
    id: 1,
    name: "Lan",
    role: "Cleaner",
    phone: "0901xxxxxx",
    status: "Available",
  },
  {
    id: 2,
    name: "Khoa",
    role: "Maintenance",
    phone: "0902xxxxxx",
    status: "Busy",
  },
];

const Staff = () => {
  const [staff, setStaff] = useState(initialStaff);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "Cleaner", phone: "" });

  const addStaff = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setStaff([
      ...staff,
      {
        id: Date.now(),
        ...form,
        status: "Available",
      },
    ]);

    setForm({ name: "", role: "Cleaner", phone: "" });
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setStaff((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Available" ? "Busy" : "Available" }
          : s
      )
    );
  };

  return (
    <section className='p-6 md:p-10 max-w-6xl'>
      <header className='flex items-center justify-between mb-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold'>
            Staff Management
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            Quản lý nhân viên dọn phòng & bảo trì
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className='bg-secondary text-white px-4 py-2 rounded-xl hover:bg-secondary/80 transition'
        >
          + Add Staff
        </button>
      </header>

      {/* Staff List */}
      <div className='bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden'>
        <table className='w-full text-left'>
          <thead className=' text-sm text-gray-500'>
            <tr>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Role</th>
              <th className='px-6 py-3'>Phone</th>
              <th className='px-6 py-3'>Status</th>
              <th className='px-6 py-3 text-right'>Action</th>
            </tr>
          </thead>

          <tbody>
            {staff.map((s) => (
              <tr key={s.id} className='border-t hover:bg-gray-50 transition'>
                <td className='px-6 py-4 font-medium'>{s.name}</td>
                <td className='px-6 py-4'>{s.role}</td>
                <td className='px-6 py-4'>{s.phone}</td>
                <td className='px-6 py-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      s.status === "Available"
                        ? "bg-secondary/20 text-secondary-700"
                        : "bg-secondary/30 text-secondary-900"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-right'>
                  <label className='relative inline-flex cursor-pointer items-center'>
                    <input
                      type='checkbox'
                      className='peer sr-only'
                      checked={s.status === "Available"}
                      onChange={() => toggleStatus(s.id)}
                    />
                    <div className='peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-secondary peer-focus:ring-2 peer-focus:ring-emerald-400'></div>
                    <span className='dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Staff Modal */}
      {showForm && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white w-full max-w-md rounded-2xl p-6'>
            <h2 className='text-lg font-semibold mb-4'>Add Staff</h2>

            <form onSubmit={addStaff} className='space-y-4'>
              <input
                type='text'
                placeholder='Name'
                className='w-full border rounded-xl px-4 py-2'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <select
                className='w-full border rounded-xl px-4 py-2'
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option>Cleaner</option>
                <option>Maintenance</option>
              </select>

              <input
                type='text'
                placeholder='Phone'
                className='w-full border rounded-xl px-4 py-2'
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <div className='flex justify-end gap-3 pt-4'>
                <button
                  type='submit'
                  className='px-4 py-2 rounded-xl bg-secondary text-white'
                >
                  Save
                </button>

                <button
                  type='submit'
                  className='px-4 py-2 rounded-xl bg-black text-white'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Staff);
