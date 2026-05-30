"use client";

import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import {
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Pencil,
  Trash2,
  Sparkles,
  Users,
  CircleAlert,
  Lightbulb,
  DollarSign,
  ArrowRight,
  Leaf,
} from "lucide-react";
import { IdeaUpdateModal } from "../ui/IdeaUpdateModal";
import IdeaDelete from "../ui/IdeaDelete";
import Link from "next/link";

const MyIdeaCard = ({ idea, categories }) => {
  return (
    <div className="group overflow-hidden rounded-[34px] border border-default-200/70 bg-white/80 p-4 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827]/80 md:p-6 mt-10">
      <div className="flex flex-col gap-6 2xl:flex-row">
        {/* IMAGE */}
        <div className="w-full shrink-0 2xl:w-[340px]">
          <div className="relative h-[300px] overflow-hidden rounded-[30px] md:h-[340px] 2xl:h-full 2xl:min-h-[540px]">
            <Image
              src={idea?.imageURL}
              alt={idea?.ideaTitle}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* category */}
            <Chip
              startContent={<Leaf size={14} />}
              className="absolute left-4 top-4 border-none bg-emerald-500/90 px-3 text-white capitalize backdrop-blur-md"
            >
              {idea?.category}
            </Chip>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex w-full flex-1 flex-col">
          {/* TOP */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT */}
            <div className="flex-1">
              {/* status */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Chip
                  color="success"
                  variant="flat"
                  className="px-3 font-medium"
                >
                  Active
                </Chip>

                <span className="text-sm text-default-500">
                  Created 2 days ago
                </span>
              </div>

              {/* title */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-black tracking-tight text-default-900 dark:text-white md:text-3xl">
                    {idea?.ideaTitle}
                  </h2>

                  <p className="mt-3 max-w-4xl text-sm leading-7 text-default-500 dark:text-default-400 md:text-base">
                    {idea?.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-4 self-start flex-wrap">
              {/* EDIT */}
              <IdeaUpdateModal idea={idea} categories={categories} />

              {/* DELETE */}
              <IdeaDelete idea={idea} />
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {idea?.tags?.map((tag, idx) => (
              <Chip
                key={idx}
                variant="flat"
                className="bg-violet-100 px-3 capitalize text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
              >
                {tag}
              </Chip>
            ))}
          </div>

          {/* INFO GRID */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {/* audience */}
            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 transition-all duration-300 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-500">
                  <Users size={20} />
                </div>

                <h4 className="font-bold">Audience</h4>
              </div>

              <p className="text-sm leading-7 text-default-500">
                {idea?.targetAudience}
              </p>
            </div>

            {/* problem */}
            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 transition-all duration-300 hover:border-blue-300 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                  <CircleAlert size={20} />
                </div>

                <h4 className="font-bold">Problem</h4>
              </div>

              <p className="line-clamp-4 text-sm leading-7 text-default-500">
                {idea?.problemStatement}
              </p>
            </div>

            {/* solution */}
            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 transition-all duration-300 hover:border-emerald-300 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-500">
                  <Lightbulb size={20} />
                </div>

                <h4 className="font-bold">Solution</h4>
              </div>

              <p className="line-clamp-4 text-sm leading-7 text-default-500">
                {idea?.proposedSolution}
              </p>
            </div>

            {/* budget */}
            <div className="rounded-3xl border border-default-200 bg-default-50 p-5 transition-all duration-300 hover:border-amber-300 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-500">
                  <DollarSign size={20} />
                </div>

                <h4 className="font-bold">Budget</h4>
              </div>

              <p className="text-3xl font-black text-default-900 dark:text-white">
                {idea?.estimatedBudget}
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-6 flex flex-col gap-5 border-t border-default-200 pt-6 dark:border-white/10 xl:flex-row xl:items-center xl:justify-between">
            {/* stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  icon: Eye,
                  color: "text-violet-500",
                  label: "Views",
                  value: "1.2K",
                },
                {
                  icon: Heart,
                  color: "text-pink-500",
                  label: "Likes",
                  value: "156",
                },
                {
                  icon: MessageCircle,
                  color: "text-blue-500",
                  label: "Comments",
                  value: "32",
                },
                {
                  icon: Bookmark,
                  color: "text-emerald-500",
                  label: "Saves",
                  value: "48",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl bg-default-100 px-4 py-3 transition-all duration-300 hover:scale-[1.02] dark:bg-white/[0.04]"
                >
                  <item.icon size={20} className={item.color} />

                  <div>
                    <p className="font-bold">{item.value}</p>

                    <span className="text-xs text-default-500">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link href={`/ideas/${idea._id}`}>
                <Button
                  radius="full"
                  className="h-12 bg-gradient-to-r from-violet-600 to-indigo-500 px-7 font-semibold text-white shadow-lg shadow-violet-500/20"
                >
                  <ArrowRight size={18} />
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
