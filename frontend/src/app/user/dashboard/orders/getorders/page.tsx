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
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">BID ORDERS</h2>
          <p className="text-sm text-gray-500 mt-1">
            Review your successfully completed orders
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
            <FileDown size={16} />
            Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paper Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timeline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                BID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">
                    {order.id}
                  </div>
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
                        : ""
                    }`}
                  >
                    {order.status}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <div>Assigned: {order.timeAssigned}</div>
                    <div>Completed: {order.timeCompleted}</div>
                    <div
                      className={
                        new Date(order.deadline) < new Date(order.timeCompleted)
                          ? "text-red-600"
                          : "text-green-600"
                      }
                    >
                      Deadline: {order.deadline}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <RatingStar key={i} rating={order.rating} />
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      ({order.rating})
                    </span>
                  </div>
                </td>
                <td>
                  <button className="bid-button">BID</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        router.push(`/user/dashboard/orders/${order.id}`)
                      }
                      className="text-gray-600 hover:text-blue-600 transition-colors"
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

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">{orders.length}</span> of{" "}
          <span className="font-medium">{orders.length}</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 border rounded-md text-sm flex items-center gap-1 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm flex items-center gap-1 hover:bg-gray-50">
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
