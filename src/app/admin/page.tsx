import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Image,
  MessageSquare,
  Star,
  BriefcaseBusiness,
  LogOut,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect the dashboard
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-[#1E3A8A]">
              Smigen Industries
            </h1>

            <p className="text-sm text-gray-500">
              Admin Dashboard
            </p>
          </div>

          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </form>
        </div>
      </header>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back 👋
          </h2>

          <p className="mt-1 text-gray-500">
            Manage your Smigen Industries website from here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/gallery"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <Image className="mb-4 h-8 w-8 text-[#1E3A8A]" />

            <h3 className="font-semibold text-gray-900">
              Gallery
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage project images
            </p>
          </Link>

          <Link
            href="/admin/services"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <BriefcaseBusiness className="mb-4 h-8 w-8 text-[#1E3A8A]" />

            <h3 className="font-semibold text-gray-900">
              Services
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage your services
            </p>
          </Link>

          <Link
            href="/admin/testimonials"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <Star className="mb-4 h-8 w-8 text-orange-500" />

            <h3 className="font-semibold text-gray-900">
              Testimonials
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage customer reviews
            </p>
          </Link>

          <Link
            href="/admin/requests"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <MessageSquare className="mb-4 h-8 w-8 text-orange-500" />

            <h3 className="font-semibold text-gray-900">
              Requests
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View contact requests
            </p>
          </Link>
        </div>

        {/* Account */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900">
            Admin Account
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Logged in as:
          </p>

          <p className="mt-1 font-medium text-[#1E3A8A]">
            {user.email}
          </p>
        </div>
      </div>
    </main>
  );
}