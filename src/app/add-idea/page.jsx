import { AddIdeaForm } from "@/components/shared/AddIdeaForm";
import { getIdeaCategories } from "@/lib/data";
import Image from "next/image";

const AddIdeaPage = async () => {
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
                Add Idea
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[56px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F172A] dark:text-white">
              Add A New Idea
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[19px] leading-[2rem] text-[#6B7280] dark:text-[#A1A1B5]">
              Share your creative startup idea
              <br />
              with the community.
            </p>
          </div>

          {/*  Image */}
          <div className="relative flex items-center justify-center">
            {/* Soft Glow */}
            <div className="absolute h-[180px] w-[180px] rounded-full bg-[#8B5CF6]/15 blur-3xl" />

            {/* <Image
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
            /> */}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#f6f3ff] dark:bg-[#050816] px-4 pb-10 pt-24 transition-colors duration-300 relative overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 bg-white dark:bg-[#060B2D] px-6 py-14 shadow-[0_10px_60px_rgba(15,23,42,0.06)] dark:shadow-[0_20px_80px_rgba(2,6,23,0.45)] md:px-10 lg:px-14">
          <AddIdeaForm categories={categories}/>
        </div>
      </div>
    </div>
  );
};

export default AddIdeaPage;
