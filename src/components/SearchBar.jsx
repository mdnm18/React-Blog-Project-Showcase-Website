import React from "react";

// The component now accepts an `isPortfolioFilter` prop to change its style
const SearchBar = ({
  onSearchChange,
  onFilterChange,
  currentFilter,
  isPortfolioFilter,
}) => {
  // Style for the new Portfolio Filter bar
  if (isPortfolioFilter) {
    const filterOptions = ["All", "Project", "Blog"];
    return (
      <div className="max-w-2xl mx-auto">
        {/* Search Input Field */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="portfolio-search"
            name="search"
            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-full leading-5 bg-gray-900 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Search my portfolio..."
            type="search"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4">
          {filterOptions.map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300
                ${
                  currentFilter === type
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {/* Corrected button text */}
              {type}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- Original style remains unchanged below ---
  return (
    <div className="mb-12">
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Search by title or tag..."
            type="search"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {["All", "Project", "Blog"].map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`px-4 py-2 text-sm font-medium rounded-md
                ${
                  currentFilter === type
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
