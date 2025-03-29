import React, { useState } from "react";
import Button from "../../../components/Button";

const settingsList = [
  { name: "Show Product Images", key: "showProductImages", default: false },
  { name: "Open Cart Popup", key: "openCartPopup", default: false },
  { name: "Online Shop Active", key: "onlineShopActive", default: false },
  { name: "Email Notification on Sale", key: "emailNotificationOnSale", default: false },
  { name: "Include Phone Field on Checkout", key: "includePhoneField", default: false },
];

const SalesSettings = () => {
  const [settings, setSettings] = useState(
    settingsList.reduce((acc, setting) => ({ ...acc, [setting.key]: setting.default }), {})
  );

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-xl font-medium mb-4 border-b-3 pb-2 border-gray-100">
        Sales Settings
      </h2>
      <div className="space-y-4 ml-10">
        {settingsList.map(({ name, key }) => (
          <div key={key} className="flex justify-between items-center">
            <span>{name}</span>
            <div className="flex items-center mr-10">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings[key]}
                  onChange={() => toggleSetting(key)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--primary-color)]"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
              </label>
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <Button text="Save Settings" onClick={() => console.log("Settings Saved!")} />
        </div>
      </div>
    </div>
  );
};

export default SalesSettings;
