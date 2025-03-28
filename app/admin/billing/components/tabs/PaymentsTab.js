
import React from 'react';

const PaymentsTab = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 shadow-sm hover:bg-gray-50">Print</button>
          <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 shadow-sm hover:bg-gray-50">Export</button>
        </div>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">No payments found.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTab;
