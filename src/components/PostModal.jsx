// "use client";

// import {
//   deleteCommentFromInstagramAccountAPI,
//   getMediaCommentsFromInstagramAccountAPI,
//   hideCommentFromInstagramAccountAPI,
//   sendReplyToCommentAPI,
// } from "@/lib/apiHandler";
// import { AnimatePresence, motion } from "framer-motion";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   FaComment,
//   FaEllipsisV,
//   FaEyeSlash,
//   FaHeart,
//   FaPaperPlane,
//   FaReply,
//   FaTimes,
//   FaTrash,
//   FaUser,
// } from "react-icons/fa";

// // Comment Skeleton Component
// const CommentSkeleton = () => {
//   return (
//     <div className="flex gap-3 p-3 animate-pulse">
//       <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full"></div>
//       <div className="flex-1">
//         <div className="mb-1 w-24 h-4 bg-gray-300 rounded"></div>
//         <div className="mb-1 w-full h-3 bg-gray-300 rounded"></div>
//         <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
//       </div>
//     </div>
//   );
// };

// // Individual Comment Component
// const CommentItem = ({
//   comment,
//   userId,
//   onCommentDeleted,
//   onCommentHidden,
//   onReplyAdded,
// }) => {
//   const [showActions, setShowActions] = useState(false);
//   const [showReplyInput, setShowReplyInput] = useState(false);
//   const [replyContent, setReplyContent] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isDeleted, setIsDeleted] = useState(false);

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this comment?"))
//       return;

//     setIsDeleting(true);
//     try {
//       const response = await deleteCommentFromInstagramAccountAPI(
//         userId,
//         comment.id
//       );
//       if (response.success) {
//         setIsDeleted(true);
//         onCommentDeleted(comment.id);
//       }
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       alert("Failed to delete comment. Please try again.");
//     } finally {
//       setIsDeleting(false);
//       setShowActions(false);
//     }
//   };

//   const handleHide = async () => {
//     setIsLoading(true);
//     try {
//       const response = await hideCommentFromInstagramAccountAPI(
//         userId,
//         comment.id
//       );
//       if (response.success) {
//         onCommentHidden(comment.id);
//       }
//     } catch (error) {
//       console.error("Error hiding comment:", error);
//       alert("Failed to hide comment. Please try again.");
//     } finally {
//       setIsLoading(false);
//       setShowActions(false);
//     }
//   };

//   const handleReply = async () => {
//     if (!replyContent.trim()) return;

//     setIsLoading(true);
//     try {
//       const response = await sendReplyToCommentAPI(
//         userId,
//         comment.id,
//         replyContent
//       );
//       if (response.success) {
//         setReplyContent("");
//         setShowReplyInput(false);
//         onReplyAdded(comment.id);
//       }
//     } catch (error) {
//       console.error("Error sending reply:", error);
//       alert("Failed to send reply. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isDeleted) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.2 }}
//       className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 group"
//     >
//       <div className="flex-shrink-0">
//         {comment.profilePictureUrl ? (
//           <img
//             src={comment.profilePictureUrl}
//             alt={comment.username}
//             className="object-cover w-8 h-8 rounded-full"
//             onError={(e) => {
//               e.target.style.display = "none";
//               e.target.nextSibling.style.display = "flex";
//             }}
//           />
//         ) : (
//           <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
//             <FaUser className="w-4 h-4 text-gray-400" />
//           </div>
//         )}
//         <div className="hidden justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
//           <FaUser className="w-4 h-4 text-gray-400" />
//         </div>
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex gap-2 items-center mb-1">
//           <span className="text-sm font-semibold text-gray-900 truncate">
//             {comment.senderUsername || "Unknown User"}
//           </span>
//           {comment.timestamp && (
//             <span className="text-xs text-gray-500">
//               {new Date(comment.timestamp).toLocaleDateString()}
//             </span>
//           )}
//           {comment.isHidden && (
//             <span className="text-xs text-red-500">Hidden</span>
//           )}
//           {/* Actions Menu */}
//           <div className="relative ml-auto">
//             <button
//               onClick={() => setShowActions(!showActions)}
//               className="p-1 text-gray-400 rounded opacity-0 transition-all group-hover:opacity-100 hover:text-gray-600 hover:bg-gray-100"
//             >
//               <FaEllipsisV className="w-3 h-3" />
//             </button>

//             {showActions && (
//               <div className="absolute right-0 top-6 z-10 bg-white rounded-lg border border-gray-200 shadow-lg min-w-32">
//                 <button
//                   onClick={() => {
//                     setShowReplyInput(!showReplyInput);
//                     setShowActions(false);
//                   }}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 rounded-t-lg hover:bg-gray-50"
//                 >
//                   <FaReply className="w-3 h-3" />
//                   Reply
//                 </button>
//                 <button
//                   onClick={handleHide}
//                   disabled={isLoading}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   <FaEyeSlash className="w-3 h-3" />
//                   {isLoading ? "Hiding..." : "Hide"}
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   disabled={isDeleting}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-red-600 rounded-b-lg hover:bg-red-50"
//                 >
//                   <FaTrash className="w-3 h-3" />
//                   {isDeleting ? "Deleting..." : "Delete"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <p className="text-sm text-gray-700 break-words">
//           {comment.text || "No comment text"}
//         </p>
//         {comment.likeCount > 0 && (
//           <div className="flex gap-1 items-center mt-1">
//             <span className="text-xs text-gray-500">
//               {comment.likeCount} like{comment.likeCount === 1 ? "" : "s"}
//             </span>
//           </div>
//         )}

//         {/* Reply Input */}
//         {showReplyInput && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="p-2 mt-2 bg-gray-50 rounded-lg"
//           >
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={replyContent}
//                 onChange={(e) => setReplyContent(e.target.value)}
//                 placeholder="Write a reply..."
//                 className="flex-1 px-3 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onKeyPress={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault();
//                     handleReply();
//                   }
//                 }}
//               />
//               <button
//                 onClick={handleReply}
//                 disabled={!replyContent.trim() || isLoading}
//                 className="px-2 py-1 text-blue-500 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? (
//                   <div className="w-4 h-4 rounded-full border border-blue-500 animate-spin border-t-transparent"></div>
//                 ) : (
//                   <FaPaperPlane className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//             <div className="flex gap-2 mt-2">
//               <button
//                 onClick={() => setShowReplyInput(false)}
//                 className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // Main PostModal Component
// const PostModal = ({ post, onClose, userId }) => {
//   const [comments, setComments] = useState([]);
//   const [isLoadingComments, setIsLoadingComments] = useState(false);
//   const [isInitialLoading, setIsInitialLoading] = useState(true);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [hasMoreComments, setHasMoreComments] = useState(true);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const commentsContainerRef = useRef(null);
//   const observer = useRef();

//   // Load initial comments
//   useEffect(() => {
//     if (post && userId) {
//       loadInitialComments();
//     }
//   }, [post, userId]);

//   const loadInitialComments = async () => {
//     setIsInitialLoading(true);
//     setIsLoadingComments(true);
//     setComments([]);
//     setNextPageToken(null);
//     setHasMoreComments(true);

//     try {
//       const res = await getMediaCommentsFromInstagramAccountAPI({
//         userId: userId,
//         mediaId: post.id,
//         nextPageToken: null,
//       });

//       console.log("Initial comments res:", res);

//       if (res.items && res.items.length > 0) {
//         setComments(res.items);
//       }

//       if (res.nextPageToken) {
//         setNextPageToken(res.nextPageToken);
//       } else {
//         setHasMoreComments(false);
//       }
//     } catch (error) {
//       console.error("Error loading initial comments:", error);
//       setHasMoreComments(false);
//     } finally {
//       setIsLoadingComments(false);
//       setIsInitialLoading(false);
//     }
//   };

//   // Load more comments
//   const loadMoreComments = useCallback(async () => {
//     if (!nextPageToken || isLoadingComments || !hasMoreComments) return;

//     setIsLoadingComments(true);
//     try {
//       const res = await getMediaCommentsFromInstagramAccountAPI({
//         userId: userId,
//         mediaId: post.id,
//         nextPageToken: nextPageToken,
//       });

