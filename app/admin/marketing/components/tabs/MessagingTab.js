import React from "react";
import Button from "../../../components/Button";

const MessageTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-md  p-8 w-full text-center h-100">
        <p className="text-gray-400 mb-4">
          Send an Email message to gym members about upcoming events and competitions, schedule changes, and other relevant information.
        </p>
        <p className="text-gray-400 mb-6">
          To prevent abuse, Email messaging is only available to paid accounts.
        </p>
        <Button text="Upgrade Your Plan Here" className="block mx-auto mt-20" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
};

export default MessageTab;
