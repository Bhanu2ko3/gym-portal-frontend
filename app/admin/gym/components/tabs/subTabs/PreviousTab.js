import React from 'react';

const PreviousTab = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-lg font-semibold mb-4">Session Bookings</h2>
        <p className="text-gray-500 text-center">No bookings found</p>
      </div>
    </div>
  );
};

export default PreviousTab;
