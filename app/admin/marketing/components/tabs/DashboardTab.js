import React from "react";

const DashboardTab = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Grid Layout for Lead Generation & Signups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Lead Generation Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Lead Generation</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Day</button>
              <button className="text-gray-600 px-3 py-1">Week</button>
              <button className="text-gray-600 px-3 py-1">Month</button>
            </div>
          </div>
          <div className="h-40">
            <img
              src="https://storage.googleapis.com/a1aa/image/BjMNpP1gq7zOKKQdGLBOLwTzPm1ChjCYuAz18CCdiRA.jpg"
              alt="Graph showing lead generation over time"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* New Signups Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">New Signups</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Day</button>
              <button className="text-gray-600 px-3 py-1">Week</button>
              <button className="text-gray-600 px-3 py-1">Month</button>
            </div>
          </div>
          <div className="h-40">
            <img
              src="https://storage.googleapis.com/a1aa/image/rc3ThBKoFP5Bo0nZOZ_jLpmJOJH4_nXAEFaBhFHQxvc.jpg"
              alt="Graph showing new signups over time"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Acquisition Funnel Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Acquisition Funnel</h2>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
            12/07/2024 - 01/07/2025
          </div>
        </div>
        <p className="text-gray-500 mb-4">
          Member acquisition data was not found between the selected dates.
        </p>
        <p className="text-gray-500 mb-4">
          When you add new members, mark the channel through which they found your gym at the bottom of the form.
        </p>
        <h3 className="text-lg font-semibold">Latest Referrals</h3>
        <p className="text-gray-500">No referrals have been made yet.</p>
      </div>
    </div>
  );
};

export default DashboardTab;
