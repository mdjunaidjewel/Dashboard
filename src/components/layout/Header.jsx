"use client";

export default function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white bg-blue-600 px-3 py-2 rounded-md focus:outline-none"
        >
          Menu
        </button>

        {/* Dashboard title */}
        <h1 className="font-semibold text-lg">Analytics Dashboard</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        🔔
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
