import { SearchX } from "lucide-react";
import React from "react";

const NoFoundIdea = () => {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div
        className="
        relative overflow-hidden

        w-full max-w-2xl

        rounded-[32px]

        border border-violet-100/70
        dark:border-white/10

        bg-white/70
        dark:bg-white/[0.03]

        backdrop-blur-2xl

        shadow-[0_20px_80px_rgba(124,58,237,0.10)]
        dark:shadow-[0_20px_100px_rgba(59,130,246,0.08)]

        px-8 py-16 sm:px-14
        text-center
      "
      >
        {/* Glow Effects */}
        <div className="absolute -top-20 left-0 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Icon */}
          <div
            className="
            mb-7

            flex h-24 w-24 items-center justify-center

            rounded-[28px]

            border border-violet-200/60
            dark:border-violet-500/20

            bg-gradient-to-br
            from-violet-100
            to-indigo-100

            dark:from-violet-500/10
            dark:to-indigo-500/10

            shadow-lg
          "
          >
            <SearchX className="h-11 w-11 text-violet-600 dark:text-violet-400" />
          </div>

          {/* Heading */}
          <h3
            className="
            text-3xl sm:text-4xl

            font-black

            tracking-[-0.04em]

            text-slate-900
            dark:text-white
          "
          >
            No Ideas Found
          </h3>

          {/* Description */}
          <p
            className="
            mt-5

            max-w-lg

            text-[15px] sm:text-[17px]

            leading-8

            text-slate-500
            dark:text-slate-400
          "
          >
            We couldn't find any ideas matching your current search or selected
            category. Try adjusting your filters or explore other topics.
          </p>

       
        </div>
      </div>
    </div>
  );
};

export default NoFoundIdea;
