import React, { useState } from 'react';

const ManagersStaffTab = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const staffMembers = [
    {
      id: '1571',
      name: 'Demo Customer',
      role: 'Owner',
      permissions: 'All',
      added: 'Dec 29, 2024',
    },
    {
      id: '1572',
      name: 'Cosam Malaika',
      role: 'Owner',
      permissions: 'All',
      added: 'Salama Park',
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Gym Staff</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-full">
              Add Staff Member
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 flex items-center">
                Name
                <i className="fas fa-filter ml-2 text-gray-400"></i>
              </th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Permissions</th>
              <th className="py-2 px-4">Learn more</th>
              <th className="py-2 px-4">Added</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers
              .filter((staff) =>
                staff.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((staff) => (
                <tr key={staff.id} className="border-b hover:bg-gray-50">
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
