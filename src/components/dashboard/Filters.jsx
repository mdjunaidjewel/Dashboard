"use client"; 
import { useDashboardStore } from "@/components/store/dashboardStore";

export default function Filters() {
  const { range, setRange } = useDashboardStore();

  return (
    <div className="flex gap-3 mb-6">
      {["7d", "30d", "12m"].map((r) => (
        <button
          key={r}
          onClick={() => setRange(r)}
          className={`px-4 py-2 rounded ${
            range === r ? "bg-blue-600 text-white" : "bg-white"
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
