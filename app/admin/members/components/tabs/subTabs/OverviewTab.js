import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto"; 

Chart.register(annotationPlugin);

const Dashboard = () => {
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
        color: "#04668d",
        padding: 15,
      },
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#FFF",
        bodyColor: "#04668d",
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
    <div className="container mx-auto ">
      {/*  Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md  transition">
          <h2 className="text-gray-600 text-lg font-medium text-center">
            Last 30 days
          </h2>
          <div className="mt-4 flex space-x-4">
            {["Members / Session", "Sessions / Member", "Active Members"].map(
              (label, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg flex-1 text-center transition"
                >
                  <p className="text-3xl font-bold text-gray-800">635</p>
                  <p className="text-[var(--primary-color)]">{label}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md  transition">
          <h2 className="text-gray-600 text-lg font-medium text-center">
            Demographics
          </h2>
          <p className="text-gray-600 text-center mt-10">
            No demographics data available yet. Add more members!
          </p>
        </div>
      </div>

      {/* Check-Ins Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 transition">
        <div className="grid col-auto">
          {/* Title Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-gray-600 text-lg font-medium">Check-Ins</h2>
          </div>

          {/* Attendance and Month */}
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-gray-800 text-2xl font-medium">Attendance</h3>
            <div className="flex items-center">
              <p className="text-gray-600 cursor-pointer mr-2">Month</p>
              <i className="fas fa-chevron-down text-gray-600"></i>
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
  );
};

export default Dashboard;
