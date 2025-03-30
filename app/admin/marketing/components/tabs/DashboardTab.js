import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";
import { useState } from "react";
import Lable from "../../../components/Lable";

Chart.register(annotationPlugin);

const DashboardTab = () => {
  const [Aactive, setAActive] = useState("Day");
  const [Bactive, setBActive] = useState("Day");
  

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
          120, 200, 130, 80, 40, 100, 180, 90, 150, 110, 170, 350, 200, 250,
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

  return (
    <div className="">
      {/* Grid Layout for Lead Generation & Signups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Lead Generation Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-gray-700 font-semibold">
              Lead Generation
            </h2>
            <div className="bg-[var(--box-color)] p-2 rounded-lg shadow-md">
              <div className="flex space-x-2">
                {["Day", "Week", "Month"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setAActive(label)}
                    className={`text-xs px-3 py-1 rounded cursor-pointer ${
                      Aactive === label
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
          <div className="h-60">
            {/* Graph Section */}
            <div className="mt-4 relative">
              <div className="border-b-2  border-gray-200"></div>
              <div className="h-[250px] ">
                <Bar data={attendanceData} options={options} />
              </div>
            </div>
          </div>
        </div>

        {/* New Signups Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-gray-700 font-semibold">New Signups</h2>
            <div className="bg-[var(--box-color)] p-2 rounded-lg shadow-md">
              <div className="flex space-x-2">
                {["Day", "Week", "Month"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setBActive(label)}
                    className={`text-xs px-3 py-1 rounded cursor-pointer ${
                      Bactive === label
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
          <div className="h-60">
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

      {/* Acquisition Funnel Section */}
      <div className="bg-white py-6 pl-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-700 font-medium">
            Acquisition Funnel
          </h2>
          <Lable label="12/07/2024 - 01/07/2025" />
          
        </div>
        <p className="text-gray-400 mb-4 text-center">
          Member acquisition data was not found between the selected dates.
        </p>
        <p className="text-gray-400 mb-4 text-center">
          When you add new members, mark the channel through which they found
          your gym at the bottom of the form.
        </p>
        <h3 className="text-lg font-medium text-gray-700">Latest Referrals</h3>
        <p className="text-gray-400 mt-20 text-center">
          No referrals have been made yet.
        </p>
      </div>
    </div>
  );
};

export default DashboardTab;
