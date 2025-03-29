import React, { useState } from "react";
import Button from "../../../components/Button";

const settingsList = [
  { name: "Send Email Invoices", key: "sendEmailInvoices", default: true },
  { name: "Receipt Emails", key: "receiptEmails", default: true },
  { name: "Failed/Overdue Payments Emails", key: "failedOverduePaymentsEmails", default: true },
  { name: "Send Scheduled Payment Reminders", key: "sendScheduledReminders", default: true },
  { name: "Notify Client When Payment is Disputed", key: "notifyPaymentDisputed", default: false },
  { name: "Allow Bookings After Session Start", key: "allowBookingsAfterStart", default: false },
  { name: "Notify Manager When Payment Method Removed", key: "notifyManagerPaymentMethodRemoval", default: false },
  { name: "Send Payment Receipts via SMS", key: "sendPaymentReceiptsSMS", default: true },
  { name: "Send Failed/Overdue Payment Notices via SMS", key: "sendFailedOverduePaymentSMS", default: true },
];

const BillingSettings = () => {
  const [settings, setSettings] = useState(
    settingsList.reduce((acc, setting) => ({ ...acc, [setting.key]: setting.default }), {})
  );

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-xl font-medium mb-4 border-b-3 pb-2 border-gray-100">
        Billing Settings
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
      </div>
      <div className="mt-10 flex justify-center">
        <Button text="Save Settings" onClick={() => console.log("Billing settings saved!")} />
      </div>
    </div>
  );
};

export default BillingSettings;
