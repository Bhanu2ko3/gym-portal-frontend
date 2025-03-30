import React from "react";
import Button from "../../../components/Button";

const ProductsTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full  ">
        {/* Header with buttons */}
        <div className="flex justify-between items-center mb-6 ">
          <Button
            text="Create Product"
            onClick={() => console.log("Clicked!")}
          />
          <div className="space-x-3">
            <button className="bg-white border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-full">
              Import
            </button>
            <button className="bg-white border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-full">
              Export
            </button>
          </div>
        </div>

        {/* No Products Added */}
        <div className="text-center text-gray-500 mb-6 mt-20">
          No Products Added Yet.
        </div>

        {/* Add New Product and Import Product buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            text="Add a New Product"
            onClick={() => console.log("Clicked!")}
          />

          <button className="bg-white border border-gray-300 hover:bg-gray-200 transition duration-300 text-gray-700 py-2 px-4 rounded-full">
            Import Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsTab;
