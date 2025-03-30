"use client";
import { useState } from "react";
import GymTab from "./tabs/gymSettingTab";
import BookingTab from "./tabs/bookingSettingTab";
import MemberTab from "./tabs/memberSettingTab";
import AttendanceTab from "./tabs/attendanceSettingTab";
import MarketingTab from "./tabs/marketingSettingTab";
import BillingTab from "./tabs/billingSettingTab";
import SaleTab from "./tabs/saleSettingTab";
import EmailTab from "./tabs/emailSettingTab";
import IntegrationTab from "./tabs/integrationSettingTab";

const SideTabBar = () => {
  const [activeTab, setActiveTab] = useState("GYM");

  const tabs = [
    "GYM",
    "Booking",
    "Member",
    "Attendance",
    "Marketing",
    "Billing",
    "Sale",
    "Email",
    "Integration",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "GYM":
        return <GymTab />;
      case "Booking":
        return <BookingTab />;
      case "Member":
        return <MemberTab />;
      case "Attendance":
        return <AttendanceTab />;
      case "Marketing":
        return <MarketingTab />;
      case "Billing":
        return <BillingTab />;
      case "Sale":
        return <SaleTab />;
      case "Email":
        return <EmailTab />;
      case "Integration":
        return <IntegrationTab />;
      default:
        return <div>Select a valid tab</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-tr-2xl ">
        <ul className="space-y-4 p-4">
          {tabs.map((tab) => (
            <li key={tab} className="flex justify-between items-center ">
              <button
                className={`flex justify-between items-center w-full cursor-pointer hover:bg-[var(--secondary-color)] p-2 rounded-lg ${
                  activeTab === tab ? "bg-[var(--secondary-color)]" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab}</span>
                <i
                  className={`fas fa-chevron-down ${
                    activeTab === tab ? "transform rotate-180" : ""
                  }`}
                ></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="flex-1  px-5 ">
        <div className="">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default SideTabBar;
