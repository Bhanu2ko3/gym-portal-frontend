import React, { useState } from 'react';

const IntegrationsSettings = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('API URL:', apiUrl);
    console.log('API Key:', apiKey);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-1">Integrations</h2>
        <p className="text-gray-500 mb-6">Connect your Gymdesk account to available integrations.</p>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-md font-bold mb-4">General Settings</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="api-url" className="block text-gray-700">API URL</label>
                <input
                  type="text"
                  id="api-url"
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  placeholder="Https://"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="api-key" className="block text-gray-700">API Key</label>
                <input
                  type="text"
                  id="api-key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSettings;
