"use client";

import React from "react";
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
import { orders } from "@/components/userDashboard/SampleOrders";

const Page = () => {
  const router = useRouter();
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-[#e60000]">BID ORDERS</h2>
          <p className="text-sm text-gray-500 mt-1">
            Review your successfully completed orders
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
                "Details",
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
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-[#fff2f2]">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-[#e60000] text-sm">
                  {order.id}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {order.paperDetails}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {order.pages} pages • {order.words.toLocaleString()} words
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-medium">
                    {order.charges}
                  </div>
                  <div
                    className={`text-xs mt-1 px-2 py-1 inline-flex rounded-full ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div>Assigned: {order.timeAssigned}</div>
                  <div>Completed: {order.timeCompleted}</div>
                  <div
                    className={`${
                      new Date(order.deadline) < new Date(order.timeCompleted)
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    Deadline: {order.deadline}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <RatingStar key={i} rating={order.rating} index={1} />
                    ))}
                    <span className="ml-1 text-xs text-gray-500">
                      ({order.rating})
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
                        router.push(`/user/dashboard/orders/${order.id}`)
                      }
                      className="text-gray-600 hover:text-[#e60000] transition-colors"
                      title="View details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Download files"
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          Showing <span className="font-semibold">1</span> to{" "}
          <span className="font-semibold">{orders.length}</span> of{" "}
          <span className="font-semibold">{orders.length}</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 border rounded-md text-sm flex items-center gap-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <button className="px-3 py-1 bg-[#e60000] text-white rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border rounded-md text-sm flex items-center gap-1 hover:bg-gray-100">
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
