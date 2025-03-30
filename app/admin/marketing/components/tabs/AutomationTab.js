import React from "react";
import Button from "../../../components/Button";

const AutomationsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-100 ">
        <h2 className="text-lg text-gray-700 font-semibold ml-3 mb-4">Automations</h2>
        <p className="text-gray-400 mb-6 mt-20 flex items-center justify-center">
          Automate your marketing and retention flows. Create sequences of
          messages,
        </p>
        <p className="text-gray-400 mb-6 flex items-center justify-center">
          tagging and updates for leads and members.
        </p>
        <Button
          text="Create Automation"
          className={"block mx-auto mt-20"}
          onClick={() => console.log("Clicked!")}
        />
      </div>
    </div>
  );
};

export default AutomationsTab;
