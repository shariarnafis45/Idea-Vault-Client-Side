"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="
                  group

                  flex h-[58px] items-center gap-3

                  rounded-2xl

                  border border-black/5
                  dark:border-white/10

                  bg-white/80
                  dark:bg-white/[0.03]

                  px-8

                  text-base font-semibold

                  text-[#0F172A]
                  dark:text-white

                  shadow-lg shadow-black/[0.03]

                  backdrop-blur-xl

                  transition-all duration-300

                  hover:border-violet-300
                  hover:bg-violet-50
                  dark:hover:bg-violet-500/10
                "
    >
      <ArrowLeft
        size={20}
        className="transition-transform group-hover:-translate-x-1"
      />
      Go Back
    </button>
  );
};

export default BackButton;
