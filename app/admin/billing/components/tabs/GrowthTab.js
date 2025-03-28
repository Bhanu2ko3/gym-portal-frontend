import { useState } from "react";

const tab = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              All Payment
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              Produce Revenue
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
              Member Balances
            </button>
          </div>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            01/01/2025 - 01/07/2025
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-6 rounded shadow">
            <div className="text-gray-500">Total</div>
            <div className="text-4xl font-bold">ZMK 635</div>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <img
              src="https://storage.googleapis.com/a1aa/image/gp24ZpVg8frqCR6Ok9YilIZER6Ujp1RxkOmXVZv-jnQ.jpg"
              alt="Bar chart showing revenue growth over a month"
              width="600"
              height="300"
            />
          </div>
        </div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {["Memberships", "Point-of-sale", "Pending", "Per Member"].map(
            (item, index) => (
              <div key={index} className="bg-white p-6 rounded shadow text-center">
                <div className="text-gray-500">ZMK 635</div>
                <div className="text-gray-700">{item}</div>
              </div>
            )
          )}
        </div>

        {/* Revenue Growth Table */}
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold text-gray-700">Revenue Growth</div>
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded py-2 px-4 pr-10"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
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
              <tr className="text-gray-700">
                <td className="py-2">Total</td>
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
