import React from 'react';

const UpcomingTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-100 ">
        <h2 className="text-lg font-medium mb-4">Session Bookings</h2>
        <p className="text-gray-500 text-center mt-35">No bookings found</p>
      </div>
    </div>
  );
};

export default UpcomingTab;
