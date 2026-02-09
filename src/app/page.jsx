"use client";

import { useState, useEffect } from "react";
import Filters from "@/components/dashboard/Filters";
import KPICard from "@/components/dashboard/KPICard";
import KPICardSkeleton from "@/components/Skeleton/KPICardSkeleton";
import OrdersChart from "@/components/dashboard/OrdersChart";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserPieChart from "@/components/dashboard/UserPieChart";
import ChartSkeleton from "@/components/Skeleton/ChartSkeleton";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useDashboardStore } from "@/components/store/dashboardStore";

import { revenueData, ordersData, userDistribution } from "@/components/data/mockData";

export default function Home() {
  const { range } = useDashboardStore();
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const [filteredRevenue, setFilteredRevenue] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // ---------------------------
  // Simulate API loading only on first load
  // ---------------------------
  useEffect(() => {
    const getFilteredData = (data) => {
      if (range === "7d") return data.slice(-7);
      if (range === "30d") return data.slice(-30);
      if (range === "12m") return data.slice(-12);
      return data;
    };

    if (firstLoad) {
      const timeout = setTimeout(() => {
        setFilteredRevenue(getFilteredData(revenueData));
        setFilteredOrders(getFilteredData(ordersData));
        setFilteredUsers(userDistribution);
        setLoading(false);
        setFirstLoad(false);
      }, 1500);

      return () => clearTimeout(timeout);
    } else {
      // Filter change instantly update data
      setFilteredRevenue(getFilteredData(revenueData));
      setFilteredOrders(getFilteredData(ordersData));
      setFilteredUsers(userDistribution);
    }
  }, [range]);

  // ---------------------------
  // Dynamic KPIs calculations
  // ---------------------------
  const totalRevenue = filteredRevenue.reduce((sum, item) => sum + item.value, 0);
  const totalOrders = filteredOrders.reduce((sum, item) => sum + item.orders, 0);
  const totalUsers = filteredUsers.reduce((sum, u) => sum + u.value, 0);
  const conversionRate = totalUsers ? ((totalOrders / totalUsers) * 100).toFixed(1) : 0;

  // Dummy changes (replace with real calculation if needed)
  const revenueChange = "+12%";
  const usersChange = "+8%";
  const ordersChange = "-3%";
  const conversionChange = "+1.2%";

  return (
    <DashboardLayout>
      {/* Filters */}
      <Filters loading={loading} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {loading
          ? Array(4).fill(0).map((_, idx) => <KPICardSkeleton key={idx} />)
          : <>
              <KPICard title="Total Revenue" value={`$${totalRevenue}`} change={revenueChange} />
              <KPICard title="Total Users" value={totalUsers} change={usersChange} />
              <KPICard title="Orders" value={totalOrders} change={ordersChange} />
              <KPICard title="Conversion Rate" value={`${conversionRate}%`} change={conversionChange} />
            </>}      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {loading ? (
          <>
            <ChartSkeleton />
            <ChartSkeleton />
            <ChartSkeleton height={250} />
          </>
        ) : (
          <>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4">Revenue Over Time</h2>
              <RevenueChart data={filteredRevenue} />
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4">Orders Per Month</h2>
              <OrdersChart data={filteredOrders} />
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4">User Distribution</h2>
              <UserPieChart data={filteredUsers} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
