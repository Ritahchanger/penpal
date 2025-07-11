import { Eye, Download } from "lucide-react";
import { openJobDescriptionModal } from "@/store/features/ModalSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store/store";
import { Order } from "@/types/Order.interface";

const SeeOrder = ({ order }: { order: Order }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDownloadFiles = () => {
    if (!Array.isArray(order.files)) return;

    order.files.forEach((file) => {
      if (file && typeof file.downloadURL === "string") {
        const link = document.createElement("a");
        link.href = file.downloadURL;
        link.download = file.fileName || "file";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch(openJobDescriptionModal(order))}
        className="text-gray-600 hover:text-[#e60000] transition-colors"
        title="View details"
      >
        <Eye size={18} />
      </button>

      {Array.isArray(order.files) && order.files.length > 0 && (
        <button
          className="text-gray-600 hover:text-green-600 transition-colors"
          title="Download files"
          onClick={handleDownloadFiles}
        >
          <Download size={18} />
        </button>
      )}
    </div>
  );
};

export default SeeOrder;
