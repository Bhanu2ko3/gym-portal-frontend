"use client";
import { useState, useEffect } from "react";
import MembersTab from "./tabs/MembersTab";
import CheckInTab from "./tabs/CheckInTab";
import AttendanceTab from "./tabs/AttendanceTab";
import MembershipTab from "./tabs/MembershipTab";
import RostersTab from "./tabs/RostersTab";
import DocumentsTab from "./tabs/DocumentsTab";
import ContentTab from "./tabs/ContentTab";
import GrowthTab from "./tabs/GrowthTab";
import SettingsTab from "./tabs/SettingsTab";

const EnhancedMembersTable = () => {
  const [activeTab, setActiveTab] = useState("Members");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const tabs = [
    "Members",
    "Check-in",
    "Attendance",
    "Membership",
    "Rosters",
    "Documents",
    "Content",
    "Growth",
    "Settings",
  ];

  const members = [
    {
      id: "1571",
      name: "Demo Customer",
      contact: "+77777777777",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
    {
      id: "1572",
      name: "Cosam Malaika",
      contact: "+111111111111111",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
    {
      id: "1573",
      name: "Cosam Malaika",
      contact: "+111111111111111",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
  ];

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const toggleSelectAll = () => {
    if (selectedRows.length === members.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(members.map((member) => member.id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Members":
        return (
          <MembersTab
            members={members}
            selectedRows={selectedRows}
            toggleSelectAll={toggleSelectAll}
            toggleSelectRow={toggleSelectRow}
          />
        );
      case "Check-in":
        return <CheckInTab />;
      case "Attendance":
        return <AttendanceTab />;
      case "Membership":
        return <MembershipTab />;
      case "Rosters":
        return <RostersTab />;
      case "Documents":
        return <DocumentsTab />;
      case "Content":
        return <ContentTab />;
      case "Growth":
        return <GrowthTab />;
      case "Settings":
        return <SettingsTab />;
      default:
        return <div>Select a tab</div>;
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

export default EnhancedMembersTable;
