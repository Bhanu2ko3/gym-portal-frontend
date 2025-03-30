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
    <div className="w-full  flex flex-col rounded-lg py-10 px-6 ">
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

export default FrontdeskTabBar;
