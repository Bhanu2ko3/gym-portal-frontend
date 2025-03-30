import React from "react";
import Button from "../../../components/Button";

const CreateSaleTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full h-100 ">
        <h2 className="text-lg text-gray-700 ml-3 font-semibold mb-2">Create Sale</h2>
        <p className="text-gray-400 mt-30 flex items-center justify-center">
          Create a sale by adding line items using the buttons below. You can
          add a product
        </p>
        <p className="text-gray-400 mb-4 flex items-center justify-center">
          from the inventory or a free-form line item.
        </p>
        <div className="flex space-x-6 justify-center mt-20">
          <Button text="Add Product" onClick={() => console.log("Clicked!")} />
          <Button
            text="Add Line Item"
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSaleTab;
