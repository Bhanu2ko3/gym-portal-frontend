import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";

Chart.register(annotationPlugin);

const DashboardTab = () => {
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
        backgroundColor: "#2196F3",
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
            <h2 className="text-lg font-semibold">Lead Generation</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Day
              </button>
              <button className="text-gray-600 px-3 py-1">Week</button>
              <button className="text-gray-600 px-3 py-1">Month</button>
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
            <h2 className="text-lg font-semibold">New Signups</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Day
              </button>
              <button className="text-gray-600 px-3 py-1">Week</button>
              <button className="text-gray-600 px-3 py-1">Month</button>
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
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Acquisition Funnel</h2>
          <div className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full">
            12/07/2024 - 01/07/2025
          </div>
        </div>
        <p className="text-gray-500 mb-4 text-center">
          Member acquisition data was not found between the selected dates.
        </p>
        <p className="text-gray-500 mb-4 text-center">
          When you add new members, mark the channel through which they found
          your gym at the bottom of the form.
        </p>
        <h3 className="text-lg font-medium">Latest Referrals</h3>
        <p className="text-gray-500 text-center">No referrals have been made yet.</p>
      </div>
    </div>
  );
};

export default DashboardTab;
