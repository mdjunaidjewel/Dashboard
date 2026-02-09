"use client";

import { useDashboardStore } from "@/components/store/dashboardStore";
import FilterSkeleton from "@/components/Skeleton/FilterSkeleton";

export default function Filters({ loading }) {
  const { range, setRange } = useDashboardStore();

  if (loading) return <FilterSkeleton />;

  return (
    <div className="flex gap-3 mb-6">
      {["7d", "30d", "12m"].map((r) => (
        <button
          key={r}
          onClick={() => setRange(r)}
          className={` cursor-pointer px-4 py-2 rounded font-medium border transition-colors duration-200 ${
            range === r
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {r === "7d" && "Last 7 Days"}
          {r === "30d" && "Last 30 Days"}
          {r === "12m" && "Last 12 Months"}
        </button>
      ))}
    </div>
  );
}
