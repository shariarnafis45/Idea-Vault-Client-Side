import NoFoundIdea from "@/components/filter/NoFoundIdea";
import MyIdeaCard from "@/components/shared/MyIdeaCard";
import NoIdeaCardForMyIdeaPage from "@/components/shared/NoIdeaCardForMyIdeaPage";
import { auth } from "@/lib/auth";
import { getIdeaCategories, getMyIdeas } from "@/lib/data";
import { headers } from "next/headers";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;
  const myIdeas = await getMyIdeas(userId);
  const categories = await getIdeaCategories();

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
        <div className="mb-10 flex flex-col items-start  gap-10 md:flex-row lg:items-center lg:justify-between">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                my ideas
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[56px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F172A] dark:text-white">
              My Ideas
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[19px] leading-[2rem] text-[#6B7280] dark:text-[#A1A1B5]">
              Manage and track all of your ideas
              <br />
              you've shared with the community.
            </p>
          </div>
        </div>

        {/* ideas card */}
        <div>
          {myIdeas?.length > 0 ? (
            myIdeas.map((idea, i) => (
              <MyIdeaCard key={i} idea={idea} categories={categories} />
            ))
          ) : (
            <NoIdeaCardForMyIdeaPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyIdeasPage;
