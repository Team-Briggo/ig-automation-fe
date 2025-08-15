"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaEye, FaComment } from "react-icons/fa";
import PostModal from "@/components/PostModal";

async function fetchPosts() {
  return [
    {
      id: "1",
      imageUrl: "/sample1.jpg",
      caption: "Beach day 🏖️",
      likes: 120,
      views: 450,
      comments: [
        { id: "c1", user: "alex", text: "Nice pic!", replies: [] },
        { id: "c2", user: "jane", text: "So beautiful!", replies: [] },
      ],
    },
    {
      id: "2",
      imageUrl: "/sample2.jpg",
      caption: "Coffee time ☕",
      likes: 85,
      views: 300,
      comments: [],
    },
  ];
}

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-salt p-6">
      <h1 className="text-3xl font-bold mb-6 text-pepper">
        📸 All Instagram Posts
      </h1>

      {posts.length === 0 ? (
        <div className="text-center text-muted mt-20">
          <p className="text-lg">No posts yet. Start sharing your moments!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition">
                  <Stat icon={<FaHeart />} value={post.likes} />
                  <Stat icon={<FaComment />} value={post.comments.length} />
                  <Stat icon={<FaEye />} value={post.views} />
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-pepper font-medium truncate">
                  {post.caption || "No caption"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

function Stat({ icon, value }) {
  return (
    <div className="flex items-center gap-1 text-white text-sm">
      {icon}
      <span>{value}</span>
    </div>
  );
}
