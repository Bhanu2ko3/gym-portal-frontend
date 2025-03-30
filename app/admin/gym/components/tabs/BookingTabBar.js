"use client";
import { useState } from "react";
import UpcomingTab from "./subTabs/UpcomingTab";
import PreviousTab from "./subTabs/PreviousTab";
import BookSessionTab from "./subTabs/BookSessionTab";
import SettingTab from "./subTabs/SettingTab";

const BookingTabBar = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Previous", "Book Session", "Settings"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Upcoming":
        return <UpcomingTab />;
      case "Previous":
        return <PreviousTab />;
      case "Book Session":
        return <BookSessionTab />;
      case "Settings":
        return <SettingTab />;
      default:
        return <div>Select a valid tab</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-[var(--tertiary-color)] flex flex-col rounded-lg py-2 px-6 ">
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
      <div className="mt-5 ">{renderTabContent()}</div>
    </div>
  );
};

export default BookingTabBar;
