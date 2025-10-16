import React from 'react';

export default function ServicesPage() {
  return (
    <div className="p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Services
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          We offer a comprehensive set of tools and services to help hospitals improve operational
          efficiency, reduce costs, and enhance patient outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">
              Predictive Modeling
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our custom-built machine learning models forecast patient flow, bed occupancy, and
              emergency demand to help you stay prepared.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">
              Real-Time Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visualize hospital data with interactive dashboards and analytics — track key
              performance metrics effortlessly.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">
              Data Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our system integrates with your existing EHR, lab, and HR databases for seamless
              information flow.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">
              24/7 Support & Consulting
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get technical support, training, and expert consulting to make the most of your
              analytics platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
