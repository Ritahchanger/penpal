"use client";

import Navbar from "@/components/useraccount/Navbar";
import Sidebar from "@/components/useraccount/Sidebar";
import "./main.css";
import { User } from "lucide-react";
import ChatMod from "@/components/userDashboard/ChatMod";
import ChatModal from "@/components/userDashboard/ChatModal";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [smallChatModal, setSmallChatModal] = useState(false);
  const [bigChatModal, setBigChatModal] = useState(false);

  // Open small chat modal
  const handleChatModal = () => setSmallChatModal(true);

  // Open big chat modal and close small chat modal
  const handleBigChatModal = () => {
    setBigChatModal(true);
    setSmallChatModal(false);
  };

  // Close big chat modal
  const hideBigChatModal = () => setBigChatModal(false);

  // Close small chat modal
  const hideChatModal = () => setSmallChatModal(false);

  return (
    <div className="layout relative min-h-screen">
      <Navbar />
      <Sidebar />
      <main>{children}</main>

      {/* Big Chat Modal */}
      <AnimatePresence>
        {bigChatModal && (
          <motion.div
            key="bigChatModal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[10px] right-[1rem] z-50"
          >
            <ChatModal onClose={hideBigChatModal} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small Chat Modal and Chat Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {smallChatModal && (
            <motion.div
              key="smallChatModal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 bottom-[3.5rem] w-[300px] flex items-end justify-end z-50"
            >
              <ChatMod
                onClose={hideChatModal}
                handleBigChatModal={handleBigChatModal}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div
          onClick={handleChatModal}
          className="bg-green-500 w-[60px] h-[60px] border-4 border-red-500 flex justify-center items-center rounded-full cursor-pointer hover:scale-105 transition-transform"
          aria-label="Open Chat"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleChatModal();
          }}
        >
          <User size={32} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
