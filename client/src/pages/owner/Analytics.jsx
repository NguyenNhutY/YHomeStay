import React from "react";

const stats = {
  occupancy: 72,
  revenueThisMonth: 4320,
  revenueLastMonth: 3890,
  avgPrice: 86,
};

const revenueData = [
  { month: "Aug", value: 2800 },
  { month: "Sep", value: 3200 },
  { month: "Oct", value: 3500 },
  { month: "Nov", value: 3890 },
  { month: "Dec", value: 4320 },
];

const properties = [
  { name: "OceanView Villa", revenue: 2100, occupancy: 88 },
  { name: "Forest Cabin", revenue: 1450, occupancy: 64 },
  { name: "Sunhouse", revenue: 770, occupancy: 42 },
];

const Analytics = () => {
  const growth =
    ((stats.revenueThisMonth - stats.revenueLastMonth) /
      stats.revenueLastMonth) *
    100;

  return (
    <section className='p-6 md:p-10 space-y-8'>
      <div>
        <h1 className='text-3xl font-semibold'>Analytics</h1>
        <p className='text-sm text-gray-500'>
          Hiệu suất kinh doanh & xu hướng vận hành
        </p>
      </div>

      {/* KPI */}
      <div className='grid md:grid-cols-4 gap-4'>
        <Card title='Occupancy rate' value={`${stats.occupancy}%`} />
        <Card
          title='Revenue (this month)'
          value={`$${stats.revenueThisMonth}`}
        />
        <Card title='Growth' value={`${growth.toFixed(1)}%`} highlight />
        <Card title='Avg price / night' value={`$${stats.avgPrice}`} />
      </div>

      {/* Revenue chart (simplified) */}
      <div className='bg-white rounded-2xl border p-6'>
        <h2 className='font-medium mb-4'>Revenue trend</h2>
        <div className='flex items-end gap-4 h-40'>
          {revenueData.map((item) => (
            <div key={item.month} className='flex-1 text-center'>
              <div
                className='bg-black rounded-xl mx-auto'
                style={{ height: `${item.value / 50}px`, width: "28px" }}
              />
              <p className='text-xs mt-2 text-gray-500'>{item.month}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property performance */}
      <div className='bg-white rounded-2xl border p-6'>
        <h2 className='font-medium mb-4'>Property performance</h2>

        <div className='space-y-4'>
          {properties.map((p) => (
            <div
              key={p.name}
              className='flex justify-between items-center border rounded-xl px-4 py-3'
            >
              <div>
                <p className='font-medium'>{p.name}</p>
                <p className='text-sm text-gray-500'>
                  Occupancy: {p.occupancy}%
                </p>
              </div>
              <p className='font-semibold'>${p.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, value, highlight }) => (
  <div
    className={`rounded-2xl border p-4 ${
      highlight ? "bg-black text-white" : "bg-white"
    }`}
  >
    <p className='text-sm opacity-70'>{title}</p>
    <p className='text-2xl font-semibold mt-1'>{value}</p>
  </div>
);

export default Analytics;
