"use client";

import Link from "next/link";
import { TriangleExclamation } from "@gravity-ui/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-background to-background" />

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-danger/20 bg-danger/10 p-6">
            <TriangleExclamation
              width={60}
              height={60}
              className="text-danger"
            />
          </div>
        </div>

        <h1 className="mb-4 text-7xl font-black md:text-9xl">
          <span className="bg-linear-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Page Not Found</h2>

        <p className="mx-auto mb-10 max-w-xl text-default-500 md:text-lg">
          The page you are looking for doesnt exist, has been moved, or is
          temporarily unavailable.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-3 font-medium text-white transition hover:opacity-90"
          >
            Back Home
          </Link>

          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-xl border border-default-300 px-8 py-3 font-medium transition hover:bg-default-100 dark:hover:bg-default-50/10"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Decorative Text */}
        <div className="mt-16 text-sm text-default-400">
          Error Code: 404 • HireLoop
        </div>
      </div>
    </section>
  );
}
