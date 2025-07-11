"use client";

import React, { useEffect, useState } from "react";
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
import SeeOrder from "@/components/SeeOrder/SeeOrder";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchOrders = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem("user") || "{}");
      const userId = user?.id;

      if (!userId) {
        console.error("User ID not found in sessionStorage.");
        return;
      }

      const response = await axios.get(
        `${baseUrl.url}/v1/orders/assignments/orders/bidded/${userId}`
      );
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        console.error("Failed to fetch orders:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-red-700">MY BIDS</h2>
          <p className="text-sm text-gray-500 mt-1">
            Review your successfully completed orders
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
            <FileDown size={16} />
            Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-red-600 text-red-600 rounded-md text-sm hover:bg-red-50 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : orders.length === 0 ? (
        <div className="text-center text-gray-500">No bids found.</div>
      ) : (
        <>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-50">
                <tr>
                  {[
                    "Order ID",
                    "Paper Details",
                    "Details",
                    "Timeline",
                    "Rating",
                    "CANCEL BID",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-semibold text-red-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {orders.map((order: any) => (
                  <tr
                    key={order._id}
                    className="hover:bg-red-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-red-600">
                        {order.orderId}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {order.paperDetails}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {order.clientName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-800">
                        {order.charges}
                      </div>
                      <div
                        className={`text-xs mt-1 px-2 py-1 inline-flex rounded-full ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div>
                        Deadline:{" "}
                        <span
                          className={
                            new Date(order.deadline) < new Date()
                              ? "text-red-600"
                              : "text-green-600"
                          }
                        >
                          {new Date(order.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-yellow-500">--</td>
                    <td className="px-6 py-4">
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200 transition">
                        UNBID
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center gap-3">
                        <SeeOrder order={order} />
                        <button
                          className="text-green-600 hover:text-green-800 transition-colors"
                          title="Download files"
                        >
                          <Download size={18} />
                        </button>
                        <button
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                          title="Submit revision"
                        >
                          <Upload size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (optional) */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{orders.length}</span> of{" "}
              <span className="font-medium">{orders.length}</span> results
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded-md text-sm flex items-center gap-1 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <button className="px-3 py-1 border border-red-600 text-white bg-red-600 rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-red-600 text-red-600 rounded-md text-sm flex items-center gap-1 hover:bg-red-50">
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
