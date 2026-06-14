"use client";

import Link from "next/link";
import { ShieldX, ArrowLeft, LogIn } from "lucide-react";

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-900">
      <div className="max-w-md w-full space-y-6">

        {/* Icon & Error Code */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="rounded-full bg-orange-100 p-4 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            <ShieldX className="h-12 w-12" />
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            403
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Access Forbidden
          </h2>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400">
          You don&apos;t have the required permissions to view this page.
          This area is restricted to authorized roles only. If you believe
          this is a mistake, contact your administrator.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/auth/signin"
            className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Sign In with Another Account
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}