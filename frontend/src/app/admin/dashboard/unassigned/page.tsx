"use client";

import React from "react";
import { Eye, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const orders = [
    {
      id: "ORD-001",
      client: "John Doe",
      paperDetails: "Research Proposal - 10 pages",
      uploadedAt: "2025-06-20 10:30 AM",
      deadline: "2025-06-27 05:00 PM",
      workStatus: "Pending",
      bids: 5,
      charges: 2500,
    },
    {
      id: "ORD-002",
      client: "Jane Smith",
      paperDetails: "Essay - 5 pages",
      uploadedAt: "2025-06-21 09:00 AM",
      deadline: "2025-06-25 03:00 PM",
      workStatus: "In Progress",
      bids: 3,
      charges: 1500,
    },
    {
      id: "ORD-003",
      client: "Michael Kimani",
      paperDetails: "Thesis Chapter - 20 pages",
      uploadedAt: "2025-06-22 02:15 PM",
      deadline: "2025-07-01 11:59 PM",
      workStatus: "Pending",
      bids: 8,
      charges: 6000,
    },
  ];

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
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-red-50">
                <td className="px-6 py-4 font-semibold text-[#e60000]">
                  {order.id}
                </td>
                <td className="px-6 py-4">{order.client}</td>
                <td className="px-6 py-4">{order.paperDetails}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {order.uploadedAt}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {order.deadline}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.workStatus === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.workStatus}
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
                    className="flex items-center gap-2 px-3 py-2 bg-[#e60000] text-white rounded-md text-sm hover:bg-[#cc0000] transition-colors"
                    title="Assign manually"
                  >
                    <UserPlus size={16} />
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
