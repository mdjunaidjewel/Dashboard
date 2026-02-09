"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function Header({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white bg-blue-600 px-3 py-2 rounded-md focus:outline-none hover:bg-blue-700 transition"
        >
          Menu
        </button>

        {/* Dashboard title */}
        <h1 className="font-semibold text-lg">Analytics Dashboard</h1>
      </div>

      {/* Right side */}
      <div className="relative flex items-center gap-4">
        🔔

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-400" />
            <span className="hidden md:block font-medium">Junaid</span>
            <FaChevronDown
              className={`text-gray-600 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 transform transition-all duration-200 origin-top-right ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <button
              onClick={() => handleNavigation("/profile")}
              className=" cursor-pointer flex items-center px-4 py-2 w-full text-left hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Profile
            </button>
            <button
              onClick={() => alert("Logged out")}
              className=" cursor-pointer flex items-center px-4 py-2 w-full text-left hover:bg-red-50 hover:text-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
