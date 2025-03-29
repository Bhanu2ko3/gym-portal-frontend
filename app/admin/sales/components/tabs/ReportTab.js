import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";
import { Search } from "lucide-react";

Chart.register(annotationPlugin);

const ReportTab = () => {
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
          120, 200, 130, 80, 40, 100, 180, 90, 150, 110, 170, 140, 200, 350,
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
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Date Range */}
        <div className="flex justify-end mb-4">
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        {/* Revenue, Cost, and Profit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Total Revenue</h2>
            <p className="text-3xl text-gray-700">
              <span className="text-lg">ZMK</span> 635
            </p>
          </div>
          <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Cost-of-goods</h2>
            <p className="text-3xl text-gray-700">
              <span className="text-lg">ZMK</span> 635
            </p>
          </div>
          <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600">Net Profit</h2>
            <p className="text-3xl text-gray-700">
              <span className="text-lg">ZMK</span> 635
            </p>
          </div>
        </div>

        {/* Profit Chart and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center ">
              <div className="text-gray-600 font-medium ml-3">Profit</div>
              <div className="text-gray-400">
                Month <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className=" relative">
              <div className="h-[250px]">
                <Bar data={attendanceData} options={options} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-3xl">
                <span className="text-lg">ZMK</span> 635
              </p>
              <p className="text-[var(--primary-color)]">Item Value</p>
            </div>
            <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-3xl">
                <span className="text-lg">ZMK</span> 635
              </p>
              <p className="text-[var(--primary-color)]">Taxes &amp; Fees</p>
            </div>
            <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-3xl">
                <span className="text-lg">ZMK</span> 635
              </p>
              <p className="text-[var(--primary-color)]">Discounts</p>
            </div>
            <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-3xl">
                <span className="text-lg">ZMK</span> 635
              </p>
              <p className="text-[var(--primary-color)]">Refunds</p>
            </div>
          </div>
        </div>

        {/* Product Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md h-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-600 ml-4">Product Revenue</h2>
            <button className="bg-white border border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-full shadow">
              Export
            </button>
          </div>
          <p className="text-gray-400 text-center">No transactions found.</p>
        </div>
      </div>
    </div>
  );
};

export default ReportTab;
