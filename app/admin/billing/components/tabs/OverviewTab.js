import React from 'react';

const OverviewTab = () => {
  return (
    <div className=" p-6">
      <div className="max-w-7xl mx-auto">
        {/* Totals Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-gray-300 rounded-full">
              <span className="text-gray-500 text-lg">
                ZMK
                <br />
                0.00
              </span>
            </div>
            <span className="text-gray-500 mt-2">Scheduled</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-gray-300 rounded-full">
              <span className="text-gray-500 text-lg">
                ZMK
                <br />
                0.00
              </span>
            </div>
            <span className="text-gray-500 mt-2">Paid</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-gray-300 rounded-full">
              <span className="text-gray-500 text-lg">
                ZMK
                <br />
                0.00
              </span>
            </div>
            <span className="text-gray-500 mt-2">Overdue</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Revenue</span>
              <div className="flex space-x-2">
                <button className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  Day
                </button>
                <button className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  Week
                </button>
                <button className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  Month
                </button>
              </div>
            </div>
            <div className="h-32">
              <img
                alt="Graph showing revenue over time"
                className="w-full h-full object-cover"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/-iVnIxUgERAOOccGn0QTspj8AwTAaephYesOfadEvnw.jpg"
                width="400"
              />
            </div>
          </div>
        </div>

        {/* Recent Payments Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 text-lg">Recent Payments</span>
            <button className="bg-teal-600 text-white px-4 py-2 rounded">
              All Payments
            </button>
          </div>
          <div className="text-center text-gray-400">No payments found.</div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
