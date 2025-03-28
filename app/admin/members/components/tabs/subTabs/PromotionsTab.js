import React from 'react';

const PromotionTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-end space-x-4 mb-6">
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            Print
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            Export
          </button>
          <button className="bg-teal-600 text-white rounded-full px-4 py-2 shadow-sm">
            Promote
          </button>
        </div>
        <div className="text-center text-gray-500 mb-6">
          No promotion data found. Have you set up promotion settings for your programs?
        </div>
        <div className="flex justify-center">
          <button className="bg-teal-600 text-white rounded-full px-6 py-2 shadow-sm">
            Manage Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionTab;
