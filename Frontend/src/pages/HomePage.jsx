import React from 'react';
import DashboardCard from '../components/Dashboardcard';

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Predictive Analysis for Hospital Resource Management
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This dashboard provides real-time insights and predictive analytics to optimize hospital resource allocation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon="🛏️" title="Predicted Bed Occupancy" value="87%" change="+2.5%" changeType="increase" />
        <DashboardCard icon="👥" title="Required Staffing Level" value="124" change="-3" changeType="decrease" />
        <DashboardCard icon="⚠️" title="High-Risk Patients" value="18" change="+2" changeType="increase" />
        <DashboardCard icon="🩺" title="Equipment Utilization" value="65%" change="+5%" changeType="increase" />
      </div>
    </div>
  );
}
