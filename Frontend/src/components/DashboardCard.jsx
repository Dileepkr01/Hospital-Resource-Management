import React from 'react';

export default function DashboardCard({ icon, title, value, change, changeType }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-6 transition-transform transform hover:-translate-y-1">
      <div className="flex-shrink-0 text-3xl">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <div className="flex items-baseline space-x-2">
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
          <span
            className={`text-sm font-semibold ${
              changeType === 'increase' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