//       console.log("Load more comments res:", res);

//       if (res.comments && res.comments.length > 0) {
//         setComments((prevComments) => [...prevComments, ...res.comments]);
//       }

//       if (res.nextPageToken) {
//         setNextPageToken(res.nextPageToken);
//       } else {
//         setNextPageToken(null);
//         setHasMoreComments(false);
//       }
//     } catch (error) {
//       console.error("Error loading more comments:", error);
//       setHasMoreComments(false);
//     } finally {
//       setIsLoadingComments(false);
//     }
//   }, [userId, post.id, nextPageToken, isLoadingComments, hasMoreComments]);

//   // Handle comment actions
//   const handleCommentDeleted = (commentId) => {
//     setComments((prevComments) =>
//       prevComments.filter((comment) => comment.id !== commentId)
//     );
//   };

//   const handleCommentHidden = (commentId) => {
//     setComments((prevComments) =>
//       prevComments.map((comment) =>
//         comment.id === commentId ? { ...comment, isHidden: true } : comment
//       )
//     );
//   };

//   const handleReplyAdded = (commentId) => {
//     // Optionally reload comments to show the new reply
//     // For now, we'll just show a success message
//     console.log("Reply added to comment:", commentId);
//   };

//   // Close actions menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".relative")) {
//         // Close all action menus
//         const actionButtons = document.querySelectorAll(
//           '[data-actions-open="true"]'
//         );
//         actionButtons.forEach((button) => button.click());
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Intersection observer for infinite scroll
//   const lastCommentElementRef = useCallback(
//     (node) => {
//       if (isLoadingComments) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting && hasMoreComments) {
//             loadMoreComments();
//           }
//         },
//         {
//           threshold: 0.1,
//           rootMargin: "100px",
//         }
//       );
//       if (node) observer.current.observe(node);
//     },
//     [isLoadingComments, hasMoreComments, loadMoreComments]
//   );

//   // Handle backdrop click
//   const handleBackdropClick = useCallback(
//     (e) => {
//       if (e.target === e.currentTarget) {
//         onClose();
//       }
//     },
//     [onClose]
//   );

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   // Cleanup observer
//   useEffect(() => {
//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, []);

//   if (!post) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-75"
//         onClick={handleBackdropClick}
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           transition={{ type: "spring", damping: 20 }}
//           className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70"
//           >
//             <FaTimes className="w-4 h-4" />
//           </button>

//           <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
//             {/* Image Section */}
//             <div className="flex relative flex-1 justify-center items-center bg-black">
//               {post.mediaType === "image" ? (
//                 <img
//                   src={post.thumbnailUrl || post.mediaUrl}
//                   alt=""
//                   className="object-contain w-full h-full"
//                   onLoad={() => setImageLoaded(true)}
//                   onError={() => setImageLoaded(true)}
//                 />
//               ) : (
//                 <video
//                   src={post.mediaUrl}
//                   autoPlay
//                   loop
//                   muted
//                   className="object-contain w-full h-full"
//                   onLoad={() => setImageLoaded(true)}
//                   onError={() => setImageLoaded(true)}
//                 />
//               )}
//             </div>

//             {/* Content Section */}
//             <div className="flex flex-col w-full bg-white md:w-96">
//               {/* Post Header */}
//               <div className="p-4 border-b border-gray-200">
//                 <div className="flex gap-4 items-center mb-3">
//                   <FaHeart className="text-red-500" />
//                   <span className="font-semibold">{post.likes || 0} likes</span>
//                   <FaComment className="text-blue-500" />
//                   <span className="font-semibold">
//                     {post.commentsCount || 0} comments
//                   </span>
//                 </div>
//                 {post.caption && (
//                   <p className="overflow-y-auto max-h-32 text-sm leading-relaxed text-gray-700 no-scrollbar">
//                     {post.caption}
//                   </p>
//                 )}
//                 {post.timestamp && (
//                   <p className="mt-2 text-xs text-gray-500">
//                     {new Date(post.timestamp).toLocaleString()}
//                   </p>
//                 )}
//               </div>

//               {/* Comments Section */}
//               <div className="flex overflow-hidden flex-col flex-1">
//                 <div className="px-4 py-2 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900">Comments</h3>
//                 </div>

//                 <div
//                   ref={commentsContainerRef}
//                   className="overflow-y-auto flex-1"
//                 >
//                   {isInitialLoading ? (
//                     // Show skeleton loading
//                     <div>
//                       {Array.from({ length: 5 }).map((_, index) => (
//                         <CommentSkeleton key={`skeleton-${index}`} />
//                       ))}
//                     </div>
//                   ) : comments.length === 0 ? (
//                     <div className="flex justify-center items-center h-32">
//                       <p className="text-center text-gray-500">
//                         No comments yet.
//                       </p>
//                     </div>
//                   ) : (
//                     <>
//                       {comments.map((comment, index) => (
//                         <div
//                           key={comment.id}
//                           ref={
//                             index === comments.length - 1
//                               ? lastCommentElementRef
//                               : null
//                           }
//                         >
//                           <CommentItem
//                             comment={comment}
//                             userId={userId}
//                             onCommentDeleted={handleCommentDeleted}
//                             onCommentHidden={handleCommentHidden}
//                             onReplyAdded={handleReplyAdded}
//                           />
//                         </div>
//                       ))}

//                       {/* Loading indicator for more comments */}
//                       {isLoadingComments && !isInitialLoading && (
//                         <div className="flex justify-center items-center py-4">
//                           <div className="w-6 h-6 rounded-full border-2 border-blue-500 animate-spin border-t-transparent"></div>
//                         </div>
//                       )}

//                       {/* End of comments indicator */}
//                       {!hasMoreComments && comments.length > 0 && (
//                         <div className="py-4 text-sm text-center text-gray-500">
//                           No more comments to load
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PostModal;

// ----------------------------------------

// "use client";

// import {
//   deleteCommentFromInstagramAccountAPI,
//   getMediaCommentsFromInstagramAccountAPI,
//   hideCommentFromInstagramAccountAPI,
//   sendReplyToCommentAPI,
// } from "@/lib/apiHandler";
// import { AnimatePresence, motion } from "framer-motion";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   FaComment,
//   FaEllipsisV,
//   FaEyeSlash,
//   FaHeart,
//   FaPaperPlane,
//   FaReply,
//   FaTimes,
//   FaTrash,
//   FaUser,
//   FaChevronDown,
// } from "react-icons/fa";

// // Comment Skeleton Component
// const CommentSkeleton = () => {
//   return (
//     <div className="flex gap-3 p-3 animate-pulse">
//       <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full"></div>
//       <div className="flex-1">
//         <div className="mb-1 w-24 h-4 bg-gray-300 rounded"></div>
//         <div className="mb-1 w-full h-3 bg-gray-300 rounded"></div>
//         <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
//       </div>
//     </div>
//   );
// };

// // Individual Comment Component
// const CommentItem = ({
//   comment,
//   userId,
//   onCommentDeleted,
//   onCommentHidden,
//   onReplyAdded,
// }) => {
//   const [showActions, setShowActions] = useState(false);
//   const [showReplyInput, setShowReplyInput] = useState(false);
//   const [replyContent, setReplyContent] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isDeleted, setIsDeleted] = useState(false);

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this comment?"))
//       return;

//     setIsDeleting(true);
//     try {
//       const response = await deleteCommentFromInstagramAccountAPI(
//         userId,
//         comment.id
//       );
//       if (response.success) {
//         setIsDeleted(true);
//         onCommentDeleted(comment.id);
//       }
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       alert("Failed to delete comment. Please try again.");
//     } finally {
//       setIsDeleting(false);
//       setShowActions(false);
//     }
//   };

//   const handleHide = async () => {
//     setIsLoading(true);
//     try {
//       const response = await hideCommentFromInstagramAccountAPI(
//         userId,
//         comment.id
//       );
//       if (response.success) {
//         onCommentHidden(comment.id);
//       }
//     } catch (error) {
//       console.error("Error hiding comment:", error);
//       alert("Failed to hide comment. Please try again.");
//     } finally {
//       setIsLoading(false);
//       setShowActions(false);
//     }
//   };

