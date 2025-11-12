"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useUser } from "@/contexts/UserContext";
import { manageIgMediaAutomationAPI } from "@/lib/apiHandler";
import { motion } from "framer-motion";
import { Plus, X, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateAutomationModal = ({ open, onClose }) => {
  const router = useRouter();
  const [automationName, setAutomationName] = useState("");
  const [automationType, setAutomationType] = useState("");

  return (
    <motion.div
      className="overflow-y-auto fixed inset-0 z-50 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2 self-end p-4 rounded-md bg-salt md:self-center w-full md:max-w-[720px] min-h-[480px]">
          <div className="flex gap-2 justify-between items-center rounded-lg">
            <div className="flex gap-4 items-center">
              <h2
                className="text-xl cursor-pointer"
                onClick={() => {
                  if (automationType) setAutomationType("");
                }}
              >
                Templates
              </h2>
              {automationType && <p>/</p>}
              {automationType && <h2 className="text-xl">New Automation</h2>}
            </div>
            <p onClick={onClose}>
              <X className="w-4 h-4 cursor-pointer" />
            </p>
          </div>
          {!automationType && (
            <div className="grid flex-grow grid-cols-1 gap-4 pt-6 mb-20 sm:grid-cols-2">
              <div
                className="flex flex-col items-start p-2 px-3 space-y-2 w-full rounded-md border cursor-pointer border-line-dark h-max"
                onClick={() => setAutomationType("dm")}
              >
                <div className="flex gap-x-2 mt-4">
                  <div className="flex items-center border-1 border-[#6600A2]/10 rounded-[10px] px-1.5 py-1 gap-1">
                    <Zap className="w-4 h-4" />
                    <div className="text-sm font-semibold text-primary-default">
                      Quick
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-base font-semibold">
                  Send DM to Comments
                </div>
                <div className="mb-4 text-sm font-light text-left">
                  DM instantly when people comment on your post or reel
                </div>
              </div>
              <div
                className="flex flex-col items-start p-2 px-3 space-y-2 w-full rounded-md border cursor-pointer border-line-dark h-max"
                onClick={() => setAutomationType("reply")}
              >
                <div className="flex gap-x-2 mt-4">
                  <div className="flex items-center border-1 border-[#6600A2]/10 rounded-[10px] px-1.5 py-1 gap-1">
                    <Zap className="w-4 h-4" />
                    <div className="text-sm font-semibold text-primary-default">
                      Quick
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-base font-semibold">
                  Send Reply to Comments
                </div>
                <div className="mb-4 text-sm font-light text-left">
                  Reply instantly when people comment on your post or reel
                </div>
              </div>
            </div>
          )}
          {!!automationType && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 py-3">
                <p className="text-sm font-light">Automation Name</p>
                <Input
                  placeholder="Name"
                  value={automationName}
                  onChange={(e) => setAutomationName(e.target.value)}
                />
              </div>
              <Button
                onClick={() => {
                  if (!automationType || !automationName) return;
                  router.push(
                    `/dashboard/automation/create?automationType=${automationType}&automationName=${automationName}`
                  );
                  onClose();
                }}
              >
                Create Automation
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Automation = () => {
  const { user } = useUser();
  const [automatedPosts, setAutomatedPosts] = useState([]);
  const [automatedPostsLoading, setAutomatedPostsLoading] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

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
      <div className="flex gap-2 items-center self-end p-2 rounded-md">
        <Button
          className="flex gap-2 items-center text-sm font-medium md:text-md"
          onClick={() => setOpenCreateModal(true)}
        >
          <Plus className="w-4 h-4" /> Create Automation
        </Button>
      </div>
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

      {openCreateModal && (
        <CreateAutomationModal
          open={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
        />
      )}
    </div>
  );
};

export default Automation;
