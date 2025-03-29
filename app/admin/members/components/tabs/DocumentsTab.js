import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Button from "../../../components/Button";

const DocumentsTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[var(--primary-color)] text-lg font-semibold">
          Document Templates
        </h1>
        <Button
          text="New Document Template"
          onClick={() => console.log("Clicked!")}
        />
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
      <table className="min-w-full bg-white border-b border-gray-200">
        <thead>
          <tr className="w-full text-left text-gray-500  text-sm border-b-1 border-gray-200 font-medium tracking-wider ">
            <th className="py-3 px-6">Document</th>
            <th className="py-3 px-6">Members</th>
            <th className="py-3 px-6">Signatures</th>
            <th className="py-3 px-6">Last Updated</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-900 text-sm ">
          {[
            {
              doc: "Document 1",
              members: 0,
              signatures: 0,
              date: "2/12/2020 1:25 PM",
            },
            {
              doc: "Document 2",
              members: 0,
              signatures: 0,
              date: "2/12/2020 1:25 PM",
            },
            {
              doc: "Document 3",
              members: 0,
              signatures: 0,
              date: "2/12/2020 1:25 PM",
            },
          ].map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{item.doc}</td>
              <td className="py-3 px-6">{item.members}</td>
              <td className="py-3 px-6">{item.signatures}</td>
              <td className="py-3 px-6">{item.date}</td>
              <td className="py-3 px-10 ">
                <i className="fas fa-ellipsis-h"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTab;
