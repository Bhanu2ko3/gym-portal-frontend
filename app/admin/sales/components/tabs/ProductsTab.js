import React from "react";

const ProductsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        {/* Header with buttons */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full">
            Create Product
          </button>
          <div className="space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full">
              Import
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full">
              Export
            </button>
          </div>
        </div>

        {/* No Products Added */}
        <div className="text-center text-gray-500 mb-6">No Products Added Yet.</div>

        {/* Add New Product and Import Product buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full">
            Add a New Product
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full">
            Import Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsTab;
