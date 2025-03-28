import React from "react";

const MultipleCheckInTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg flex w-3/4 h-64">
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 w-1/3 rounded-l-lg"></div>
        <div className="w-2/3 p-6">
          <p className="text-gray-700">Select members to check-in:</p>
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckInTab;
