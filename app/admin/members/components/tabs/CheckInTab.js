"use client";
import { useState } from "react";

export default function Widget() {
  const [checkInCode, setCheckInCode] = useState("");

  const handleNumberClick = (number) => {
    if (number === "✖️") {
      setCheckInCode((prev) => prev.slice(0, -1)); // Remove last digit
    } else if (number === "✔️") {
      console.log("Check-in code:", checkInCode); // Handle check-in
      setCheckInCode(""); // Clear input
    } else {
      setCheckInCode((prev) => prev + number);
    }
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Today's Sessions */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Today's Sessions</h2>
            <p className="text-gray-500 mb-4">No upcoming sessions</p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-full w-full">
              Add Session
            </button>
          </div>

          {/* Check-In Section */}
          <div className="bg-gradient-to-b from-teal-600 to-teal-800 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <button className="text-white font-semibold mx-2">
                Enter Code
              </button>
              <button className="text-white font-semibold mx-2">
                Name Search
              </button>
            </div>
            <h2 className="text-2xl text-white font-semibold mb-4">Check-In</h2>

            {/* Input Field */}
            <div className="bg-teal-500 rounded-full py-2 px-4 mb-4">
              <input
                type="text"
                value={checkInCode}
                readOnly
                placeholder="Enter Check-in code"
                className="bg-transparent text-white text-center w-full focus:outline-none"
              />
            </div>

            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "✖️", 0, "✔️"].map((number) => (
                <button
                  key={number}
                  className="bg-teal-500 text-white py-4 rounded-full hover:bg-teal-600"
                  onClick={() => handleNumberClick(number)}
                >
                  {typeof number === "string" ? (
                    <i
                      className={`fas ${
                        number === "✖️" ? "fa-times" : "fa-check"
                      }`}
                    ></i>
                  ) : (
                    number
                  )}
                </button>
              ))}
            </div>

            {/* Check-In Button */}
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full w-full"
              onClick={() => console.log("Final Check-in Code:", checkInCode)}
            >
              Check In <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Recent Check-ins */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Check-ins</h2>
            <p className="text-gray-500 mb-4">No check-ins yet today</p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-full w-full">
              Check In <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
