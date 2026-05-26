import { getAllIdeas, getIdeaCategories } from "@/lib/data";

import IdeaCard from "@/components/shared/IdeaCard";
import Image from "next/image";
import IdesElementImg from "@/assets/idea.png";
import IdeaFilter from "@/components/filter/IdeaFilter";

const IdeasPage = async ({ searchParams }) => {
  const sp = await searchParams;
  const search = sp.search;
  const category = sp.category;
  const ideas = await getAllIdeas(search, category);
  const ideaCategories = await getIdeaCategories();

  return (
    <div
      className="
        relative
        overflow-hidden
        py-17
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
        {/* Header */}
        <div className="mb-5 flex flex-col items-start  gap-10 md:flex-row lg:items-center lg:justify-between">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                Ideas
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[56px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F172A] dark:text-white">
              Explore Ideas
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[19px] leading-[2rem] text-[#6B7280] dark:text-[#A1A1B5]">
              Discover, explore, and collaborate on
              <br />
              innovative ideas shared by the community.
            </p>
          </div>

          {/*  Image */}
          <div className="relative flex items-center justify-center">
            {/* Soft Glow */}
            <div className="absolute h-[180px] w-[180px] rounded-full bg-[#8B5CF6]/15 blur-3xl" />

            <Image
              src={IdesElementImg}
              width={400}
              height={100}
              alt="Element"
              className="
                relative z-10
                object-contain
                drop-shadow-[0_10px_30px_rgba(124,92,255,0.18)]
                "
              priority
            />
          </div>
        </div>

        {/* filtering */}
        <IdeaFilter ideaCategories={ideaCategories} />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-15">
          {ideas?.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;
