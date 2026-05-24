// src/app/not-found.jsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#071013] text-white">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 text-sm font-semibold hover:opacity-90"
      >
        Return Home
      </Link>
    </div>
  );
}
