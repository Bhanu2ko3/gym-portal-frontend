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
