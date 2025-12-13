import React from "react";

/**
 * Small revenue panel with inline SVG sparkline.
 * Replace `data` with real numbers.
 */

const data = [120, 180, 150, 220, 200, 260, 300]; // last 7 days

const RevenuePanel = () => {
  const total = data.reduce((s, v) => s + v, 0);
  const max = Math.max(...data);
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ");

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <div className='text-xs text-gray-500'>Last 7 days</div>
          <div className='text-2xl font-semibold'>${total}</div>
        </div>
        <div className='text-sm text-green-600'>+12% vs prev</div>
      </div>

      <svg viewBox='0 0 100 100' className='w-full h-24'>
        <polyline
          fill='none'
          stroke='#111827'
          strokeWidth='1.5'
          points={points}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <polyline
          fill='rgba(17,24,39,0.06)'
          stroke='none'
          points={points + " 100,100 0,100"}
        />
      </svg>

      <div className='mt-3 text-xs text-gray-500'>
        Avg price: ${Math.round(total / data.length)}
      </div>
    </div>
  );
};

export default React.memo(RevenuePanel);
