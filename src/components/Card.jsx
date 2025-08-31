import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    // The main container for the card with a subtle transition effect
    <Link
      to={`/post/${post.id}`}
      className="block group relative p-8 bg-gray-900/50 rounded-xl overflow-hidden
                 border-2 border-gray-800/80 
                 transition-all duration-300 ease-in-out
                 hover:border-red-500/50 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-red-500/10"
    >
      {/* Glossy overlay effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative h-full flex flex-col justify-between">
        <div>
          {/* Post Title */}
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
            {post.title}
          </h3>
          {/* Post Description as a subtitle */}
          <p className="text-gray-400 text-base line-clamp-2">
            {post.description}
          </p>
        </div>

        {/* "View Project" button that appears on hover */}
        <div className="mt-8">
          <span
            className="inline-block px-5 py-2 rounded-md 
                           bg-gray-800 text-gray-300 text-sm font-semibold
                           border border-gray-700
                           opacity-0 group-hover:opacity-100 
                           transform translate-y-4 group-hover:translate-y-0
                           transition-all duration-300 ease-in-out"
          >
            View Project
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