//   const handleReply = async () => {
//     if (!replyContent.trim()) return;

//     setIsLoading(true);
//     try {
//       const response = await sendReplyToCommentAPI(
//         userId,
//         comment.id,
//         replyContent
//       );
//       if (response.success) {
//         setReplyContent("");
//         setShowReplyInput(false);
//         onReplyAdded(comment.id);
//       }
//     } catch (error) {
//       console.error("Error sending reply:", error);
//       alert("Failed to send reply. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isDeleted) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.2 }}
//       className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 group"
//     >
//       <div className="flex-shrink-0">
//         {comment.profilePictureUrl ? (
//           <img
//             src={comment.profilePictureUrl}
//             alt={comment.username}
//             className="object-cover w-8 h-8 rounded-full"
//             onError={(e) => {
//               e.target.style.display = "none";
//               e.target.nextSibling.style.display = "flex";
//             }}
//           />
//         ) : (
//           <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
//             <FaUser className="w-4 h-4 text-gray-400" />
//           </div>
//         )}
//         <div className="hidden justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
//           <FaUser className="w-4 h-4 text-gray-400" />
//         </div>
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex gap-2 items-center mb-1">
//           <span className="text-sm font-semibold text-gray-900 truncate">
//             {comment.senderUsername || "Unknown User"}
//           </span>
//           {comment.timestamp && (
//             <span className="text-xs text-gray-500">
//               {new Date(comment.timestamp).toLocaleDateString()}
//             </span>
//           )}
//           {comment.isHidden && (
//             <span className="text-xs text-red-500">Hidden</span>
//           )}
//           {/* Actions Menu */}
//           <div className="relative ml-auto">
//             <button
//               onClick={() => setShowActions(!showActions)}
//               className="p-1 text-gray-400 rounded opacity-0 transition-all group-hover:opacity-100 hover:text-gray-600 hover:bg-gray-100"
//             >
//               <FaEllipsisV className="w-3 h-3" />
//             </button>

//             {showActions && (
//               <div className="absolute right-0 top-6 z-10 bg-white rounded-lg border border-gray-200 shadow-lg min-w-32">
//                 <button
//                   onClick={() => {
//                     setShowReplyInput(!showReplyInput);
//                     setShowActions(false);
//                   }}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 rounded-t-lg hover:bg-gray-50"
//                 >
//                   <FaReply className="w-3 h-3" />
//                   Reply
//                 </button>
//                 <button
//                   onClick={handleHide}
//                   disabled={isLoading}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   <FaEyeSlash className="w-3 h-3" />
//                   {isLoading ? "Hiding..." : "Hide"}
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   disabled={isDeleting}
//                   className="flex gap-2 items-center px-3 py-2 w-full text-sm text-red-600 rounded-b-lg hover:bg-red-50"
//                 >
//                   <FaTrash className="w-3 h-3" />
//                   {isDeleting ? "Deleting..." : "Delete"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <p className="text-sm text-gray-700 break-words">
//           {comment.text || "No comment text"}
//         </p>
//         {comment.likeCount > 0 && (
//           <div className="flex gap-1 items-center mt-1">
//             <span className="text-xs text-gray-500">
//               {comment.likeCount} like{comment.likeCount === 1 ? "" : "s"}
//             </span>
//           </div>
//         )}

//         {/* Reply Input */}
//         {showReplyInput && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="p-2 mt-2 bg-gray-50 rounded-lg"
//           >
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={replyContent}
//                 onChange={(e) => setReplyContent(e.target.value)}
//                 placeholder="Write a reply..."
//                 className="flex-1 px-3 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onKeyPress={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault();
//                     handleReply();
//                   }
//                 }}
//               />
//               <button
//                 onClick={handleReply}
//                 disabled={!replyContent.trim() || isLoading}
//                 className="px-2 py-1 text-blue-500 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? (
//                   <div className="w-4 h-4 rounded-full border border-blue-500 animate-spin border-t-transparent"></div>
//                 ) : (
//                   <FaPaperPlane className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//             <div className="flex gap-2 mt-2">
//               <button
//                 onClick={() => setShowReplyInput(false)}
//                 className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // Comments Section Component (reusable for both desktop and mobile)
// const CommentsSection = ({
//   comments,
//   isInitialLoading,
//   isLoadingComments,
//   hasMoreComments,
//   userId,
//   handleCommentDeleted,
//   handleCommentHidden,
//   handleReplyAdded,
//   lastCommentElementRef,
// }) => {
//   return (
//     <div className="overflow-y-auto flex-1 max-h-96">
//       {isInitialLoading ? (
//         // Show skeleton loading
//         <div>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CommentSkeleton key={`skeleton-${index}`} />
//           ))}
//         </div>
//       ) : comments.length === 0 ? (
//         <div className="flex justify-center items-center h-32">
//           <p className="text-center text-gray-500">No comments yet.</p>
//         </div>
//       ) : (
//         <>
//           {comments.map((comment, index) => (
//             <div
//               key={`${comment.id}-${index}`}
//               ref={index === comments.length - 1 ? lastCommentElementRef : null}
//             >
//               <CommentItem
//                 comment={comment}
//                 userId={userId}
//                 onCommentDeleted={handleCommentDeleted}
//                 onCommentHidden={handleCommentHidden}
//                 onReplyAdded={handleReplyAdded}
//               />
//             </div>
//           ))}

//           {/* Loading indicator for more comments */}
//           {isLoadingComments && !isInitialLoading && (
//             <div className="flex justify-center items-center py-4">
//               <div className="w-6 h-6 rounded-full border-2 border-blue-500 animate-spin border-t-transparent"></div>
//             </div>
//           )}

//           {/* End of comments indicator */}
//           {!hasMoreComments && comments.length > 0 && (
//             <div className="py-4 text-sm text-center text-gray-500">
//               No more comments to load
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// // Mobile Bottom Drawer Component
// const MobileCommentsDrawer = ({
//   isOpen,
//   onClose,
//   post,
//   comments,
//   isInitialLoading,
//   isLoadingComments,
//   hasMoreComments,
//   userId,
//   handleCommentDeleted,
//   handleCommentHidden,
//   handleReplyAdded,
//   lastCommentElementRef,
// }) => {
//   const [dragY, setDragY] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const dragStartY = useRef(0);

//   const handleDragStart = (e) => {
//     dragStartY.current = e.clientY || e.touches[0].clientY;
//     setIsDragging(true);
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;

//     const currentY = e.clientY || e.touches[0].clientY;
//     const deltaY = currentY - dragStartY.current;

//     if (deltaY > 0) {
//       setDragY(deltaY);
//     }
//   };

//   const handleDragEnd = () => {
//     if (dragY > 150) {
//       onClose();
//     }
//     setDragY(0);
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     if (isDragging) {
//       const handleMouseMove = (e) => handleDragMove(e);
//       const handleMouseUp = () => handleDragEnd();
//       const handleTouchMove = (e) => handleDragMove(e);
//       const handleTouchEnd = () => handleDragEnd();

//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//       document.addEventListener("touchmove", handleTouchMove);
//       document.addEventListener("touchend", handleTouchEnd);

//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         document.removeEventListener("mouseup", handleMouseUp);
//         document.removeEventListener("touchmove", handleTouchMove);
//         document.removeEventListener("touchend", handleTouchEnd);
//       };
//     }
//   }, [isDragging, dragY]);

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: "100%" }}
//           animate={{ y: dragY }}
//           exit={{ y: "100%" }}
//           transition={{ type: "spring", damping: 25, stiffness: 200 }}
//           className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
//           onClick={(e) => e.stopPropagation()}
//           style={{ transform: `translateY(${dragY}px)` }}
//         >
//           {/* Drag Handle */}
//           <div
//             className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing"
//             onMouseDown={handleDragStart}
//             onTouchStart={handleDragStart}
//           >
//             <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
//           </div>

