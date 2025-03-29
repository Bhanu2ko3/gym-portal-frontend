import React from "react";
import Button from "../../../components/Button";

const MessageTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4 ml-3">
      <div className="bg-white rounded-lg shadow-md  p-8 w-full text-center h-50">
        <p className="text-gray-600 mb-4">
          Send an Email message to gym members about upcoming events and competitions, schedule changes, and other relevant information.
        </p>
        <p className="text-gray-600 mb-6">
          To prevent abuse, Email messaging is only available to paid accounts.
        </p>
        <Button text="Upgrade Your Plan Here" className="block mx-auto" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
};

export default MessageTab;
