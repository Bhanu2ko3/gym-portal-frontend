"use client";
import { useState } from "react";
import OverviewTab from "./subTabs/OverviewTab";
import CheckInsTab from "./subTabs/CheckInsTab";
import PromotionsTab from "./subTabs/PromotionsTab";
import MembersTab from "./subTabs/MembersTab2";
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
    <div className="w-full  flex flex-col rounded-lg py-2 px-6 ">
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

export default AttendanceTabBar;