//           {/* Header */}
//           <div className="flex justify-between items-center px-4 pb-4 border-b border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-900">Comments</h3>
//             <button
//               onClick={onClose}
//               className="p-2 text-gray-400 rounded-full hover:bg-gray-100"
//             >
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Post Info */}
//           <div className="px-4 py-3 border-b border-gray-200">
//             <div className="flex gap-4 items-center mb-2">
//               <FaHeart className="text-red-500" />
//               <span className="text-sm font-semibold">
//                 {post.likes || 0} likes
//               </span>
//               <FaComment className="text-blue-500" />
//               <span className="text-sm font-semibold">
//                 {post.commentsCount || 0} comments
//               </span>
//             </div>
//             {post.caption && (
//               <p className="text-sm text-gray-700 line-clamp-2">
//                 {post.caption}
//               </p>
//             )}
//           </div>

//           {/* Comments */}
//           <div className="flex-1 min-h-0">
//             <CommentsSection
//               comments={comments}
//               isInitialLoading={isInitialLoading}
//               isLoadingComments={isLoadingComments}
//               hasMoreComments={hasMoreComments}
//               userId={userId}
//               handleCommentDeleted={handleCommentDeleted}
//               handleCommentHidden={handleCommentHidden}
//               handleReplyAdded={handleReplyAdded}
//               lastCommentElementRef={lastCommentElementRef}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // Main PostModal Component
// const PostModal = ({ post, onClose, userId }) => {
//   const [comments, setComments] = useState([]);
//   const [isLoadingComments, setIsLoadingComments] = useState(false);
//   const [isInitialLoading, setIsInitialLoading] = useState(true);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [hasMoreComments, setHasMoreComments] = useState(true);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [showMobileComments, setShowMobileComments] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const commentsContainerRef = useRef(null);
//   const observer = useRef();

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Load initial comments
//   useEffect(() => {
//     if (post && userId) {
//       loadInitialComments();
//     }
//   }, [post, userId]);

//   const loadInitialComments = async () => {
//     setIsInitialLoading(true);
//     setIsLoadingComments(true);
//     setComments([]);
//     setNextPageToken(null);
//     setHasMoreComments(true);

//     try {
//       const res = await getMediaCommentsFromInstagramAccountAPI({
//         userId: userId,
//         mediaId: post.id,
//         nextPageToken: null,
//       });

//       console.log("Initial comments res:", res);

//       if (res.items && res.items.length > 0) {
//         setComments(res.items);
//       }

//       if (res.nextPageToken) {
//         setNextPageToken(res.nextPageToken);
//       } else {
//         setHasMoreComments(false);
//       }
//     } catch (error) {
//       console.error("Error loading initial comments:", error);
//       setHasMoreComments(false);
//     } finally {
//       setIsLoadingComments(false);
//       setIsInitialLoading(false);
//     }
//   };

//   // Load more comments
//   const loadMoreComments = useCallback(async () => {
//     if (!nextPageToken || isLoadingComments || !hasMoreComments) return;

//     setIsLoadingComments(true);
//     try {
//       const res = await getMediaCommentsFromInstagramAccountAPI({
//         userId: userId,
//         mediaId: post.id,
//         nextPageToken: nextPageToken,
//       });

//       console.log("Load more comments res:", res);

//       if (res.comments && res.comments.length > 0) {
//         setComments((prevComments) => [...prevComments, ...res.comments]);
//       }

//       if (res.nextPageToken) {
//         setNextPageToken(res.nextPageToken);
//       } else {
//         setNextPageToken(null);
//         setHasMoreComments(false);
//       }
//     } catch (error) {
//       console.error("Error loading more comments:", error);
//       setHasMoreComments(false);
//     } finally {
//       setIsLoadingComments(false);
//     }
//   }, [userId, post.id, nextPageToken, isLoadingComments, hasMoreComments]);

//   // Handle comment actions
//   const handleCommentDeleted = (commentId) => {
//     setComments((prevComments) =>
//       prevComments.filter((comment) => comment.id !== commentId)
//     );
//   };

//   const handleCommentHidden = (commentId) => {
//     setComments((prevComments) =>
//       prevComments.map((comment) =>
//         comment.id === commentId ? { ...comment, isHidden: true } : comment
//       )
//     );
//   };

//   const handleReplyAdded = (commentId) => {
//     // Optionally reload comments to show the new reply
//     // For now, we'll just show a success message
//     console.log("Reply added to comment:", commentId);
//   };

//   // Close actions menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".relative")) {
//         // Close all action menus
//         const actionButtons = document.querySelectorAll(
//           '[data-actions-open="true"]'
//         );
//         actionButtons.forEach((button) => button.click());
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Intersection observer for infinite scroll
//   const lastCommentElementRef = useCallback(
//     (node) => {
//       if (isLoadingComments) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting && hasMoreComments) {
//             loadMoreComments();
//           }
//         },
//         {
//           threshold: 0.1,
//           rootMargin: "100px",
//         }
//       );
//       if (node) observer.current.observe(node);
//     },
//     [isLoadingComments, hasMoreComments, loadMoreComments]
//   );

//   // Handle backdrop click
//   const handleBackdropClick = useCallback(
//     (e) => {
//       if (e.target === e.currentTarget) {
//         onClose();
//       }
//     },
//     [onClose]
//   );

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   // Cleanup observer
//   useEffect(() => {
//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, []);

//   if (!post) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="flex fixed inset-0 z-50 justify-center items-center p-4 w-full h-full bg-black bg-opacity-75"
//         onClick={handleBackdropClick}
//         key={post.id}
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           transition={{ type: "spring", damping: 20 }}
//           className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70"
//           >
//             <FaTimes className="w-4 h-4" />
//           </button>

//           <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
//             {/* Image Section */}
//             <div className="flex relative flex-1 justify-center items-center bg-black">
//               {post.mediaType !== "VIDEO" ? (
//                 <img
//                   src={post.thumbnailUrl || post.mediaUrl}
//                   alt=""
//                   className="object-contain w-full h-full"
//                   onLoad={() => setImageLoaded(true)}
//                   onError={() => setImageLoaded(true)}
//                 />
//               ) : (
//                 <video
//                   src={post.mediaUrl}
//                   autoPlay
//                   loop
//                   muted
//                   className="object-contain w-full h-full"
//                   onLoad={() => setImageLoaded(true)}
//                   onError={() => setImageLoaded(true)}
//                 />
//               )}
//             </div>

//             {/* Desktop Content Section */}
//             <div className="hidden flex-col w-full bg-white md:flex md:w-96">
//               {/* Post Header */}
//               <div className="p-4 border-b border-gray-200">
//                 <div className="flex gap-4 items-center mb-3">
//                   <FaHeart className="text-red-500" />
//                   <span className="font-semibold">{post.likes || 0} likes</span>
//                   <FaComment className="text-blue-500" />
//                   <span className="font-semibold">
//                     {post.commentsCount || 0} comments
//                   </span>
//                 </div>
//                 {post.caption && (
//                   <p className="overflow-y-auto max-h-32 text-sm leading-relaxed text-gray-700 no-scrollbar">
//                     {post.caption}
//                   </p>
//                 )}
//                 {post.timestamp && (
//                   <p className="mt-2 text-xs text-gray-500">
//                     {new Date(post.timestamp).toLocaleString()}
//                   </p>
//                 )}
//               </div>

//               {/* Comments Section */}
//               <div className="flex overflow-hidden flex-col flex-1">
//                 <div className="px-4 py-2 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900">Comments</h3>
//                 </div>

