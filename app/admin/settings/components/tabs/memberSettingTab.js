import React, { useState } from "react";
import Button from "../../../components/Button";

const settingsList = [
  { name: "Enable Member Portal", key: "enableMemberPortal", default: true },
  { name: "Allow Profile Edit", key: "allowProfileEdit", default: true },
  {
    name: "Visitors Access Portal",
    key: "visitorsAccessPortal",
    default: true,
  },
  { name: "Show Payments", key: "showPayments", default: true },
  { name: "Show Membership Cards", key: "showMembershipCards", default: false },
  {
    name: "Allow Payment Method Remove",
    key: "allowPaymentMethodRemove",
    default: false,
  },
  { name: "Allow Rank Update", key: "allowRankUpdate", default: false },
  {
    name: "Show Promotion Criteria",
    key: "showPromotionCriteria",
    default: true,
  },
  {
    name: "Allow Renew Membership",
    key: "allowRenewMembership",
    default: true,
  },
  { name: "Allow Add Membership", key: "allowAddMembership", default: true },
  {
    name: "Allow Cancel Membership",
    key: "allowCancelMembership",
    default: true,
  },
  { name: "Allow Manual Payments", key: "allowManualPayments", default: false },
  {
    name: "Allow New Payment Method",
    key: "allowNewPaymentMethod",
    default: false,
  },
  {
    name: "Allow Payment Before Date",
    key: "allowPaymentBeforeDate",
    default: false,
  },
  {
    name: "Customize Name on Invoices",
    key: "customizeNameOnInvoices",
    default: true,
  },
  { name: "Allow Family Sign-Up", key: "allowFamilySignUp", default: true },
  { name: "Show Book Class Button", key: "showBookClassButton", default: true },
];

const MemberSettings = () => {
  const [state, setState] = useState(
    settingsList.reduce(
      (acc, setting) => ({ ...acc, [setting.key]: setting.default }),
      {}
    )
  );

  const toggleSetting = (key) =>
    setState((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-xl font-medium mb-4 border-b-3 pb-2 border-gray-100">
        Member Settings
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
                  checked={state[key]}
                  onChange={() => toggleSetting(key)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--primary-color)]"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
              </label>
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <Button
            text="Save Settings"
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberSettings;
