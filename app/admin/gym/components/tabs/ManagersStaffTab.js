import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "../../../components/Button";

const ManagersStaffTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const staffMembers = [
    {
      id: "1571",
      name: "Demo Customer",
      role: "Owner",
      permissions: "All",
      added: "Dec 29, 2024",
    },
    {
      id: "1572",
      name: "Cosam Malaika",
      role: "Owner",
      permissions: "All",
      added: "Jan 15, 2025", // Fixed invalid date
    },
    {
      id: "1573",
      name: "Bhanuka",
      role: "Owner",
      permissions: "All",
      added: "Jan 15, 2025", // Fixed invalid date
    },
  ];

  // Ensure filtered members are updated when searchQuery changes
  const filteredMembers = staffMembers.filter((staff) =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen">
      {" "}
      <div className="bg-white rounded-lg shadow-md p-6 h-100">
        {" "}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg text-gray-700 font-medium ml-3">Gym Staff</h1>
          <div className="flex items-center space-x-4">
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
            <Button
              text="Add Staff Member"
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </div>
        <table className="w-full text-left ">
          <thead>
            <tr className="border-b-3 border-[var(--quaternary-color)] font-medium text-gray-500">
              <th className="py-2 px-4">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Permissions</th>
              <th className="py-2 px-4">Added</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((staff) => (
              <tr
                key={staff.id}
                className="border-b border-gray-200 hover:bg-gray-100 transform duration-300"
              >
                <td className="py-2 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4">{staff.id}</td>
                <td className="py-2 px-4">{staff.name}</td>
                <td className="py-2 px-4">{staff.role}</td>
                <td className="py-2 px-4">{staff.permissions}</td>
                <td className="py-2 px-4">{staff.added}</td>
                <td className="py-2 px-4">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagersStaffTab;
