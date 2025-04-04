"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "../../../components/Button";

export default function Widget() {
  const [checkInCode, setCheckInCode] = useState("");

  const handleNumberClick = (number) => {
    if (number === "X") {
      setCheckInCode((prev) => prev.slice(0, -1)); // Remove last digit
    } else if (number === "✔️") {
      console.log("Check-in code:", checkInCode); // Handle check-in
      setCheckInCode(""); // Clear input
    } else {
      setCheckInCode((prev) => prev + number);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Today's Sessions */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg  mb-4 ml-2 text-gray-700">Today's Sessions</h2>
            <p className="text-gray-400 mt-50 text-center">No upcoming sessions</p>
            <div className="flex justify-center mt-60">
              {" "}
              <Button text="Add Session" onClick={() => console.log("Clicked!")} />
            </div>
          </div>

          {/* Check-In Section */}
          <div className="bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] p-6 rounded-lg shadow-md text-center">
            {/* Top Navigation */}
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
            <div className="bg-cyan-600 rounded-full py-2 px-4 mb-4">
              <input
                type="text"
                value={checkInCode}
                readOnly
                placeholder="Enter Check-in code"
                className="bg-transparent text-white text-center w-full focus:outline-none"
              />
            </div>

            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-2 mb-6 p-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "X", 0, "✔️"].map((item, index) => (
                <button
                  key={index}
                  className="bg-cyan-600 bg-opacity-50 rounded-full text-white text-xl flex items-center justify-center w-15 h-15 hover:bg-cyan-800 transition"
                  onClick={() => handleNumberClick(item)}
                >
                  {item === "X" ? (
                    <i className="fas fa-backspace"></i> // Font Awesome backspace icon
                  ) : item === "✔️" ? (
                    <i className="fas fa-check"></i> // Font Awesome check icon
                  ) : (
                    item
                  )}
                </button>
              ))}
            </div>

            {/* Check-In Button */}
            <button
              className="bg-green-700 cursor-pointer text-white py-2 px-4 rounded-full w-45 inset-shadow-amber-50 hover:shadow-xl transition-shadow duration-300"
              onClick={() => console.log("Final Check-in Code:", checkInCode)}
            >
              Check In <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Recent Check-ins */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg ml-2 mb-4 text-gray-700">Recent Check-ins</h2>
            <p className="text-gray-400 mt-50 text-center">No check-ins yet today</p>
            <div className="flex justify-center mt-60">
              {" "}
              <Button text="Check In" icon="fas fa-arrow-right"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
