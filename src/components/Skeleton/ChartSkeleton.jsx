export default function ChartSkeleton({ height = 300 }) {
  return (
    <div
      className={`bg-gray-200 rounded-xl animate-pulse`}
      style={{ height: height }}
    ></div>
  );
}
