"use client";
import "./index.css"
import { useRouter } from "next/navigation";
import { Eye, Download, Upload } from "lucide-react";
import OrderMoreDetails from "@/components/OrderMoreDetails/page";
import MobileAssignment from "./MobileAssignment";
const page = () => {
  const router = useRouter();

  const sampleJob = {
    id: "ORD-001",
    paperDetails: "Research Paper on AI Ethics",
    pages: 10,
    words: 3500,
    charges: "$120.00",
    timeAssigned: "2023-05-15 10:30",
    timeCompleted: "2023-05-19 14:45",
    deadline: "2023-05-20 18:00",
    status: "Completed",
    rating: 4.5,
  };
  return (
    <div className="p-6 simple-order">
      <div>
        <div>
          <div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg table-wrapper">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="font-semibold">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500  uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Paper Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Timeline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-blue-600">
                        {sampleJob.id}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {sampleJob.paperDetails}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {sampleJob.pages} pages •{" "}
                        {sampleJob.words.toLocaleString()} words
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-semibold">
                        {sampleJob.charges}
                      </div>
                      <div
                        className={`text-xs mt-1 px-2 py-1 inline-flex rounded-full ${
                          sampleJob.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }`}
                      >
                        {sampleJob.status}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        <div>Assigned: {sampleJob.timeAssigned}</div>
                        <div>Completed: {sampleJob.timeCompleted}</div>
                        <div
                          className={
                            new Date(sampleJob.deadline) <
                            new Date(sampleJob.timeCompleted)
                              ? "text-red-600"
                              : "text-green-600"
                          }
                        >
                          Deadline: {sampleJob.deadline}
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
                                i < Math.floor(sampleJob.rating)
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
                          ({sampleJob.rating})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            router.push(
                              `/user/dashboard/orders/${sampleJob.id}`
                            )
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
                </tbody>
              </table>
            </div>
            <div className="mobile-assignment">
              <MobileAssignment sampleJob={sampleJob}/>
            </div>
            <OrderMoreDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
