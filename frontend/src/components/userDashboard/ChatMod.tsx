"use client";

import { User, X } from "lucide-react";

type ChatModProps = {
  onClose: () => void;
  handleBigChatModal: () => void; // Add this to the props type
};

const ChatMod = ({ onClose, handleBigChatModal }: ChatModProps) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md overflow-hidden bg-green-800 mb-4 relative w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-green-600 hover:bg-red-500 rounded-full w-[26px] h-[26px] flex items-center justify-center"
        aria-label="Close chat preview"
      >
        <X size={18} color="#fff" />
      </button>
      <div
        className="flex items-center p-4 space-x-3 cursor-pointer"
        onClick={handleBigChatModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleBigChatModal();
          }
        }}
      >
        <div className="flex-shrink-0">
          <User color="white" size={32} />
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold">Need Assistance?</h2>
          <p className="text-white text-sm">Chat with our support team</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMod;
