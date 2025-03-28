"use client";
import { Search, MoreHorizontal, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const MembersTab = ({
  members = [], // Default to empty array if not passed
  selectedRows = [],
  toggleSelectAll,
  toggleSelectRow,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Ensure filtered members are updated when searchQuery or members change
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Handle case when members might be initially empty or undefined
    if (!Array.isArray(members)) {
      console.error("Invalid members prop, expected an array");
    }
  }, [members]);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-700">Members</h2>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-2xl w-64 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <div className="absolute right-3 top-2.5">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="border-b-2 border-[var(--primary-color)]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left">
              <input
                type="checkbox"
                className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                checked={selectedRows.length === members.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <div className="flex items-center">
                Name
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Contact
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Age
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Gender
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Residence
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredMembers.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center py-4 text-gray-500">
                No members found.
              </td>
            </tr>
          ) : (
            filteredMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
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
                  <div className="text-sm font-medium text-gray-900">
                    {member.name}
                  </div>
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MembersTab;
