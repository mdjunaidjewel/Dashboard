"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ChartSkeleton from "@/components/Skeleton/ChartSkeleton";
import { userDistribution } from "@/components/data/mockData";

const COLORS = ["#3b82f6", "#22c55e", "#f97316"];

export default function UsersPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(userDistribution);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const totalUsers = users.reduce((sum, u) => sum + u.value, 0);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Users Overview</h1>
        <p className="text-gray-500 mt-1">
          Distribution of users by category
        </p>
      </div>

      {loading ? (
        <ChartSkeleton height={320} />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Pie Chart Card */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-6">
              User Distribution
            </h2>

            <div className="relative w-full h-72">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={users}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                  >
                    {users.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* Center Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-2xl font-bold">{totalUsers}</p>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 space-y-2">
              {users.map((u, i) => (
                <div
                  key={u.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    <span className="text-gray-600">{u.name}</span>
                  </div>
                  <span className="font-medium">{u.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-6">
              User Breakdown
            </h2>

            <div className="overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="text-left px-4 py-3">Type</th>
                    <th className="text-right px-4 py-3">Users</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr
                      key={u.name}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">
                        {u.name}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {u.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
