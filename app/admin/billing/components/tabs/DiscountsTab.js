
import React from 'react';

const tab = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <p className="text-black font-bold text-xl px-2">Discounts</p>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">No discounts created yet.</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 mx-auto block rounded-full px-6 mb-4">
          New Membership Option
        </button>
      </div>
    </div>
  );
};

export default tab;
