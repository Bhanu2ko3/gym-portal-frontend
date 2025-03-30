import React from 'react';

const PreviousTab = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-100 ">
        <h2 className="text-lg font-medium ml-3 text-gray-700">Session Bookings</h2>
        <p className="text-gray-400 text-center mt-35">No bookings found</p>
      </div>
    </div>
  );
};

export default PreviousTab;
