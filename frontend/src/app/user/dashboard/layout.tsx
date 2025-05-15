"use client";

import Navbar from "@/components/useraccount/Navbar";
import Sidebar from "@/components/useraccount/Sidebar";
import "./main.css";
import { User } from "lucide-react";
import ChatMod from "@/components/userDashboard/ChatMod";

import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [chatModal, setChatModal] = useState(false);

  const handleChatModal = () => setChatModal(true);
  const hideChatModal = () => setChatModal(false);

  return (
    <div className="layout relative">
      <Navbar />
      <Sidebar />
      <div>{children}</div>

      <div className="fixed bottom-4 right-4 z-50">
        {chatModal && (
          <div className="absolute right-[0rem] bottom-[3rem] flex items-end justify-end z-50 w-[300px] ">
            <ChatMod onClose={hideChatModal} />
          </div>
        )}
        <div
          className="bg-green-500 w-[60px] h-[60px] border-4 border-red-500 flex justify-center items-center rounded-full cursor-pointer hover:scale-105 transition"
          onClick={handleChatModal}
        >
          <User size={32} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
