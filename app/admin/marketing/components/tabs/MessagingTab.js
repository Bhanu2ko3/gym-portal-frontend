import React from "react";

const MessageTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
        <p className="text-gray-600 mb-4">
          Send an Email message to gym members about upcoming events and competitions, schedule changes, and other relevant information.
        </p>
        <p className="text-gray-600 mb-6">
          To prevent abuse, Email messaging is only available to paid accounts.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
          Upgrade Your Plan Here
        </button>
      </div>
    </div>
  );
};

export default MessageTab;
