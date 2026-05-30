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
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getAllIdeas, getUserComments } from "@/lib/data";
import CommentedIdeaCard from "@/components/shared/CommentedIdeaCard";
import NoUserInterectionCard from "@/components/shared/NoUserInterectionCard";
export const metadata = {
  title: 'My Interactions | IdeaVault',
  description: 'View your comments, feedback, and engagement history with other startup ideas on the platform.',
};

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;
  const myComments = await getUserComments(userId);
  console.log(myComments);
  
  const allIdeas = await getAllIdeas();
  const activityRate = Math.round((myComments.length / allIdeas.length) * 100);

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
              Track all the ideas you've interacted with, commented on, and
              engaged in across the community.
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
                {myComments.length}
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
                {myComments.length}
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
                {activityRate} %
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
            {myComments.length === 0 ? (
              <NoUserInterectionCard />
            ) : (
              myComments.map((comment) => (
                <CommentedIdeaCard
                  key={comment._id}
                  comment={comment}
                />
              ))
            )}
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
                Explore more projects, share your thoughts, and become part of
                the innovation community.
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
