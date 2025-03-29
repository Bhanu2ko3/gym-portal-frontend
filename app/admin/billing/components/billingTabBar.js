"use client";
import { useState } from "react";
import OverviewTab from "./tabs/OverviewTab";
import PaymentsTab from "./tabs/PaymentsTab";
import RecurringTab from "./tabs/RecurringTab";
import DiscountsTab from "./tabs/DiscountsTab";
import PaymentFormsTab from "./tabs/PaymentFormsTab";
import AccountingTab from "./tabs/AccountingTab";
import GrowthTab from "./tabs/GrowthTab";
import SettingsTab from "./tabs/SettingsTab";

const MembersTable = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Payments",
    "Recurring",
    "Discounts",
    "Payment Forms",
    "Accounting",
    "Growth",
    "Settings",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewTab />;
      case "Payments":
        return <PaymentsTab />;
      case "Recurring":
        return <RecurringTab />;
      case "Discounts":
        return <DiscountsTab />;
      case "Payment Forms":
        return <PaymentFormsTab />;
      case "Accounting":
        return <AccountingTab />;
      case "Growth":
        return <GrowthTab />;
      case "Settings":
        return <SettingsTab />;
      default:
        return <div>Select a valid tab</div>;
    }
  };

  return (
    <div className="w-full h-screen  flex flex-col rounded-lg shadow-lg p-4 ">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-3 text-sm font-medium border-b-3   ${
                activeTab === tab
                  ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-auto">{renderTabContent()}</div>
    </div>
  );
};

export default MembersTable;
