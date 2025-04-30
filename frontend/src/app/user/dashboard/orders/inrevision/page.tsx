"use client";

import React from "react";

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
    <div className="p-6 bg-white rounded-lg shadow-md border border-red-100">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-red-700">
            ORDERS IN REVISION
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Review your successfully completed orders
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors">
            <FileDown size={16} />
            Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-red-300 rounded-md text-sm hover:bg-red-50 transition-colors text-red-700">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-red-200 rounded-lg">
        <table className="min-w-full divide-y divide-red-100">
          <thead className="bg-red-50">
            <tr>
              {[
                "Order ID",
                "Paper Details",
                "Details",
                "Timeline",
                "Rating",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-6 py-3 text-left text-xs font-medium text-red-600 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-red-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-red-50 transition-all">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-red-600">
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
                  <div className="text-sm font-semibold text-red-700">
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
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <div>Assigned: {order.timeAssigned}</div>
                    <div>Completed: {order.timeCompleted}</div>
                    <div
                      className={`font-medium ${
                        new Date(order.deadline) < new Date(order.timeCompleted)
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      Deadline: {order.deadline}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(order.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      ({order.rating})
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        router.push(`/user/dashboard/orders/${order.id}`)
                      }
                      className="text-gray-600 hover:text-red-600 transition-colors"
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
          Showing <span className="font-semibold">1</span> to{" "}
          <span className="font-semibold">{orders.length}</span> of{" "}
          <span className="font-semibold">{orders.length}</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 border border-red-200 rounded-md text-sm flex items-center gap-1 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <button className="px-3 py-1 border border-red-600 rounded-md text-sm bg-red-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border border-red-300 rounded-md text-sm flex items-center gap-1 hover:bg-red-50 text-red-700">
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
