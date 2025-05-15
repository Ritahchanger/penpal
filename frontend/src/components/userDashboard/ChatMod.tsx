'use client';

import { User } from "lucide-react";

const ChatMod = () => {
  return (
    <div className="max-w-sm rounded-lg shadow-md overflow-hidden bg-green-600 mb-4">
      <div className="flex items-center p-4 space-x-3">
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
