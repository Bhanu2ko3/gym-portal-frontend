import React from "react";
import Button from "../../../../components/Button";

const PromotionTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
        <div className="flex justify-end space-x-4 mb-6">
          <button className="bg-white text-gray-700 border  border-gray-300 cursor-pointer rounded-full px-6 py-2 shadow-sm  hover:bg-gray-100 transition duration-300">
            Print
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 cursor-pointer rounded-full px-4 py-2 shadow-sm  hover:bg-gray-100 transition duration-300">
            Export
          </button>
          <Button text="Promote" onClick={() => console.log("Clicked!")} />
        </div>
        <div className="text-center text-gray-400 mb-6 mt-30">
          No promotion data found. Have you set up promotion settings for your
          programs?
        </div>
        <div className="flex justify-center mt-20 mb-10">
          <Button
            text="Manage Programs"
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionTab;
