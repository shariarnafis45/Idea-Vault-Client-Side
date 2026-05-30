import { Clock3, Eye, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { getSingleIdea } from "@/lib/data";

const CommentedIdeaCard = async ({ comment }) => {
  const commentedIdea = await getSingleIdea(comment?.ideaId);

  return (
    <div
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
            src={commentedIdea.imageURL}
            alt={commentedIdea.ideaTitle}
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
              {commentedIdea.category}
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
                {commentedIdea.ideaTitle}
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
                {commentedIdea.shortDescription}
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

              {formatDistanceToNow(new Date(comment.createdAt), {
                addSuffix: true,
              })}
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
              {comment.commentText}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/ideas/${comment?.ideaId}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentedIdeaCard;
