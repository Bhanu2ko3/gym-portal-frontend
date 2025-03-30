import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";
import { useState } from "react";

Chart.register(annotationPlugin);

const GrowthTab = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  //  Sample attendance data
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
        data: [
          120, 200, 130, 80, 40, 100, 180, 90, 150, 110, 170, 140, 200, 250,
        ],
        backgroundColor: "#04668d",
        borderRadius: 10,
        barThickness: 8,
      },
    ],
  };

  // Chart options (Fix annotations & improve styles)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true, // Ensure grid is enabled for the X-axis
          color: "white", // Lighter gray color for grid lines
          borderDash: [5, 5], // Set the dash pattern for the X-axis grid
          borderWidth: 1, // Line width for the grid
        },
        ticks: {
          color: "white", // Color of the ticks (labels)
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
      y: {
        grid: {
          color: "#D3D3D3", // Softer gray for grid lines
          borderDash: [4, 4], // Dashed lines for the Y-axis grid
          borderWidth: 1, // Line width for the grid
        },
        ticks: {
          color: "#444", // Color of the ticks (labels)
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
          stepSize: 100, // More precise Y-axis steps
        },
      },
    },

    plugins: {
      title: {
        display: true,
        font: { size: 18, weight: "bold" },
        color: "#333",
        padding: 15,
      },
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#FFF",
        bodyColor: "#FFF",
        padding: 5,
        displayColors: false,
      },
      annotation: {
        annotations: attendanceData.datasets[0].data.map((value, index) => ({
          type: "point",
          xValue: index,
          yValue: value,
          backgroundColor: "#000", // Black dot
          borderColor: "#FFF", // White border
          borderWidth: 2, // Border thickness
          radius: 7, // Dot size
        })),
      },
    },
  };

  const [stats, setStats] = useState({
    visitors: 635,
    frozen: 540,
    cancelled: 720,
  });

  const [active, setActive] = useState("Day");
  const data = [
    { label: "Scheduled", value: 100.0 },
    { label: "Paid", value: 250.5 },
    { label: "Overdue", value: 75.25 },
  ];

  return (
    <div className="bg-gray-100 ">
      <div className=" mx-auto">
        {/* Active Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[var(--box-color)] p-10 rounded-lg shadow-md">
            <h2 className="text-xl text-gray-700 font-medium  mb-4">Active Members</h2>
            <p className="text-5xl text-gray-700">10</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl text-gray-700 font-medium">New Members</h2>
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

            {/* Graph Section */}
            <div className="mt-2 relative">
              <div className="h-[200px] ">
                <Bar data={attendanceData} options={options} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {Object.entries(stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-[var(--box-color)] p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-3xl ">{value}</p>
              <p className="text-[var(--primary-color)] capitalize">{key}</p>
            </div>
          ))}
        </div>

        {/* Member Growth Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-700">Member Growth</h2>
            <div className="relative">
              {/* day, week, month */}
              <div className="relative inline-block">
                <select
                  className="bg-white   text-gray-600 px-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                </select>
              </div>
            </div>
          </div>
          {/* Graph Section */}
          <div className="mt-4 relative">
            <div className="border-b-2  border-gray-200"></div>
            <div className="h-[250px] ">
              <Bar data={attendanceData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTab;
