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
    <div className="w-full h-screen flex flex-col rounded-lg py-10 px-6 ">
      {/* Tab Navigation */}
      <div className=" ml-4 ">
        <nav className="flex  space-x-8 border-b border-[var(--quaternary-color)] mr-68 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2  text-sm font-semibold border-b-3  ${
                activeTab === tab
                  ? "text-[var(--primary-color)] px-2 font-bold"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-5">{renderTabContent()}</div>
    </div>
  );
};

export default MembersTable;
