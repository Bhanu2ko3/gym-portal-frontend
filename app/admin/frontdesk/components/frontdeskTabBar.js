"use client";
import { useState } from "react";
import CheckInTab from "./tabs/CheckInTab";
import ProgramsTab from "./tabs/ProgramsTab";

const FrontdeskTabBar = () => {
  const [activeTab, setActiveTab] = useState("Check-In");

  const tabs = ["Check-In", "Programs"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Check-In":
        return <CheckInTab />;
      case "Programs":
        return <ProgramsTab />;
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

export default FrontdeskTabBar;
