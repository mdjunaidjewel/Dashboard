"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ordersData } from "@/components/data/mockData";

export default function OrdersPage() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrders(ordersData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const totalOrders = orders.reduce((sum, o) => sum + o.orders, 0);
  const avgOrders =
    orders.length > 0 ? Math.round(totalOrders / orders.length) : 0;

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Orders Overview
        </h1>
        <p className="text-gray-500">
          Track monthly performance & growth
        </p>
      </div>

      {loading ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-28 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
              />
            ))}
          </div>

          <div className="h-72 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm opacity-80">Total Orders</p>
              <h2 className="text-4xl font-bold mt-2">
                {totalOrders}
              </h2>
              <span className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full">
                +12%
              </span>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm opacity-80">
                Avg Orders / Month
              </p>
              <h2 className="text-4xl font-bold mt-2">
                {avgOrders}
              </h2>
              <span className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full">
                Stable
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">
                Monthly Breakdown
              </h2>
              <span className="text-sm text-gray-400">
                Last 12 months
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 backdrop-blur">
                  <tr className="text-gray-600">
                    <th className="text-left px-4 py-3">
                      Month
                    </th>
                    <th className="text-right px-4 py-3">
                      Orders
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item) => (
                    <tr
                      key={item.month}
                      className="border-t hover:bg-gray-50 transition-all duration-200"
                    >
                      <td className="px-4 py-3 font-medium">
                        {item.month}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {item.orders}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
