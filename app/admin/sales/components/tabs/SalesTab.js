import React from "react";
import Button from "../../../components/Button";

const SalesTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full h-100">
      <div className=" ">
        <div className="flex space-x-196">
          <Button text="Create Sales" onClick={() => console.log("Clicked!")} />
          <button className="bg-white border cursor-pointer border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300 py-2 px-6 rounded-full shadow">
            Export
          </button>
        </div>

        <div className="mt-30 flex-grow text-center text-gray-400">
          No Sales Created Yet.
        </div>
      </div>
    </div>
  );
};

export default SalesTab;
