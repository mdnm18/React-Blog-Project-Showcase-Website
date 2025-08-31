import React from "react";
// The path '../data.js' correctly points from 'src/components' up to 'src'
import { posts } from "../data.js";
// The path './Card.jsx' correctly points to a file in the same 'src/components' directory
import Card from "./Card.jsx";

// The component accepts `searchTerm` and `filter` as props
function PostList({ searchTerm, filter }) {
  // Filter the posts based on the props before rendering
  const filteredPosts = posts.filter((post) => {
    // Logic for the text search (checks title and tags)
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Logic for the category filter
    const matchesFilter = filter === "All" || post.type === filter;

    // A post is shown only if it matches both conditions
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Check if there are any posts to display after filtering */}
      {filteredPosts.length > 0 ? (
        // If yes, render the grid of cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        // If no, display a "not found" message
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            No Posts Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}

export default PostList;
