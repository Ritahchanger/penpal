import React, { useEffect, useState } from "react";
import { baseUrl } from "@/config/baseUrl";
import axios from "axios";
import { X } from "lucide-react";

type Props = {
  orderId: string;
  handleCloseModal: () => void;
};

interface Writer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  qualifications: string;
}

const AssignWriterModal = ({ orderId, handleCloseModal }: Props) => {
  const [bidders, setBidders] = useState<Writer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBidders = async () => {
    try {
      const response = await axios.get(
        `${baseUrl.url}/v1/orders/assignments/bidders/${orderId}`
      );
      if (response.data.success) {
        setBidders(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching bidders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBidders();
  }, [orderId]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-[1200px] shadow-md relative border border-red-600">
        {/* Close Button (Top Right) */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-[#e60000] mb-6">
          Assign Writer to Order #{orderId}
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading bidders...</p>
        ) : bidders.length === 0 ? (
          <p className="text-gray-500">No writers have placed bids yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Full Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                  <th className="px-4 py-2 text-left">Qualifications</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {bidders.map((writer, index) => (
                  <tr
                    key={writer._id}
                    className="border-b border-neutral-300 hover:bg-red-50 transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium">
                      {writer.firstName} {writer.lastName}
                    </td>
                    <td className="px-4 py-3">{writer.email}</td>
                    <td className="px-4 py-3">{writer.phoneNo}</td>
                    <td className="px-4 py-3">{writer.qualifications}</td>
                    <td className="px-4 py-3">
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignWriterModal;
