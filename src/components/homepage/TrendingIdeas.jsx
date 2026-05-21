import { getAllIdeas } from "@/lib/data";
import IdeaCard from "../shared/IdeaCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TrendingIdeas = async () => {
  const ideas = await getAllIdeas();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        bg-[#f5f3ff]
        dark:bg-[#070B14]
        transition-colors
        duration-500
      "
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-300/20 dark:bg-violet-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/30 dark:bg-indigo-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        {/* Header */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                Trending
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[56px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F172A] dark:text-white">
              Trending Ideas
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[19px] leading-[2rem] text-[#6B7280] dark:text-[#A1A1B5]">
              Explore the most popular and impactful ideas from our community.
            </p>
          </div>

          {/* CTA Button */}
          <Link href={"/ideas"}>
            <button className="group flex h-[64px] items-center gap-3 rounded-full border border-[#E7DFFF] bg-white px-9 text-[16px] font-semibold text-[#7C5CFF] shadow-[0_4px_20px_rgba(124,92,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(124,92,255,0.12)] dark:border-[#2A2A40] dark:bg-[#1C1C2E]">
              View All Ideas
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ideas?.slice(0, 6).map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
