"use client";

import PostModal from "@/components/PostModal";
import { useUser } from "@/contexts/UserContext";
import { getMediaFromInstagramAccountAPI } from "@/lib/apiHandler";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";

// Skeleton Component
const PostSkeleton = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-3">
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

// Skeleton Grid Component
const SkeletonGrid = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <PostSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
};

// Memoized Post Item Component
const PostItem = ({ post, isLast, onPostClick, onLastPostRef }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const handlePostClick = useCallback(() => {
    onPostClick(post);
  }, [post, onPostClick]);

  return (
    <motion.div
      ref={isLast ? onLastPostRef : null}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-white rounded-lg shadow cursor-pointer hover:shadow-lg"
      onClick={handlePostClick}
    >
      <div className="relative">
        {!imageLoaded && (
          <div className="flex justify-center items-center w-full h-48 bg-gray-200 animate-pulse">
            <div className="w-8 h-8 text-gray-400">📷</div>
          </div>
        )}
        <img
          src={post.thumbnailUrl || post.mediaUrl}
          alt={post.caption || "Instagram post"}
          className={`object-cover w-full h-48 transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "absolute opacity-0"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        {imageError && (
          <div className="flex justify-center items-center w-full h-48 bg-gray-100">
            <span className="text-gray-500">Failed to load image</span>
          </div>
        )}
        <div className="flex absolute inset-0 gap-4 justify-center items-center bg-black bg-opacity-40 opacity-0 transition hover:opacity-100">
          <Stat icon={<FaHeart />} value={post.likes} />
          <Stat icon={<FaComment />} value={post.commentsCount} />
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium line-clamp-2 text-pepper">
          {post.caption || "No caption"}
        </p>
      </div>
    </motion.div>
  );
};

// Memoized Stat Component
const Stat = ({ icon, value }) => {
  return (
    <div className="flex gap-1 items-center text-sm text-white">
      {icon}
      <span>{value || 0}</span>
    </div>
  );
};

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const { user } = useUser();

  // Keep track of used tokens to prevent duplicates
  const usedTokens = useRef(new Set());
  const observer = useRef();

  // Media cache for better performance
  const mediaCache = useRef(new Map());

  // Memoized posts with cached media
  const memoizedPosts = useMemo(() => {
    return posts.map((post) => {
      const cacheKey = post.id;

      // Check if we have cached media data
      if (mediaCache.current.has(cacheKey)) {
        return { ...post, ...mediaCache.current.get(cacheKey) };
      }

      // Cache the media data
      const mediaData = {
        thumbnailUrl: post.thumbnailUrl,
        mediaUrl: post.mediaUrl,
        caption: post.caption,
        likes: post.likes,
        commentsCount: post.commentsCount,
      };

      mediaCache.current.set(cacheKey, mediaData);
      return { ...post, ...mediaData };
    });
  }, [posts]);

  // Memoized post click handler
  const handlePostClick = useCallback((post) => {
    setSelectedPost(post);
    document?.body?.classList?.add("modal-open");
  }, []);

  // Memoized close modal handler
  const handleCloseModal = useCallback(() => {
    setSelectedPost(null);
    document?.body?.classList?.remove("modal-open");
  }, []);

  // Ref callback for the last post element
  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMorePosts();
          }
        },
        {
          threshold: 0.1,
          rootMargin: "100px", // Start loading before the element is fully visible
        }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  // Memoized load more posts function
  const loadMorePosts = useCallback(async () => {
    if (!user || !nextPageToken || isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const res = await getMediaFromInstagramAccountAPI(
        user?.id,
        nextPageToken
      );

      if (res.items && res.items.length > 0) {
        // Pre-cache the new posts
        res.items.forEach((post) => {
          const cacheKey = post.id;
          if (!mediaCache.current.has(cacheKey)) {
            const mediaData = {
              thumbnailUrl: post.thumbnailUrl,
              mediaUrl: post.mediaUrl,
              caption: post.caption,
              likes: post.likes,
              commentsCount: post.commentsCount,
            };
            mediaCache.current.set(cacheKey, mediaData);
          }
        });

        setPosts((prevPosts) => [...prevPosts, ...res.items]);
      }

      // Handle next page token with duplicate check
      if (res.nextPageToken) {
        if (usedTokens.current.has(res.nextPageToken)) {
          setNextPageToken(null);
          setHasMore(false);
        } else {
          setNextPageToken(res.nextPageToken);
          usedTokens.current.add(res.nextPageToken);
        }
      } else {
        setNextPageToken(null);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [user, nextPageToken, isLoading, hasMore]);

  // Load initial posts
  useEffect(() => {
    (async () => {
      if (!user) return;

      // Clear cache when user changes
      mediaCache.current.clear();
      usedTokens.current.clear();
      setPosts([]);
      setHasMore(true);
      setIsInitialLoading(true);

      setIsLoading(true);
      try {
        const res = await getMediaFromInstagramAccountAPI(user?.id, null);

        if (res.items && res.items.length > 0) {
          // Pre-cache initial posts
          res.items.forEach((post) => {
            const cacheKey = post.id;
            const mediaData = {
              thumbnailUrl: post.thumbnailUrl,
              mediaUrl: post.mediaUrl,
              caption: post.caption,
              likes: post.likes,
              commentsCount: post.commentsCount,
            };
            mediaCache.current.set(cacheKey, mediaData);
          });

          setPosts(res.items);
        }

        // Handle next page token
        if (res.nextPageToken && !usedTokens.current.has(res.nextPageToken)) {
          setNextPageToken(res.nextPageToken);
          usedTokens.current.add(res.nextPageToken);
        } else {
          setNextPageToken(null);
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error loading initial posts:", error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
        setIsInitialLoading(false);
      }
    })();
  }, [user]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <div className="p-6 min-h-screen bg-salt">
      <h1 className="mb-6 text-3xl font-bold text-pepper">
        📸 All Instagram Posts
      </h1>

      {/* Show skeleton loading during initial load */}
      {isInitialLoading ? (
        <SkeletonGrid count={12} />
      ) : memoizedPosts.length === 0 ? (
        <div className="mt-20 text-center text-muted">
          <p className="text-lg">No posts yet. Start sharing your moments!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {memoizedPosts.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                isLast={index === memoizedPosts.length - 1}
                onPostClick={handlePostClick}
                onLastPostRef={lastPostElementRef}
              />
            ))}
          </div>

          {/* Loading indicator for pagination */}
          {isLoading && !isInitialLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="w-8 h-8 rounded-full border-4 animate-spin border-pepper border-t-transparent"></div>
            </div>
          )}

          {/* End of posts indicator */}
          {!hasMore && memoizedPosts.length > 0 && (
            <div className="mt-8 text-center text-muted">
              <p>You've reached the end of your posts!</p>
            </div>
          )}
        </>
      )}

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={handleCloseModal}
          userId={user?.id}
        />
      )}
    </div>
  );
}
