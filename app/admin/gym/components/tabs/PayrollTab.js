import React, { useState } from 'react';
import Button from "../../../components/Button";

const PayrollTab = () => {
  const [dateRange, setDateRange] = useState('01/01/2025 - 01/07/2025');

  const handleChangeDates = () => {
    // You can implement a date picker or other logic to update the date range here.
    alert('Change dates clicked');
  };

  const handleDownload = () => {
    // Implement download logic here (e.g., export data to a file).
    alert('Download clicked');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-100 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Payroll Report</h1>
          <div className="flex space-x-2">
            <span className="bg-blue-100 text-blue-600 px-3 p-2 rounded-xl">
              {dateRange}
            </span>
            <button
              className="bg-white text-gray-700 border hover:bg-gray-200 transition duration-300 border-gray-300 px-4 py-2 rounded-full shadow-sm"
              onClick={handleChangeDates}
            >
              Change Dates
            </button>
            <Button text="Download" onClick={handleDownload} />
            
          </div>
        </div>
        <div className="text-center text-gray-400 mt-30">
          No payroll data found for the selected date range.
        </div>
      </div>
    </div>
  );
};

export default PayrollTab;
