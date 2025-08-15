"use client";

import { useState } from "react";
import { FaTimes, FaHeart, FaEye } from "react-icons/fa";

export default function PostModal({ post, onClose }) {
  const [comments, setComments] = useState(post.comments);
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleHide = (id) => {
    alert(`Comment ${id} hidden`);
  };

  const handleReply = (id) => {
    setReplyTo(id);
  };

  const submitReply = () => {
    if (!replyText.trim()) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === replyTo
          ? { ...c, replies: [...c.replies, { text: replyText, user: "You" }] }
          : c
      )
    );
    setReplyText("");
    setReplyTo(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white max-w-4xl w-full h-[90vh] grid grid-cols-1 md:grid-cols-2 relative">
        {/* Left - Image */}
        <div className="bg-black flex items-center justify-center">
          <img
            src={post.imageUrl}
            alt=""
            className="max-h-full object-contain"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col p-4 overflow-y-auto">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black rounded-full p-2"
          >
            <FaTimes />
          </button>

          {/* Caption */}
          <p className="font-semibold mb-2">{post.caption}</p>

          {/* Stats */}
          <div className="flex gap-4 mb-4 text-gray-600">
            <span className="flex items-center gap-1">
              <FaHeart /> {post.likes}
            </span>
            <span className="flex items-center gap-1">
              <FaEye /> {post.views}
            </span>
            <span>💬 {comments.length}</span>
          </div>

          {/* Comments */}
          <div className="flex-1">
            {comments.map((c) => (
              <div key={c.id} className="mb-3 border-b pb-2">
                <p className="font-bold">{c.user}</p>
                <p>{c.text}</p>

                <div className="flex gap-3 mt-1 text-sm text-gray-500">
                  <button onClick={() => handleReply(c.id)}>Reply</button>
                  <button onClick={() => handleHide(c.id)}>Hide</button>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </div>

                {/* Replies */}
                {c.replies?.map((r, idx) => (
                  <div key={idx} className="ml-4 mt-1 text-sm text-gray-700">
                    <span className="font-semibold">{r.user}</span>: {r.text}
                  </div>
                ))}

                {/* Reply form */}
                {replyTo === c.id && (
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply..."
                      className="border rounded px-2 py-1 flex-1"
                    />
                    <button
                      onClick={submitReply}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
