import React from "react";

const DocumentsTab = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-blue-600 text-lg font-semibold">Document Templates</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          New Document Template
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2"
          />
          <i className="fas fa-search absolute right-3 top-2.5 text-gray-400"></i>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">Document</th>
            <th className="py-3 px-6">Members</th>
            <th className="py-3 px-6">Signatures</th>
            <th className="py-3 px-6">Last Updated</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {[
            { doc: "Document 1", members: 0, signatures: 0, date: "2/12/2020 1:25 PM" },
            { doc: "Document 2", members: 0, signatures: 0, date: "2/12/2020 1:25 PM" },
            { doc: "Document 3", members: 0, signatures: 0, date: "2/12/2020 1:25 PM" },
          ].map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">{item.doc}</td>
              <td className="py-3 px-6">{item.members}</td>
              <td className="py-3 px-6">{item.signatures}</td>
              <td className="py-3 px-6">{item.date}</td>
              <td className="py-3 px-6 text-right">
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
