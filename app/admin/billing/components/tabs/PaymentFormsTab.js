
import React from 'react';

const tab = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <p className="text-black font-bold text-xl px-2">Payment Forms</p>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">Create hosted payment forms with your gym's branding <br/><br/> 
          You need to connect a payment processor first.</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 mx-auto block rounded-full px-6 mb-4">
          Billing Settings
        </button>
      </div>
    </div>
  );
};

export default tab;
