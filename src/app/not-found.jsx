"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const NotFoundPage = () => {
  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center px-6">
        {/* Background glow */}
        <div className="absolute h-72 w-72 rounded-full bg-[#7C5CFF]/10 blur-3xl" />
        <div className="absolute -bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative text-center max-w-md">
          {/* Big number */}
          <h1
            className="
            text-[120px] font-bold leading-none
            text-[#111827]
            dark:text-white
            tracking-tight
          "
          >
            404
          </h1>

          {/* Title */}
          <h2
            className="
            mt-2 text-2xl font-semibold
            text-[#111827]
            dark:text-white
          "
          >
            Page not found
          </h2>

          {/* Description */}
          <p
            className="
            mt-3 text-sm
            text-gray-500 dark:text-gray-400
            leading-relaxed
          "
          >
            The page you’re looking for doesn’t exist or has been moved.
            Double-check the URL or go back to home.
          </p>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/">
              <Button
                className="
                h-11 px-5
                rounded-xl
                bg-[#7C5CFF]
                text-white
                font-medium
                shadow-[0_10px_30px_rgba(124,92,255,0.25)]
                hover:opacity-90
                transition
              "
              >
                Go Home
              </Button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="
              h-11 px-5
              rounded-xl
              border border-black/10 dark:border-white/10
              text-sm font-medium
              text-gray-600 dark:text-gray-300
              hover:bg-black/5 dark:hover:bg-white/5
              transition
            "
            >
              Go Back
            </button>
          </div>

          {/* subtle hint */}
          <p className="mt-6 text-[11px] text-gray-400">
            Error code: NOT_FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
