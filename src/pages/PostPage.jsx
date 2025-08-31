import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "/src/data.js"; // Using absolute path to fix resolution issue
import ReactMarkdown from "react-markdown";

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Post not found!
        </h1>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Link */}
      <Link
        to="/"
        className="text-blue-500 dark:text-blue-400 hover:underline mb-6 inline-block"
      >
        &larr; Back to Home
      </Link>

      {/* Post Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
        {post.title}
      </h1>
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            post.type === "Project"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          }`}
        >
          {post.type}
        </span>
        <span>•</span>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post Image */}
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-auto object-cover rounded-lg mb-8 shadow-lg"
      />

      {/* Rendered Markdown Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default PostPage;
