"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import "chart.js/auto";
import Button from "../../../components/Button"; // Adjust this based on your project structure

const attendanceData = {
  labels: [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13",
    "Day 14",
  ],
  datasets: [
    {
      label: "Attendance",
      data: [120, 200, 130, 80, 40, 100, 180, 90, 150, 110, 170, 140, 200, 350],
      backgroundColor: "#2196F3",
      borderRadius: 10,
      barThickness: 12,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        color: "white",
        borderDash: [5, 5], // Dashed grid lines
        borderWidth: 1,
      },
      ticks: {
        color: "white",
        font: { size: 14, weight: "bold", family: "Arial" },
      },
    },
    y: {
      grid: {
        color: "#D3D3D3",
        borderDash: [4, 4],
        borderWidth: 1,
      },
      ticks: {
        color: "#444",
        font: { size: 14, weight: "bold", family: "Arial" },
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#FFF",
      bodyColor: "#FFF",
      padding: 10,
      displayColors: false,
    },
  },
};

const OverviewTab = () => {
  const [active, setActive] = useState("Day");
  const data = [
    { label: "Scheduled", value: 100.0 },
    { label: "Paid", value: 250.5 },
    { label: "Overdue", value: 75.25 },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[var(--box-color)] p-5 rounded-lg shadow-md">
            <p className="text-gray-600 font-semibold text-lg ml-2 mb-4">Totals</p>
            <div className="grid grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center border-5 border-gray-400 rounded-full">
                    <span className="text-gray-500 text-lg text-center">
                      ZMK
                      <br />
                      {item.value.toFixed(2)}{" "}
                      {/* Formats value to 2 decimal places */}
                    </span>
                  </div>
                  <span className="text-gray-500 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Graph Section */}
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700 ml-3">Revenue</span>
              <div className="bg-[var(--box-color)] p-2 rounded-lg shadow-md">
                <div className="flex space-x-2">
                  {["Day", "Week", "Month"].map((label) => (
                    <button
                      key={label}
                      onClick={() => setActive(label)}
                      className={`text-xs px-3 py-1 rounded cursor-pointer ${
                        active === label
                          ? "bg-white text-[var(--primary-color)]"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Graph */}
            <div className="h-[250px] ">
              <Bar data={attendanceData} options={options} />
            </div>
          </div>
        </div>

        {/* Recent Payments Section */}
        <div className="bg-white p-6 rounded-lg shadow-md h-80">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-lg ml-3">Recent Payments</span>
            <Button
              text="All Payments"
              onClick={() => console.log("Clicked!")}
            />
          </div>
          <div className="text-center mt-20 text-gray-400">
            No payments found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
