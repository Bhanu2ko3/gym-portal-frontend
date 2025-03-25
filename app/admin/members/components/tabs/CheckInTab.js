"use client";
import { useState } from 'react';

export default function Widget() {
  const [checkInCode, setCheckInCode] = useState('');

  const handleNumberClick = (number) => {
    setCheckInCode((prevCode) => prevCode + number);
  };

  const handleCheckIn = () => {
    // Handle check-in logic here
    console.log('Check-in code:', checkInCode);
    setCheckInCode('');
  };

  return (
    <div className="flex justify-between p-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white h-screen">
      {/* Today's Sessions Section */}
      <div className="w-1/3 p-4 bg-white rounded-lg shadow-md text-gray-800">
        <h2 className="text-lg font-semibold mb-4">Today's Sessions</h2>
        <p className="text-gray-500 mb-4">No upcoming sessions</p>
      
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Session
        </button>
      </div>

      {/* Check-In Section */}
      <div className="flex flex-col items-center justify-center w-1/3 p-4">
        <h1 className="text-2xl font-bold mb-4">Check-In</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Check-in code"
            value={checkInCode}
            readOnly
            className="p-2 rounded-lg bg-white text-black w-full text-center"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '✖️', 0, '✔️'].map((number) => (
            <button
              key={number}
              className="bg-zinc-200 rounded-lg p-4 text-gray-800 hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleCheckIn}
        >
          Check In →
        </button>
      </div>

      {/* Recent Check-ins Section */}
      <div className="w-1/3 p-4 bg-white rounded-lg shadow-md text-gray-800">
        <h2 className="text-lg font-semibold mb-4">Recent Check-ins</h2>
        <p className="text-gray-500 mb-4">No check-ins yet today</p>
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Check In →
        </button>
      </div>
    </div>
  );
}