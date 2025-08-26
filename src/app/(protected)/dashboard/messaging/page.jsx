"use client";

import { useUser } from "@/contexts/UserContext";
import {
  getConversationMessagesFromInstagramAccountAPI,
  getConversationsFromInstagramAccountAPI,
  sendInstagramMessageAPI,
} from "@/lib/apiHandler";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { FiArrowLeft, FiSend, FiSmile } from "react-icons/fi";

// Header Component
const Header = ({ selectedConversation, onBack, isMobile }) => (
  <div className="flex justify-between items-center bg-white border-b border-gray-200 sm:p-4">
    <div className="flex items-center space-x-3">
      {isMobile && selectedConversation && (
        <button onClick={onBack} className="p-4">
          <FiArrowLeft className="w-6 h-6" />
        </button>
      )}
      {selectedConversation && (
        <>
          <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
            <span className="text-sm font-semibold text-white">
              {selectedConversation?.user2Username?.slice(0, 1).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">
              {selectedConversation.user2Username}
            </h2>
          </div>
        </>
      )}
      {!selectedConversation && !isMobile && (
        <h1 className="text-xl font-semibold">Chat</h1>
      )}
    </div>
  </div>
);

// Conversation List Item
const ConversationItem = ({ conversation, isSelected, onClick }) => (
  <motion.div
    whileHover={{ backgroundColor: "#f9fafb" }}
    onClick={onClick}
    className={`flex items-center p-3 cursor-pointer transition-colors ${
      isSelected ? "bg-gray-100" : "hover:bg-gray-50"
    }`}
  >
    <div className="flex justify-center items-center mr-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
      <span className="font-semibold text-white">
        {conversation?.user2Username?.slice(0, 1).toUpperCase()}
      </span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 truncate">
        {conversation.user2Username}
      </p>
      <p className="text-sm text-gray-500 truncate">Click to start messaging</p>
    </div>
    <div className="text-xs text-gray-400">2m</div>
  </motion.div>
);

// Conversation List
const ConversationList = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  loading,
}) => (
  <div className="flex flex-col h-full bg-white border-r border-gray-200">
    <div className="p-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold">Messages</h1>
    </div>
    <div className="overflow-y-auto flex-1 max-h-screen">
      {loading ? (
        <div className="p-4 text-center text-gray-500">
          Loading conversations...
        </div>
      ) : (
        conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isSelected={selectedConversation?.id === conversation.id}
            onClick={() => onSelectConversation(conversation)}
          />
        ))
      )}
    </div>
  </div>
);

// Message Item
const MessageItem = ({ message, username }) => {
  const isOwnMessage = message.fromUsername === username;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex mb-4 ${isOwnMessage ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isOwnMessage ? "text-white bg-blue-500" : "text-gray-900 bg-gray-100"
        }`}
      >
        <p className="text-sm break-words">{message.message}</p>
        <div
          className={`flex items-center justify-end mt-1 space-x-1 ${
            isOwnMessage ? "text-blue-100" : "text-gray-500"
          }`}
        >
          <span className="text-xs">
            {new Date(message.createdTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Message Input
const MessageInput = ({ onSendMessage, loading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() && !loading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message..."
            className="px-4 py-2 pr-10 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 text-gray-400 transform -translate-y-1/2 hover:text-gray-600"
          >
            <FiSmile className="w-5 h-5" />
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={!message.trim() || loading}
          className={`p-2 rounded-full transition-colors ${
            message.trim() && !loading
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <BiPaperPlane className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

// Messages View
const MessagesView = ({
  selectedConversation,
  messages,
  onSendMessage,
  messagesLoading,
  sendingMessage,
  onLoadMore,
  hasMoreMessages,
  loadingMore,
  username,
}) => {
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop } = messagesContainerRef.current;
      if (scrollTop === 0 && hasMoreMessages && !loadingMore) {
        onLoadMore();
      }
    }
  };

  if (!selectedConversation) {
    return (
      <div className="flex flex-1 justify-center items-center bg-white">
        <div className="text-center">
          <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
            <FiSend className="w-12 h-12 text-white" />
          </div>
          <h2 className="mb-2 text-2xl font-light text-gray-900">
            Your Messages
          </h2>
          <p className="text-gray-500">
            Send private photos and messages to a friend or group
          </p>
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="font-semibold text-center text-gray-500">No Messages</div>
    );
  }

  return (
    <div className="flex flex-col flex-1 justify-between bg-white">
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="overflow-y-auto flex-1 p-4 space-y-1 max-h-[calc(100vh-132px)]"
      >
        {loadingMore && (
          <div className="py-2 text-center">
            <div className="inline-block w-4 h-4 rounded-full border-b-2 border-blue-500 animate-spin"></div>
          </div>
        )}
        {messagesLoading && messages.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <div className="w-8 h-8 rounded-full border-b-2 border-blue-500 animate-spin"></div>
          </div>
        ) : (
          <AnimatePresence>
            {messages.map((message) => (
              <MessageItem
                key={message.id}
                message={message}
                username={username}
              />
            ))}
          </AnimatePresence>
        )}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={onSendMessage} loading={sendingMessage} />
    </div>
  );
};

