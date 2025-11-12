"use client";

import { useUser } from "@/contexts/UserContext";
import { manageIgMediaAutomationAPI } from "@/lib/apiHandler";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Automation = () => {
  const { user } = useUser();
  const [automatedPosts, setAutomatedPosts] = useState([]);
  const [automatedPostsLoading, setAutomatedPostsLoading] = useState(false);

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

  if (automatedPostsLoading) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex gap-2 items-center p-2 w-full h-16 bg-gray-200 rounded-md animate-pulse"
          >
            <div className="w-10 h-12 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {automatedPosts.map((post, index) => (
        <div
          key={post.id}
          className="flex gap-2 items-center p-2 rounded-md border border-gray-200 bg-salt"
        >
          <motion.img
            src={
              post?.mediaDetails?.thumbnailUrl ||
              post?.mediaDetails?.mediaUrl ||
              "/placeholder.png"
            }
            alt={post?.mediaDetails?.caption || "Instagram post"}
            className="object-cover w-10 h-12 rounded-md transition-transform duration-300"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          />
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <p className="text-sm font-medium md:text-md">
              {post.name || "Dummy"}
            </p>
            {post.automationType === "COMMENT_ONLY" &&
              post.automationTrigger === "SPECIFIC_KEYWORD" && (
                <div className="flex gap-2 items-center">
                  <p className="text-sm font-light text-gray-500">
                    When user comments
                  </p>
                  <div className="flex flex-wrap gap-1 max-w-24">
                    {post.keywords.map((keyword, index) => {
                      return (
                        <p
                          key={index}
                          className="p-1 w-max text-sm leading-3 bg-opacity-20 rounded-md text-pepper h-fit bg-pepper"
                        >
                          {keyword}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            {post.automationType === "COMMENT_ONLY" &&
              post.automationTrigger === "ANY_COMMENT" && (
                <p className="text-sm font-light text-gray-500">Any Comment</p>
              )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Automation;
