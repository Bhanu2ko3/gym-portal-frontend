import React from "react";

const SalesTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex items-center justify-between">
        {/* Create Sales Button */}
        <button className="bg-teal-600 text-white py-2 px-4 rounded-full">
          Create Sales
        </button>

        {/* Sales Status Text */}
        <div className="flex-grow text-center text-gray-400">
          No Sales Created Yet.
        </div>

        {/* Export Button */}
        <button className="bg-white border border-gray-300 text-gray-600 py-2 px-4 rounded-full shadow">
          Export
        </button>
      </div>
    </div>
  );
};

export default SalesTab;
