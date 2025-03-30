import React from "react";
import Button from "../../../components/Button";
import Lable from "../../../components/Lable";

const ContentTab = () => {
  return (
    <div className=" bg-white rounded-lg shadow-md w-full h-150  ">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-[var(--quinary-color)] py-4 pl-4 rounded-t-lg">
        <h2 className="text-lg ml-3 font-semibold text-[var(--primary-color)]">
          Member Portal Content
        </h2>
        <Lable label="Add Rosters" />
        
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center mt-50">
        <p className="text-gray-500">
          Create content exclusively for your members including training
          materials, instructional videos and more.
        </p>
      </div>

      {/* New Membership Option Button */}
      <div className="mt-20 flex justify-center ">
        <Button text="Add a new Post" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
};

export default ContentTab;
