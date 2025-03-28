import React from 'react';

const ReportTab = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Date Range */}
        <div className="flex justify-end mb-4">
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        {/* Revenue, Cost, and Profit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Total Revenue</h2>
            <p className="text-3xl text-blue-700">ZMK 635</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Cost-of-goods</h2>
            <p className="text-3xl text-gray-700">ZMK 635</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Net Profit</h2>
            <p className="text-3xl text-gray-700">ZMK 635</p>
          </div>
        </div>

        {/* Profit Chart and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 mb-4">Profit</h2>
            <img
              alt="Graph showing profit over time"
              className="w-full"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/2JNS00X2vyJVVs2ghAcUGGdSjkF_brn1hKpfWB-JdPk.jpg"
              width="600"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">ZMK 635</p>
              <p className="text-gray-600">Item Value</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">ZMK 635</p>
              <p className="text-gray-600">Taxes &amp; Fees</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">ZMK 635</p>
              <p className="text-gray-600">Discounts</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">ZMK 635</p>
              <p className="text-gray-600">Refunds</p>
            </div>
          </div>
        </div>

        {/* Product Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-600">Product Revenue</h2>
            <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm">
              Export
            </button>
          </div>
          <p className="text-gray-400">No transactions found.</p>
        </div>
      </div>
    </div>
  );
};

export default ReportTab;
