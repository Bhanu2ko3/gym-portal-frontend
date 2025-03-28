"use client";
import { useState } from "react";
import OverviewTab from "./subTabs/OverviewTab";
import CheckInsTab from "./subTabs/CheckInsTab";
import PromotionsTab from "./subTabs/PromotionsTab";
import MembersTab from "./MembersTab";
import SessionsTab from "./subTabs/SessionsTab";
import MultipleCheckInTab from "./subTabs/MultipleCheckInTab";
import SettingsTab from "./subTabs/SettingsTab";

const AttendanceTabBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Check-ins",
    "Promotions",
    "Members",
    "Sessions",
    "Multiple Check-in",
    "Settings",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewTab />;
      case "Check-ins":
        return <CheckInsTab />;
      case "Promotions":
        return <PromotionsTab />;
      case "Members":
        return <MembersTab />;
      case "Sessions":
        return <SessionsTab />;
      case "Multiple Check-in":
        return <MultipleCheckInTab />;
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

export default AttendanceTabBar;