//                 <div ref={commentsContainerRef} className="flex-1 min-h-0">
//                   <CommentsSection
//                     comments={comments}
//                     isInitialLoading={isInitialLoading}
//                     isLoadingComments={isLoadingComments}
//                     hasMoreComments={hasMoreComments}
//                     userId={userId}
//                     handleCommentDeleted={handleCommentDeleted}
//                     handleCommentHidden={handleCommentHidden}
//                     handleReplyAdded={handleReplyAdded}
//                     lastCommentElementRef={lastCommentElementRef}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Bottom Bar */}
//             <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200 md:hidden">
//               <div className="flex gap-4 items-center">
//                 <div className="flex gap-1 items-center">
//                   <FaHeart className="text-red-500" />
//                   <span className="text-sm font-semibold">
//                     {post.likes || 0}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => setShowMobileComments(true)}
//                   className="flex gap-1 items-center p-2 text-blue-500 rounded-lg transition-colors hover:bg-blue-50"
//                 >
//                   <FaComment className="w-4 h-4" />
//                   <span className="text-sm font-semibold">
//                     {post.commentsCount || 0}
//                   </span>
//                   <FaChevronDown className="ml-1 w-3 h-3" />
//                 </button>
//               </div>
//               {post.timestamp && (
//                 <span className="text-xs text-gray-500">
//                   {new Date(post.timestamp).toLocaleDateString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Mobile Comments Drawer */}
//       <MobileCommentsDrawer
//         isOpen={showMobileComments}
//         onClose={() => setShowMobileComments(false)}
//         post={post}
//         comments={comments}
//         isInitialLoading={isInitialLoading}
//         isLoadingComments={isLoadingComments}
//         hasMoreComments={hasMoreComments}
//         userId={userId}
//         handleCommentDeleted={handleCommentDeleted}
//         handleCommentHidden={handleCommentHidden}
//         handleReplyAdded={handleReplyAdded}
//         lastCommentElementRef={lastCommentElementRef}
//       />
//     </AnimatePresence>
//   );
// };

// export default PostModal;

"use client";

import {
  deleteCommentFromInstagramAccountAPI,
  getMediaCommentsFromInstagramAccountAPI,
  hideCommentFromInstagramAccountAPI,
  sendReplyToCommentAPI,
} from "@/lib/apiHandler";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaComment,
  FaEllipsisV,
  FaEyeSlash,
  FaHeart,
  FaPaperPlane,
  FaReply,
  FaTimes,
  FaTrash,
  FaUser,
  FaChevronDown,
  FaExclamationTriangle,
  FaShieldAlt,
  FaEye,
  FaBrain,
  FaFilter,
  FaLanguage,
} from "react-icons/fa";

// Comment Analysis Service
class CommentAnalysisService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  }

  async analyzeComment(comment) {
    const prompt = `
Analyze the following comment for inappropriate content. Classify it across these categories and provide a confidence score (0-100) for each:

1. VULGARITY: Profanity, offensive language, crude expressions
2. NUDITY: Sexual content, explicit references, inappropriate imagery descriptions
3. VIOLENCE: Threats, aggressive language, violent imagery
4. HATE_SPEECH: Discriminatory language, prejudice, harassment
5. SPAM: Repetitive content, promotional spam, irrelevant links
6. HARASSMENT: Personal attacks, bullying, targeted abuse

Comment: "${comment}"

Respond ONLY with a JSON object in this exact format:
{
  "vulgarity": {"score": 0-100, "detected": true/false},
  "nudity": {"score": 0-100, "detected": true/false},
  "violence": {"score": 0-100, "detected": true/false},
  "hate_speech": {"score": 0-100, "detected": true/false},
  "spam": {"score": 0-100, "detected": true/false},
  "harassment": {"score": 0-100, "detected": true/false},
  "overall_risk": "low/medium/high",
  "language_detected": "language_code",
  "summary": "brief explanation"
}

Consider multi-language content and cultural context. Be accurate but not overly sensitive.
`;

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            topK: 1,
            topP: 1,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("No response text received");
      }

      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No valid JSON found in response");
      }

      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Analysis error:", error);
      return {
        vulgarity: { score: 0, detected: false },
        nudity: { score: 0, detected: false },
        violence: { score: 0, detected: false },
        hate_speech: { score: 0, detected: false },
        spam: { score: 0, detected: false },
        harassment: { score: 0, detected: false },
        overall_risk: "low",
        language_detected: "unknown",
        summary: "Analysis failed",
        error: true,
      };
    }
  }

  async analyzeCommentsBatch(comments) {
    const results = [];

    // Process comments in batches to avoid rate limits
    for (let i = 0; i < comments.length; i += 5) {
      const batch = comments.slice(i, i + 5);
      const batchPromises = batch.map(async (comment) => {
        const analysis = await this.analyzeComment(comment.text || "");
        return {
          commentId: comment.id,
          analysis,
        };
      });

      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);

      // Add delay between batches
      if (i + 5 < comments.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    return results;
  }
}

