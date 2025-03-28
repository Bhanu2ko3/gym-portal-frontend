import React from "react";

const LeadsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full shadow-md">
            Create Lead
          </button>
          <div className="space-x-2">
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md">
              Import
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md">
              Export
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="text-center text-gray-500">
          No leads have been added yet.
        </div>
      </div>
    </div>
  );
};

export default LeadsTab;
