"use client";

import { useState, useEffect } from "react";

export default function StepSelectPost({ formData, setFormData, nextStep }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with real API call
    setPosts([
      { id: "1", imageUrl: "/dummy1.jpg" },
      { id: "2", imageUrl: "/dummy2.jpg" },
      { id: "3", imageUrl: "/dummy3.jpg" },
    ]);
  }, []);

  const handleSelect = (post) => {
    setFormData({ ...formData, selectedPost: post });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select a Post</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleSelect(post)}
            className={`cursor-pointer border-4 rounded-lg overflow-hidden ${
              formData.selectedPost?.id === post.id
                ? "border-pink-500"
                : "border-gray-200"
            }`}
          >
            <img
              src={post.imageUrl}
              alt="Post"
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={nextStep}
          disabled={!formData.selectedPost}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
