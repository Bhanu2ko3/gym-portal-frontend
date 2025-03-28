import React, { useState } from 'react';

const MarketingSettings = () => {
  const [automationsActive, setAutomationsActive] = useState(false);
  const [referralRewards, setReferralRewards] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(false);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Marketing Settings</h2>
        <hr className="mb-6" />
        <div className="space-y-4">
          {/* Automations sending active */}
          <div className="flex items-center justify-between">
            <span>Automations sending active</span>
            <div className="flex items-center">
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  id="toggle1"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={automationsActive}
                  onChange={() => setAutomationsActive(!automationsActive)}
                />
                <label
                  htmlFor="toggle1"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <span className="ml-2 text-teal-600">{automationsActive ? 'Yes' : 'No'}</span>
            </div>
          </div>

          {/* Enable Referral Rewards */}
          <div className="flex items-center justify-between">
            <span>Enable Referral Rewards</span>
            <div className="flex items-center">
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  id="toggle2"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={referralRewards}
                  onChange={() => setReferralRewards(!referralRewards)}
                />
                <label
                  htmlFor="toggle2"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <span className="ml-2 text-teal-600">{referralRewards ? 'Yes' : 'No'}</span>
            </div>
          </div>

          {/* Reward Amount */}
          <div className="flex items-center justify-between">
            <span>Reward Amount</span>
            <div className="flex items-center">
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  id="toggle3"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={rewardAmount}
                  onChange={() => setRewardAmount(!rewardAmount)}
                />
                <label
                  htmlFor="toggle3"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <span className="ml-2 text-teal-600">{rewardAmount ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full">Save Settings</button>
        </div>
      </div>

      {/* Styles for custom toggle */}
      <style>
        {`
          .toggle-checkbox:checked {
            right: 0;
            border-color: #38b2ac;
          }
          .toggle-checkbox:checked + .toggle-label {
            background-color: #38b2ac;
          }

          .toggle-checkbox {
            transition: right 0.2s ease-in-out;
          }

          .toggle-label {
            transition: background-color 0.2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default MarketingSettings;
