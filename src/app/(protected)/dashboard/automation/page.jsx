"use client";

import Button from "@/components/ui/Button";
import { useUser } from "@/contexts/UserContext";
import {
  getMediaFromInstagramAccountAPI,
  manageIgMediaAutomationAPI,
} from "@/lib/apiHandler";
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
  FiPlay,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";

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
  };

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
    <div className="px-4 mx-auto max-w-7xl">
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
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
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
                        post.thumbnailUrl || post.mediaUrl || "/placeholder.jpg"
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
                      // <Button
                      //   onClick={openModal}
                      //   className="self-end p-0 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      // >
                      <div
                        onClick={openModal}
                        className="absolute right-2 bottom-2 self-end p-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FiArrowRight />
                      </div>
                      // </Button>
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

// ------------------ Step 3 ------------------
function Step3_ConfigureReplies({ replySettings, setReplySettings }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Configure Replies</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Reply Mode</label>
        <select
          value={replySettings.mode}
          onChange={(e) =>
            setReplySettings({ ...replySettings, mode: e.target.value })
          }
          className="p-2 w-full rounded border"
        >
          <option value="all">Reply to all comments</option>
          <option value="keywords">
            Reply to comments with specific keywords
          </option>
        </select>
      </div>

      {replySettings.mode === "keywords" && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={replySettings.keywords}
            onChange={(e) =>
              setReplySettings({ ...replySettings, keywords: e.target.value })
            }
            className="p-2 w-full rounded border"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Reply Message</label>
        <textarea
          value={replySettings.message}
          onChange={(e) =>
            setReplySettings({ ...replySettings, message: e.target.value })
          }
          className="p-2 w-full rounded border"
          rows="3"
        />
      </div>
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
        path: `ig-automation/${Date.now()}::${file.name}::${fileType}`,
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

  // Function to render media preview
  const renderMediaPreview = (media) => {
    if (!media) return null;

    const { path, type, name, size } = media;

    return (
      <div className="p-3 mt-2 bg-gray-50 rounded border">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm text-gray-600">
            <div className="font-medium">{name}</div>
            <div>
              Size: {size}MB | Type: {type}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDmSettings({ ...dmSettings, media: null })}
            className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>

        {type === "image" && (
          <img
            src={path}
            alt="Preview"
            className="object-cover max-w-full h-32 rounded border"
          />
        )}

        {type === "video" && (
          <video src={path} controls className="max-w-full h-32 rounded border">
            Your browser does not support the video tag.
          </video>
        )}

        {type === "audio" && (
          <audio src={path} controls className="w-full">
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
    );
  };

  // Function to render card media preview
  const renderCardMediaPreview = (media, cardIndex) => {
    if (!media) return null;

    const { path, type, name, size } = media;

    return (
      <div className="p-3 mt-2 bg-gray-50 rounded border">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm text-gray-600">
            <div className="font-medium">{name}</div>
            <div>
              Size: {size}MB | Type: {type}
            </div>
          </div>
          <button
            type="button"
            onClick={() => updateCard(cardIndex, "image", null)}
            className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>

        {type === "image" && (
          <img
            src={path}
            alt="Card Preview"
            className="object-cover max-w-full h-32 rounded border"
          />
        )}

        {type === "video" && (
          <video src={path} controls className="max-w-full h-32 rounded border">
            Your browser does not support the video tag.
          </video>
        )}

        {type === "audio" && (
          <audio src={path} controls className="w-full">
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
    );
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
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Configure DMs</h2>

      {/* DM Mode */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">DM Mode</label>
        <select
          value={dmSettings.mode}
          onChange={(e) =>
            setDmSettings({ ...dmSettings, mode: e.target.value })
          }
          className="p-2 w-full rounded border"
        >
          <option value="all">DM all commenters</option>
          <option value="keywords">DM commenters with specific keywords</option>
        </select>
      </div>

      {dmSettings.mode === "keywords" && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={dmSettings.keywords}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, keywords: e.target.value })
            }
            className="p-2 w-full rounded border"
          />
        </div>
      )}

      {/* DM Type */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">DM Type</label>
        <select
          value={dmSettings.type}
          onChange={(e) =>
            setDmSettings({ ...dmSettings, type: e.target.value })
          }
          className="p-2 w-full rounded border"
        >
          <option value="TEXT">Normal text message</option>
          <option value="TEXT_MEDIA">Media + text message</option>
          <option value="GENERIC_TEMPLATE">Product Carousel Cards</option>
          <option value="BUTTON_TEMPLATE">Single Button Card</option>
        </select>
      </div>

      {/* Text */}
      {dmSettings.type === "TEXT" && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            value={dmSettings.message}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, message: e.target.value })
            }
            className="p-2 w-full rounded border"
          />
        </div>
      )}

      {/* Media */}
      {dmSettings.type === "TEXT_MEDIA" && (
        <>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              value={dmSettings.message}
              onChange={(e) =>
                setDmSettings({ ...dmSettings, message: e.target.value })
              }
              className="p-2 w-full rounded border"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Upload Media</label>
            <input
              type="file"
              accept="image/*,audio/*,video/*"
              onChange={async (e) => {
                const mediaData = await validateAndUpload(e.target.files[0]);
                if (mediaData) {
                  setDmSettings({ ...dmSettings, media: mediaData });
                }
              }}
              className="p-2 w-full rounded border"
            />
            <div className="mt-1 text-sm text-gray-500">
              Images (PNG, JPEG, GIF): Max 8MB | Audio (AAC, M4A, WAV, MP4): Max
              25MB | Video (MP4, OGG, AVI, MOV, WEBM): Max 25MB
            </div>
            {renderMediaPreview(dmSettings.media)}
          </div>
        </>
      )}

      {/* Carousel - Multiple Cards */}
      {dmSettings.type === "GENERIC_TEMPLATE" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Product Cards</h3>
            <button
              type="button"
              onClick={addCard}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add Card
            </button>
          </div>

          {(dmSettings.cards || []).length === 0 && (
            <div className="p-4 mb-4 text-center text-gray-500 bg-gray-50 rounded border">
              No cards added yet. Click "Add Card" to create your first product
              card.
            </div>
          )}

          {(dmSettings.cards || []).map((card, cardIndex) => (
            <div key={cardIndex} className="p-4 mb-6 bg-gray-50 rounded border">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-md">Card {cardIndex + 1}</h4>
                {(dmSettings.cards || []).length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCard(cardIndex)}
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">Card Title</label>
                <input
                  type="text"
                  value={card.title || ""}
                  onChange={(e) =>
                    updateCard(cardIndex, "title", e.target.value)
                  }
                  className="p-2 w-full rounded border"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">Product Media</label>
                <input
                  type="file"
                  accept="image/*,audio/*,video/*"
                  onChange={(e) =>
                    handleCardMediaUpload(cardIndex, e.target.files[0])
                  }
                  className="p-2 w-full rounded border"
                />
                <div className="mt-1 text-sm text-gray-500">
                  Images (PNG, JPEG, GIF): Max 8MB | Audio (AAC, M4A, WAV, MP4):
                  Max 25MB | Video (MP4, OGG, AVI, MOV, WEBM): Max 25MB
                </div>
                {renderCardMediaPreview(card.image, cardIndex)}
              </div>

              {/* Buttons for this card */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="block font-medium">Buttons</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => addButtonToCard(cardIndex)}
                      disabled={(card.buttons || []).length >= 3}
                      className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add Button
                    </button>
                  </div>
                </div>

                {card.buttons?.map((button, buttonIndex) => {
                  const validationError = getButtonValidationError(button);
                  return (
                    <div
                      key={buttonIndex}
                      className="p-3 bg-white rounded border"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Button {buttonIndex + 1}
                        </span>
                        {(card.buttons || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeButtonFromCard(cardIndex, buttonIndex)
                            }
                            className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block mb-1 text-sm font-medium">
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
                            className={`p-2 w-full rounded border ${
                              validationError ? "border-red-500" : ""
                            }`}
                            placeholder="e.g., Buy Now"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium">
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
                            className={`p-2 w-full rounded border ${
                              validationError ? "border-red-500" : ""
                            }`}
                            placeholder="https://..."
                          />
                        </div>
                      </div>

                      {validationError && (
                        <div className="mt-1 text-sm text-red-600">
                          {validationError}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}

      {/* BUTTON_TEMPLATE - Single Button Card */}
      {dmSettings.type === "BUTTON_TEMPLATE" && dmSettings.buttonCard && (
        <>
          <div className="p-4 mb-6 bg-gray-50 rounded border">
            <h3 className="mb-4 text-lg font-medium">Single Button Card</h3>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Card Title</label>
              <input
                type="text"
                value={dmSettings.buttonCard?.title || ""}
                onChange={(e) => updateButtonCard("title", e.target.value)}
                className="p-2 w-full rounded border"
                placeholder="Enter card title"
              />
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="block font-medium">Buttons</label>
                <button
                  type="button"
                  onClick={addButtonToButtonCard}
                  disabled={(dmSettings.buttonCard?.buttons || []).length >= 3}
                  className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Button
                </button>
              </div>

              {dmSettings.buttonCard?.buttons?.map((button, buttonIndex) => {
                const validationError = getButtonValidationError(button);
                return (
                  <div
                    key={buttonIndex}
                    className="p-3 bg-white rounded border"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Button {buttonIndex + 1}
                      </span>
                      {(dmSettings.buttonCard?.buttons || []).length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeButtonFromButtonCard(buttonIndex)
                          }
                          className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium">
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
                          className={`p-2 w-full rounded border ${
                            validationError ? "border-red-500" : ""
                          }`}
                          placeholder="e.g., Visit Website"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium">
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
                          className={`p-2 w-full rounded border ${
                            validationError ? "border-red-500" : ""
                          }`}
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    {validationError && (
                      <div className="mt-1 text-sm text-red-600">
                        {validationError}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ------------------ Main Automation Page ------------------
// export default function AutomationPage() {
//   const { user } = useUser();
//   const [step, setStep] = useState(1);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [automationType, setAutomationType] = useState("");
//   const [replySettings, setReplySettings] = useState({
//     mode: "all",
//     keywords: "",
//     message: "",
//   });
//   const [dmSettings, setDmSettings] = useState({
//     mode: "all",
//     keywords: "",
//     type: "TEXT_MEDIA",
//     message: "",
//     image: null,
//     cardTitle: "",
//     productImage: null,
//     buttons: [],
//     cards: [], // New field for multiple cards
//   });

//   const nextStep = () => {
//     // Validation before proceeding
//     if (step === 1 && !selectedPost) {
//       alert("Please select a post to continue");
//       return;
//     }
//     if (step === 2 && !automationType) {
//       alert("Please choose an automation type");
//       return;
//     }
//     setStep((prev) => prev + 1);
//   };

//   const prevStep = () => setStep((prev) => prev - 1);

//   const canProceed = () => {
//     switch (step) {
//       case 1:
//         return selectedPost !== null;
//       case 2:
//         return automationType !== "";
//       case 3:
//         if (automationType === "reply") {
//           return replySettings.message.trim() !== "";
//         }
//         if (automationType === "dm") {
//           if (dmSettings.type === "GENERIC_TEMPLATE") {
//             return (dmSettings.cards || []).length > 0;
//           }
//           return dmSettings.message.trim() !== "" || dmSettings.type !== "text";
//         }
//         return true;
//       case 4:
//         if (dmSettings.type === "GENERIC_TEMPLATE") {
//           return (dmSettings.cards || []).length > 0;
//         }
//         return dmSettings.message.trim() !== "" || dmSettings.type !== "text";
//       default:
//         return true;
//     }
//   };

//   return (
//     <div className="p-8 mx-auto max-w-4xl">
//       {/* Progress indicator */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium text-gray-700">
//             Step {step} of 4
//           </span>
//           <span className="text-sm text-gray-500">
//             {Math.round((step / 4) * 100)}% Complete
//           </span>
//         </div>
//         <div className="w-full h-2 bg-gray-200 rounded-full">
//           <div
//             className="h-2 bg-blue-500 rounded-full transition-all duration-300"
//             style={{ width: `${(step / 4) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       {step === 1 && (
//         <Step1_SelectPost
//           selectedPost={selectedPost}
//           onSelect={setSelectedPost}
//           user={user}
//         />
//       )}
//       {step === 2 && (
//         <Step2_ChooseAutomationType
//           automationType={automationType}
//           setAutomationType={setAutomationType}
//         />
//       )}
//       {step === 3 && automationType === "reply" && (
//         <Step3_ConfigureReplies
//           replySettings={replySettings}
//           setReplySettings={setReplySettings}
//         />
//       )}
//       {step === 3 && automationType === "dm" && (
//         <Step4_ConfigureDMs
//           dmSettings={dmSettings}
//           setDmSettings={setDmSettings}
//         />
//       )}
//       {step === 4 && automationType === "both" && (
//         <Step4_ConfigureDMs
//           dmSettings={dmSettings}
//           setDmSettings={setDmSettings}
//         />
//       )}

//       <div className="flex gap-4 mt-6">
//         {step > 1 && (
//           <Button
//             onClick={prevStep}
//             className="text-white bg-gray-500 hover:bg-gray-600"
//           >
//             Back
//           </Button>
//         )}

//         {step < 4 && (
//           <Button
//             onClick={nextStep}
//             disabled={!canProceed()}
//             className="text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </Button>
//         )}

//         {step === 4 && (
//           <Button
//             onClick={async () => {
//               if (automationType === "reply") {
//                 await manageIgMediaAutomationAPI("CREATE", {
//                   id: selectedPost.id,
//                   userId: user.id,
//                   mediaType: selectedPost.mediaType,
//                   mediaUrl: selectedPost.mediaUrl,
//                   postedAt: new Date(selectedPost.timestamp).toISOString(),
//                   isActive: true,
//                   automationType: "COMMENT_ONLY",
//                   automationTrigger:
//                     replySettings.mode === "all"
//                       ? "ANY_COMMENT"
//                       : "SPECIFIC_KEYWORD",
//                   keywords: replySettings.keywords
//                     .split(",")
//                     .map((k) => k.toLowerCase().trim()),
//                   replyCommentText: replySettings.message,
//                 });
//               }

//               if (automationType === "dm") {
//                 if (
//                   dmSettings.type === "TEXT_MEDIA" ||
//                   dmSettings.type === "TEXT"
//                 ) {
//                   await manageIgMediaAutomationAPI("CREATE", {
//                     id: selectedPost.id,
//                     userId: user.id,
//                     mediaType: selectedPost.mediaType,
//                     mediaUrl: selectedPost.mediaUrl,
//                     postedAt: new Date(selectedPost.timestamp).toISOString(),
//                     isActive: true,
//                     automationType: "DM_ONLY",
//                     automationTrigger:
//                       dmSettings.mode === "all"
//                         ? "ANY_COMMENT"
//                         : "SPECIFIC_KEYWORD",
//                     keywords: dmSettings.keywords
//                       .split(",")
//                       .map((k) => k.toLowerCase().trim()),
//                     replyDMType: dmSettings.type,
//                     replyDMText: dmSettings.message,
//                     ...(dmSettings.type === "TEXT_MEDIA" && {
//                       replyDMMediaUrl: dmSettings.media.path,
//                     }),
//                   });
//                 } else if (dmSettings.type === "GENERIC_TEMPLATE") {
//                   // For GENERIC_TEMPLATE, use the cards array
//                   const cardsData = (dmSettings.cards || []).map((card) => ({
//                     mediaUrl: card.image?.path || "",
//                     title: card.title || "",
//                     buttons: (card.buttons || []).map((btn) => ({
//                       title: btn.label || "",
//                       link: btn.url || "",
//                     })),
//                   }));

//                   await manageIgMediaAutomationAPI("CREATE", {
//                     id: selectedPost.id,
//                     userId: user.id,
//                     mediaType: selectedPost.mediaType,
//                     mediaUrl: selectedPost.mediaUrl,
//                     postedAt: new Date(selectedPost.timestamp).toISOString(),
//                     isActive: true,
//                     automationType: "DM_ONLY",
//                     automationTrigger:
//                       dmSettings.mode === "all"
//                         ? "ANY_COMMENT"
//                         : "SPECIFIC_KEYWORD",
//                     keywords: dmSettings.keywords
//                       .split(",")
//                       .map((k) => k.toLowerCase().trim()),
//                     replyDMType: dmSettings.type,
//                     replyDMCards: cardsData,
//                   });
//                 } else if (dmSettings.type === "BUTTON_TEMPLATE") {
//                   const buttonCardData = {
//                     title: dmSettings.buttonCard?.title || "",
//                     buttons: (dmSettings.buttonCard?.buttons || []).map(
//                       (btn) => ({
//                         title: btn.label || "",
//                         link: btn.url || "",
//                       })
//                     ),
//                   };

//                   await manageIgMediaAutomationAPI("CREATE", {
//                     id: selectedPost.id,
//                     userId: user.id,
//                     mediaType: selectedPost.mediaType,
//                     mediaUrl: selectedPost.mediaUrl,
//                     postedAt: new Date(selectedPost.timestamp).toISOString(),
//                     isActive: true,
//                     automationType: "DM_ONLY",
//                     automationTrigger:
//                       dmSettings.mode === "all"
//                         ? "ANY_COMMENT"
//                         : "SPECIFIC_KEYWORD",
//                     keywords: dmSettings.keywords
//                       .split(",")
//                       .map((k) => k.toLowerCase().trim()),
//                     replyDMType: dmSettings.type,
//                     replyDMCards: [buttonCardData], // Single card in array format
//                   });
//                 }
//               }
//             }}
//             className="text-white bg-green-500 hover:bg-green-600"
//           >
//             Save Automation
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

export default function AutomationPage() {
  const { user } = useUser();
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    if (!selectedPost) {
      alert("Please select a post to continue");
      return;
    }
    setModalStep(2);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        return automationType !== "";
      case 3:
        if (automationType === "reply") {
          return replySettings.message.trim() !== "";
        }
        if (automationType === "dm") {
          if (dmSettings.type === "GENERIC_TEMPLATE") {
            return (dmSettings.cards || []).length > 0;
          }
          return dmSettings.message.trim() !== "" || dmSettings.type !== "text";
        }
        return true;
      case 4:
        if (dmSettings.type === "GENERIC_TEMPLATE") {
          return (dmSettings.cards || []).length > 0;
        }
        return dmSettings.message.trim() !== "" || dmSettings.type !== "text";
      default:
        return true;
    }
  };

  const handleSaveAutomation = async () => {
    if (automationType === "reply") {
      await manageIgMediaAutomationAPI("CREATE", {
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
        await manageIgMediaAutomationAPI("CREATE", {
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

        await manageIgMediaAutomationAPI("CREATE", {
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

        await manageIgMediaAutomationAPI("CREATE", {
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

    // Close modal and show success message
    closeModal();
    alert("Automation saved successfully!");
  };

  return (
    <div className="relative p-8 mx-auto max-w-4xl">
      {/* Step 1 - Always visible */}
      <Step1_SelectPost
        selectedPost={selectedPost}
        onSelect={setSelectedPost}
        user={user}
        openModal={openModal}
      />

      {/* Next Button */}
      {/* <div className="flex fixed top-2 right-10 gap-4 mt-6">
        <Button
          onClick={openModal}
          disabled={!selectedPost}
          className="text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div> */}

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
                    Step {modalStep} of 4
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((modalStep / 4) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${(modalStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[25rem] overflow-y-auto no-scrollbar">
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
              {modalStep === 4 && automationType === "both" && (
                <Step4_ConfigureDMs
                  dmSettings={dmSettings}
                  setDmSettings={setDmSettings}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex gap-4 p-6 bg-gray-50 border-t">
              {modalStep > 2 && (
                <Button
                  onClick={prevModalStep}
                  className="text-white bg-gray-500 hover:bg-gray-600 h-fit"
                >
                  Back
                </Button>
              )}

              <Button
                onClick={closeModal}
                className="text-gray-700 bg-gray-200 hover:bg-gray-300 h-fit"
              >
                Cancel
              </Button>

              {modalStep < 4 && (
                <Button
                  onClick={nextModalStep}
                  disabled={!canProceedModal()}
                  className="ml-auto text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed h-fit"
                >
                  Next
                </Button>
              )}

              {modalStep === 4 && (
                <Button
                  onClick={handleSaveAutomation}
                  className="ml-auto text-white bg-green-500 hover:bg-green-600 h-fit"
                >
                  Save Automation
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
