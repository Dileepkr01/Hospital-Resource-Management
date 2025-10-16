import React from 'react';

export default function AboutPage() {
  return (
    <div className="p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          About the Project
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          The <strong>Predictive Analysis for Hospital Resource Management</strong> project was created
          to help healthcare institutions make smarter decisions. Hospitals face challenges in
          managing patient loads, resource allocation, and maintaining quality care efficiently.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Our system uses <strong>AI and Machine Learning</strong> to predict patient admissions,
          staff requirements, and critical equipment usage based on historical and seasonal data.
          The dashboard provides administrators with real-time insights to optimize resource
          utilization and improve patient care outcomes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-6 mb-3">
          Core Features
        </h2>

        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Forecasting patient admissions and discharges.</li>
          <li>Optimizing staff schedules using predictive modeling.</li>
          <li>Tracking and managing critical medical resources.</li>
          <li>Providing real-time alerts for resource shortages.</li>
          <li>Improving decision-making through data-driven insights.</li>
        </ul>
      </div>
    </div>
  );
}
