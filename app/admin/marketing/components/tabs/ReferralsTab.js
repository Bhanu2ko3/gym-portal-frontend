import React from "react";

const ReferralsTab = () => {
  return (
    
    <div className=" w-full ">
      <div className="bg-white rounded-lg shadow-md p-6 h-100">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <h2 className="text-lg text-gray-700 font-semibold ml-3">Referrals</h2>
          <div className="space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-6 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
              Print
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
              Export
            </button>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-400 text-center mt-30">No referrals have been made yet.</p>
      </div>
    </div>
  );
};

export default ReferralsTab;
