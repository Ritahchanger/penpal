'use client';

import Navbar from "@/components/useraccount/Navbar";
import Sidebar from "@/components/useraccount/Sidebar";
import "./main.css";
import { User } from "lucide-react";
import ChatMod from "@/components/userDashboard/ChatMod";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout relative">
      <Navbar />
      <Sidebar />
      <div>{children}</div>
      <div>
        <div className="fixed bottom-[1rem] right-[1rem] ">
          <ChatMod />
          <div className="bg-green-500 w-[60px] h-[60px] border-4 border-red-500 flex justify-center items-center rounded-full">
            <User size={40} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
