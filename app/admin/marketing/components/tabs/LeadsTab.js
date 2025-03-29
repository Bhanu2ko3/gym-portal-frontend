import React from "react";
import Button from "../../../components/Button";

const LeadsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4 ml-3 ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full h-100 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Button text="Create Lead" onClick={() => console.log("Clicked!")} />
          <div className="space-x-2">
            <button className="bg-white border border-gray-300 rounded-full px-6 py-2 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Print
            </button>
            <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Export
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="text-center text-gray-500">
          No leads have been added yet.
        </div>
      </div>
    </div>
  );
};

export default LeadsTab;
