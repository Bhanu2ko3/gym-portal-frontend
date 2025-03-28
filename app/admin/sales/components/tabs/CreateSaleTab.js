import React from "react";

const CreateSaleTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-2">Create Sale</h2>
        <p className="text-gray-600 mb-4">
          Create a sale by adding line items using the buttons below. You can
          add a product from the inventory or a free-form line item.
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700">
            Add Product
          </button>
          <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700">
            Add Line Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSaleTab;
