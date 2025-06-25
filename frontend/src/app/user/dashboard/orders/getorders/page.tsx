"use client";

import React, { useEffect, useState } from "react";
import RatingStar from "@/components/userDashboard/RatingStar";
import {
  Eye,
  Download,
  Upload,
  Filter,
  FileDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import { PendingOrder as Order } from "@/types/PendingOrder";


import { openJobDescriptionModal } from "@/store/features/ModalSlice";

import { AppDispatch } from "@/store/store/store";

import { useDispatch } from "react-redux";


const Page = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>()

  const router = useRouter();

  const fetchPendingOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get<{ success: boolean; data: Order[] }>(
        `${baseUrl.url}/v1/orders/assignments/pending`
      );
      setOrders(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-[#e60000]">BID ORDERS</h2>
          <p className="text-sm text-gray-500 mt-1">
            Review your pending orders and place your bids
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#e60000] rounded-md hover:bg-[#b80000] transition-colors">
            <FileDown size={16} />
            Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-[#e60000] text-[#e60000] rounded-md text-sm hover:bg-[#ffe6e6] transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#ffe6e6]">
            <tr>
              {[
                "Order ID",
                "Paper Details",
                "Charges",
                "Timeline",
                "Rating",
                "BID",
                "Actions",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-bold text-[#b80000] uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-8">
                  Loading orders...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8">
                  No orders available
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-[#fff2f2]">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-[#e60000] text-sm">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {order.paperDetails}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {order.charges}
                    </div>
                    <div className="text-xs mt-1 px-2 py-1 inline-flex rounded-full bg-gray-100 text-gray-600">
                      {order.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>
                      Deadline:{" "}
                      {new Date(order.deadline).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <RatingStar
                          key={i}
                          rating={order.rating || 0}
                          index={i + 1}
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">
                        ({order.rating || 0})
                      </span>
                    </div>
                  </td>
                  <td>
                    <button className="px-3 py-1 bg-[#e60000] text-white text-xs font-semibold rounded hover:bg-[#b80000] transition-colors">
                      BID
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          dispatch(openJobDescriptionModal(order))
                        }
                        className="text-gray-600 hover:text-[#e60000] transition-colors"
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="text-gray-600 hover:text-green-600 transition-colors"
                        title="Download files"
                        onClick={() => {
                          order?.files?.forEach((url) => {
                            const link = document.createElement("a");
                            link.href = url;
                            link.target = "_blank";
                            link.download = url.split("/").pop() || "file.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          });
                        }}
                      >
                        <Download size={18} />
                      </button>
                      <button
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                        title="Submit revision"
                      >
                        <Upload size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
