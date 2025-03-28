import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const DashboardHeader = ({ onSearch, searchQuery: propSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState(propSearchQuery || "");

  useEffect(() => {
    setSearchQuery(propSearchQuery || "");
  }, [propSearchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  return (
    <div className="w-full  bg-gray-50 px-6 py-4 flex items-center shadow-sm">
      <h1 className="text-xl font-semibold text-[var(--primary-color)]">
      {searchQuery}
      </h1>

      <div className="flex justify-center items-center w-full absolute top-0 left-0 h-16">
        <div className="relative max-w-md w-64">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 px-4 pr-10 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search anything here..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
