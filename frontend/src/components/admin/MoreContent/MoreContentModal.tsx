"use client";

import React from "react";
import { X, Download } from "lucide-react";
import { RootState } from "@/store/store/store";
import { closeModal } from "@/store/features/ModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const MoreContentModal = () => {
  const dispatch = useDispatch();
  const { isOpen, job } = useSelector(
    (state: RootState) => state.moreDescription
  );

  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => dispatch(closeModal())}
          ></motion.div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="ml-auto h-full w-[80%] max-w-full bg-white shadow-xl p-6 overflow-y-auto z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#e60000]">
                More Job Details
              </h2>
              <button
                onClick={() => dispatch(closeModal())}
                className="text-gray-600 hover:text-[#e60000]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  Description (Markdown Supported):
                </h3>
                <div className="prose max-w-none prose-sm sm:prose">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {job?.description || "*No description provided.*"}
                  </ReactMarkdown>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">
                  {job?.clientName || "Unknown"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Deadline:</h3>
                <p className="text-sm text-gray-600">
                  {job?.deadline || "Not specified"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Charges:</h3>
                <p className="text-sm text-gray-600">
                  {job?.charges
                    ? new Intl.NumberFormat("en-KE", {
                        style: "currency",
                        currency: "KES",
                      }).format(job.charges)
                    : "Not specified"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Files:</h3>
                {Array.isArray(job?.files) && job.files.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {job.files.map((file, index) => {
                      const fileExt = file.fileName
                        .split(".")
                        .pop()
                        ?.toLowerCase();

                      const isImage = [
                        "jpg",
                        "jpeg",
                        "png",
                        "gif",
                        "webp",
                      ].includes(fileExt || "");

                      const commonWrapperClasses =
                        "relative border border-neutral-300 rounded-md overflow-hidden shadow-sm group";

                      const iconOverlay = (
                        <div
                          className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white cursor-pointer hover:bg-black"
                          onClick={() =>
                            handleDownload(file.downloadURL, file.fileName)
                          }
                        >
                          <Download size={16} />
                        </div>
                      );

                      if (isImage) {
                        return (
                          <div key={index} className={commonWrapperClasses}>
                            <img
                              src={file.downloadURL}
                              alt={file.fileName}
                              className="w-full h-auto object-contain"
                            />
                            {iconOverlay}
                          </div>
                        );
                      } else if (fileExt === "pdf") {
                        return (
                          <div key={index} className={commonWrapperClasses}>
                            <iframe
                              src={file.downloadURL}
                              className="w-full h-64"
                              title={`PDF File ${index + 1}`}
                            ></iframe>
                            {iconOverlay}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={index}
                            className={
                              commonWrapperClasses +
                              " p-3 flex items-center justify-between"
                            }
                          >
                            <span className="text-sm truncate w-4/5">
                              {file.fileName}
                            </span>
                            {iconOverlay}
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">No files uploaded.</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MoreContentModal;
