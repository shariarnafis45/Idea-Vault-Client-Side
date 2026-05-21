import { ArrowRight, Lightbulb, MessageSquareText, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Share Your Idea",
    description:
      "Post your startup idea with details, tags, and goals. Let the world know what you're building.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Get Community Feedback",
    description:
      "Receive comments, upvotes, and suggestions from creators, developers, and entrepreneurs.",
    icon: MessageSquareText,
  },
  {
    id: "03",
    title: "Collaborate & Build",
    description:
      "Connect with the right people, refine your idea, and build something amazing together.",
    icon: Rocket,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5FF] py-28 dark:bg-[#0F0F1A]">
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-500/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C5CFF]">
                How It Works
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] dark:text-white md:text-6xl">
              How IdeaVault Works
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-9 text-[#6B7280] dark:text-[#A1A1B5]">
              A simple process to share your ideas, get feedback, and turn them
              into impactful solutions.
            </p>
          </div>

          {/* Right Side Text */}
          <div className="hidden translate-y-6 rotate-[-3deg] lg:block">
            <p className="text-lg font-medium text-[#111827] dark:text-white">
              Join the community
              <br />
              of innovators!
            </p>

            <div className="mt-2 h-[3px] w-28 rounded-full bg-[#7C5CFF]" />

            <div className="mt-2 flex justify-end">
              <svg
                width="60"
                height="35"
                viewBox="0 0 60 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C20 2 32 10 36 20C40 30 50 33 58 33"
                  stroke="#7C5CFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M51 27L58 33L52 34"
                  stroke="#7C5CFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-32 hidden h-[2px] w-[68%] -translate-x-1/2 border-t border-dashed border-[#D9CCFF] dark:border-[#35355A] lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative rounded-[36px] border border-[#E9E3FF] bg-white px-10 pb-12 pt-16 text-center shadow-[0_10px_40px_rgba(124,92,255,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,92,255,0.12)] dark:border-[#2A2A40] dark:bg-[#1C1C2E]"
              >
                {/* Number Badge */}
                <div className="absolute left-1/2 top-0 flex h-10 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7C5CFF] text-sm font-bold text-white shadow-lg shadow-purple-500/30">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#F3EEFF] dark:bg-[#25253A]">
                  <Icon
                    className="h-12 w-12 text-[#7C5CFF]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-[#111827] dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-lg leading-9 text-[#6B7280] dark:text-[#A1A1B5]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-20 flex justify-center">
          <Link href={'/add-ideas'}>
            <button className="group flex h-16 items-center gap-4 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#8B5CFF] px-10 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(124,92,255,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(124,92,255,0.45)]">
              Share Your Idea
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
