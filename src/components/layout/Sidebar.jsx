"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Sidebar({ isOpen, setIsOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Orders", path: "/orders" },
    { name: "Settings", path: "/settings" },
  ];

  const handleClick = (path) => {
    router.push(path);
    setIsOpen(false); // close sidebar on mobile
  };

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
        <div className="p-6 font-bold text-xl hidden md:block">
          AppifyDevs
        </div>

        <nav className="px-4 space-y-2 mt-6">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <p
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`
                  px-4 py-2 rounded-md cursor-pointer font-medium transition
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </p>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        />
      )}
    </>
  );
}
