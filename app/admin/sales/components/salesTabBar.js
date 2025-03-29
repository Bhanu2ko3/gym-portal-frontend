"use client";
import { useState } from "react";
import CreateSaleTab from "./tabs/CreateSaleTab";
import SalesTab from "./tabs/SalesTab";
import ProductsTab from "./tabs/ProductsTab";
import ReportTab from "./tabs/ReportTab";
import SettingsTab from "./tabs/SettingsTab";

const SalesTabBar = () => {
  const [activeTab, setActiveTab] = useState("Create Sale");

  const tabs = ["Create Sale", "Sales", "Products", "Report", "Settings"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Create Sale":
        return <CreateSaleTab />;
      case "Sales":
        return <SalesTab />;
      case "Products":
        return <ProductsTab />;
      case "Report":
        return <ReportTab />;
      case "Settings":
        return <SettingsTab />;
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

export default SalesTabBar;
