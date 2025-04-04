"use client";
import { Search, MoreHorizontal, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const MembersTab = ({
  members = [],
  selectedRows = [],
  toggleSelectAll = () => {}, // Default empty function to prevent errors
  toggleSelectRow = () => {},
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!Array.isArray(members)) {
      console.error("Invalid members prop, expected an array");
    }
  }, [members]);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden h-100">
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-700 ml-3">Members</h2>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-2xl w-64 focus:outline-none focus:ring-1 focus:ring-[var(--quaternary-color)]"
          />
          <div className="absolute right-3 top-2.5">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="border-b-3 border-[var(--quaternary-color)] ">
          <tr>
            <th scope="col" className="px-6 py-3 text-left">
              <input
                type="checkbox"
                className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                checked={selectedRows.length === members.length}
                onChange={toggleSelectAll} // Ensure this function is defined
              />
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              <div className="flex items-center">
                Name
                <ChevronDown className="ml-2 mt-1 h-4 w-4" />
              </div>
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
              Residence
            </th>
            <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider">
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
              <tr key={member.id} className="hover:bg-gray-100 transition duration-300 text-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                    checked={selectedRows.includes(member.id)}
                    onChange={() => toggleSelectRow(member.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {member.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-">
                    {member.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {member.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--primary-color)]">
                  {member.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {member.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {member.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {member.residence}
                </td>
                <td className="px-6 py-4 whitespace-nowrap- text-sm ">
                  <button className="text-[var(--primary-color)] hover:text-[var(--primary-color)] cursor-pointer">
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
