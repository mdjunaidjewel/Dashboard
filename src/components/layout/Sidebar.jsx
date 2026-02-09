"use client";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-6 font-bold text-xl hidden md:block">AppifyDevs</div>
        <nav className="px-4 space-y-3 mt-6">
          <p className="text-blue-600 font-medium cursor-pointer">Dashboard</p>
          <p className="text-gray-500 cursor-pointer">Users</p>
          <p className="text-gray-500 cursor-pointer">Orders</p>
          <p className="text-gray-500 cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}
