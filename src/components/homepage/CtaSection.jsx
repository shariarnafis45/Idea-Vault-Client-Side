import {
  ArrowRight,
  Lightbulb,
  MessageSquareMore,
  Rocket,
  Sparkles,
  Users2,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: <Users2 className="size-5" />,
    value: "10K+",
    label: "Innovators",
  },
  {
    icon: <Lightbulb className="size-5" />,
    value: "5K+",
    label: "Ideas Shared",
  },
  {
    icon: <Rocket className="size-5" />,
    value: "2K+",
    label: "Projects Running",
  },
];

const CtaSection = () => {
  return (
    <section className="bg-[#f6f3ff] dark:bg-[#050816] py-24 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-black/5 dark:border-white/10 bg-white dark:bg-[#070b2d] shadow-[0_20px_80px_rgba(12,12,40,0.08)] dark:shadow-[0_20px_80px_rgba(12,12,40,0.35)] transition-all duration-300">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 size-[32rem] bg-[#7c5cff]/10 dark:bg-[#7c5cff]/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 size-[26rem] bg-[#4f46e5]/10 dark:bg-[#4f46e5]/20 blur-[120px]" />

          {/* Content */}
          <div className="relative grid lg:grid-cols-2 items-center gap-14 px-6 md:px-12 lg:px-16 py-16 lg:py-20">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf622] dark:border-[#8b5cf633] bg-[#8b5cf60d] dark:bg-[#8b5cf614] px-5 py-2 text-sm font-medium text-[#6d4dff] dark:text-[#a78bfa] backdrop-blur-xl">
                <Sparkles className="size-4" />
                Build Something Meaningful
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-2px] text-[#0f172a] dark:text-white">
                Turn Your Ideas
                <span className="block bg-gradient-to-r from-[#7c5cff] to-[#a78bfa] bg-clip-text text-transparent">
                  Into Reality
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-slate-600 dark:text-[#b4bad3]">
                Share your startup ideas, connect with creative people, and grow
                together inside a community built for innovators.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={"/add-idea"}>
                  <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#8b5cf6] px-7 py-4 text-white font-semibold shadow-[0_10px_35px_rgba(124,92,255,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(124,92,255,0.45)]">
                    Share Your Idea
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href={"/ideas"}>
                  <button className="group inline-flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-7 py-4 text-slate-700 dark:text-white/90 backdrop-blur-xl transition-all duration-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]">
                    Explore Ideas
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-14 flex flex-wrap gap-8 lg:gap-10">
                {stats.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] text-[#7c5cff] dark:text-[#d8d2ff]">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[#0f172a] dark:text-white">
                        {item.value}
                      </h4>

                      <p className="text-sm text-slate-500 dark:text-[#9ea4c5]">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center min-h-[420px]">
              {/* Glow */}
              <div className="absolute size-[20rem] rounded-full bg-[#7c5cff]/15 dark:bg-[#7c5cff]/30 blur-[100px]" />

              {/* Floating Cards */}
              <div className="absolute top-2 left-[10%] flex size-20 md:size-24 items-center justify-center rounded-[24px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl text-[#7c5cff] dark:text-[#d8d2ff] shadow-xl rotate-[-8deg]">
                <Lightbulb className="size-8" />
              </div>

              <div className="absolute top-10 right-[10%] flex size-20 md:size-24 items-center justify-center rounded-[24px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl text-[#7c5cff] dark:text-[#d8d2ff] shadow-xl rotate-[8deg]">
                <Users2 className="size-8" />
              </div>

              <div className="absolute left-0 top-[45%] flex size-20 md:size-24 items-center justify-center rounded-[24px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl text-[#7c5cff] dark:text-[#d8d2ff] shadow-xl rotate-[-10deg]">
                <Rocket className="size-8" />
              </div>

              <div className="absolute right-[14%] top-[48%] flex size-20 md:size-24 items-center justify-center rounded-[24px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl text-[#7c5cff] dark:text-[#d8d2ff] shadow-xl rotate-[6deg]">
                <MessageSquareMore className="size-8" />
              </div>

              {/* Main Cube */}
              <div className="relative mt-10">
                {/* Top Face */}
                <div className="absolute left-1/2 top-0 z-20 h-14 w-52 -translate-x-1/2 skew-x-[-45deg] rounded-lg bg-gradient-to-r from-[#f1eaff] to-[#8b5cf6] shadow-[0_0_60px_rgba(139,92,246,0.6)]" />

                {/* Cube Body */}
                <div className="flex">
                  <div className="h-56 w-40 bg-gradient-to-b from-[#4f46e5] to-[#4338ca] [clip-path:polygon(100%_0,0_12%,0_100%,100%_88%)]" />

                  <div className="h-56 w-40 bg-gradient-to-b from-[#7c5cff] to-[#5b43f3] [clip-path:polygon(0_0,100%_12%,100%_100%,0_88%)]" />
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-24 items-center justify-center rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">
                    <Rocket className="size-11 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="relative border-t border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-6 md:px-12 lg:px-16 py-7 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.05] text-[#7c5cff] dark:text-white">
                  <Rocket className="size-6" />
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-[#0f172a] dark:text-white">
                    Your next big project starts here.
                  </h4>

                  <p className="text-sm md:text-base text-slate-500 dark:text-[#9ea4c5]">
                    Collaborate, build, and grow with creators worldwide.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Avatars */}
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="size-11 rounded-full border-2 border-white dark:border-[#070b2d] bg-gradient-to-br from-[#d9d9d9] to-[#8e8e8e]"
                    />
                  ))}

                  <div className="flex size-11 items-center justify-center rounded-full border-2 border-white dark:border-[#070b2d] bg-[#7c5cff] text-sm font-bold text-white">
                    +2K
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-600 dark:text-[#d3d7eb]">
                  Join thousands of innovators today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
