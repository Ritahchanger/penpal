"use client";

import React, { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import SeeOrder from "@/components/SeeOrder/SeeOrder";
import AssignWriterModal from "@/components/admin/AssignWriterModal/AssignWriterModal";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [assignModal, setAssignModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  useEffect(() => {
    fetchUnassignedOrders();
  }, []);

  const fetchUnassignedOrders = async () => {
    try {
      const response = await axios.get(
        `${baseUrl.url}/v1/orders/assignments/unassigned`
      );
      if (response.data.success) {
        setOrders(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch unassigned orders:", error);
    }
  };

  const handleAssignModal = (orderId: string) => {
    setSelectedOrder(orderId);
    setAssignModal(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder("");
    setAssignModal(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#e60000]">AVAILABLE ORDERS</h2>
          <p className="text-sm text-gray-600 mt-1">
            Browse orders and assign them manually to writers
          </p>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-50">
            <tr>
              {[
                "ORDER ID",
                "CLIENT",
                "PAPER DETAILS",
                "UPLOADED AT",
                "DEADLINE",
                "WORK",
                "BIDS",
                "CHARGES",
                "ASSIGN MANUALLY",
                "",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-semibold text-[#e60000] uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {orders.map((order: any) => (
              <tr key={order._id} className="hover:bg-red-50">
                <td className="px-6 py-4 font-semibold text-[#e60000]">
                  {order.orderId}
                </td>
                <td className="px-6 py-4">{order.clientName}</td>
                <td className="px-6 py-4">{order.paperDetails}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(order.deadline).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.bids} bids</td>
                <td className="px-6 py-4">
                  {new Intl.NumberFormat("en-KE", {
                    style: "currency",
                    currency: "KES",
                  }).format(order.charges)}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleAssignModal(order._id)}
                    className="flex items-center gap-2 px-3 py-2 bg-[#e60000] text-white rounded-md text-sm hover:bg-[#cc0000] transition-colors"
                    title="Assign manually"
                  >
                    <UserPlus size={16} />
                    Assign
                  </button>
                </td>
                <td>
                  <SeeOrder order={order} />
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="text-center text-gray-500 py-6 text-sm"
                >
                  No unassigned orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal displayed here */}
      {assignModal && selectedOrder && (
        <AssignWriterModal
          orderId={selectedOrder}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Page;
