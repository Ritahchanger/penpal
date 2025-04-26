import React from "react";

const Page = () => {
  // Dummy data
  const orders = [
    {
      id: "ORD-001",
      paperDetails: "Research Paper on AI Ethics",
      pages: 10,
      words: 3500,
      charges: "$120.00",
      timeAssigned: "2023-05-15 10:30",
      deadline: "2023-05-20 18:00",
      penalty: "$15/day",
      status: "In Progress",
    },
    {
      id: "ORD-002",
      paperDetails: "Case Study on Market Analysis",
      pages: 6,
      words: 2100,
      charges: "$85.50",
      timeAssigned: "2023-05-16 14:15",
      deadline: "2023-05-19 12:00",
      penalty: "$10/day",
      status: "Pending Review",
    },
    {
      id: "ORD-003",
      paperDetails: "Literature Review on Climate Change",
      pages: 8,
      words: 2800,
      charges: "$102.00",
      timeAssigned: "2023-05-17 09:45",
      deadline: "2023-05-21 23:59",
      penalty: "$12/day",
      status: "Completed",
    },
    {
      id: "ORD-004",
      paperDetails: "Business Proposal Template",
      pages: 5,
      words: 1750,
      charges: "$75.25",
      timeAssigned: "2023-05-18 16:20",
      deadline: "2023-05-22 14:00",
      penalty: "$8/day",
      status: "In Progress",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Completed Orders</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
            Export
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paper Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Words
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Charges
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deadline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                  {order.paperDetails}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.pages}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.words.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.charges}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.timeAssigned}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={
                      new Date(order.deadline) < new Date()
                        ? "text-red-600"
                        : ""
                    }
                  >
                    {order.deadline}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Download
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing 1 to {orders.length} of {orders.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
