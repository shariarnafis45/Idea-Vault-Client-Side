import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Clock3,
  Eye,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// demo data
const commentedIdeas = [
  {
    _id: "1",
    ideaTitle: "AI Climate Tracker",
    category: "Sustainability",
    imageURL:
      "https://images.unsplash.com/photo-1497436072909-f5e4be5584d2",
    shortDescription:
      "AI-powered platform to monitor and reduce carbon footprint.",
    comment:
      "This idea has huge potential for sustainability startups.",
    commentedAt: "2 hours ago",
  },
  {
    _id: "2",
    ideaTitle: "Smart Health Assistant",
    category: "Healthcare",
    imageURL:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    shortDescription:
      "AI assistant that provides smart daily healthcare guidance.",
    comment:
      "Would love to see wearable device integrations in future versions.",
    commentedAt: "Yesterday",
  },
  {
    _id: "3",
    ideaTitle: "Remote Team Hub",
    category: "Productivity",
    imageURL:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    shortDescription:
      "All-in-one collaboration platform for remote teams.",
    comment:
      "The dashboard design and productivity workflow sound amazing.",
    commentedAt: "3 days ago",
  },
];

const MyInteractionsPage = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F3FF]
        py-16
        transition-colors
        duration-500
        dark:bg-[#070B14]
        md:py-24
      "
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-400/20 blur-[140px] dark:bg-violet-500/10" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-300/20 blur-[140px] dark:bg-fuchsia-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                user activity
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                max-w-4xl
                text-4xl
                font-black
                leading-tight
                tracking-[-0.05em]
                text-[#0F172A]
                dark:text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              My Interactions
            </h1>

            {/* Desc */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[#64748B]
                dark:text-[#A1A1B5]
                md:text-lg
              "
            >
              Track all the ideas you've interacted with, commented on,
              and engaged in across the community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Card */}
            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-white/70
                p-5
                shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-100
                  text-[#7C5CFF]
                  dark:bg-violet-500/10
                "
              >
                <MessageCircle className="size-6" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-[#0F172A] dark:text-white">
                12
              </h3>

              <p className="mt-1 text-sm text-[#64748B] dark:text-[#A1A1B5]">
                Total Comments
              </p>
            </div>

            {/* Card */}
            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-white/70
                p-5
                shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-100
                  text-indigo-600
                  dark:bg-indigo-500/10
                "
              >
                <TrendingUp className="size-6" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-[#0F172A] dark:text-white">
                8
              </h3>

              <p className="mt-1 text-sm text-[#64748B] dark:text-[#A1A1B5]">
                Ideas Engaged
              </p>
            </div>

            {/* Card */}
            <div
              className="
                rounded-[28px]
                border
                border-black/5
                bg-white/70
                p-5
                shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-100
                  text-emerald-600
                  dark:bg-emerald-500/10
                "
              >
                <Sparkles className="size-6" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-[#0F172A] dark:text-white">
                95%
              </h3>

              <p className="mt-1 text-sm text-[#64748B] dark:text-[#A1A1B5]">
                Activity Rate
              </p>
            </div>
          </div>
        </div>

        {/* Commented Ideas */}
        <div className="mt-20">
          {/* Section Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                  recent activity
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0F172A] dark:text-white">
                Commented Ideas
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {commentedIdeas.map((idea) => (
              <div
                key={idea._id}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-black/5
                  bg-white/70
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              >
                <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
                  {/* Image */}
                  <div className="relative h-[260px] overflow-hidden lg:h-full">
                    <Image
                      src={idea.imageURL}
                      alt={idea.ideaTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span
                        className="
                          rounded-full
                          bg-[#7C5CFF]
                          px-4
                          py-2
                          text-xs
                          font-bold
                          uppercase
                          tracking-wide
                          text-white
                        "
                      >
                        {idea.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Top */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3
                          className="
                            text-2xl
                            font-black
                            tracking-[-0.03em]
                            text-[#0F172A]
                            dark:text-white
                          "
                        >
                          {idea.ideaTitle}
                        </h3>

                        <p
                          className="
                            mt-4
                            max-w-3xl
                            text-[15px]
                            leading-8
                            text-[#64748B]
                            dark:text-[#A1A1B5]
                          "
                        >
                          {idea.shortDescription}
                        </p>
                      </div>

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-2xl
                          border
                          border-black/10
                          bg-white/70
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          text-[#64748B]
                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-[#CBD5E1]
                        "
                      >
                        <Clock3 className="size-4" />

                        {idea.commentedAt}
                      </div>
                    </div>

                    {/* User Comment */}
                    <div
                      className="
                        mt-8
                        rounded-[24px]
                        border
                        border-violet-200
                        bg-violet-50/70
                        p-5
                        dark:border-violet-500/20
                        dark:bg-violet-500/10
                      "
                    >
                      <div className="flex items-center gap-2">
                        <MessageCircle className="size-4 text-[#7C5CFF]" />

                        <span className="text-sm font-semibold text-[#7C5CFF]">
                          Your Comment
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          text-[15px]
                          leading-8
                          text-[#475569]
                          dark:text-[#CBD5E1]
                        "
                      >
                        {idea.comment}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/ideas/${idea._id}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-2xl
                          bg-[#7C5CFF]
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          shadow-[0_15px_40px_rgba(124,92,255,0.35)]
                          transition-all
                          duration-300
                          hover:scale-[1.02]
                          hover:bg-[#6D4FFF]
                        "
                      >
                        <Eye className="size-4" />

                        View Idea
                      </Link>

                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-2xl
                          border
                          border-black/10
                          bg-white/70
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-[#0F172A]
                          transition-all
                          duration-300
                          hover:border-violet-300
                          hover:text-[#7C5CFF]
                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-white
                        "
                      >
                        <MessageCircle className="size-4" />

                        Edit Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-[#7C5CFF]
            via-[#8B5CF6]
            to-[#6D4FFF]
            p-8
            shadow-[0_30px_80px_rgba(124,92,255,0.35)]
            md:p-12
          "
        >
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-100">
                stay connected
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Keep engaging with innovative ideas.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Explore more projects, share your thoughts, and become
                part of the innovation community.
              </p>
            </div>

            <Link
              href="/ideas"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-white
                px-7
                py-4
                text-sm
                font-bold
                text-[#7C5CFF]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Explore Ideas

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInteractionsPage;