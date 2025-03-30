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
    <div className="w-full h-screen flex flex-col rounded-lg py-10 px-6 ">
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

export default SalesTabBar;
