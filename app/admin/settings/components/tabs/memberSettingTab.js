import React, { useState } from 'react';

const MemberSettings = () => {
  const [settings, setSettings] = useState({
    enableMemberPortal: true,
    allowProfileEdit: true,
    visitorsAccessPortal: true,
    showPayments: true,
    showMembershipCards: false,
    allowPaymentMethodRemove: false,
    allowRankUpdate: false,
    showPromotionCriteria: true,
    allowRenewMembership: true,
    allowAddMembership: true,
    allowCancelMembership: true,
    allowManualPayments: false,
    allowNewPaymentMethod: false,
    allowPaymentBeforeDate: false,
    customizeNameOnInvoices: true,
    allowFamilySignUp: true,
    showBookClassButton: true
  });

  const handleToggle = (setting) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [setting]: !prevSettings[setting]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Members Settings</h1>
      <div className="border-t border-gray-300 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {Object.keys(settings).slice(0, 10).map((setting, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <span>{setting.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
              <div className="flex items-center">
                <span className="mr-2">No</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings[setting]}
                    onChange={() => handleToggle(setting)}
                  />
                  <span className="slider round"></span>
                </label>
                <span className="ml-2">Yes</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          {Object.keys(settings).slice(10).map((setting, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <span>{setting.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
              <div className="flex items-center">
                <span className="mr-2">No</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={settings[setting]}
                    onChange={() => handleToggle(setting)}
                  />
                  <span className="slider round"></span>
                </label>
                <span className="ml-2">Yes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg">Save Settings</button>
      </div>

      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 34px;
            height: 20px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 12px;
            width: 12px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
          }

          input:checked + .slider {
            background-color: #007b8f;
          }

          input:checked + .slider:before {
            transform: translateX(14px);
          }

          .slider.round {
            border-radius: 34px;
          }

          .slider.round:before {
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default MemberSettings;
