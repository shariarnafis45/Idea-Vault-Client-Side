import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeDollarSign,
  Bookmark,
  Clock3,
  Edit3,
  Eye,
  Lightbulb,
  MessageCircle,
  SendHorizonal,
  Share2,
  Sparkles,
  Target,
  Trash2,
  Users,
} from "lucide-react";

import { getIdeaComments, getSingleIdea } from "@/lib/data";
import CommentCard from "@/components/ideaDetailsPage/CommentCard";
import { Form } from "@heroui/react";
import AddComment from "@/components/ideaDetailsPage/AddComment";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
  const idea = await getSingleIdea(id);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const comments = await getIdeaComments(id);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#F6F3FF]
        dark:bg-[#070B14]
        py-16
        md:py-24
        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-400/20 blur-[140px] dark:bg-violet-500/10" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-300/20 blur-[140px] dark:bg-fuchsia-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                idea details
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
              {idea.ideaTitle}
            </h1>

            {/* Desc */}
            <p
              className="
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-[#64748B]
                dark:text-[#A1A1B5]
                md:text-lg
              "
            >
              {idea.detailedDescription}
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {idea.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="
                    rounded-full
                    border
                    border-violet-200
                    bg-white/80
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#7C5CFF]
                    shadow-sm
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-white/[0.05]
                    dark:text-violet-300
                  "
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-[#7C5CFF]
                  px-6
                  py-4
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
                Support Idea
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-black/10
                  bg-white/70
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-[#0F172A]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:text-[#7C5CFF]
                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-white
                "
              >
                <Bookmark className="size-4" />
                Save Idea
              </button>

              <button
                className="
                  flex
                  size-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-black/10
                  bg-white/70
                  text-[#0F172A]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:text-[#7C5CFF]
                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-white
                "
              >
                <Share2 className="size-5" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/50
                bg-white/60
                p-3
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div className="relative aspect-[1.15/1] overflow-hidden rounded-[24px]">
                <Image
                  src={idea.imageURL}
                  alt={idea.ideaTitle}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

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

                {/* Floating Cards */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/20
                      bg-white/10
                      p-4
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2 text-white/80">
                      <Eye className="size-4" />

                      <span className="text-xs font-medium">
                        Community Reach
                      </span>
                    </div>

                    <h4 className="mt-2 text-xl font-black text-white">
                      12.4k
                    </h4>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/20
                      bg-white/10
                      p-4
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2 text-white/80">
                      <Sparkles className="size-4" />

                      <span className="text-xs font-medium">
                        Innovation Score
                      </span>
                    </div>

                    <h4 className="mt-2 text-xl font-black text-white">
                      9.8/10
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Budget */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white/70
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div
              className="
                flex
                size-14
                items-center
                justify-center
                rounded-2xl
                bg-violet-100
                text-[#7C5CFF]
                dark:bg-violet-500/10
              "
            >
              <BadgeDollarSign className="size-7" />
            </div>

            <h3 className="mt-6 text-lg font-bold text-[#0F172A] dark:text-white">
              Estimated Budget
            </h3>

            <p className="mt-2 text-3xl font-black text-[#7C5CFF]">
              {idea.estimatedBudget}
            </p>
          </div>

          {/* Audience */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white/70
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div
              className="
                flex
                size-14
                items-center
                justify-center
                rounded-2xl
                bg-indigo-100
                text-indigo-600
                dark:bg-indigo-500/10
              "
            >
              <Users className="size-7" />
            </div>

            <h3 className="mt-6 text-lg font-bold text-[#0F172A] dark:text-white">
              Target Audience
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#64748B] dark:text-[#A1A1B5]">
              {idea.targetAudience}
            </p>
          </div>

          {/* Problem */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white/70
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div
              className="
                flex
                size-14
                items-center
                justify-center
                rounded-2xl
                bg-rose-100
                text-rose-600
                dark:bg-rose-500/10
              "
            >
              <Target className="size-7" />
            </div>

            <h3 className="mt-6 text-lg font-bold text-[#0F172A] dark:text-white">
              Problem Statement
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#64748B] dark:text-[#A1A1B5]">
              {idea.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white/70
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              dark:border-white/10
              dark:bg-white/[0.04]
            "
          >
            <div
              className="
                flex
                size-14
                items-center
                justify-center
                rounded-2xl
                bg-emerald-100
                text-emerald-600
                dark:bg-emerald-500/10
              "
            >
              <Lightbulb className="size-7" />
            </div>

            <h3 className="mt-6 text-lg font-bold text-[#0F172A] dark:text-white">
              Proposed Solution
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#64748B] dark:text-[#A1A1B5]">
              {idea.proposedSolution}
            </p>
          </div>
        </div>

        {/* COMMENT SECTION */}
        <div className="mt-20">
          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#7C5CFF]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#7C5CFF]">
                  discussion
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0F172A] dark:text-white md:text-4xl">
                Community Comments
              </h2>
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
                px-5
                py-3
                text-sm
                font-semibold
                text-[#0F172A]
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-white
              "
            >
              <MessageCircle className="size-4 text-[#7C5CFF]" />
              {comments.length} Comments
            </div>
          </div>

          {/* Add Comment */}
          <AddComment user={user} ideaId={idea._id} />

          {/* Comment List */}
          <div className="mt-8 space-y-5">
            {comments.map((comment, i) => (
              <CommentCard key={i} comment={comment} user={user} />
            ))}
          </div>
        </div>

        {/* CTA */}
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
                innovation starts here
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Turn ideas into impactful products.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Collaborate with creators, developers, and visionaries to bring
                meaningful ideas to life.
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
              Explore More Ideas
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;
