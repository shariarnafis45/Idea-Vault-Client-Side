import { Avatar } from "@heroui/react";
import { Clock3, Edit3, Trash2 } from "lucide-react";

import toast from "react-hot-toast";
import DeleteComment from "./DeleteComment";
import CommentUpdateModal from "./CommentUpdateModal";
import { formatDistanceToNow } from "date-fns";

const CommentCard = ({ comment, user }) => {
  const isOwner = comment?.userEmail === user?.email;

  return (
    <div
      className="
        rounded-[30px]
        border
        border-black/5
        bg-white/70
        p-5
        shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        md:p-6
        dark:border-white/10
        dark:bg-white/[0.04]
      "
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Avatar
          className="
            h-11
            w-11
            shrink-0
            ring-2
            ring-white
            dark:ring-[#111827]
          "
        >
          <Avatar.Image alt={comment?.userName} src={comment?.userPhoto} />

          <Avatar.Fallback
            className="
              bg-gradient-to-br
              from-[#7C5CFF]
              to-[#9F7AEA]
              text-sm
              font-semibold
              text-white
            "
          >
            {comment?.userName?.charAt(0) || "U"}
          </Avatar.Fallback>
        </Avatar>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            {/* User Info */}
            <div>
              <h4 className="text-base font-bold text-[#0F172A] dark:text-white md:text-lg">
                {comment?.userName}
              </h4>

              <div className="mt-1 flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                <Clock3 className="size-4" />

                <span>
                  {formatDistanceToNow(new Date(comment?.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>

            {/* Actions */}
            {isOwner && (
              <div className="flex items-center gap-3">
                {/* Edit */}
                <CommentUpdateModal comment={comment} />

                {/* Delete */}
                <DeleteComment comment={comment} />
              </div>
            )}
          </div>

          {/* Comment */}
          <p
            className="
              mt-5
              whitespace-pre-line
              text-[15px]
              leading-8
              text-[#475569]
              dark:text-[#CBD5E1]
            "
          >
            {comment?.commentText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
