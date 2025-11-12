"use client";

import Button from "@/components/ui/Button";
import { useUser } from "@/contexts/UserContext";
import {
  getMediaFromInstagramAccountAPI,
  manageIgMediaAutomationAPI,
} from "@/lib/apiHandler";
import { getMediaUrl } from "@/utils/getMediaUrl";
import { uploadData } from "@aws-amplify/storage";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import {
  FiAlertCircle,
  FiArrowRight,
  FiChevronDown,
  FiImage,
  FiInstagram,
  FiLoader,
  FiPause,
  FiPlay,
  FiRefreshCw,
  FiTrash,
  FiX,
} from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const getMediaLabel = (mediaType) => {
  switch (mediaType) {
    case "VIDEO":
      return "Video";
    case "CAROUSEL_ALBUM":
      return "Album";
    default:
      return null;
  }
};

const getMediaIcon = (mediaType) => {
  switch (mediaType) {
    case "VIDEO":
      return <FiPlay className="w-3 h-3" />;
    case "CAROUSEL_ALBUM":
      return <FiImage className="w-3 h-3" />;
    default:
      return null;
  }
};

// ------------------ Step 1 ------------------
function Step1_SelectPost({ selectedPost, onSelect, user, openModal }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  // Initial load
  useEffect(() => {
    if (user?.id) {
      loadPosts(true);
    }
  }, [user?.id]);

  const loadPosts = useCallback(
    async (isInitial = false) => {
      if (!user?.id || (!isInitial && !hasMore)) return;

      const currentToken = isInitial ? null : nextPageToken;

      if (!isInitial && currentToken === prevPageToken) {
        setHasMore(false);
        return;
      }

      try {
        if (isInitial) {
          setLoading(true);
          setError(null);
        } else {
          setLoadingMore(true);
        }

        const res = await getMediaFromInstagramAccountAPI(
          user.id,
          currentToken
        );

        if (res.success && res.items) {
          const newPosts = res.items || [];

          if (isInitial) {
            setPosts(newPosts);
          } else {
            setPosts((prev) => [...prev, ...newPosts]);
          }

          const newNextPageToken = res.nextPageToken;

          if (!newNextPageToken || newNextPageToken === currentToken) {
            setHasMore(false);
          } else {
            setPrevPageToken(currentToken);
            setNextPageToken(newNextPageToken);
          }
        } else {
          setError(res.message || "Failed to load posts");
          if (isInitial) {
            setPosts([]);
          }
        }
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("An error occurred while loading posts");
        if (isInitial) {
          setPosts([]);
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [user?.id, nextPageToken, prevPageToken, hasMore]
  );

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      loadPosts(false);
    }
  };

  const retry = () => {
    setPosts([]);
    setNextPageToken(null);
    setPrevPageToken(null);
    setHasMore(true);
    setError(null);
    loadPosts(true);
    loadAutomatedPosts();
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16 text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full"
        >
          <FiInstagram className="w-8 h-8 text-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium text-gray-700"
        >
          Loading your Instagram posts...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-sm text-gray-500"
        >
          This might take a moment
        </motion.p>
      </motion.div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="inline-flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-red-100 rounded-full"
        >
          <FiAlertCircle className="w-8 h-8 text-red-500" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-lg font-medium text-red-600"
        >
          {error}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={retry}
            className="text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-105"
          >
            <FiRefreshCw className="inline-block mr-2 w-4 h-4" />
            Try Again
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          Select a Post
        </h2>
        <p className="text-sm text-gray-600">
          Choose from your Instagram posts to get started
        </p>
      </motion.div>

      {posts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full"
          >
            <FiInstagram className="w-10 h-10 text-gray-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-lg font-medium text-gray-600"
          >
            No posts found
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={retry}
              className="text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-105"
            >
              <FiRefreshCw className="inline-block mr-2 w-4 h-4" />
              Refresh
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
          >
            <AnimatePresence>
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  layout
                  className={`group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedPost?.id === post.id
                      ? "ring-4 ring-blue-500 ring-opacity-50 shadow-2xl scale-105 z-10"
                      : "shadow-md hover:shadow-xl hover:scale-102"
                  }`}
                  onClick={() => onSelect(post)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="overflow-hidden relative aspect-square">
                    <motion.img
                      src={
                        post.thumbnailUrl || post.mediaUrl || "/placeholder.png"
                      }
                      alt={post.caption || "Instagram post"}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100" />

                    {/* Selection indicator */}
                    <AnimatePresence>
                      {selectedPost?.id === post.id && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="flex absolute top-3 left-3 justify-center items-center w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Media type indicator */}
                    {getMediaLabel(post.mediaType) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className="flex absolute top-3 right-3 items-center px-2 py-1 space-x-1 text-xs font-medium text-white rounded-full shadow-lg backdrop-blur-sm bg-black/70"
                      >
                        {getMediaIcon(post.mediaType)}
                        <span>{getMediaLabel(post.mediaType)}</span>
                      </motion.div>
                    )}

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="flex absolute inset-0 justify-center items-center bg-blue-500/10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        className="flex justify-center items-center w-12 h-12 rounded-full shadow-xl bg-white/90"
                      >
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex justify-center items-center w-6 h-6 rounded-full border-2 border-blue-500"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Post info */}
                  <div className="flex relative justify-between p-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      className="space-y-2"
                    >
                      <p className="text-xs leading-relaxed text-gray-600 line-clamp-2">
                        {post.caption
                          ? post.caption.substring(0, 60) +
                            (post.caption.length > 60 ? "..." : "")
                          : "No caption"}
                      </p>
                      <p className="text-xs font-medium text-gray-400">
                        {post.timestamp
                          ? new Date(post.timestamp).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )
                          : ""}
                      </p>
                    </motion.div>
                    {selectedPost?.id === post.id && (
                      <div
                        onClick={openModal}
                        className="absolute right-2 bottom-2 self-end p-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FiArrowRight />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Button
                onClick={loadMore}
                disabled={loadingMore}
                className="px-8 py-3 font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-200 transform hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 hover:shadow-xl hover:scale-105 disabled:transform-none disabled:shadow-md"
              >
                {loadingMore ? (
                  <motion.div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <FiLoader className="w-4 h-4" />
                    </motion.div>
                    <span>Loading more...</span>
                  </motion.div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Load More Posts</span>
                    <motion.div
                      whileHover={{ y: 2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.8,
                      }}
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                )}
              </Button>
            </motion.div>
          )}

          {/* End of posts indicator */}
          {!hasMore && posts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="py-8 mt-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="inline-flex justify-center items-center mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full"
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-6 h-6 text-green-500"
                >
                  ✓
                </motion.div>
              </motion.div>
              <p className="text-sm font-medium text-gray-600">
                You've reached the end of your posts
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {posts.length} posts loaded
              </p>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

// ------------------ Step 2 ------------------
function Step2_ChooseAutomationType({ automationType, setAutomationType }) {
  const options = [
    { value: "dm", label: "Send DM to commentes" },
    { value: "reply", label: "Send Reply to comments" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <div className="px-4 mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          Choose Automation Type
        </h2>
        <p className="text-sm text-gray-600">
          Select how you want to engage with your audience
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {options.map((opt, index) => (
          <motion.label
            key={opt.value}
            variants={itemVariants}
            className={`group relative flex items-center gap-4 p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-xl ${
              automationType === opt.value
                ? "ring-4 ring-blue-500 ring-opacity-50 shadow-2xl scale-102"
                : "shadow-md hover:shadow-lg border border-gray-100"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Custom Radio Button */}
            <div className="relative">
              <input
                type="radio"
                value={opt.value}
                checked={automationType === opt.value}
                onChange={(e) => setAutomationType(e.target.value)}
                className="sr-only"
              />
              <motion.div
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  automationType === opt.value
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 group-hover:border-blue-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {automationType === opt.value && (
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Label */}
            <span
              className={`font-medium transition-colors duration-300 text-sm ${
                automationType === opt.value
                  ? "text-blue-700"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            >
              {opt.label}
            </span>
          </motion.label>
        ))}
      </motion.div>
    </div>
  );
}

function Step3_ConfigureReplies({ replySettings, setReplySettings }) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          Configure Replies
        </h2>
        <p className="text-sm text-gray-600">
          Set up how you want to respond to comments on your selected post
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-4 mx-auto bg-white rounded-xl shadow-lg"
      >
        {/* Reply Mode Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Reply Mode
          </label>
          <div className="relative">
            <select
              value={replySettings.mode}
              onChange={(e) =>
                setReplySettings({ ...replySettings, mode: e.target.value })
              }
              className="p-4 w-full text-gray-700 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-sm transition-all duration-300 appearance-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none hover:border-gray-300 hover:shadow-md"
            >
              <option value="all">Reply to all comments</option>
              <option value="keywords">
                Reply to comments with specific keywords
              </option>
            </select>
            <motion.div
              className="flex absolute inset-y-0 right-4 items-center pointer-events-none"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Keywords Section - Conditional */}
        <AnimatePresence>
          {replySettings.mode === "keywords" && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-6"
            >
              <label className="block mb-3 text-sm font-semibold text-gray-700">
                Keywords (comma separated)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={replySettings.keywords}
                  onChange={(e) =>
                    setReplySettings({
                      ...replySettings,
                      keywords: e.target.value,
                    })
                  }
                  placeholder="e.g., amazing, love, great, awesome"
                  className="p-4 w-full text-gray-700 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 hover:shadow-md"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex absolute top-4 right-4 items-center text-gray-400"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 text-xs text-gray-500"
              >
                Separate multiple keywords with commas. Comments containing any
                of these words will receive a reply.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reply Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Reply Message
          </label>
          <div className="relative">
            <textarea
              value={replySettings.message}
              onChange={(e) =>
                setReplySettings({ ...replySettings, message: e.target.value })
              }
              placeholder="Write your reply message here..."
              className="p-4 w-full text-gray-700 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-sm transition-all duration-300 resize-none focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none hover:border-gray-300 hover:shadow-md"
              rows="4"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex absolute top-4 right-4 items-center text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between mt-2"
          >
            <p className="text-xs text-gray-500">
              This message will be sent as a reply to matching comments.
            </p>
            <motion.span
              animate={{
                color:
                  replySettings.message.length > 150 ? "#ef4444" : "#6b7280",
              }}
              className="text-xs font-medium"
            >
              {replySettings.message.length}/280
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200"
        >
          <div className="flex items-center mb-3 space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="flex justify-center items-center w-6 h-6 bg-blue-500 rounded-full"
            >
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <h3 className="text-sm font-semibold text-blue-700">Preview</h3>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-blue-600">
              <span className="font-medium">Mode:</span>{" "}
              {replySettings.mode === "all"
                ? "Reply to all comments"
                : "Reply to comments with keywords"}
            </p>
            {replySettings.mode === "keywords" && replySettings.keywords && (
              <p className="text-xs text-blue-600">
                <span className="font-medium">Keywords:</span>{" "}
                {replySettings.keywords}
              </p>
            )}
            <div className="p-3 bg-white rounded-lg border-l-4 border-blue-400 shadow-sm">
              <p className="text-sm text-gray-700">
                {replySettings.message ||
                  "Your reply message will appear here..."}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Step4_ConfigureDMs({ dmSettings, setDmSettings }) {
  const validateAndUpload = async (file) => {
    if (!file) return;

    const fileType = file.type.split("/")[0];
    const fileSizeMB = file.size / (1024 * 1024);

    // Allowed extensions and size limits
    const rules = {
      image: {
        types: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
        maxSize: 8,
      },
      audio: {
        types: ["audio/aac", "audio/m4a", "audio/wav", "audio/mp4"],
        maxSize: 25,
      },
      video: {
        types: [
          "video/mp4",
          "video/ogg",
          "video/avi",
          "video/mov",
          "video/webm",
        ],
        maxSize: 25,
      },
    };

    if (!rules[fileType].types.includes(file.type)) {
      alert(
        `Invalid ${fileType} format. Allowed: ${rules[fileType].types.join(
          ", "
        )}`
      );
      return;
    }

    if (fileSizeMB > rules[fileType].maxSize) {
      alert(
        `${fileType} file too large. Max size is ${
          rules[fileType].maxSize
        }MB (yours: ${fileSizeMB.toFixed(2)}MB)`
      );
      return;
    }

    try {
      const result = await uploadData({
        path: `public/ig-automation/${Date.now()}::${file.name}::${fileType}`,
        data: file,
        options: {
          contentType: file.type,
        },
      }).result;

      return {
        path: result.path,
        type: fileType,
        name: file.name,
        size: fileSizeMB.toFixed(2),
      };
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please try again.");
      return null;
    }
  };

  // Function to add a new card
  const addCard = () => {
    const newCard = {
      title: "",
      image: null,
      buttons: [
        { label: "", url: "" }, // Default: 1 button
      ],
    };
    setDmSettings({
      ...dmSettings,
      cards: [...(dmSettings.cards || []), newCard],
    });
  };

  // Function to remove a card
  const removeCard = (cardIndex) => {
    const updatedCards = dmSettings.cards.filter(
      (_, index) => index !== cardIndex
    );
    setDmSettings({
      ...dmSettings,
      cards: updatedCards,
    });
  };

  // Function to update card data
  const updateCard = (cardIndex, field, value) => {
    const updatedCards = [...(dmSettings.cards || [])];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      [field]: value,
    };
    setDmSettings({
      ...dmSettings,
      cards: updatedCards,
    });
  };

  // Function to update card button
  const updateCardButton = (cardIndex, buttonIndex, field, value) => {
    const updatedCards = [...(dmSettings.cards || [])];
    const updatedButtons = [...updatedCards[cardIndex].buttons];
    updatedButtons[buttonIndex] = {
      ...updatedButtons[buttonIndex],
      [field]: value,
    };
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      buttons: updatedButtons,
    };
    setDmSettings({
      ...dmSettings,
      cards: updatedCards,
    });
  };

  // Function to add a button to a card
  const addButtonToCard = (cardIndex) => {
    const updatedCards = [...(dmSettings.cards || [])];
    const currentButtons = updatedCards[cardIndex].buttons || [];

    // Max 3 buttons per card
    if (currentButtons.length >= 3) {
      alert("Maximum 3 buttons allowed per card");
      return;
    }

    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      buttons: [...currentButtons, { label: "", url: "" }],
    };

    setDmSettings({
      ...dmSettings,
      cards: updatedCards,
    });
  };

  // Function to remove a button from a card
  const removeButtonFromCard = (cardIndex, buttonIndex) => {
    const updatedCards = [...(dmSettings.cards || [])];
    const currentButtons = updatedCards[cardIndex].buttons || [];

    // Minimum 1 button per card
    if (currentButtons.length <= 1) {
      alert("At least 1 button is required per card");
      return;
    }

    const updatedButtons = currentButtons.filter(
      (_, index) => index !== buttonIndex
    );
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      buttons: updatedButtons,
    };

    setDmSettings({
      ...dmSettings,
      cards: updatedCards,
    });
  };

  // Function to show validation errors for buttons
  const getButtonValidationError = (button) => {
    const hasLabel = button.label && button.label.trim() !== "";
    const hasUrl = button.url && button.url.trim() !== "";

    if (hasLabel && !hasUrl) {
      return "Please enter URL as well";
    }
    if (!hasLabel && hasUrl) {
      return "Please enter label as well";
    }
    return "";
  };

  // Function to handle card media upload
  const handleCardMediaUpload = async (cardIndex, file) => {
    const mediaData = await validateAndUpload(file);
    if (mediaData) {
      updateCard(cardIndex, "image", mediaData);
    }
  };

  // Use useEffect to initialize button card when type changes to BUTTON_TEMPLATE
  React.useEffect(() => {
    if (dmSettings.type === "BUTTON_TEMPLATE" && !dmSettings.buttonCard) {
      setDmSettings((prev) => ({
        ...prev,
        buttonCard: {
          title: "",
          buttons: [{ label: "", url: "" }],
        },
      }));
    }
  }, [dmSettings.type, dmSettings.buttonCard]);

  // Function to update single button card
  const updateButtonCard = (field, value) => {
    setDmSettings({
      ...dmSettings,
      buttonCard: {
        ...dmSettings.buttonCard,
        [field]: value,
      },
    });
  };

  // Function to update single button card button
  const updateButtonCardButton = (buttonIndex, field, value) => {
    const updatedButtons = [...(dmSettings.buttonCard?.buttons || [])];
    updatedButtons[buttonIndex] = {
      ...updatedButtons[buttonIndex],
      [field]: value,
    };

    setDmSettings({
      ...dmSettings,
      buttonCard: {
        ...dmSettings.buttonCard,
        buttons: updatedButtons,
      },
    });
  };

  // Function to add button to single button card
  const addButtonToButtonCard = () => {
    const currentButtons = dmSettings.buttonCard?.buttons || [];

    // Max 3 buttons
    if (currentButtons.length >= 3) {
      alert("Maximum 3 buttons allowed");
      return;
    }

    setDmSettings({
      ...dmSettings,
      buttonCard: {
        ...dmSettings.buttonCard,
        buttons: [...currentButtons, { label: "", url: "" }],
      },
    });
  };

  // Function to remove button from single button card
  const removeButtonFromButtonCard = (buttonIndex) => {
    const currentButtons = dmSettings.buttonCard?.buttons || [];

    // Minimum 1 button
    if (currentButtons.length <= 1) {
      alert("At least 1 button is required");
      return;
    }

    const updatedButtons = currentButtons.filter(
      (_, index) => index !== buttonIndex
    );
    setDmSettings({
      ...dmSettings,
      buttonCard: {
        ...dmSettings.buttonCard,
        buttons: updatedButtons,
      },
    });
  };

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          Configure DMs
        </h2>
        <p className="text-sm text-gray-600">
          Set up your direct message configuration
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* DM Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
        >
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            DM Mode
          </label>
          <select
            value={dmSettings.mode}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, mode: e.target.value })
            }
            className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
          >
            <option value="all">DM all commenters</option>
            <option value="keywords">
              DM commenters with specific keywords
            </option>
          </select>
        </motion.div>

        {dmSettings.mode === "keywords" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
          >
            <label className="block mb-3 text-sm font-semibold text-gray-700">
              Keywords (comma separated)
            </label>
            <input
              type="text"
              value={dmSettings.keywords}
              onChange={(e) =>
                setDmSettings({ ...dmSettings, keywords: e.target.value })
              }
              className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
              placeholder="Enter keywords separated by commas"
            />
          </motion.div>
        )}

        {/* DM Type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
        >
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            DM Type
          </label>
          <select
            value={dmSettings.type}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, type: e.target.value })
            }
            className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
          >
            <option value="TEXT">Normal text message</option>
            <option value="TEXT_MEDIA">Media + text message</option>
            <option value="GENERIC_TEMPLATE">Product Carousel Cards</option>
            <option value="BUTTON_TEMPLATE">Single Button Card</option>
          </select>
        </motion.div>

        {/* Text Message */}
        {dmSettings.type === "TEXT" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
          >
            <label className="block mb-3 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              value={dmSettings.message}
              onChange={(e) =>
                setDmSettings({ ...dmSettings, message: e.target.value })
              }
              rows={4}
              className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 resize-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
              placeholder="Enter your message..."
            />
          </motion.div>
        )}

        {/* Media + Text */}
        {dmSettings.type === "TEXT_MEDIA" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="space-y-6"
          >
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg">
              <label className="block mb-3 text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                value={dmSettings.message}
                onChange={(e) =>
                  setDmSettings({ ...dmSettings, message: e.target.value })
                }
                rows={4}
                className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 resize-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
                placeholder="Enter your message..."
              />
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg">
              <label className="block mb-3 text-sm font-semibold text-gray-700">
                Upload Media
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*,audio/*,video/*"
                  onChange={async (e) => {
                    const mediaData = await validateAndUpload(
                      e.target.files[0]
                    );
                    if (mediaData) {
                      setDmSettings({ ...dmSettings, media: mediaData });
                    }
                  }}
                  className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hover:border-blue-400"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 mt-2 text-xs text-gray-500 bg-gray-50 rounded-lg"
              >
                <span className="font-medium">Supported formats:</span>
                <br />
                📸 Images (PNG, JPEG, GIF): Max 8MB
                <br />
                🎵 Audio (AAC, M4A, WAV, MP4): Max 25MB
                <br />
                🎥 Video (MP4, OGG, AVI, MOV, WEBM): Max 25MB
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Product Carousel Cards */}
        {dmSettings.type === "GENERIC_TEMPLATE" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-lg">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Product Cards
                </h3>
                <p className="text-sm text-gray-600">
                  Create engaging product carousel cards
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={addCard}
                className="p-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl shrink-0"
              >
                + Add Card
              </motion.button>
            </div>

            {(dmSettings.cards || []).length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-300 border-dashed"
              >
                <div className="inline-flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full">
                  <span className="text-2xl">🛍️</span>
                </div>
                <p className="mb-2 text-lg font-medium text-gray-600">
                  No cards added yet
                </p>
                <p className="text-sm text-gray-500">
                  Click "Add Card" to create your first product card
                </p>
              </motion.div>
            )}

            {(dmSettings.cards || []).map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: cardIndex * 0.1 }}
                className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex justify-center items-center w-8 h-8 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      {cardIndex + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Card {cardIndex + 1}
                    </h4>
                  </div>
                  {(dmSettings.cards || []).length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => removeCard(cardIndex)}
                      className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:shadow-lg"
                    >
                      Remove
                    </motion.button>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Card Title
                    </label>
                    <input
                      type="text"
                      value={card.title || ""}
                      onChange={(e) =>
                        updateCard(cardIndex, "title", e.target.value)
                      }
                      className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
                      placeholder="Enter card title..."
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Product Media
                    </label>
                    <input
                      type="file"
                      accept="image/*,audio/*,video/*"
                      onChange={(e) =>
                        handleCardMediaUpload(cardIndex, e.target.files[0])
                      }
                      className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hover:border-blue-400"
                    />
                    <div className="p-3 mt-2 text-xs text-gray-500 bg-gray-50 rounded-lg">
                      <span className="font-medium">Supported formats:</span>
                      <br />
                      📸 Images (PNG, JPEG, GIF): Max 8MB | 🎵 Audio (AAC, M4A,
                      WAV, MP4): Max 25MB | 🎥 Video (MP4, OGG, AVI, MOV, WEBM):
                      Max 25MB
                    </div>
                  </div>

                  {/* Card Buttons */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="block text-sm font-semibold text-gray-700">
                        Buttons
                      </label>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => addButtonToCard(cardIndex)}
                        disabled={(card.buttons || []).length >= 3}
                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md transition-all duration-200 hover:from-green-600 hover:to-green-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        + Add Button
                      </motion.button>
                    </div>

                    {card.buttons?.map((button, buttonIndex) => {
                      const validationError = getButtonValidationError(button);
                      return (
                        <motion.div
                          key={buttonIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: buttonIndex * 0.1 }}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                                {buttonIndex + 1}
                              </div>
                              <span className="text-sm font-semibold text-gray-700">
                                Button {buttonIndex + 1}
                              </span>
                            </div>
                            {(card.buttons || []).length > 1 && (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={() =>
                                  removeButtonFromCard(cardIndex, buttonIndex)
                                }
                                className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full shadow-sm transition-all duration-200 hover:bg-red-600 hover:shadow-md"
                              >
                                Remove
                              </motion.button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                              <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                                Label
                              </label>
                              <input
                                type="text"
                                value={button.label || ""}
                                onChange={(e) =>
                                  updateCardButton(
                                    cardIndex,
                                    buttonIndex,
                                    "label",
                                    e.target.value
                                  )
                                }
                                className={`p-3 w-full text-gray-700 bg-white rounded-lg border transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                                  validationError
                                    ? "bg-red-50 border-red-500"
                                    : "border-gray-200"
                                }`}
                                placeholder="e.g., Buy Now"
                              />
                            </div>
                            <div>
                              <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                                URL
                              </label>
                              <input
                                type="text"
                                value={button.url || ""}
                                onChange={(e) =>
                                  updateCardButton(
                                    cardIndex,
                                    buttonIndex,
                                    "url",
                                    e.target.value
                                  )
                                }
                                className={`p-3 w-full text-gray-700 bg-white rounded-lg border transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                                  validationError
                                    ? "bg-red-50 border-red-500"
                                    : "border-gray-200"
                                }`}
                                placeholder="https://..."
                              />
                            </div>
                          </div>

                          {validationError && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-3 mt-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200"
                            >
                              ⚠️ {validationError}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Single Button Card */}
        {dmSettings.type === "BUTTON_TEMPLATE" && dmSettings.buttonCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-white rounded-xl border border-gray-100 shadow-lg"
          >
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Single Button Card
              </h3>
              <p className="text-sm text-gray-600">
                Create a focused call-to-action card
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Card Title
                </label>
                <input
                  type="text"
                  value={dmSettings.buttonCard?.title || ""}
                  onChange={(e) => updateButtonCard("title", e.target.value)}
                  className="p-3 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:bg-gray-100"
                  placeholder="Enter card title..."
                />
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-gray-700">
                    Buttons
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={addButtonToButtonCard}
                    disabled={
                      (dmSettings.buttonCard?.buttons || []).length >= 3
                    }
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md transition-all duration-200 hover:from-green-600 hover:to-green-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    + Add Button
                  </motion.button>
                </div>

                {dmSettings.buttonCard?.buttons?.map((button, buttonIndex) => {
                  const validationError = getButtonValidationError(button);
                  return (
                    <motion.div
                      key={buttonIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: buttonIndex * 0.1 }}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                            {buttonIndex + 1}
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            Button {buttonIndex + 1}
                          </span>
                        </div>
                        {(dmSettings.buttonCard?.buttons || []).length > 1 && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() =>
                              removeButtonFromButtonCard(buttonIndex)
                            }
                            className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full shadow-sm transition-all duration-200 hover:bg-red-600 hover:shadow-md"
                          >
                            Remove
                          </motion.button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            Label
                          </label>
                          <input
                            type="text"
                            value={button.label || ""}
                            onChange={(e) =>
                              updateButtonCardButton(
                                buttonIndex,
                                "label",
                                e.target.value
                              )
                            }
                            className={`p-3 w-full text-gray-700 bg-white rounded-lg border transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                              validationError
                                ? "bg-red-50 border-red-500"
                                : "border-gray-200"
                            }`}
                            placeholder="e.g., Visit Website"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            URL
                          </label>
                          <input
                            type="text"
                            value={button.url || ""}
                            onChange={(e) =>
                              updateButtonCardButton(
                                buttonIndex,
                                "url",
                                e.target.value
                              )
                            }
                            className={`p-3 w-full text-gray-700 bg-white rounded-lg border transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                              validationError
                                ? "bg-red-50 border-red-500"
                                : "border-gray-200"
                            }`}
                            placeholder="https://..."
                          />
                        </div>
                      </div>

                      {validationError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 mt-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200"
                        >
                          ⚠️ {validationError}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-4 mt-4 rounded-xl border border-blue-200"
      >
        <div className="flex items-center mb-3 space-x-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="flex justify-center items-center w-6 h-6 bg-blue-500 rounded-full"
          >
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <h3 className="text-sm font-semibold text-blue-700">Preview</h3>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-blue-600">
            <span className="font-medium">Mode:</span>{" "}
            {dmSettings.mode === "all"
              ? "DM to all users"
              : "DM to users with keywords"}
          </p>
          {dmSettings.mode === "keywords" && dmSettings.keywords && (
            <p className="text-xs text-blue-600">
              <span className="font-medium">Keywords:</span>{" "}
              {dmSettings.keywords}
            </p>
          )}
          {dmSettings.type === "TEXT_MEDIA" && dmSettings?.media?.path && (
            <p className="text-xs text-blue-600">
              <span className="font-medium">Media:</span>{" "}
              <div className="p-3 mt-2 bg-gray-50 rounded-md border">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">{dmSettings.media.name}</div>
                    <div className="text-xs">
                      Size: {dmSettings.media.size}MB | Type:{" "}
                      {dmSettings.media.type}
                    </div>
                  </div>
                </div>

                {dmSettings.media.type === "image" && (
                  <img
                    src={
                      getMediaUrl(dmSettings.media.path) || "/placeholder.png"
                    }
                    alt="Card Preview"
                    className="object-cover max-w-full h-32 rounded border"
                  />
                )}

                {dmSettings.media.type === "video" && (
                  <video
                    src={
                      getMediaUrl(dmSettings.media.path) || "/placeholder.png"
                    }
                    controls
                    className="max-w-full h-32 rounded border"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                {dmSettings.media.type === "audio" && (
                  <audio
                    src={dmSettings.media.path}
                    controls
                    className="w-full"
                  >
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </p>
          )}
          {(dmSettings.type === "TEXT_MEDIA" || dmSettings.type === "TEXT") && (
            <div className="p-3 bg-white rounded-lg border-l-4 border-blue-400 shadow-sm">
              <p className="text-sm text-gray-700">
                {dmSettings.message || "Your reply message will appear here..."}
              </p>
            </div>
          )}
          {dmSettings.type === "GENERIC_TEMPLATE" &&
            dmSettings?.cards?.length > 0 && (
              <p className="text-xs text-black/90">
                <span className="font-medium">Cards:</span>
                <div className="flex gap-2 p-3 mt-2 rounded-xl border">
                  {dmSettings.cards.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between items-start bg-gray-100 rounded-xl border w-fit max-w-64"
                    >
                      {dmSettings.type === "GENERIC_TEMPLATE" &&
                        card?.image?.path && (
                          <img
                            src={
                              getMediaUrl(card?.image?.path) ||
                              "/placeholder.png"
                            }
                            alt="Card Preview"
                            className="object-cover w-full h-32 rounded"
                          />
                        )}
                      <div className="flex flex-col gap-1 p-2 w-full min-w-32">
                        <div className="flex flex-col mb-2">
                          <span className="text-lg font-bold leading-none line-clamp-1">
                            {card.title}
                          </span>
                          <span className="text-[10px] font-light text-gray-600">
                            Powered by Briggo
                          </span>
                        </div>
                        {card?.buttons?.map((button, index) => (
                          <div key={index}>
                            {button.label && (
                              <button className="p-2 w-full font-semibold bg-gray-200 rounded-lg text-black/100 text-md line-clamp-1">
                                {button.label}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </p>
            )}
          {dmSettings.type === "BUTTON_TEMPLATE" && dmSettings?.buttonCard && (
            <div className="text-xs text-black/90">
              <span className="font-medium">Button Card:</span>
              <div className="flex gap-2 p-3 mt-2 bg-gray-100 rounded-xl border w-fit min-w-32 max-w-64">
                <div className="flex flex-col gap-1 w-full max-w-64">
                  <div className="flex flex-col mb-1">
                    <span className="text-lg font-bold leading-none line-clamp-1">
                      {dmSettings?.buttonCard?.title}
                    </span>
                    <span className="text-[10px] font-light text-gray-600">
                      Powered by Briggo
                    </span>
                  </div>

                  {dmSettings?.buttonCard?.buttons?.map((button, index) => (
                    <div key={index}>
                      {button?.label && (
                        <button className="overflow-hidden p-2 w-full font-semibold bg-gray-200 rounded-lg text-black/100 text-md line-clamp-1">
                          {button?.label}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function AutomationPage() {
  const { user } = useUser();
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [automatedPosts, setAutomatedPosts] = useState([]);
  const [automatedPostsLoading, setAutomatedPostsLoading] = useState(false);
  const [modifyPostAutomation, setModifyPostAutomation] = useState(null);
  const [modifyPostAutomationType, setModifyPostAutomationType] =
    useState(null);
  const [postIndex, setPostIndex] = useState(null);
  const [selectedModifyPost, setSelectedModifyPost] = useState(null);

  const [tab, setTab] = useState("posts");

  // Modal-specific states
  const [modalStep, setModalStep] = useState(2); // Start from step 2 in modal
  const [automationType, setAutomationType] = useState("");
  const [replySettings, setReplySettings] = useState({
    mode: "all",
    keywords: "",
    message: "",
  });
  const [dmSettings, setDmSettings] = useState({
    mode: "all",
    keywords: "",
    type: "TEXT_MEDIA",
    message: "",
    image: null,
    cardTitle: "",
    productImage: null,
    buttons: [],
    cards: [],
  });

  useEffect(() => {
    loadAutomatedPosts();
  }, [user]);

  const loadAutomatedPosts = async () => {
    if (!user) return;

    try {
      setAutomatedPostsLoading(true);
      const res = await manageIgMediaAutomationAPI("LIST", { userId: user.id });
      if (res.success && res.items) {
        setAutomatedPosts(res.items || []);
      }
    } catch (error) {
    } finally {
      setAutomatedPostsLoading(false);
    }
  };

  const openModal = () => {
    if (!selectedPost) {
      alert("Please select a post to continue");
      return;
    }
    setModalStep(2);
    setIsModalOpen(true);
    document?.body?.classList?.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document?.body?.classList?.remove("modal-open");
    // Reset modal states if needed
    setModalStep(2);
    setAutomationType("");
    setReplySettings({
      mode: "all",
      keywords: "",
      message: "",
    });
    setDmSettings({
      mode: "all",
      keywords: "",
      type: "TEXT_MEDIA",
      message: "",
      image: null,
      cardTitle: "",
      productImage: null,
      buttons: [],
      cards: [],
    });
  };

  const nextModalStep = () => {
    // Validation before proceeding
    if (modalStep === 2 && !automationType) {
      alert("Please choose an automation type");
      return;
    }
    setModalStep((prev) => prev + 1);
  };

  const prevModalStep = () => setModalStep((prev) => prev - 1);

  const canProceedModal = () => {
    switch (modalStep) {
      case 2:
        // Step 2: Must select an automation type
        return automationType !== "";

      case 3:
        if (automationType === "reply") {
          // Reply automation validation
          const { mode, keywords, message } = replySettings;

          // Message is always required
          if (!message.trim()) return false;

          // If mode is "keywords", keywords are required
          if (mode === "keywords" && !keywords.trim()) return false;

          return true;
        }

        if (automationType === "dm") {
          // DM automation validation
          const { mode, keywords, type, message, cards, buttonCard } =
            dmSettings;

          // If mode is "keywords", keywords are required
          if (mode === "keywords" && !keywords.trim()) return false;

          // Validation based on DM type
          switch (type) {
            case "TEXT":
              return message.trim() !== "";

            case "TEXT_MEDIA":
              // Both message and media are required
              return message.trim() !== "" && dmSettings?.media?.path !== null;

            case "GENERIC_TEMPLATE":
              // Must have at least one card with required fields
              if (!cards || cards.length === 0) return false;

              return cards.every((card) => {
                // Each card must have title and image
                if (!card.title?.trim() || !card.image) return false;

                // Each card must have at least one button with label and URL
                if (!card.buttons || card.buttons.length === 0) return false;

                return card.buttons.every(
                  (button) => button.label?.trim() && button.url?.trim()
                );
              });

            case "BUTTON_TEMPLATE":
              // Must have button card with title and buttons
              if (!buttonCard?.title?.trim()) return false;

              if (!buttonCard.buttons || buttonCard.buttons.length === 0)
                return false;

              return buttonCard.buttons.every(
                (button) => button.label?.trim() && button.url?.trim()
              );

            default:
              return false;
          }
        }

        return true;

      default:
        return true;
    }
  };

  const handleSaveAutomation = async () => {
    let response;
    if (automationType === "reply") {
      response = await manageIgMediaAutomationAPI("CREATE", {
        id: selectedPost.id,
        userId: user.id,
        mediaType: selectedPost.mediaType,
        mediaUrl: selectedPost.mediaUrl,
        postedAt: new Date(selectedPost.timestamp).toISOString(),
        isActive: true,
        automationType: "COMMENT_ONLY",
        automationTrigger:
          replySettings.mode === "all" ? "ANY_COMMENT" : "SPECIFIC_KEYWORD",
        keywords: replySettings.keywords
          .split(",")
          .map((k) => k.toLowerCase().trim()),
        replyCommentText: replySettings.message,
      });
    }

    if (automationType === "dm") {
      if (dmSettings.type === "TEXT_MEDIA" || dmSettings.type === "TEXT") {
        response = await manageIgMediaAutomationAPI("CREATE", {
          id: selectedPost.id,
          userId: user.id,
          mediaType: selectedPost.mediaType,
          mediaUrl: selectedPost.mediaUrl,
          postedAt: new Date(selectedPost.timestamp).toISOString(),
          isActive: true,
          automationType: "DM_ONLY",
          automationTrigger:
            dmSettings.mode === "all" ? "ANY_COMMENT" : "SPECIFIC_KEYWORD",
          keywords: dmSettings.keywords
            .split(",")
            .map((k) => k.toLowerCase().trim()),
          replyDMType: dmSettings.type,
          replyDMText: dmSettings.message,
          ...(dmSettings.type === "TEXT_MEDIA" && {
            replyDMMediaUrl: dmSettings.media.path,
          }),
        });
      } else if (dmSettings.type === "GENERIC_TEMPLATE") {
        const cardsData = (dmSettings.cards || []).map((card) => ({
          mediaUrl: card.image?.path || "",
          title: card.title || "",
          buttons: (card.buttons || []).map((btn) => ({
            title: btn.label || "",
            link: btn.url || "",
          })),
        }));

        response = await manageIgMediaAutomationAPI("CREATE", {
          id: selectedPost.id,
          userId: user.id,
          mediaType: selectedPost.mediaType,
          mediaUrl: selectedPost.mediaUrl,
          postedAt: new Date(selectedPost.timestamp).toISOString(),
          isActive: true,
          automationType: "DM_ONLY",
          automationTrigger:
            dmSettings.mode === "all" ? "ANY_COMMENT" : "SPECIFIC_KEYWORD",
          keywords: dmSettings.keywords
            .split(",")
            .map((k) => k.toLowerCase().trim()),
          replyDMType: dmSettings.type,
          replyDMCards: cardsData,
        });
      } else if (dmSettings.type === "BUTTON_TEMPLATE") {
        const buttonCardData = {
          title: dmSettings.buttonCard?.title || "",
          buttons: (dmSettings.buttonCard?.buttons || []).map((btn) => ({
            title: btn.label || "",
            link: btn.url || "",
          })),
        };

        response = await manageIgMediaAutomationAPI("CREATE", {
          id: selectedPost.id,
          userId: user.id,
          mediaType: selectedPost.mediaType,
          mediaUrl: selectedPost.mediaUrl,
          postedAt: new Date(selectedPost.timestamp).toISOString(),
          isActive: true,
          automationType: "DM_ONLY",
          automationTrigger:
            dmSettings.mode === "all" ? "ANY_COMMENT" : "SPECIFIC_KEYWORD",
          keywords: dmSettings.keywords
            .split(",")
            .map((k) => k.toLowerCase().trim()),
          replyDMType: dmSettings.type,
          replyDMCards: [buttonCardData],
        });
      }
    }

    if (response.success) {
      alert("Automation saved successfully!");
      closeModal();
    } else {
      alert("Failed to save automation");
    }
  };

  return (
    <div className="flex relative flex-col gap-4 w-full">
      <div>
        {/* show tabs */}
        <div className="flex space-x-4">
          <button
            onClick={() => setTab("posts")}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
              tab === "posts" ? "border-b-2 border-blue-500 text-blue-500" : ""
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setTab("automatedPosts")}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
              tab === "automatedPosts"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            Automated Posts
          </button>
        </div>
      </div>
      <div>
        <div className={`${tab === "posts" ? "" : "hidden"}`}>
          {/* Step 1 - Always visible */}
          <Step1_SelectPost
            selectedPost={selectedPost}
            onSelect={setSelectedPost}
            user={user}
            openModal={openModal}
          />

          {/* Modal for Steps 2, 3, and 4 */}
          {isModalOpen && (
            <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-hidden">
                {/* Modal Header */}
                <div className="flex flex-col p-6 border-b">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Setup Automation
                    </h2>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 transition-colors hover:text-gray-600"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Step {modalStep} of 3
                      </span>
                      <span className="text-sm text-gray-500">
                        {Math.round((modalStep / 3) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${(modalStep / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="py-4 max-h-[25rem] overflow-y-auto no-scrollbar">
                  {modalStep === 2 && (
                    <Step2_ChooseAutomationType
                      automationType={automationType}
                      setAutomationType={setAutomationType}
                    />
                  )}
                  {modalStep === 3 && automationType === "reply" && (
                    <Step3_ConfigureReplies
                      replySettings={replySettings}
                      setReplySettings={setReplySettings}
                    />
                  )}
                  {modalStep === 3 && automationType === "dm" && (
                    <Step4_ConfigureDMs
                      dmSettings={dmSettings}
                      setDmSettings={setDmSettings}
                    />
                  )}
                </div>

                {/* Modal Footer */}
                <div className="flex gap-4 p-3 bg-gray-50 border-t">
                  {modalStep > 2 && (
                    <Button
                      onClick={prevModalStep}
                      className="text-sm text-white bg-gray-500 hover:bg-gray-600 h-fit"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={closeModal}
                    className="text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 h-fit"
                  >
                    Cancel
                  </Button>
                  {modalStep < 3 && (
                    <Button
                      onClick={nextModalStep}
                      disabled={!canProceedModal()}
                      className="ml-auto text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed h-fit"
                    >
                      Next
                    </Button>
                  )}

                  {modalStep === 3 && (
                    <Button
                      onClick={handleSaveAutomation}
                      className="ml-auto text-sm text-white bg-green-500 hover:bg-green-600 h-fit shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!canProceedModal()}
                    >
                      Save Automation
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${tab === "automatedPosts" ? "" : "hidden"}`}>
          {automatedPostsLoading && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
          >
            <AnimatePresence>
              {automatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  layout
                  className={`overflow-hidden relative bg-white rounded-xl shadow-lg transition-all duration-300 cursor-pointer group`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="overflow-hidden relative aspect-square">
                    <motion.img
                      src={
                        post?.mediaDetails?.thumbnailUrl ||
                        post?.mediaDetails?.mediaUrl ||
                        "/placeholder.png"
                      }
                      alt={post?.mediaDetails?.caption || "Instagram post"}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100" />

                    {/* Action buttons - Better UX positioning */}
                    {!post.isActive && (
                      <div className="flex absolute top-3 right-3 z-30 items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium text-red-500 bg-white rounded-full`}
                        >
                          Inactive
                        </span>
                      </div>
                    )}

                    <div className="flex absolute right-3 bottom-3 z-30 items-center space-x-2">
                      {/* Pause button */}
                      <div
                        className="flex justify-center items-center p-1.5 text-white rounded-full shadow-lg transition-colors backdrop-blur-sm bg-black/70 hover:bg-black/80 border-white border"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModifyPostAutomation(!modifyPostAutomation);
                          setModifyPostAutomationType(
                            post.isActive ? "pause" : "resume"
                          );
                          setSelectedModifyPost(post);
                          setPostIndex(index);
                        }}
                        title="Pause automation"
                      >
                        {post.isActive ? (
                          <FiPause className="w-4 h-4" />
                        ) : (
                          <FiPlay className="pl-0.5 w-4 h-4" />
                        )}
                      </div>

                      {/* Delete button */}
                      <div
                        className="flex justify-center items-center p-1.5 text-white rounded-full shadow-lg transition-colors bg-red-500/80 backdrop-blur-sm hover:bg-red-600/90"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModifyPostAutomation(!modifyPostAutomation);
                          setModifyPostAutomationType("delete");
                          setSelectedModifyPost(post);
                        }}
                        title="Delete automation"
                      >
                        <FiTrash className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="flex absolute inset-0 justify-center items-center bg-blue-500/10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        className="flex justify-center items-center w-12 h-12 rounded-full shadow-xl bg-white/90"
                      >
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex justify-center items-center w-6 h-6 rounded-full border-2 border-blue-500"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Post info */}
                  <div className="flex relative flex-col gap-2 justify-between p-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      className="space-y-2"
                    >
                      {post.automationTrigger === "SPECIFIC_KEYWORD" ? (
                        <div className="flex flex-col gap-1 items-center">
                          <span className="w-full text-xs font-medium">
                            {post.automationType === "COMMENT_ONLY"
                              ? "Reply on Specific Keyword(s):"
                              : "DM on Specific Keyword(s):"}
                          </span>
                          <div className="flex flex-wrap gap-2 items-center w-full">
                            {post.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="p-1 px-3 max-w-full text-xs font-medium text-white break-all bg-gradient-to-r from-blue-400 to-indigo-600 rounded-md w-fit"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className="w-full text-xs font-medium">
                            {post.automationType === "COMMENT_ONLY"
                              ? "Reply on Any Comment"
                              : "DM on Any Comment"}
                          </span>
                          {post.replyDMText && (
                            <span className="px-2 py-1 text-xs italic font-medium text-gray-800 bg-blue-100 rounded-lg border border-t-0 border-r-0 border-b-0 border-l-4 border-blue-400">
                              {post.automationType === "COMMENT_ONLY"
                                ? "Reply Text: "
                                : "DM Text: "}
                              {post.replyDMText}
                            </span>
                          )}
                          {post.replyCommentText && (
                            <span className="px-2 py-1 text-xs italic font-medium text-gray-800 bg-blue-100 rounded-lg border border-t-0 border-r-0 border-b-0 border-l-4 border-blue-400">
                              Reply Text: {post.replyCommentText}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Automated on:</span>
                      <p className="text-xs font-medium text-gray-400">
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )
                          : ""}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {modifyPostAutomation && (
              <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
                <div className="p-6 m-2 bg-white rounded-lg shadow-lg">
                  <div className="flex justify-between">
                    <h2 className="mb-2 text-lg font-semibold">
                      {modifyPostAutomationType === "pause"
                        ? "Pause Automation"
                        : modifyPostAutomationType === "resume"
                        ? "Resume Automation"
                        : "Delete Automation"}
                    </h2>
                    <button
                      onClick={() => {
                        setModifyPostAutomation(null);
                        setModifyPostAutomationType(null);
                      }}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="mb-2 text-sm font-medium">
                    {modifyPostAutomationType === "pause"
                      ? "Are you sure you want to pause this automation?"
                      : modifyPostAutomationType === "resume"
                      ? "Are you sure you want to resume this automation?"
                      : "Are you sure you want to delete this automation?"}
                  </span>
                  <div className="flex gap-4 justify-end mt-6">
                    <button
                      onClick={() => {
                        setModifyPostAutomation(null);
                        setModifyPostAutomationType(null);
                      }}
                      className="px-4 py-2 text-sm text-gray-600 rounded-md border hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={async () => {
                        if (!selectedModifyPost) return;
                        if (
                          modifyPostAutomationType === "pause" ||
                          modifyPostAutomationType === "resume"
                        ) {
                          await manageIgMediaAutomationAPI("UPDATE", {
                            id: selectedModifyPost.id,
                            isActive:
                              modifyPostAutomationType === "pause"
                                ? false
                                : true,
                          });
                          if (res.success) {
                            setAutomatedPosts((prev) => {
                              const updatedPosts = [...prev];
                              updatedPosts[postIndex].isActive =
                                modifyPostAutomationType === "pause"
                                  ? false
                                  : true;
                              return updatedPosts;
                            });
                            setPostIndex(null);
                          }
                        } else {
                          const res = await manageIgMediaAutomationAPI(
                            "DELETE",
                            {
                              id: selectedModifyPost.id,
                            }
                          );
                          if (res.success) {
                            setAutomatedPosts((prev) => {
                              const updatedPosts = [...prev];
                              updatedPosts.splice(postIndex + 1, 1);
                              return updatedPosts;
                            });
                            setPostIndex(null);
                          }
                        }
                        setModifyPostAutomation(null);
                        setModifyPostAutomationType(null);
                      }}
                      className={`text-white px-4 py-2 rounded-md text-sm ${
                        modifyPostAutomationType === "pause"
                          ? "bg-blue-500"
                          : modifyPostAutomationType === "resume"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {modifyPostAutomationType === "pause"
                        ? "Pause"
                        : modifyPostAutomationType === "resume"
                        ? "Resume"
                        : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {!automatedPostsLoading && automatedPosts.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="text-lg text-gray-400">No automated posts found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
