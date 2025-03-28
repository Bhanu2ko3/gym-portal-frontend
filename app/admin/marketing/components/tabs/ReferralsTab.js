import React from "react";

const ReferralsTab = () => {
  return (
    <div className="bg-gray-100 flex w-full ">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Referrals</h2>
          <div className="space-x-2">
            <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Print
            </button>
            <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Export
            </button>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-400 text-center">No referrals have been made yet.</p>
      </div>
    </div>
  );
};

export default ReferralsTab;
