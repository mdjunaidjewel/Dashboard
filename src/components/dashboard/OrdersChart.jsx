"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function OrdersChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4B5563" }} />
        <YAxis tick={{ fontSize: 12, fill: "#4B5563" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            fontSize: 12,
          }}
        />
        <Bar dataKey="orders" fill="#4F46E5" radius={[6, 6, 0, 0]} barSize={20} animationDuration={800} />
      </BarChart>
    </ResponsiveContainer>
  );
}
