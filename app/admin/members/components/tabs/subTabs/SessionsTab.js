import React from "react";

const SessionsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full ">
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-white border text-gray-700 cursor-pointer border-gray-300 rounded-full px-6 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
            Print
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 cursor-pointer rounded-full px-4 py-2 shadow-sm hover:bg-gray-100 transition duration-300">
            Export
          </button>
        </div>
        <div className="flex items-center justify-center h-70">
          <p className="text-gray-400">
            No sessions found. Change the search parameters and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionsTab;
