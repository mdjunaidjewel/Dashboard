export default function KPICard({ title, value, change, positive }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      <p className={`text-sm mt-2 ${positive ? "text-green-600" : "text-red-600"}`}>
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
}
