"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Expand } from "lucide-react";
import { motion } from "framer-motion";
import "./ChatModal.css";

const ChatModal = ({ onClose }: { onClose: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={modalRef}
      initial={{ width: 300 }}
      animate={{
        width:
          isExpanded && typeof window !== "undefined" && window.innerWidth < 640
            ? "100%"
            : isExpanded
            ? 500
            : 300,
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className="fixed top-[10px] right-[1rem] h-[400px] bg-white rounded-lg shadow-lg z-50 chat-modal flex flex-col overflow-hidden border border-gray-300"
    >
      {/* Header */}
      <div className="bg-red-500 text-white grid grid-cols-2 justify-between font-semibold relative">
        <span className="block bg-green-400 text-center py-[0.7rem]">
          Support
        </span>
        <span className="block bg-green-400 text-center py-[0.7rem]">
          Client
        </span>
        <button
          onClick={toggleExpand}
          className="absolute right-2 top-[0.6rem] hover:scale-110 transition"
          aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
        >
          <Expand size={25} />
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-red-50 text-sm">
        <div className="bg-white p-2 rounded shadow w-fit max-w-[80%]">
          <p>Hello! How can we assist you today?</p>
        </div>

        <div className="flex justify-end">
          <div className="bg-green-100 p-2 rounded shadow w-fit max-w-[80%]">
            <p>I have an issue with my assignment upload.</p>
          </div>
        </div>

        <div className="bg-white p-2 rounded shadow w-fit max-w-[80%]">
          <p>Got it! Please ensure the file size is under 10MB.</p>
        </div>
      </div>

      {/* Input area */}
      <div className="flex items-center px-2 py-2 border-t border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-400"
        />
        <button className="ml-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded">
          <Send size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatModal;
