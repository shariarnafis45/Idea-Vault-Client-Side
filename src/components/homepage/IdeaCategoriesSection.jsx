import { getIdeaCategories } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IdeaCategoriesSection = async () => {
  const categories = await getIdeaCategories();
  
  return (
    <div className="relative overflow-hidden bg-[#F7F5FF] py-28 dark:bg-[#0F0F1A]">
      {/* Background Glow */}
      <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-purple-300/10 blur-3xl dark:bg-purple-500/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                Explore Categories
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[56px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F172A] dark:text-white">
              Explore Idea Categories
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[19px] leading-[2rem] text-[#6B7280] dark:text-[#A1A1B5]">
              Discover ideas across different domains and find the next big
              thing you want to contribute to.
            </p>
          </div>

          {/* CTA Button */}
          <Link href={"/ideas"} className="">
            <button className="group flex h-[64px] items-center gap-3 rounded-full border border-[#E7DFFF] bg-white px-9 text-[16px] font-semibold text-[#7C5CFF] shadow-[0_4px_20px_rgba(124,92,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(124,92,255,0.12)] dark:border-[#2A2A40] dark:bg-[#1C1C2E]">
              View All Categories
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => {
          

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[34px] border border-[#E9E3FF] bg-white px-8 pb-8 pt-8 shadow-[0_10px_40px_rgba(124,92,255,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D8CBFF] hover:shadow-[0_18px_50px_rgba(124,92,255,0.10)] dark:border-[#2A2A40] dark:bg-[#1C1C2E]"
              >
                {/* Soft Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7C5CFF]/5 blur-3xl" />
                </div>

                {/* Icon Box */}
                <div
                  className="
                    relative mb-10
                    flex h-[88px] w-[88px] items-center justify-center
                    rounded-[28px]
                    border border-[#ECE7FF]
                    bg-gradient-to-br from-white to-[#F6F1FF]
                    shadow-[0_10px_30px_rgba(124,92,255,0.08)]
                    transition-all duration-300
                    group-hover:scale-105
                    group-hover:shadow-[0_16px_40px_rgba(124,92,255,0.16)]

                    dark:border-[#2E2E45]
                    dark:from-[#232338]
                    dark:to-[#1A1A2B] "
                >
                  {/* Glow Effect */}
                  <div
                    className="
                    absolute inset-0 rounded-[28px]
                    bg-[#7C5CFF]/5
                    opacity-0 blur-xl
                    transition-opacity duration-300
                    group-hover:opacity-100
                    "
                  />

                  {/* Icon */}
                  <Image
                    src={category.icon}
                    width={42}
                    height={42}
                    alt={category.title}
                    className="
                    relative z-10
                    opacity-90
                    transition-all duration-300
                    group-hover:opacity-100 text-white
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Title */}
                  <h3 className="max-w-[220px] text-2xl font-bold leading-[1.15] tracking-[-0.04em] text-[#111827] dark:text-white">
                    {category.title}
                  </h3>

                  {/* Count */}
                  <p className="mt-5 text-[18px] font-semibold text-[#7C5CFF]">
                    {category.ideas}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative mt-12 flex justify-end">
                  <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#DDD2FF] bg-white text-[#111827] transition-all duration-300 hover:bg-[#7C5CFF] hover:text-white dark:border-[#35355A] dark:bg-[#25253A] dark:text-white cursor-pointer">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IdeaCategoriesSection;
