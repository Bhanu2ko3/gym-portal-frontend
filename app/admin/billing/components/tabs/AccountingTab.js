import React from "react";

const tab = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              All Payment
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              Produce Revenue
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              Member Balances
            </button>
          </div>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded">
            <div className="text-gray-600">Total Revenue</div>
            <div className="text-4xl font-bold">ZMK 635</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-gray-600">ZMK 635</div>
            <div className="text-gray-400">Base Amount</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-gray-600">ZMK 635</div>
            <div className="text-gray-400">Taxes & Fees</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-gray-600">ZMK 635</div>
            <div className="text-gray-400">Refunds</div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold">Revenue</div>
            <div className="text-gray-400">
              Month <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <img
            src="https://storage.googleapis.com/a1aa/image/U4sjJvPQoLKF_JihjdMQ6Otnya50E-TO_a9pEB5mMOM.jpg"
            alt="Bar chart showing revenue data"
            width="600"
            height="300"
          />
        </div>

        {/* Transactions */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-bold">Transactions</div>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Export
            </button>
          </div>
          <div className="text-gray-400">No transactions found.</div>
        </div>
      </div>
    </div>
  );
};

export default tab;
