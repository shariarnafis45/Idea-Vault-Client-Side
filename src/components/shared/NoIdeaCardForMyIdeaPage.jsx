"use client";

import { Button } from "@heroui/react";
import { Sparkles, Plus, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const NoIdeaCardForMyIdeaPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-[36px] border border-default-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111827]/80 md:p-14">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-[32px] border border-violet-500/20 bg-gradient-to-br from-violet-500/15 to-indigo-500/10 shadow-lg shadow-violet-500/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-xl shadow-violet-500/30">
              <Lightbulb size={40} />
            </div>
          </div>

          {/* Label */}
          <div className="mb-4 flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
            <Sparkles size={15} className="text-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-500">
              no ideas found
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-default-900 dark:text-white md:text-5xl">
            You haven’t shared any ideas yet
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-8 text-default-500 dark:text-default-400 md:text-lg">
            Start building your innovation journey by creating your first idea.
            Share your creativity with the community and inspire others.
          </p>

          {/* Features */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 text-left dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
                <Lightbulb size={22} />
              </div>

              <h4 className="text-lg font-bold text-default-900 dark:text-white">
                Share Ideas
              </h4>

              <p className="mt-2 text-sm leading-7 text-default-500">
                Publish innovative concepts and projects with the community.
              </p>
            </div>

            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 text-left dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                <Sparkles size={22} />
              </div>

              <h4 className="text-lg font-bold text-default-900 dark:text-white">
                Get Inspired
              </h4>

              <p className="mt-2 text-sm leading-7 text-default-500">
                Explore trends, innovations, and creative solutions from others.
              </p>
            </div>

            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 text-left dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <ArrowRight size={22} />
              </div>

              <h4 className="text-lg font-bold text-default-900 dark:text-white">
                Build Momentum
              </h4>

              <p className="mt-2 text-sm leading-7 text-default-500">
                Turn concepts into impactful projects and grow your portfolio.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={"/add-idea"}>
              <Button
                radius="full"
                className="h-14 bg-gradient-to-r from-violet-600 to-indigo-500 px-8 text-base font-semibold text-white shadow-xl shadow-violet-500/25"
              >
                <Plus size={20} />
                Create First Idea
              </Button>
            </Link>

            <Link href={'/ideas'}>
              <Button
                variant="bordered"
                radius="full"
                className="h-14 border-default-300 px-8 text-base font-semibold dark:border-white/10"
              >
                <ArrowRight size={18} />
                Explore Ideas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoIdeaCardForMyIdeaPage;
