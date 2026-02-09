"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-6 max-w-xl">
        {/* Notifications */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Email Notifications</h2>
            <p className="text-sm text-gray-500">
              Receive updates via email
            </p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              notifications
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {notifications ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Dark Mode</h2>
            <p className="text-sm text-gray-500">
              Toggle dashboard theme
            </p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              darkMode
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {darkMode ? "On" : "Off"}
          </button>
        </div>

        {/* Save */}
        <div className="pt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
