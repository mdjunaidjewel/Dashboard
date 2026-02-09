"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account information</p>
      </div>

      {/* Profile Info Card */}
      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Name:</span>
            <span>Junaid</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Email:</span>
            <span>junaid@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Role:</span>
            <span>Admin</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
