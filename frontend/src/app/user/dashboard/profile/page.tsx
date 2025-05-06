"use client";
import React from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  BadgeCheck,
  Pencil,
  Calendar,
  Shield,
  BookOpen,
  Briefcase,
} from "lucide-react";

const ProfilePage = () => {
  const user = {
    name: "Dennis Peter",
    title: "Senior Content Editor",
    email: "dennis.peter@example.com",
    phone: "+254 712 345 678",
    education:
      "Bachelor's in English Literature - University of Nairobi (2018)",
    qualifications: [
      "Certified Proofreader (IPEd, 2020)",
      "Advanced Research Writing (Coursera, 2021)",
    ],
    experience: "5+ years in academic editing",
    joinedAt: "January 15, 2023",
    lastActive: "2 hours ago",
    systemId: "USERID:0050",
    role: "Senior Editor",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Profile Information
          </h1>
          <p className="text-gray-600">View and manage your account details</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl  border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <User className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {user.name}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">
                      {user.title}
                    </span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-white text-red-600 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-50 border border-red-200 text-sm font-medium shadow-sm">
                <Pencil className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <Section title="Contact Information">
                <DetailItem
                  icon={<Mail className="w-5 h-5 text-red-600" />}
                  label="Email"
                  text={user.email}
                />
                <DetailItem
                  icon={<Phone className="w-5 h-5 text-red-600" />}
                  label="Phone"
                  text={user.phone}
                />
              </Section>

              <Section title="Education">
                <DetailItem
                  icon={<GraduationCap className="w-5 h-5 text-red-600" />}
                  label="Degree"
                  text={user.education}
                />
              </Section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Section title="Professional Details">
                <DetailItem
                  icon={<Briefcase className="w-5 h-5 text-red-600" />}
                  label="Experience"
                  text={user.experience}
                />
                <DetailItem
                  icon={<Shield className="w-5 h-5 text-red-600" />}
                  label="Member Since"
                  text={user.joinedAt}
                />
                <DetailItem
                  icon={<BookOpen className="w-5 h-5 text-red-600" />}
                  label="Last Active"
                  text={user.lastActive}
                />
              </Section>

              <Section title="Certifications">
                {user.qualifications.map((qualification, index) => (
                  <DetailItem
                    key={index}
                    icon={<BadgeCheck className="w-5 h-5 text-red-600" />}
                    text={qualification}
                  />
                ))}
              </Section>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
            <div className="flex justify-between items-center">
              <span>System ID: {user.systemId}</span>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
      {title}
    </h3>
    <div className="space-y-4 pl-2">{children}</div>
  </div>
);

// Reusable Detail Item Component
const DetailItem = ({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label?: string;
  text: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="mt-0.5">{icon}</div>
    <div>
      {label && <p className="text-xs font-medium text-gray-500">{label}</p>}
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  </div>
);



export default  ProfilePage;