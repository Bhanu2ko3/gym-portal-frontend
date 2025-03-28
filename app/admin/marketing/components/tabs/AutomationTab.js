import React from "react";

const AutomationsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Automations</h2>
        <p className="text-gray-500 mb-6">
          Automate your marketing and retention flows. Create sequences of
          messages, tagging and updates for leads and members.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
          Create Automation
        </button>
      </div>
    </div>
  );
};

export default AutomationsTab;
