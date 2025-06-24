"use client";

import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const users = [
    {
      id: 1,
      email: "john.doe@example.com",
      phone: "+254712345678",
      education: "Bachelor's Degree",
      qualifications: "Computer Science",
      role: "Admin",
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      phone: "+254798765432",
      education: "Diploma",
      qualifications: "Software Development",
      role: "Editor",
    },
    {
      id: 3,
      email: "michael.kimani@example.com",
      phone: "+254701112233",
      education: "Masters",
      qualifications: "Data Science",
      role: "User",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#e60000]">WRITERS</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage user accounts and roles
          </p>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-50">
            <tr>
              {[
                "ID NO",
                "EMAIL",
                "PHONE NO",
                "EDUCATION LEVEL",
                "QUALIFICATIONS",
                "ROLE",
                "ACTIONS",
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
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-red-50">
                <td className="px-6 py-4 font-semibold text-[#e60000]">
                  {user.id}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.education}</td>
                <td className="px-6 py-4">{user.qualifications}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      user.role === "Admin"
                        ? "bg-yellow-100 text-yellow-800"
                        : user.role === "Editor"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        router.push(`/user/dashboard/users/${user.id}`)
                      }
                      className="text-gray-600 hover:text-[#e60000] transition-colors"
                      title="View details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="text-gray-600 hover:text-red-600 transition-colors"
                      title="Delete user"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
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