// Main App Component
const InstagramMessaging = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversationsLoading, setConversationsLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastPageToken, setLastPageToken] = useState(null);

  const { user } = useUser();

  const [userId, setUserId] = useState(user?.id);
  const [username, setUsername] = useState(user?.instagramDetails?.username);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setUserId(user?.id);
    setUsername(user?.instagramDetails?.username);
  }, [user]);

  // Load conversations
  useEffect(() => {
    if (userId) {
      loadConversations();
    }
  }, [userId]);

  const loadConversations = async () => {
    try {
      const result = await getConversationsFromInstagramAccountAPI(userId);

      if (result.success) {
        setConversations(result.items);
      }
    } catch (error) {
      console.error("Error loading conversations:", error);
    } finally {
      setConversationsLoading(false);
    }
  };

  // Load messages for selected conversation
  const loadMessages = async (
    conversationId,
    pageToken = null,
    append = false
  ) => {
    if (!append) {
      setMessagesLoading(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const result = await getConversationMessagesFromInstagramAccountAPI(
        userId,
        conversationId,
        pageToken
      );

      if (result.success) {
        const newMessages = result.items;
        const newPageToken = result.nextPageToken;

        // Check if we got the same page token to prevent infinite loops
        if (newPageToken === lastPageToken && newPageToken !== null) {
          setHasMoreMessages(false);
          return;
        }

        if (append) {
          setMessages((prev) => [...newMessages, ...prev]);
        } else {
          setMessages(newMessages);
        }

        setNextPageToken(newPageToken);
        setLastPageToken(newPageToken);
        setHasMoreMessages(!!newPageToken);
      }
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setMessagesLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  // Handle conversation selection
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setMessages([]);
    setNextPageToken(null);
    setLastPageToken(null);
    setHasMoreMessages(true);
  };

  // Load more messages (pagination)
  const handleLoadMore = () => {
    if (
      selectedConversation &&
      nextPageToken &&
      nextPageToken !== lastPageToken
    ) {
      loadMessages(selectedConversation.id, nextPageToken, true);
    }
  };

  // Send message
  const handleSendMessage = async (messageText) => {
    if (!selectedConversation) return;

    setSendingMessage(true);

    // Optimistically add message
    const tempMessage = {
      id: `temp-${Date.now()}`,
      fromId: "currentUser",
      fromUsername: "you",
      message: messageText,
      createdTime: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempMessage]);

    try {
      const result = await sendInstagramMessageAPI(
        userId,
        selectedConversation.id,
        messageText
      );

      if (result.success) {
        // Update the temporary message with the real message ID
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === tempMessage.id ? { ...msg, id: result.messageId } : msg
          )
        );
      } else {
        // Remove the temporary message on failure
        setMessages((prev) => prev.filter((msg) => msg.id !== tempMessage.id));
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Remove the temporary message on error
      setMessages((prev) => prev.filter((msg) => msg.id !== tempMessage.id));
      alert("Error sending message");
    } finally {
      setSendingMessage(false);
    }
  };

  const handleBack = () => {
    setSelectedConversation(null);
  };

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex overflow-hidden h-screen bg-white">
      {/* Mobile View */}
      {isMobile ? (
        <div className="flex flex-col flex-1">
          <Header
            selectedConversation={selectedConversation}
            onBack={handleBack}
            isMobile={true}
          />
          <AnimatePresence mode="wait">
            {!selectedConversation ? (
              <motion.div
                key="conversations"
                initial={{ x: 0 }}
                exit={{ x: -100 }}
                className="flex-1"
              >
                <ConversationList
                  conversations={conversations}
                  selectedConversation={selectedConversation}
                  onSelectConversation={handleSelectConversation}
                  loading={conversationsLoading}
                />
              </motion.div>
            ) : (
              <motion.div
                key="messages"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                className="flex flex-col flex-1"
              >
                <MessagesView
                  selectedConversation={selectedConversation}
                  messages={messages.filter((item) => !!item.message) || []}
                  onSendMessage={handleSendMessage}
                  messagesLoading={messagesLoading}
                  sendingMessage={sendingMessage}
                  onLoadMore={handleLoadMore}
                  hasMoreMessages={hasMoreMessages}
                  loadingMore={loadingMore}
                  username={username}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Desktop View */
        <>
          <div className="w-80">
            <ConversationList
              conversations={conversations}
              selectedConversation={selectedConversation}
              onSelectConversation={handleSelectConversation}
              loading={conversationsLoading}
            />
          </div>
          <div className="flex flex-col flex-1">
            <Header
              selectedConversation={selectedConversation}
              onBack={handleBack}
              isMobile={false}
            />
            <MessagesView
              selectedConversation={selectedConversation}
              messages={messages.filter((item) => !!item.message) || []}
              onSendMessage={handleSendMessage}
              messagesLoading={messagesLoading}
              sendingMessage={sendingMessage}
              onLoadMore={handleLoadMore}
              hasMoreMessages={hasMoreMessages}
              loadingMore={loadingMore}
              username={username}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default InstagramMessaging;
