import React from "react";
import Button from "../../../components/Button";

const tab = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
        <p className="text-gray-700 font-semibold text-xl px-2">Payment Forms</p>
        <div className="flex items-center justify-center h-70">
          <p className="text-gray-400">
            Create hosted payment forms with your gym's branding
            <br/><br/>You need to connect a payment processor first.
          </p>
        </div>
        <Button
          text="Billing Settings"
          onClick={() => console.log("Clicked!")}
          className="block mx-auto mb-10"
        />
      </div>
    </div>
  );
};

export default tab;
