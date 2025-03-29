import React from 'react';

const CheckInsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4 ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-white border border-gray-300 rounded-full px-6 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
            Print
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
            Export
          </button>
        </div>
        <div className="flex items-center justify-center mb-10 h-64">
          <p className="text-gray-400">No check-ins found. Change the search parameters and try again.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckInsTab;
