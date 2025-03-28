import React from 'react';

const CheckInsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100">
            Print
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100">
            Export
          </button>
        </div>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">No check-ins found. Change the search parameters and try again.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckInsTab;
