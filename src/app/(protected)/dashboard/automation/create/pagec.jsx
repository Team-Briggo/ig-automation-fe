// "use client";

// import { useUser } from "@/contexts/UserContext";
// import { getMediaFromInstagramAccountAPI } from "@/lib/apiHandler";
// import { AnimatePresence, motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";
// import { FiImage, FiPlay } from "react-icons/fi";

// const itemVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

// const getMediaIcon = (mediaType) => {
//   switch (mediaType) {
//     case "VIDEO":
//       return <FiPlay className="w-3 h-3" />;
//     case "CAROUSEL_ALBUM":
//       return <FiImage className="w-3 h-3" />;
//     default:
//       return null;
//   }
// };

// const getMediaLabel = (mediaType) => {
//   switch (mediaType) {
//     case "VIDEO":
//       return "Video";
//     case "CAROUSEL_ALBUM":
//       return "Album";
//     default:
//       return null;
//   }
// };

// const CreateAutomation = () => {
//   const params = useSearchParams();
//   const { user } = useUser();

//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [prevPageToken, setPrevPageToken] = useState(null);
//   const [hasMore, setHasMore] = useState(true);
//   const [error, setError] = useState(null);

//   const [autoDmSettings, setAutoDmSettings] = useState("dm");
//   const [autoDmKeywords, setAutoDmKeywords] = useState([]);

//   // Initial load
//   useEffect(() => {
//     if (user?.id) {
//       loadPosts(true);
//     }
//   }, [user?.id]);

//   const loadPosts = useCallback(
//     async (isInitial = false) => {
//       if (!user?.id || (!isInitial && !hasMore)) return;

//       const currentToken = isInitial ? null : nextPageToken;

//       if (!isInitial && currentToken === prevPageToken) {
//         setHasMore(false);
//         return;
//       }

//       try {
//         if (isInitial) {
//           setLoading(true);
//           setError(null);
//         } else {
//           setLoadingMore(true);
//         }

//         const res = await getMediaFromInstagramAccountAPI(
//           user.id,
//           currentToken
//         );

//         if (res.success && res.items) {
//           const newPosts = res.items || [];

//           if (isInitial) {
//             setPosts(newPosts);
//           } else {
//             setPosts((prev) => [...prev, ...newPosts]);
//           }

//           const newNextPageToken = res.nextPageToken;

//           if (!newNextPageToken || newNextPageToken === currentToken) {
//             setHasMore(false);
//           } else {
//             setPrevPageToken(currentToken);
//             setNextPageToken(newNextPageToken);
//           }
//         } else {
//           setError(res.message || "Failed to load posts");
//           if (isInitial) {
//             setPosts([]);
//           }
//         }
//       } catch (err) {
//         console.error("Error loading posts:", err);
//         setError("An error occurred while loading posts");
//         if (isInitial) {
//           setPosts([]);
//         }
//       } finally {
//         setLoading(false);
//         setLoadingMore(false);
//       }
//     },
//     [user?.id, nextPageToken, prevPageToken, hasMore]
//   );

//   const loadMore = () => {
//     if (!loadingMore && hasMore) {
//       loadPosts(false);
//     }
//   };

//   console.log("automationType", params.get("automationType"));
//   console.log("automationName", params.get("automationName"));

//   return (
//     <div className="flex items-start w-full">
//       {/* Left partition */}
//       <div className="w-1/2">{/* your left-side content */}</div>

//       {/* Right partition */}
//       <div className="flex flex-col gap-4 justify-center w-1/2">
//         <div className="flex flex-col gap-2 p-2 rounded-md bg-salt">
//           <p className="px-2 text-lg font-semibold">Select your Post or Reel</p>
//           <div className="flex gap-4 justify-start items-center max-w-max w-full overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-2 [scroll-padding-left:1rem]">
//             {posts.map((post, index) => (
//               <div key={post.id} className="shrink-0 snap-start">
//                 <motion.div
//                   className={`inline-block cursor-pointer rounded-md ${
//                     selectedPost?.id === post.id
//                       ? "ring-2 ring-pepper ring-opacity-80 p-[3px]"
//                       : "hover:ring-1 hover:ring-pepper hover:ring-opacity-50 p-[3px]"
//                   }`}
//                   transition={{ delay: index * 0.05 }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   onClick={() => setSelectedPost(post)}
//                 >
//                   <img
//                     src={
//                       post.thumbnailUrl || post.mediaUrl || "/placeholder.png"
//                     }
//                     alt={post.caption || "Instagram post"}
//                     className="object-cover rounded-md w-[96px] h-[128px]"
//                     loading="lazy"
//                   />
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-2 p-2 rounded-md bg-salt">
//           <p className="px-2 text-lg font-semibold">Setup Keywords</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAutomation;

// // selectedPost?.id === post.id
// //                 ? "ring-4 ring-blue-500 ring-opacity-50 shadow-2xl scale-105 z-10"
// //                 : "shadow-md hover:shadow-xl hover:scale-102"
