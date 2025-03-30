import React from "react";

const MultipleCheckInTab = () => {
  return (
    <div className="w-full ">
      <div className="bg-white h-100 rounded-lg shadow-md flex w-3/4 ">
        <div className="bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] w-1/3 rounded-l-lg"></div>
        <div className="w-2/3 p-6">
          <p className="text-gray-700">Select members to check-in:</p>
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckInTab;
