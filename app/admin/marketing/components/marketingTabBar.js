"use client";
import { useState } from "react";
import DashboardTab from "./tabs/DashboardTab";
import ReferralsTab from "./tabs/ReferralsTab";
import LeadsTab from "./tabs/LeadsTab";
import MessagingTab from "./tabs/MessagingTab";
import AutomationTab from "./tabs/AutomationTab";
import SettingsTab from "./tabs/SettingsTab";

const MembersTable = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  const tabs = [
    "Dashboard",
    "Referrals",
    "Leads",
    "Messaging",
    "Automation",
    "Settings",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardTab />;
      case "Referrals":
        return <ReferralsTab />;
      case "Leads":
        return <LeadsTab />;
      case "Messaging":
        return <MessagingTab />;
      case "Automation":
        return <AutomationTab />;
      case "Settings":
        return <SettingsTab />;
      default:
        return <div>Select a valid tab</div>;
    }
  };

  return (
    <div className="w-full h-screen flex flex-col rounded-lg shadow-lg p-4">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-1 text-sm font-medium border-b-2 ${
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
