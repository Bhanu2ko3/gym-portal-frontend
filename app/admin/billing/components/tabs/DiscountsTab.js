import React from "react";
import Button from "../../../components/Button";

const tab = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <p className="text-black font-medium text-xl px-2">Discounts</p>
        <div className="flex items-center justify-center h-70">
          <p className="text-gray-400">No discounts created yet.</p>
        </div>
        <Button
          text="New Membership Option"
          onClick={() => console.log("Clicked!")}
          className="block mx-auto mb-10"
        />
      </div>
    </div>
  );
};

export default tab;
