import React from "react";
import Button from "../../../components/Button";


const SalesTab = () => {
  return (
    <div className="bg-gray-100  mt-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full  flex ">
        {/* Create Sales Button */}
        <Button text="Create Sales" onClick={() => console.log("Clicked!")} />


        {/* Sales Status Text */}
        <div className="flex-grow text-center text-gray-400">
          No Sales Created Yet.
        </div>

        {/* Export Button */}
        <button className="bg-white border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-full shadow">
          Export
        </button>
      </div>
    </div>
  );
};

export default SalesTab;
