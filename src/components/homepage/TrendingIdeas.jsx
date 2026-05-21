import { getAllIdeas } from "@/lib/data";
import IdeaCard from "../shared/IdeaCard";
import Link from "next/link";

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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between  gap-8 mb-16">
          <div>
            {/* top badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-violet-500" />

              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-violet-600
                  dark:text-violet-400
                "
              >
                Trending
              </span>
            </div>

            {/* title */}
            <h2
              className="
                text-[42px]
                md:text-[64px]
                leading-[1]
                font-black
                tracking-[-2px]
                text-[#0B1023]
                dark:text-white
              "
            >
              Trending Ideas
            </h2>

            {/* description */}
            <p
              className="
                mt-3
                max-w-2xl
                text-[18px]
                leading-[1.7]
                text-[#667085]
                dark:text-gray-400
                font-medium
              "
            >
              Explore the most popular and impactful ideas from our community.
            </p>
          </div>

          {/* Button */}
          <Link href={"/ideas"}>
            <button
              className="
                group
                h-[62px]
                px-8
                rounded-full
                border
                border-violet-200
                dark:border-violet-500/20
                bg-white/80
                dark:bg-white/5
                backdrop-blur-xl
                text-[#7C3AED]
                dark:text-violet-300
                text-[16px]
                font-semibold
                shadow-[0_8px_30px_rgba(124,58,237,0.08)]
                transition-all
                duration-300
                hover:bg-[#7C3AED]
                hover:border-[#7C3AED]
                hover:text-white
                hover:shadow-[0_12px_40px_rgba(124,58,237,0.20)]
                "
            >
              View All Ideas
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
