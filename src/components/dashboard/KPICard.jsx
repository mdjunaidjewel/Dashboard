"use client";

import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function KPICard({ title, value, change }) {
  // Determine if change is positive or negative
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span
          className={`flex items-center text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
          {change}
        </span>
      </div>
    </div>
  );
}
