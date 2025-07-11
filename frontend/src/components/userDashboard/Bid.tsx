import React from "react";
import { baseUrl } from "@/config/baseUrl";
import axios from "axios";
import { userId } from "@/config/UserId";

interface BidModalProps {
  isToBid: boolean;
  bidId: string;
  setIsToBid: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPendingOrders: () => void; // Added this prop
}

const BidModal: React.FC<BidModalProps> = ({
  isToBid,
  bidId,
  setIsToBid,
  fetchPendingOrders,
}) => {
  if (!isToBid) return null;

  const handleConfirm = async () => {
    try {
      const response = await axios.put(
        `${baseUrl.url}/v1/orders/assignments/orders/${bidId}/bid`,
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Bid placed successfully:", response.data);
      fetchPendingOrders();
    } catch (error) {
      console.error("Failed to place bid:", error);
    } finally {
      setIsToBid(false);
    }
  };

  const handleCancel = () => {
    setIsToBid(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-sm shadow-xl p-6 w-[90%] max-w-[700px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          ARE YOU SURE YOU WANT TO BID THIS ORDER?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-sm transition text-sm"
          >
            OK
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-sm transition text-sm"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
