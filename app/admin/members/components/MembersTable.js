"use client";
import { useState, useEffect } from 'react';
import { Search, MoreHorizontal, ChevronDown, ChevronLeft, ChevronRight, Filter, Download, UserPlus } from 'lucide-react';

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
      
      {/* Page Header */}
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        
        <div className="flex items-center space-x-4">
          {/* Action buttons */}
          <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex items-center px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Member
          </button>
          
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-2.5">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Members Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                  checked={selectedRows.length === currentMembers.length && currentMembers.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Name
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Residence
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                    checked={selectedRows.includes(member.id)}
                    onChange={() => toggleSelectRow(member.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--primary-color)]">
                  {member.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.residence}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-[var(--primary-color)] hover:text-[var(--primary-color)]">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="font-medium">
                    {indexOfLastItem > filteredMembers.length ? filteredMembers.length : indexOfLastItem}
                  </span>{' '}
                  of <span className="font-medium">{filteredMembers.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {[...Array(totalPages).keys()].map((page) => (
                    <button
                      key={page + 1}
                      onClick={() => paginate(page + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                        currentPage === page + 1
                          ? 'text-[var(--primary-color)] bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    disabled={currentPage === totalPages}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedMembersTable;