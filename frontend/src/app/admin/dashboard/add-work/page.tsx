"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import UploadIcon from "@/assets/icons/upload (1).png";

type FilePreview = {
  file: File;
  url: string;
};

type FormDataType = {
  page: string;
  words: string;
  subject: string;
  dateline: string;
  time: string;
  category: string;
  charges: string;
  files: File[];
  clientName: string;
  description?: string;
};

const AssignmentFormSim: React.FC = () => {
  const [rows, setRows] = useState<number>(7);
  const [formData, setFormData] = useState<FormDataType>({
    page: "",
    words: "",
    subject: "",
    dateline: "",
    time: "",
    category: "",
    charges: "",
    files: [],
    clientName: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => pdfInputRef.current?.click();

  const calculateCharges = (category: string, pages: number) => {
    switch (category) {
      case "Dissertation":
      case "Technical":
        return pages * 350;
      case "Non technical":
        return pages * 300;
      case "PowerPoint(With Speaker Notes)":
        return pages * 150;
      case "PowerPoint(Without Speaker Notes)":
        return pages * 100;
      case "Undergraduate":
        return pages * 250;
      default:
        return 0;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "files" && files) {
      const selectedFiles = Array.from(files);
      setFilePreviews(selectedFiles.map((file) => ({ file, url: URL.createObjectURL(file) })));
      setFormData((prev) => ({ ...prev, files: selectedFiles }));
    } else if (name === "page" || name === "words") {
      const numericValue = value.replace(/[^0-9.]/g, "");
      let pages = formData.page;
      let words = formData.words;

      if (name === "words") {
        words = numericValue;
        pages = (parseFloat(words) / (formData.category.includes("PowerPoint") ? 100 : 300)).toFixed(2);
      } else {
        pages = numericValue;
        words = (parseFloat(pages) * (formData.category.includes("PowerPoint") ? 100 : 300)).toFixed(2);
      }

      const charges = calculateCharges(formData.category, parseFloat(pages) || 0);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
        page: pages,
        words: words,
        charges: charges.toFixed(2),
      }));
    } else if (name === "category") {
      const charges = calculateCharges(value, parseFloat(formData.page) || 0);
      setFormData((prev) => ({ ...prev, category: value, charges: charges.toFixed(2) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDeleteFile = (fileToDelete: File) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file.name !== fileToDelete.name),
    }));
    setFilePreviews((prev) =>
      prev.filter((preview) => preview.file.name !== fileToDelete.name)
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const {
      page,
      words,
      subject,
      dateline,
      time,
      category,
      charges,
      clientName,
    } = formData;

    if (!clientName) newErrors.clientName = "Client name is required.";
    if (!subject) newErrors.subject = "Subject is required.";
    if (!dateline) newErrors.dateline = "Dateline is required.";
    if (!time) newErrors.time = "Time is required.";
    if (!category) newErrors.category = "Category is required.";
    if (!charges) newErrors.charges = "Charges are required.";
    if (!page && !words) {
      newErrors.page = "Pages or Words is required.";
      newErrors.words = "Pages or Words is required.";
    }

    // Validate that selected time is in the future if date is today
    const now = new Date();
    const selectedDate = new Date(dateline);
    if (
      dateline &&
      time &&
      selectedDate.toDateString() === now.toDateString()
    ) {
      const [hours, minutes] = time.split(":").map(Number);
      const selectedDateTime = new Date();
      selectedDateTime.setHours(hours, minutes, 0, 0);
      if (selectedDateTime <= now) {
        newErrors.time = "Time must be in the future.";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Simulated submission:", formData);
      alert("Form simulated successfully. Check the console.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="mx-auto px-[1rem] lg:px-[2rem] bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-2xl font-bold">Assignment Form Simulation</h2>

      {/* Client Name */}
      <div>
        <label className="block font-semibold">Client Name *</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full border p-2 rounded border-neutral-300"
        />
        {errors.clientName && <p className="text-red-500 text-sm">{errors.clientName}</p>}
      </div>

      {/* Pages and Words */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Pages *</label>
          <input
            type="text"
            name="page"
            value={formData.page}
            onChange={handleChange}
            className="w-full border p-2 rounded border-neutral-300"
          />
          {errors.page && <p className="text-red-500 text-sm">{errors.page}</p>}
        </div>
        <div>
          <label className="block font-semibold">Words *</label>
          <input
            type="text"
            name="words"
            value={formData.words}
            onChange={handleChange}
            className="w-full border p-2 rounded border-neutral-300"
          />
          {errors.words && <p className="text-red-500 text-sm">{errors.words}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block font-semibold">Subject *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded border-neutral-300"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Dateline *</label>
          <input
            type="date"
            name="dateline"
            min={today}
            value={formData.dateline}
            onChange={handleChange}
            className="w-full border p-2 rounded border-neutral-300"
          />
          {errors.dateline && <p className="text-red-500 text-sm">{errors.dateline}</p>}
        </div>
        <div>
          <label className="block font-semibold">Time *</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded border-neutral-300"
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block font-semibold">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded border-neutral-300"
        >
          <option value="">Select category</option>
          <option value="Dissertation">Dissertation</option>
          <option value="Technical">Technical</option>
          <option value="Non technical">Non technical</option>
          <option value="PowerPoint(With Speaker Notes)">PowerPoint (With Speaker Notes)</option>
          <option value="PowerPoint(Without Speaker Notes)">PowerPoint (Without Speaker Notes)</option>
          <option value="Undergraduate">Undergraduate</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      </div>

      {/* Charges */}
      <div>
        <label className="block font-semibold">Charges *</label>
        <input
          type="text"
          name="charges"
          value={formData.charges}
          readOnly
          className="w-full border p-2 rounded bg-gray-100 border-neutral-300"
        />
        {errors.charges && <p className="text-red-500 text-sm">{errors.charges}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          onFocus={() => setRows(40)}
          onBlur={() => setRows(7)}
          rows={rows}
          className="w-full border p-2 rounded border-neutral-300"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block font-semibold mb-1">Upload Files</label>
        <input
          type="file"
          ref={pdfInputRef}
          name="files"
          multiple
          onChange={handleChange}
          className="hidden border-neutral-300"
        />
        <button
          type="button"
          onClick={handleUploadClick}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Upload Files
        </button>
        <div className="mt-2 space-y-1">
          {filePreviews.map((preview, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
              <span>{preview.file.name}</span>
              <button
                type="button"
                onClick={() => handleDeleteFile(preview.file)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AssignmentFormSim;
