"use client";

import React from "react";
import { Eye, UserPlus, Download, Pencil, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store/store/store";
import { useDispatch } from "react-redux";
import { openJobDescriptionModal } from "@/store/features/ModalSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const orders = [
    {
      id: "ORD-001",
      client: "John Doe",
      createdAt: "2025-06-20 10:30 AM",
      deadline: "2025-06-27 05:00 PM",
      writer: "Not Assigned",
      assignedAt: "N/A",
      status: "Pending",
      paperDetails: "Research Proposal - 10 pages",
      workStatus: "Pending",
      charges: 2500,
      penalty: 0,
    },
    {
      id: "ORD-002",
      client: "Jane Smith",
      createdAt: "2025-06-21 09:00 AM",
      deadline: "2025-06-25 03:00 PM",
      writer: "Alex Waweru",
      assignedAt: "2025-06-21 11:00 AM",
      status: "In Progress",
      paperDetails: "Essay - 5 pages",
      workStatus: "In Progress",
      charges: 1500,
      penalty: 200,
    },
    {
      id: "ORD-003",
      client: "Michael Kimani",
      createdAt: "2025-06-22 02:15 PM",
      deadline: "2025-07-01 11:59 PM",
      writer: "Not Assigned",
      assignedAt: "N/A",
      status: "Pending",
      paperDetails: "Thesis Chapter - 20 pages",
      workStatus: "Pending",
      charges: 6000,
      penalty: 0,
    },
  ];

  const handleMoreJobDescription = (job: any) => {
    dispatch(openJobDescriptionModal(job));
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#e60000]">
            AVAILABLE ORDERS TO ADJUST
          </h2>
          <input
            type="text"
            placeholder="Search orders..."
            className="mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-[#e60000] focus:border-[#e60000]"
          />
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-50">
            <tr>
              {[
                "ORDER ID",
                "CLIENT",
                "CREATED",
                "DEADLINE",
                "WRITER",
                "ASSIGNED",
                "STATUS",
                "WORK DESCRIPTION",
                "WORK",
                "CHARGES",
                "PENALTY",
                "DOWNLOAD INSTRUCTIONS",
                "UPDATE",
                "CANCEL",
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
                <td className="px-2 py-4 text-sm text-gray-600 min-w-[200px]">
                  {order.createdAt}
                </td>
                <td className="px-2 py-4 text-sm text-gray-600 min-w-[200px]">
                  {order.deadline}
                </td>
                <td className="px-6 py-4">{order.writer}</td>
                <td className="px-6 py-4 min-w-[200px]">{order.assignedAt}</td>
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
                <td className="px-6 py-4 min-w-[200px]">
                  <button
                    onClick={() => handleMoreJobDescription(order)}
                    className="flex items-center gap-1 text-sm text-[#e60000] hover:underline"
                  >
                    <Eye size={16} /> View
                  </button>
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
                <td className="px-6 py-4">
                  {new Intl.NumberFormat("en-KE", {
                    style: "currency",
                    currency: "KES",
                  }).format(order.charges)}
                </td>
                <td className="px-6 py-4">
                  {order.penalty > 0
                    ? new Intl.NumberFormat("en-KE", {
                        style: "currency",
                        currency: "KES",
                      }).format(order.penalty)
                    : "No Penalty"}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    title="Download Instructions"
                  >
                    <Download size={18} />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="Update Order"
                  >
                    <Pencil size={18} />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    title="Cancel Order"
                  >
                    <X size={18} />
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
