export default function KPICardSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
}
