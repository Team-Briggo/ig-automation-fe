"use client";

import { useState } from "react";
import { FaTimes, FaHeart, FaEye } from "react-icons/fa";

export default function PostModal({ post, onClose }) {
  const [comments, setComments] = useState(post?.comments || []);
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
    <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-80">
      <div className="bg-white max-w-4xl w-full h-[90vh] grid grid-cols-1 md:grid-cols-2 relative">
        {/* Left - Image */}
        <div className="flex justify-center items-center bg-black">
          <img
            src={post.thumbnailUrl || post.mediaUrl}
            alt=""
            className="object-contain max-h-full"
          />
        </div>

        {/* Right - Details */}
        <div className="flex overflow-y-auto flex-col p-4">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-black rounded-full"
          >
            <FaTimes />
          </button>

          {/* Caption */}
          <p className="mb-2 font-semibold">{post.caption}</p>

          {/* Stats */}
          <div className="flex gap-4 mb-4 text-gray-600">
            <span className="flex gap-1 items-center">
              <FaHeart /> {post.likeCount}
            </span>
            <span className="flex gap-1 items-center">
              <FaEye /> {post.viewCount}
            </span>
            <span>💬 {post.commentsCount}</span>
          </div>

          {/* Comments */}
          <div className="flex-1">
            {comments.map((c) => (
              <div key={c.id} className="pb-2 mb-3 border-b">
                <p className="font-bold">{c.user}</p>
                <p>{c.text}</p>

                <div className="flex gap-3 mt-1 text-sm text-gray-500">
                  <button onClick={() => handleReply(c.id)}>Reply</button>
                  <button onClick={() => handleHide(c.id)}>Hide</button>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </div>

                {/* Replies */}
                {c.replies?.map((r, idx) => (
                  <div key={idx} className="mt-1 ml-4 text-sm text-gray-700">
                    <span className="font-semibold">{r.user}</span>: {r.text}
                  </div>
                ))}

                {/* Reply form */}
                {replyTo === c.id && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply..."
                      className="flex-1 px-2 py-1 rounded border"
                    />
                    <button
                      onClick={submitReply}
                      className="px-3 py-1 text-white bg-blue-500 rounded"
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
