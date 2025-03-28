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
  const [selectedRows, setSelectedRows] = useState([]);

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

  const toggleSelectAll = () => {
    if (selectedRows.length === members.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(members.map((member) => member.id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <OverviewTab
            selectedRows={selectedRows}
            toggleSelectAll={toggleSelectAll}
            toggleSelectRow={toggleSelectRow}
          />
        );
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
    <div className="w-full h-full bg-gray-50 rounded-lg shadow-lg p-4">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
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
      {renderTabContent()}
    </div>
  );
};

export default MembersTable;
