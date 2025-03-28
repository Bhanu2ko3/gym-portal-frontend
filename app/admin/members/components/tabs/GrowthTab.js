import React from 'react'

const GrowthTab = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Active Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Active Members</h2>
            <p className="text-4xl font-bold">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">New Members</h2>
            <div className="flex justify-end mb-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">Day</button>
              <button className="bg-white text-gray-600 px-3 py-1 rounded-md ml-2">Week</button>
              <button className="bg-white text-gray-600 px-3 py-1 rounded-md ml-2">Month</button>
            </div>
            <div className="h-32 bg-gray-100 rounded-md"></div>
          </div>
        </div>

        {/* Visitors, Frozen, Cancelled Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">635</p>
            <p className="text-gray-600">Visitors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">635</p>
            <p className="text-gray-600">Frozen</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">635</p>
            <p className="text-gray-600">Cancelled</p>
          </div>
        </div>

        {/* Member Growth Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Member Growth</h2>
            <div className="relative">
              <button className="bg-white text-gray-600 px-3 py-1 rounded-md">
                Month <i className="fas fa-chevron-down ml-1"></i>
              </button>
            </div>
          </div>
          <div className="h-64 bg-gray-100 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default GrowthTab