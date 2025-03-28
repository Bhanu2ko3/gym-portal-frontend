"use client";
import { useState } from "react";

const SettingTabBar = () => {
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
        return <BookingTab />;
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

export default SettingTabBar;