// Comment Analysis Display Component
const CommentAnalysisPanel = ({
  analysisResults,
  comments,
  isAnalyzing,
  onStartAnalysis,
  onFilterChange,
  activeFilters,
  userId,
  onCommentDeleted,
  onCommentHidden,
  onReplyAdded,
}) => {
  const [selectedComment, setSelectedComment] = useState(null);
  const [actionLoading, setActionLoading] = useState({});

  const getRiskColor = (risk) => {
    switch (risk) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-green-600 bg-green-50";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "vulgarity":
        return <FaExclamationTriangle className="w-3 h-3" />;
      case "nudity":
        return <FaEyeSlash className="w-3 h-3" />;
      case "violence":
        return <FaShieldAlt className="w-3 h-3" />;
      case "hate_speech":
        return <FaExclamationTriangle className="w-3 h-3" />;
      case "spam":
        return <FaFilter className="w-3 h-3" />;
      case "harassment":
        return <FaShieldAlt className="w-3 h-3" />;
      default:
        return <FaEye className="w-3 h-3" />;
    }
  };

  const getAnalyzedComments = () => {
    if (!analysisResults.length) return [];

    return comments
      .map((comment) => {
        const analysis = analysisResults.find(
          (r) => r.commentId === comment.id
        );
        return { ...comment, analysis: analysis?.analysis };
      })
      .filter((comment) => {
        if (!comment.analysis) return false;

        if (activeFilters.length === 0) return true;

        return activeFilters.some(
          (filter) => comment.analysis[filter]?.detected === true
        );
      });
  };

  const handleDeleteFromAnalysis = async (commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?"))
      return;

    setActionLoading((prev) => ({ ...prev, [`delete-${commentId}`]: true }));
    try {
      const response = await deleteCommentFromInstagramAccountAPI(
        userId,
        commentId
      );
      if (response.success) {
        onCommentDeleted(commentId);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Failed to delete comment. Please try again.");
    } finally {
      setActionLoading((prev) => ({ ...prev, [`delete-${commentId}`]: false }));
    }
  };

  const handleHideFromAnalysis = async (commentId, hide) => {
    setActionLoading((prev) => ({ ...prev, [`hide-${commentId}`]: true }));
    try {
      const response = await hideCommentFromInstagramAccountAPI(
        userId,
        commentId,
        hide
      );
      if (response.success) {
        onCommentHidden(commentId);
      }
    } catch (error) {
      console.error("Error hiding comment:", error);
      alert("Failed to hide comment. Please try again.");
    } finally {
      setActionLoading((prev) => ({ ...prev, [`hide-${commentId}`]: false }));
    }
  };

  const analyzedComments = getAnalyzedComments();

  return (
    <div className="flex flex-col h-full">
      {/* Analysis Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="flex gap-2 items-center text-lg font-semibold text-gray-900">
            <FaBrain className="text-purple-500" />
            Comment Analysis
          </h3>
          {!isAnalyzing && analysisResults.length === 0 && (
            <button
              onClick={onStartAnalysis}
              className="flex gap-2 items-center px-3 py-1 text-sm text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700"
            >
              <FaBrain className="w-4 h-4" />
              Start Analysis
            </button>
          )}
        </div>

        {/* Filter Options */}
        {analysisResults.length > 0 && (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {[
                "vulgarity",
                "nudity",
                "violence",
                "hate_speech",
                "spam",
                "harassment",
              ].map((category) => {
                const detectedCount = analysisResults.filter(
                  (r) => r.analysis[category]?.detected
                ).length;
                const isActive = activeFilters.includes(category);

                return (
                  <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={`flex gap-1 items-center px-2 py-1 text-xs rounded-full transition-colors ${
                      isActive
                        ? "text-purple-700 bg-purple-100"
                        : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {getCategoryIcon(category)}
                    {category.replace("_", " ")} ({detectedCount})
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-gray-500">
              {analyzedComments.length} of {comments.length} comments shown
            </div>
          </div>
        )}
      </div>

      {/* Analysis Content */}
      <div className="overflow-y-scroll flex-1 max-h-[18rem]">
        {isAnalyzing ? (
          <div className="flex flex-col justify-center items-center h-32">
            <div className="mb-2 w-8 h-8 rounded-full border-2 border-purple-500 animate-spin border-t-transparent"></div>
            <p className="text-sm text-gray-600">Analyzing comments...</p>
          </div>
        ) : analysisResults.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-32">
            <FaBrain className="mb-2 w-8 h-8 text-gray-400" />
            <p className="text-sm text-gray-500">No analysis performed yet</p>
          </div>
        ) : analyzedComments.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-32">
            <FaFilter className="mb-2 w-8 h-8 text-gray-400" />
            <p className="text-sm text-gray-500">
              No comments match current filters
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            {analyzedComments.map((comment) => {
              const analysis = comment.analysis;
              if (!analysis) return null;

              return (
                <div
                  key={comment.id}
                  className="p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    setSelectedComment(
                      selectedComment === comment.id ? null : comment.id
                    )
                  }
                >
                  <div className="flex gap-2 justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 items-center mb-1">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {comment.senderUsername || "Unknown"}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getRiskColor(
                            analysis.overall_risk
                          )}`}
                        >
                          {analysis.overall_risk} risk
                        </span>
                        {analysis.language_detected &&
                          analysis.language_detected !== "unknown" && (
                            <span className="flex gap-1 items-center px-2 py-1 text-xs text-blue-600 bg-blue-50 rounded-full">
                              <FaLanguage className="w-3 h-3" />
                              {analysis.language_detected}
                            </span>
                          )}
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {comment.text}
                      </p>

                      {/* Category indicators */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {Object.entries(analysis).map(([key, value]) => {
                          if (
                            typeof value === "object" &&
                            value.detected &&
                            key !== "overall_risk"
                          ) {
                            return (
                              <span
                                key={key}
                                className="flex gap-1 items-center px-1 py-0.5 text-xs bg-red-100 text-red-700 rounded"
                              >
                                {getCategoryIcon(key)}
                                {key.replace("_", " ")} ({value.score}%)
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>

                      {/* Quick Actions */}
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleHideFromAnalysis(
                              comment.id,
                              !comment.isHidden
                            );
                          }}
                          disabled={
                            actionLoading[`hide-${comment.id}`] ||
                            comment.isHidden
                          }
                          className="flex gap-1 items-center px-2 py-1 text-xs text-orange-600 rounded transition-colors hover:bg-orange-50 disabled:opacity-50"
                        >
                          <FaEyeSlash className="w-3 h-3" />
                          {actionLoading[`hide-${comment.id}`]
                            ? "Hiding..."
                            : comment.isHidden
                            ? "Hidden"
                            : "Hide"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteFromAnalysis(comment.id);
                          }}
                          disabled={actionLoading[`delete-${comment.id}`]}
                          className="flex gap-1 items-center px-2 py-1 text-xs text-red-600 rounded transition-colors hover:bg-red-50 disabled:opacity-50"
                        >
                          <FaTrash className="w-3 h-3" />
                          {actionLoading[`delete-${comment.id}`]
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedComment === comment.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 mt-3 bg-gray-50 rounded-lg"
                    >
                      <div className="space-y-2">
                        <div className="mb-2 text-xs text-gray-600">
                          <strong>Analysis Summary:</strong> {analysis.summary}
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {Object.entries(analysis).map(([key, value]) => {
                            if (
                              typeof value === "object" &&
                              value.score !== undefined
                            ) {
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize">
                                    {key.replace("_", " ")}:
                                  </span>
                                  <span
                                    className={
                                      value.detected
                                        ? "text-red-600 font-medium"
                                        : "text-gray-500"
                                    }
                                  >
                                    {value.score}%
                                  </span>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>

                        {/* Full comment text */}
                        <div className="pt-2 border-t border-gray-200">
                          <div className="mb-1 text-xs text-gray-600">
                            <strong>Full Comment:</strong>
                          </div>
                          <p className="p-2 text-sm text-gray-700 bg-white rounded border">
                            {comment.text}
                          </p>
                        </div>

                        {/* Extended Actions */}
                        <div className="flex gap-2 pt-2 border-t border-gray-200">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleHideFromAnalysis(
                                comment.id,
                                !comment.isHidden
                              );
                            }}
                            disabled={
                              actionLoading[`hide-${comment.id}`] ||
                              comment.isHidden
                            }
                            className="flex gap-1 items-center px-3 py-1 text-xs text-orange-600 bg-orange-50 rounded transition-colors hover:bg-orange-100 disabled:opacity-50"
                          >
                            <FaEyeSlash className="w-3 h-3" />
                            {actionLoading[`hide-${comment.id}`]
                              ? "Hiding..."
                              : comment.isHidden
                              ? "Hidden"
                              : "Hide Comment"}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteFromAnalysis(comment.id);
                            }}
                            disabled={actionLoading[`delete-${comment.id}`]}
                            className="flex gap-1 items-center px-3 py-1 text-xs text-red-600 bg-red-50 rounded transition-colors hover:bg-red-100 disabled:opacity-50"
                          >
                            <FaTrash className="w-3 h-3" />
                            {actionLoading[`delete-${comment.id}`]
                              ? "Deleting..."
                              : "Delete Comment"}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Comment Skeleton Component
const CommentSkeleton = () => {
  return (
    <div className="flex gap-3 p-3 animate-pulse">
      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="flex-1">
        <div className="mb-1 w-24 h-4 bg-gray-300 rounded"></div>
        <div className="mb-1 w-full h-3 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

// Individual Comment Component with Analysis
const CommentItem = ({
  comment,
  userId,
  onCommentDeleted,
  onCommentHidden,
  onReplyAdded,
  analysis,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this comment?"))
      return;

    setIsDeleting(true);
    try {
      const response = await deleteCommentFromInstagramAccountAPI(
        userId,
        comment.id
      );
      if (response.success) {
        setIsDeleted(true);
        onCommentDeleted(comment.id);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Failed to delete comment. Please try again.");
    } finally {
      setIsDeleting(false);
      setShowActions(false);
    }
  };

  const handleHide = async (hide) => {
    setIsLoading(true);
    try {
      const response = await hideCommentFromInstagramAccountAPI(
        userId,
        comment.id,
        hide
      );
      if (response.success) {
        onCommentHidden(comment.id);
      }
    } catch (error) {
      console.error("Error hiding comment:", error);
      alert("Failed to hide comment. Please try again.");
    } finally {
      setIsLoading(false);
      setShowActions(false);
    }
  };

  const handleReply = async () => {
    if (!replyContent.trim()) return;

    setIsLoading(true);
    try {
      const response = await sendReplyToCommentAPI(
        userId,
        comment.id,
        replyContent
      );
      if (response.success) {
        setReplyContent("");
        setShowReplyInput(false);
        onReplyAdded(comment.id);
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isDeleted) return null;

  const getRiskIndicator = () => {
    if (!analysis) return null;

    const riskLevel = analysis.overall_risk;
    if (riskLevel === "low") return null;

    return (
      <div
        className={`flex gap-1 items-center px-2 py-1 text-xs rounded-full ${
          riskLevel === "high"
            ? "bg-red-100 text-red-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        <FaExclamationTriangle className="w-3 h-3" />
        {riskLevel} risk
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-3 p-3 rounded-lg hover:bg-gray-50 group ${
        analysis?.overall_risk === "high"
          ? "border-l-4 border-red-500"
          : analysis?.overall_risk === "medium"
          ? "border-l-4 border-orange-500"
          : ""
      }`}
    >
      <div className="flex-shrink-0">
        {comment.profilePictureUrl ? (
          <img
            src={comment.profilePictureUrl}
            alt={comment.username}
            className="object-cover w-8 h-8 rounded-full"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : (
          <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
            <FaUser className="w-4 h-4 text-gray-400" />
          </div>
        )}
        <div className="hidden justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
          <FaUser className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex gap-2 items-center mb-1">
          <span className="text-sm font-semibold text-gray-900 truncate">
            {comment.senderUsername || "Unknown User"}
          </span>
          {comment.timestamp && (
            <span className="text-xs text-gray-500">
              {new Date(comment.timestamp).toLocaleDateString()}
            </span>
          )}
          {comment.isHidden && (
            <span className="text-xs text-red-500">Hidden</span>
          )}
          {analysis?.language_detected &&
            analysis.language_detected !== "unknown" && (
              <span className="flex gap-1 items-center px-1 py-0.5 text-xs bg-blue-50 text-blue-600 rounded">
                <FaLanguage className="w-3 h-3" />
                {analysis.language_detected}
              </span>
            )}
          {getRiskIndicator()}

          {/* Actions Menu */}
          <div className="relative ml-auto">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1 text-gray-400 rounded opacity-0 transition-all group-hover:opacity-100 hover:text-gray-600 hover:bg-gray-100"
            >
              <FaEllipsisV className="w-3 h-3" />
            </button>

            {showActions && (
              <div className="absolute right-0 top-6 z-10 bg-white rounded-lg border border-gray-200 shadow-lg min-w-32">
                <button
                  onClick={() => {
                    setShowReplyInput(!showReplyInput);
                    setShowActions(false);
                  }}
                  className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 rounded-t-lg hover:bg-gray-50"
                >
                  <FaReply className="w-3 h-3" />
                  Reply
                </button>
                <button
                  onClick={() => handleHide(!comment.isHidden)}
                  disabled={isLoading}
                  className="flex gap-2 items-center px-3 py-2 w-full text-sm text-gray-700 hover:bg-gray-50"
                >
                  <FaEyeSlash className="w-3 h-3" />
                  {isLoading
                    ? "Hiding..."
                    : comment.isHidden
                    ? "Unhide"
                    : "Hide"}
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex gap-2 items-center px-3 py-2 w-full text-sm text-red-600 rounded-b-lg hover:bg-red-50"
                >
                  <FaTrash className="w-3 h-3" />
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-700 break-words">
          {comment.text || "No comment text"}
        </p>
        {comment.likeCount > 0 && (
          <div className="flex gap-1 items-center mt-1">
            <span className="text-xs text-gray-500">
              {comment.likeCount} like{comment.likeCount === 1 ? "" : "s"}
            </span>
          </div>
        )}

        {/* Analysis Summary */}
        {analysis && (
          <div className="mt-2 text-xs text-gray-600">
            {analysis.summary && (
              <div className="flex gap-1 items-start">
                <FaBrain className="mt-0.5 w-3 h-3 text-purple-500" />
                <span>{analysis.summary}</span>
              </div>
            )}
          </div>
        )}

        {/* Reply Input */}
        {showReplyInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-2 mt-2 bg-gray-50 rounded-lg"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 px-3 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleReply();
                  }
                }}
              />
              <button
                onClick={handleReply}
                disabled={!replyContent.trim() || isLoading}
                className="px-2 py-1 text-blue-500 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-4 h-4 rounded-full border border-blue-500 animate-spin border-t-transparent"></div>
                ) : (
                  <FaPaperPlane className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setShowReplyInput(false)}
                className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Comments Section Component (reusable for both desktop and mobile)
const CommentsSection = ({
  comments,
  isInitialLoading,
  isLoadingComments,
  hasMoreComments,
  userId,
  handleCommentDeleted,
  handleCommentHidden,
  handleReplyAdded,
  lastCommentElementRef,
  analysisResults,
}) => {
  return (
    <div className="overflow-y-auto flex-1 max-h-96">
      {isInitialLoading ? (
        // Show skeleton loading
        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <CommentSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-center text-gray-500">No comments yet.</p>
        </div>
      ) : (
        <>
          {comments.map((comment, index) => {
            const analysis = analysisResults.find(
              (r) => r.commentId === comment.id
            )?.analysis;

            return (
              <div
                key={`${comment.id}-${index}`}
                ref={
                  index === comments.length - 1 ? lastCommentElementRef : null
                }
              >
                <CommentItem
                  comment={comment}
                  userId={userId}
                  onCommentDeleted={handleCommentDeleted}
                  onCommentHidden={handleCommentHidden}
                  onReplyAdded={handleReplyAdded}
                  analysis={analysis}
                />
              </div>
            );
          })}

          {/* Loading indicator for more comments */}
          {isLoadingComments && !isInitialLoading && (
            <div className="flex justify-center items-center py-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 animate-spin border-t-transparent"></div>
            </div>
          )}

          {/* End of comments indicator */}
          {!hasMoreComments && comments.length > 0 && (
            <div className="py-4 text-sm text-center text-gray-500">
              No more comments to load
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Mobile Bottom Drawer Component
const MobileCommentsDrawer = ({
  isOpen,
  onClose,
  post,
  comments,
  isInitialLoading,
  isLoadingComments,
  hasMoreComments,
  userId,
  handleCommentDeleted,
  handleCommentHidden,
  handleReplyAdded,
  lastCommentElementRef,
  analysisResults,
  isAnalyzing,
  onStartAnalysis,
  showAnalysis,
  onToggleAnalysis,
  activeFilters,
  onFilterChange,
}) => {
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);

  const handleDragStart = (e) => {
    dragStartY.current = e.clientY || e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentY = e.clientY || e.touches[0].clientY;
    const deltaY = currentY - dragStartY.current;

    if (deltaY > 0) {
      setDragY(deltaY);
    }
  };

  const handleDragEnd = () => {
    if (dragY > 150) {
      onClose();
    }
    setDragY(0);
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => handleDragMove(e);
      const handleMouseUp = () => handleDragEnd();
      const handleTouchMove = (e) => handleDragMove(e);
      const handleTouchEnd = () => handleDragEnd();

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, dragY]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: dragY }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{ transform: `translateY(${dragY}px)` }}
        >
          {/* Drag Handle */}
          <div
            className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="flex justify-between items-center px-4 pb-4 border-b border-gray-200">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {showAnalysis ? "Analysis" : "Comments"}
              </h3>
              <button
                onClick={onToggleAnalysis}
                className={`flex gap-1 items-center px-2 py-1 text-xs rounded-full transition-colors ${
                  showAnalysis
                    ? "text-purple-700 bg-purple-100"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaBrain className="w-3 h-3" />
                AI Analysis
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 rounded-full hover:bg-gray-100"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Post Info */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex gap-4 items-center mb-2">
              <FaHeart className="text-red-500" />
              <span className="text-sm font-semibold">
                {post.likes || 0} likes
              </span>
              <FaComment className="text-blue-500" />
              <span className="text-sm font-semibold">
                {post.commentsCount || 0} comments
              </span>
            </div>
            {post.caption && (
              <p className="text-sm text-gray-700 line-clamp-2">
                {post.caption}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0">
            {showAnalysis ? (
              <CommentAnalysisPanel
                analysisResults={analysisResults}
                comments={comments}
                isAnalyzing={isAnalyzing}
                onStartAnalysis={onStartAnalysis}
                onFilterChange={onFilterChange}
                activeFilters={activeFilters}
                userId={userId}
                onCommentDeleted={handleCommentDeleted}
                onCommentHidden={handleCommentHidden}
                onReplyAdded={handleReplyAdded}
              />
            ) : (
              <CommentsSection
                comments={comments}
                isInitialLoading={isInitialLoading}
                isLoadingComments={isLoadingComments}
                hasMoreComments={hasMoreComments}
                userId={userId}
                handleCommentDeleted={handleCommentDeleted}
                handleCommentHidden={handleCommentHidden}
                handleReplyAdded={handleReplyAdded}
                lastCommentElementRef={lastCommentElementRef}
                analysisResults={analysisResults}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main PostModal Component
const PostModal = ({ post, onClose, userId }) => {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showMobileComments, setShowMobileComments] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Analysis states
  const [analysisResults, setAnalysisResults] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDepjlF-cKFs_RvMnsmRa86-tR2VMNpLLU" || ""
  );

  const commentsContainerRef = useRef(null);
  const observer = useRef();
  const analysisService = useRef(null);

  // Initialize analysis service
  useEffect(() => {
    if (apiKey) {
      analysisService.current = new CommentAnalysisService(apiKey);
    }
  }, [apiKey]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load initial comments
  useEffect(() => {
    if (post && userId) {
      loadInitialComments();
    }
  }, [post, userId]);

  const loadInitialComments = async () => {
    setIsInitialLoading(true);
    setIsLoadingComments(true);
    setComments([]);
    setNextPageToken(null);
    setHasMoreComments(true);

    try {
      const res = await getMediaCommentsFromInstagramAccountAPI({
        userId: userId,
        mediaId: post.id,
        nextPageToken: null,
      });

      console.log("Initial comments res:", res);

      if (res.items && res.items.length > 0) {
        setComments(res.items);
      }

      if (res.nextPageToken) {
        setNextPageToken(res.nextPageToken);
      } else {
        setHasMoreComments(false);
      }
    } catch (error) {
      console.error("Error loading initial comments:", error);
      setHasMoreComments(false);
    } finally {
      setIsLoadingComments(false);
      setIsInitialLoading(false);
    }
  };

  // Load more comments
  const loadMoreComments = useCallback(async () => {
    if (!nextPageToken || isLoadingComments || !hasMoreComments) return;

    setIsLoadingComments(true);
    try {
      const res = await getMediaCommentsFromInstagramAccountAPI({
        userId: userId,
        mediaId: post.id,
        nextPageToken: nextPageToken,
      });

      console.log("Load more comments res:", res);

      if (res.comments && res.comments.length > 0) {
        setComments((prevComments) => [...prevComments, ...res.comments]);
      }

      if (res.nextPageToken) {
        setNextPageToken(res.nextPageToken);
      } else {
        setNextPageToken(null);
        setHasMoreComments(false);
      }
    } catch (error) {
      console.error("Error loading more comments:", error);
      setHasMoreComments(false);
    } finally {
      setIsLoadingComments(false);
    }
  }, [userId, post.id, nextPageToken, isLoadingComments, hasMoreComments]);

  // Start comment analysis
  const handleStartAnalysis = async () => {
    if (!analysisService.current) {
      alert(
        "Please set your Google API key in environment variables (GOOGLE_API_KEY)"
      );
      return;
    }

    if (comments.length === 0) {
      alert("No comments to analyze");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResults([]);

    try {
      const results = await analysisService.current.analyzeCommentsBatch(
        comments
      );
      setAnalysisResults(results);
      setShowAnalysis(true);
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Analysis failed. Please check your API key and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (category) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((f) => f !== category)
        : [...prev, category]
    );
  };

  // Handle comment actions
  const handleCommentDeleted = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
    setAnalysisResults((prev) =>
      prev.filter((result) => result.commentId !== commentId)
    );
  };

  const handleCommentHidden = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, isHidden: !comment.isHidden }
          : comment
      )
    );
  };

  const handleReplyAdded = (commentId) => {
    // Optionally reload comments to show the new reply
    console.log("Reply added to comment:", commentId);
  };

  // Close actions menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        // Close all action menus
        const actionButtons = document.querySelectorAll(
          '[data-actions-open="true"]'
        );
        actionButtons.forEach((button) => button.click());
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Intersection observer for infinite scroll
  const lastCommentElementRef = useCallback(
    (node) => {
      if (isLoadingComments) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMoreComments) {
            loadMoreComments();
          }
        },
        {
          threshold: 0.1,
          rootMargin: "100px",
        }
      );
      if (node) observer.current.observe(node);
    },
    [isLoadingComments, hasMoreComments, loadMoreComments]
  );

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Cleanup observer
  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex fixed inset-0 z-50 justify-center items-center p-4 w-full h-full bg-black bg-opacity-75"
        onClick={handleBackdropClick}
        key={post.id}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
            {/* Image Section */}
            <div className="flex relative flex-1 justify-center items-center bg-black">
              {post.mediaType !== "VIDEO" ? (
                <img
                  src={post.thumbnailUrl || post.mediaUrl}
                  alt=""
                  className="object-contain w-[90%] h-[90%] md:w-full md:h-full"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              ) : (
                <video
                  src={post.mediaUrl}
                  autoPlay
                  loop
                  className="object-contain w-[90%] h-[90%] md:w-full md:h-full"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              )}
            </div>

            {/* Desktop Content Section */}
            <div className="hidden flex-col w-full bg-white md:flex md:w-[600px]">
              {/* Post Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex gap-4 items-center mb-3">
                  <FaHeart className="text-red-500" />
                  <span className="font-semibold">{post.likes || 0} likes</span>
                  <FaComment className="text-blue-500" />
                  <span className="font-semibold">
                    {post.commentsCount || 0} comments
                  </span>
                </div>
                {post.caption && (
                  <p className="overflow-y-auto max-h-32 text-sm leading-relaxed text-gray-700 no-scrollbar">
                    {post.caption}
                  </p>
                )}
                {post.timestamp && (
                  <p className="mt-2 text-xs text-gray-500">
                    {new Date(post.timestamp).toLocaleString()}
                  </p>
                )}
              </div>

              {/* Desktop Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setShowAnalysis(false)}
                  className={`flex-1 flex gap-2 justify-center items-center py-3 text-sm font-medium transition-colors ${
                    !showAnalysis
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FaComment className="w-4 h-4" />
                  Comments
                </button>
                <button
                  onClick={() => setShowAnalysis(true)}
                  className={`flex-1 flex gap-2 justify-center items-center py-3 text-sm font-medium transition-colors ${
                    showAnalysis
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FaBrain className="w-4 h-4" />
                  AI Analysis
                  {analysisResults.length > 0 && (
                    <span className="px-1 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full">
                      {
                        analysisResults.filter((r) =>
                          Object.values(r.analysis).some(
                            (cat) => typeof cat === "object" && cat.detected
                          )
                        ).length
                      }
                    </span>
                  )}
                </button>
              </div>

              {/* Content Area */}
              <div className="flex overflow-hidden flex-col flex-1">
                {showAnalysis ? (
                  <CommentAnalysisPanel
                    analysisResults={analysisResults}
                    comments={comments}
                    isAnalyzing={isAnalyzing}
                    onStartAnalysis={handleStartAnalysis}
                    onFilterChange={handleFilterChange}
                    activeFilters={activeFilters}
                    userId={userId}
                    onCommentDeleted={handleCommentDeleted}
                    onCommentHidden={handleCommentHidden}
                    onReplyAdded={handleReplyAdded}
                  />
                ) : (
                  <div ref={commentsContainerRef} className="flex-1 min-h-0">
                    <CommentsSection
                      comments={comments}
                      isInitialLoading={isInitialLoading}
                      isLoadingComments={isLoadingComments}
                      hasMoreComments={hasMoreComments}
                      userId={userId}
                      handleCommentDeleted={handleCommentDeleted}
                      handleCommentHidden={handleCommentHidden}
                      handleReplyAdded={handleReplyAdded}
                      lastCommentElementRef={lastCommentElementRef}
                      analysisResults={analysisResults}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200 md:hidden">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 items-center">
                  <FaHeart className="text-red-500" />
                  <span className="text-sm font-semibold">
                    {post.likes || 0}
                  </span>
                </div>
                <button
                  onClick={() => setShowMobileComments(true)}
                  className="flex gap-1 items-center p-2 text-blue-500 rounded-lg transition-colors hover:bg-blue-50"
                >
                  <FaComment className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {post.commentsCount || 0}
                  </span>
                  <FaChevronDown className="ml-1 w-3 h-3" />
                </button>
              </div>
              {post.timestamp && (
                <span className="text-xs text-gray-500">
                  {new Date(post.timestamp).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Comments Drawer */}
      <MobileCommentsDrawer
        isOpen={showMobileComments}
        onClose={() => setShowMobileComments(false)}
        post={post}
        comments={comments}
        isInitialLoading={isInitialLoading}
        isLoadingComments={isLoadingComments}
        hasMoreComments={hasMoreComments}
        userId={userId}
        handleCommentDeleted={handleCommentDeleted}
        handleCommentHidden={handleCommentHidden}
        handleReplyAdded={handleReplyAdded}
        lastCommentElementRef={lastCommentElementRef}
        analysisResults={analysisResults}
        isAnalyzing={isAnalyzing}
        onStartAnalysis={handleStartAnalysis}
        showAnalysis={showAnalysis}
        onToggleAnalysis={() => setShowAnalysis(!showAnalysis)}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
    </AnimatePresence>
  );
};

export default PostModal;
