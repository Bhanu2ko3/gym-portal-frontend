import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chart.js/auto";
import { Search } from "lucide-react";

Chart.register(annotationPlugin);

const tab = () => {
  
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="bg-gray-100 p-4 ">
      <div className=" mx-auto">
        {/* Navigation */}
        <div className="flex justify-between  items-center mb-4">
          <div className="flex space-x-4 bg-blue-100 rounded-lg ">
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 rounded-lg ">
              All Payment
            </button>
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 rounded-lg ">
              Produce Revenue
            </button>
            <button className="bg-blue-100 text-[var(--primary-color)] px-4 py-2 rounded-lg ">
              Member Balances
            </button>
          </div>
          <div className="bg-blue-100 text-[var(--primary-color)] px-4 py-2 rounded-lg ">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-[var(--box-color)] p-6 rounded-lg shadow-md">
            <div className="text-gray-500">Total</div>
            <div className="text-xl m-5 font-medium">
              ZMK <span className="font-medium text-4xl">635 </span>{" "}
            </div>
          </div>
          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <div className="flex justify-between items-center ">
              <div className="text-gray-600 font-medium ml-3">Revenue</div>
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
        </div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {["Memberships", "Point-of-sale", "Pending", "Per Member"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-gray-500">
                  ZMK <span className="text-2xl">635</span>{" "}
                </div>
                <div className="text-[var(--primary-color)]">{item}</div>
              </div>
            )
          )}
        </div>

        {/* Revenue Growth Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold text-gray-700">
              Revenue Growth
            </div>
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-2xl w-64 focus:outline-none focus:ring-1 focus:ring-[var(--quaternary-color)]"
              />
              <div className="absolute right-3 top-2.5">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b-3 border-[var(--box-color)]">
                {[
                  "Date",
                  "Paying Members",
                  "Memberships",
                  "Sales",
                  "Pending",
                  "Total",
                  "Per Member",
                ].map((header, index) => (
                  <th key={index} className="py-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-gray-500">
                <td className="py-4" colSpan="7">
                  No record found
                </td>
              </tr>
              <tr className="text-gray-700 border-2  border-[var(--box-color)]">
                <td className="py-2 ml-5">Total</td>
                {Array(6)
                  .fill("ZMK 0")
                  .map((value, index) => (
                    <td key={index} className="py-2">
                      {value}
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default tab;
