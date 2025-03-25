"use client";
import { useState } from 'react';
import { Search, MoreHorizontal, ChevronDown } from 'lucide-react';

const MembersTable = () => {
  const [activeTab, setActiveTab] = useState('Members');
  const [selectedRows, setSelectedRows] = useState([]);
  
  const tabs = [
    'Overview', 'Payments', 'Recurring', 'Discounts', 
    'Payment Forms', 'Accounting', 'Growth', 'Settings'
  ];
  
  
  
  const toggleSelectAll = () => {
    if (selectedRows.length === members.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(members.map(member => member.id));
    }
  };
  
  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === tab 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      
     
    </div>
  );
};

export default MembersTable;