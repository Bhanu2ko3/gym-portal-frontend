import React from "react";
import "tailwindcss/tailwind.css";

const settingSidebar = () => {
  const menuItems = [
    "GYM",
    "Booking",
    "Member",
    "Attendance",
    "Marketing",
    "Billing",
    "Sale",
    "Email",
    "Integration",
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <ul className="space-y-4 p-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <i className="fas fa-chevron-down"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default settingSidebar;
