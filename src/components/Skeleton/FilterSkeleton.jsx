"use client";

export default function FilterSkeleton() {
  return (
    <div className="flex gap-3 mb-6">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="h-10 w-32 bg-gray-200 rounded animate-pulse"
          ></div>
        ))}
    </div>
  );
}
