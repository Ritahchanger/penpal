import { Eye, Download, Upload } from "lucide-react";

import { useRouter } from "next/navigation";

const MobileAssignment = ({ sampleJob }: { sampleJob: any }) => {
  const router = useRouter();

  return (
    <div className="border border-red-200 rounded-2xl shadow-md p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold text-[#d10000]">{sampleJob.id}</h2>
        <span
          className={`text-xs px-2 py-1 rounded-full font-semibold ${
            sampleJob.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {sampleJob.status}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-black">
        {sampleJob.paperDetails}
      </h3>
    <p className="text-xs text-gray-500 mt-1">
        {sampleJob.pages} pages • {sampleJob.words.toLocaleString()} words
      </p>

      <div className="mt-2">
        <p className="text-sm font-bold text-[#cc0000]">{sampleJob.charges}</p>
      </div>

      <div className="mt-2 text-xs text-gray-700 space-y-1">
        <p>Assigned: {sampleJob.timeAssigned}</p>
        <p>Completed: {sampleJob.timeCompleted}</p>
        <p
          className={`font-semibold ${
            new Date(sampleJob.deadline) < new Date(sampleJob.timeCompleted)
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          Deadline: {sampleJob.deadline}
        </p>
      </div>

      <div className="mt-2 flex items-center">
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
        <span className="ml-1 text-xs text-gray-500">({sampleJob.rating})</span>
      </div>

      <div className="mt-4 flex justify-end gap-4 text-gray-600">
        <button
          onClick={() => router.push(`/user/dashboard/orders/${sampleJob.id}`)}
          title="View details"
          className="hover:text-[#e40000]"
        >
          <Eye size={18} />
        </button>
        <button title="Download files" className="hover:text-[#cc0000]">
          <Download size={18} />
        </button>
        <button title="Submit revision" className="hover:text-[#a60000]">
          <Upload size={18} />
        </button>
      </div>
    </div>
  );
};

export default MobileAssignment;
