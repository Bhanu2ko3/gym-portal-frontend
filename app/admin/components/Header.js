import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const DashboardHeader = ({ onSearch, selectedTab }) => {
  const [searchQuery, setSearchQuery] = useState(selectedTab || "");

  useEffect(() => {
    setSearchQuery(selectedTab || "");
  }, [selectedTab]); // Update searchQuery when selectedTab changes

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  return (
    <div className="w-full bg-[var(--tertiary-color)] px-6 pt-6 flex items-center justify-between shadow-sm">
      <h1 className="text-2xl font-semibold text-[var(--primary-color)]">
        {selectedTab || "Dashboard"}
      </h1>

      <div className="mr-80 left-1/2 transform -translate-x-1/2">
        <div className="relative max-w-md w-64">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 px-4 pr-10 bg-white border border-gray-200 rounded-full text-sm 
                  focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
            placeholder="Search anything here..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
