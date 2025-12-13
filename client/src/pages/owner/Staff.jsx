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
          className='bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition'
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
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-right'>
                  <button
                    onClick={() => toggleStatus(s.id)}
                    className='text-sm text-blue-600 hover:text-blue-800'
                  >
                    Toggle status
                  </button>
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
                  type='button'
                  onClick={() => setShowForm(false)}
                  className='px-4 py-2 rounded-xl border'
                >
                  Cancel
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
