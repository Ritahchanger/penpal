"use client";

import React from "react";
import { X } from "lucide-react";
import { RootState } from "@/store/store/store";
import { closeModal } from "@/store/features/ModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Optional: change to another theme

const MoreContentModal = () => {
  const dispatch = useDispatch();
  const { isOpen, job } = useSelector(
    (state: RootState) => state.moreDescription
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => dispatch(closeModal())}
          ></motion.div>

          {/* Sidebar */}
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

            {/* Job Details */}
            <div className="space-y-6">
              {/* Markdown Description */}
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

              {/* Client */}
              <div>
                <p className="text-sm text-gray-600">
                  {job?.client || "Unknown"}
                </p>
              </div>

              {/* Deadline */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Deadline:</h3>
                <p className="text-sm text-gray-600">
                  {job?.deadline || "Not specified"}
                </p>
              </div>

              {/* Charges */}
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

              {/* Files */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Files:</h3>
                {job?.files && job.files.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {job.files.map((file: string, index: number) => {
                      const fileExt = file.split('.').pop()?.toLowerCase();

                      if (
                        ["jpg", "jpeg", "png", "gif", "webp"].includes(
                          fileExt || ""
                        )
                      ) {
                        // Image preview
                        return (
                          <div
                            key={index}
                            className="border rounded-md overflow-hidden shadow-sm"
                          >
                            <img
                              src={file}
                              alt={`Uploaded File ${index + 1}`}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        );
                      } else if (fileExt === "pdf") {
                        // PDF preview
                        return (
                          <div
                            key={index}
                            className="border border-neutral-300 rounded-md overflow-hidden shadow-sm"
                          >
                            <iframe
                              src={file}
                              className="w-full h-64"
                              title={`PDF File ${index + 1}`}
                            ></iframe>
                          </div>
                        );
                      } else {
                        // Other file types
                        return (
                          <div
                            key={index}
                            className="p-3 bg-gray-100 rounded shadow-sm flex items-center justify-between"
                          >
                            <span className="text-sm truncate w-4/5">
                              {file.split("/").pop()}
                            </span>
                            <a
                              href={file}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 text-sm underline"
                            >
                              Download
                            </a>
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
