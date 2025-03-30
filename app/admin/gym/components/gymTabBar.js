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
    <div className="w-full flex flex-col rounded-lg py-10 px-6 ">
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

export default GymTabBar;
