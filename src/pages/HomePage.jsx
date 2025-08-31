import React, { useState } from "react";
import Hero from "../components/Hero.jsx";
import PostList from "../components/PostList.jsx";
import SearchBar from "../components/SearchBar.jsx";

const HomePage = () => {
  // State for search and filter functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearchChange = (query) => {
    setSearchTerm(query);
  };

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  return (
    <div>
      {/* 1. The Hero section */}
      <Hero />

      {/* 2. The "Our Portfolio" section - NOW THEME-AWARE */}
      <section
        id="portfolio"
        className="bg-gray-100 dark:bg-black py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Our Portfolio
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Explore my latest projects and see how I've turned ideas into
              elegant, functional solutions.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mt-12">
            <SearchBar
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              currentFilter={filter}
              isPortfolioFilter={true}
            />
          </div>

          {/* Project/Blog Cards Grid */}
          <div className="mt-12">
            <PostList searchTerm={searchTerm} filter={filter} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
