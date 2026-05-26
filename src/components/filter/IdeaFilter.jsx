"use client";

import { Search, LayoutGrid } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const IdeaFilter = ({ ideaCategories }) => {
  const [searchInp, setSearchInp] = useState("");
  const [category, setCategory] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);
    // search
    if (searchInp) {
      params.set("search", searchInp);
    } else {
      params.delete("search");
    }

    // category
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="w-full">
      <div
        className="
          relative overflow-hidden
          rounded-[28px] sm:rounded-[32px]
          border border-violet-100/80 dark:border-white/10
          bg-white/80 dark:bg-[#0F172A]/70
          backdrop-blur-xl
          shadow-[0_10px_60px_rgba(124,58,237,0.08)]
          dark:shadow-[0_10px_80px_rgba(59,130,246,0.08)]
          p-3 sm:p-5 lg:p-7
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-0 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[1fr_260px]
              xl:grid-cols-[1.2fr_.8fr_auto]
              gap-3 sm:gap-4
            "
          >
            {/* Search */}
            <div
              className="
                group
                h-14 sm:h-16
                rounded-2xl
                border border-slate-200/80 dark:border-white/10
                bg-white dark:bg-white/[0.03]
                hover:border-violet-300
                dark:hover:border-violet-500/40
                focus-within:border-violet-400
                dark:focus-within:border-violet-500/50
                transition-all duration-300
                flex items-center gap-3
                px-4 sm:px-5
                shadow-sm dark:shadow-none
              "
            >
              <Search
                className="
                  w-4 h-4 sm:w-5 sm:h-5
                  text-slate-400
                  group-focus-within:text-violet-500
                  transition-colors
                "
              />

              <input
                value={searchInp}
                onChange={(e) => setSearchInp(e.target.value)}
                type="text"
                placeholder="Search ideas..."
                className="
                  w-full bg-transparent outline-none
                  text-sm sm:text-[15px]
                  font-medium
                  text-slate-700 dark:text-slate-200
                  placeholder:text-slate-400
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative group">
              <LayoutGrid
                className="
      absolute left-4 top-1/2 -translate-y-1/2
      w-4 h-4 sm:w-5 sm:h-5
      text-slate-400
      group-focus-within:text-violet-500
      pointer-events-none
      z-10
    "
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
      w-full
      h-14 sm:h-16

      rounded-2xl

      border border-slate-200/80
      dark:border-white/10

      bg-white
      dark:bg-white/[0.03]

      hover:border-violet-300
      dark:hover:border-violet-500/40

      focus:border-violet-400
      dark:focus:border-violet-500/50

      transition-all duration-300
      outline-none

      pl-11 pr-12

      appearance-none

      text-sm sm:text-[15px]
      font-semibold

      text-slate-700
      dark:text-slate-200

      shadow-sm
      dark:shadow-none

      cursor-pointer

      [&>option]:bg-white
      dark:[&>option]:bg-[#0F172A]

      [&>option]:text-slate-700
      dark:[&>option]:text-slate-200

      [&>option]:font-medium
    "
              >
                <option value="">All Categories</option>

                {ideaCategories?.map((category) => (
                  <option key={category._id} value={category.categoryId}>
                    {category.title}
                  </option>
                ))}
              </select>

              {/* Arrow */}
              <div
                className="
      absolute right-4 top-1/2 -translate-y-1/2
      pointer-events-none
      text-slate-400
      transition-colors duration-300
      group-hover:text-violet-500
    "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleFilter}
              className="
                h-14 sm:h-16
                px-6 sm:px-8
                rounded-2xl

                bg-gradient-to-r
                from-violet-600 to-indigo-600
                hover:from-violet-500
                hover:to-indigo-500

                text-white
                font-semibold
                text-sm sm:text-[15px]

                transition-all duration-300

                shadow-[0_10px_30px_rgba(124,58,237,0.35)]
                hover:shadow-[0_14px_40px_rgba(124,58,237,0.45)]

                hover:scale-[1.02]
                active:scale-[0.98]

                flex items-center justify-center gap-2

                min-w-full
                xl:min-w-[160px]
              "
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaFilter;
