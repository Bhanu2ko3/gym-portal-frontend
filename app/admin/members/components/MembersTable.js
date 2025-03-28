"use client";
import { useState, useEffect } from 'react';

const EnhancedMembersTable = () => {
  const [activeTab, setActiveTab] = useState('Members');
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const tabs = [
    'Members', 'Check-in', 'Attendance', 'Membership', 
    'Rosters', 'Documents', 'Content', 'Growth', 'Settings'
  ];
  
  // Sample data
  const allMembers = [
    { id: '1571', name: 'Demo Customer', contact: '+77777777777', email: 'Test@Gmail.Com', age: '26', gender: 'Male', residence: 'Salama Park' },
    { id: '1571', name: 'Cosam Malaika', contact: '+111111111111111', email: 'Test@Gmail.Com', age: '26', gender: 'Male', residence: 'Salama Park' },
    { id: '1571', name: 'Cosam Malaika', contact: '+111111111111111', email: 'Test@Gmail.Com', age: '26', gender: 'Male', residence: 'Salama Park' }
  ];
  
  // Filter members based on search query
  const filteredMembers = allMembers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.contact.includes(searchQuery)
  );
  
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const toggleSelectAll = () => {
    if (selectedRows.length === currentMembers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentMembers.map(member => member.id));
    }
  };
  
  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
                  ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
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

export default EnhancedMembersTable;