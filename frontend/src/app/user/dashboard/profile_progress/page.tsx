"use client";
import React, { FC, ReactNode } from "react";
import { DollarIcon } from "@/components/userDashboard/DollarIcon";
import { WalletIcon } from "@/components/userDashboard/WalletIcon";
import { XIcon } from "@/components/userDashboard/XIcon";
import { BriefcaseIcon } from "@/components/userDashboard/BriefcaseIcon";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// Sample data
const jobData = [
  { name: "Completed", value: 45 },
  { name: "In Progress", value: 20 },
  { name: "In Revision", value: 10 },
  { name: "In Review", value: 15 },
  { name: "Cancelled", value: 10 },
];

const monthlyEarnings = [
  { month: "Jan", earnings: 5000, withdrawals: 2000 },
  { month: "Feb", earnings: 8000, withdrawals: 3000 },
  { month: "Mar", earnings: 6000, withdrawals: 2500 },
  { month: "Apr", earnings: 9000, withdrawals: 4000 },
  { month: "May", earnings: 12000, withdrawals: 6000 },
];

const skillData = [
  { subject: "Writing", A: 90, fullMark: 100 },
  { subject: "Editing", A: 85, fullMark: 100 },
  { subject: "Research", A: 75, fullMark: 100 },
  { subject: "SEO", A: 80, fullMark: 100 },
  { subject: "Technical", A: 70, fullMark: 100 },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#6366F1", "#EF4444"];

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
}

const ProfileProgress = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Freelancer Analytics Dashboard
      </h2>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Jobs"
          value="120"
          change="+12%"
          isPositive
          icon={<BriefcaseIcon />}
        />
        <StatCard
          title="Earnings"
          value="$8,500"
          change="+18%"
          isPositive
          icon={<DollarIcon />}
        />
        <StatCard
          title="Withdrawals"
          value="$5,200"
          change="+5%"
          isPositive
          icon={<WalletIcon />}
        />
        <StatCard
          title="Cancelled"
          value="8"
          change="-2%"
          isPositive={false}
          icon={<XIcon />}
        />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Status */}
        <div className="bg-white p-4 rounded-sm border border-neutral-300">
          <h3 className="text-lg font-semibold mb-4">
            Job Status Distribution
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={jobData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {jobData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} jobs`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Earnings vs Withdrawals */}
        <div className="bg-white p-4 rounded-sm border border-neutral-300">
          <h3 className="text-lg font-semibold mb-4">
            Monthly Earnings vs Withdrawals
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyEarnings}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                <Legend />
                <Bar
                  dataKey="earnings"
                  fill="#4F46E5"
                  name="Earnings"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="withdrawals"
                  fill="#EC4899"
                  name="Withdrawals"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Earnings Trend */}
        <div className="bg-white p-4 rounded-sm border border-neutral-300 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Earnings Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyEarnings}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorEarnings"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#4F46E5"
                  fillOpacity={1}
                  fill="url(#colorEarnings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Radar - Full width on mobile, half on lg+ */}
        <div className="bg-white p-4 rounded-sm border border-neutral-300 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Skill Assessment</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.6}
                />
                <Tooltip formatter={(value) => [`${value}/100`, "Score"]} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
}) => (
  <div className="bg-white p-4 rounded-sm border border-neutral-300 flex items-center space-x-4 h-full">
    <div className="p-2 bg-indigo-50 rounded-full text-indigo-600">{icon}</div>
    <div>
      <div className="text-sm font-medium text-gray-500">{title}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div
        className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
      >
        {change} {isPositive ? "↑" : "↓"}
      </div>
    </div>
  </div>
);

export default ProfileProgress;
