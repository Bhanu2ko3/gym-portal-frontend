"use client";
import { useState } from "react";
import ManagersStaffTab from "./tabs/ManagersStaffTab";
import PayrollTab from "./tabs/PayrollTab";
import ScheduleTab from "./tabs/ScheduleTab";
import BookingTabBar from "./tabs/BookingTabBar";
import ProgramsTab from "./tabs/ProgramsTab";

const GymTabBar = () => {
  const [activeTab, setActiveTab] = useState("Managers & Staff");

  const tabs = ["Managers & Staff", "Payroll", "Schedule", "Booking", "Programs"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Managers & Staff":
        return <ManagersStaffTab />;
      case "Payroll":
        return <PayrollTab />;
      case "Schedule":
        return <ScheduleTab />;
      case "Booking":
        return <BookingTabBar />;
      case "Programs":
        return <ProgramsTab />;
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

export default GymTabBar;
