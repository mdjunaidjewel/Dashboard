export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white shadow-lg">
      <div className="p-6 font-bold text-xl">AppifyDevs</div>
      <nav className="px-4 space-y-3">
        <p className="text-blue-600 font-medium">Dashboard</p>
        <p className="text-gray-500">Users</p>
        <p className="text-gray-500">Orders</p>
        <p className="text-gray-500">Settings</p>
      </nav>
    </aside>
  );
}
