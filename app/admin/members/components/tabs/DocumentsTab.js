import React from 'react'
import React, { useState } from "react";
import { Search } from "lucide-react"; // LucideReact icons
import { MoreHorizontal } from "lucide-react";


const DocumentsTab = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const documents = [
    { id: 1, name: "Document 1", members: 0, signatures: 0, lastUpdated: "2/12/2020 1:25 PM" },
    { id: 2, name: "Document 2", members: 0, signatures: 0, lastUpdated: "2/12/2020 1:25 PM" },
    { id: 3, name: "Document 3", members: 0, signatures: 0, lastUpdated: "2/12/2020 1:25 PM" }
  ];

  // Search filter
  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-blue-600 text-lg font-semibold">Document Templates</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              New Document Template
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-full py-2 px-4 pl-10 w-64"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left text-gray-600">Document</th>
                <th className="py-2 px-4 text-left text-gray-600">Members</th>
                <th className="py-2 px-4 text-left text-gray-600">Signatures</th>
                <th className="py-2 px-4 text-left text-gray-600">Last Updated</th>
                <th className="py-2 px-4 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4 text-gray-800">{doc.name}</td>
                  <td className="py-2 px-4 text-gray-800">{doc.members}</td>
                  <td className="py-2 px-4 text-gray-800">{doc.signatures}</td>
                  <td className="py-2 px-4 text-gray-800">{doc.lastUpdated}</td>
                  <td className="py-2 px-4 text-gray-800">
                    <MoreHorizontal className="h-5 w-5 text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* No results found */}
          {filteredDocuments.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No matching documents found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DocumentsTab