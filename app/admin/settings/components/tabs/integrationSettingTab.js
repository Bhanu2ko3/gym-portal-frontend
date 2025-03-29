import React, { useState } from "react";
import Button from "../../../components/Button";

const IntegrationsSettings = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("API URL:", apiUrl);
    console.log("API Key:", apiKey);
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full p-6  rounded-lg ">
        <h2 className="text-lg font-medium mb-1 ml-5">Integrations</h2>
        <p className="text-gray-500 mb-6 ml-5">
          Connect your Gymdesk account to available integrations.
        </p>
        <div className=" p-6 rounded-lg bg-white shadow-md">
          <h3 className="text-md font-bold mb-4  border-b-3 border-gray-200 pb-4">
            General Settings
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="api-url" className="block text-gray-700">
                  API URL
                </label>
                <input
                  type="text"
                  id="api-url"
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  placeholder="Https://"
                  className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="api-key" className="block text-gray-700">
                  API Key
                </label>
                <input
                  type="text"
                  id="api-key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex justify-center mt-15 mb-10">
              <Button
                text="Save Settings"
                onClick={() => console.log("Clicked!")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSettings;
