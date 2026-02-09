"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RevenueChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
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
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4F46E5"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
