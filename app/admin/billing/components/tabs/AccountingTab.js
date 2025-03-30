import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";
import { useState } from "react";

Chart.register(annotationPlugin);
const AccountingTab = () => {
  const [totalRevenue, setTotalRevenue] = useState(635);
  const [baseAmount, setBaseAmount] = useState(500);
  const [taxesFees, setTaxesFees] = useState(100);
  const [refunds, setRefunds] = useState(350);

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

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex space-x-4 bg-blue-100 rounded-lg">
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 py-2 rounded-lg">
              All Payment
            </button>
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 py-2 rounded-lg ">
              Produce Revenue
            </button>
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 py-2 rounded-lg">
              Member Balances
            </button>
          </div>
          <div className="bg-blue-100 text-[var(--primary-color)] rounded-lg px-4 py-2  ">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-100 p-4  rounded-lg shadow-md">
            <div className="text-[var(--primary-color)]  ">Total Revenue</div>
            <div className="text-xl font-bold">
              ZMK <span className="text-3xl">{totalRevenue}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">
              ZMK <span className="text-3xl">{baseAmount}</span>
            </div>
            <div className="text-[var(--primary-color)]">Base Amount</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">
              ZMK <span className="text-3xl">{taxesFees}</span>
            </div>
            <div className="text-[var(--primary-color)]">Taxes & Fees</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">
              ZMK <span className="text-3xl">{refunds}</span>
            </div>
            <div className="text-[var(--primary-color)]">Refunds</div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-700 text-lg font-medium ">Revenue</div>
            <div className="relative inline-block">
              <select
                className="bg-white   text-gray-600 py-2 px-4 pr-8   focus:outline-none focus:ring-2 focus:ring-white"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
              </select>
            </div>
          </div>
          <div className="mt-4 relative">
            <div className="border-b-2  border-gray-200"></div>
            <div className="h-[250px] ">
              <Bar data={attendanceData} options={options} />
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-md h-50">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-700 font-semibold text-xl ml-3">
              Transactions
            </div>
            <button className="bg-white border cursor-pointer border-gray-300 text-gray-600 hover:bg-gray-200 transition duration-300 py-2 px-6 rounded-full shadow">
              Export
            </button>
          </div>
          <div className="text-gray-400 text-center mt-7">
            No transactions found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingTab;
