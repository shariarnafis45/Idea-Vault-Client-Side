"use client";

import { Avatar } from "@heroui/react";
import { SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddComment = ({ user, ideaId }) => {
  const router = useRouter();
  const handleAddComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = Object.fromEntries(formData.entries());
    if (newComment.comment.trim().length == 0) {
      toast.error("Empty Comments");
      return;
    }
    const commentData = {
      ideaId: ideaId,
      userName: user?.name,
      userEmail: user?.email,
      userPhoto: user?.image,
      commentText: newComment.comment,
      createdAt: new Date(),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    const data = await res.json();
    if (data.acknowledged) {
      toast.success(`Comment Posted`);
      e.target.reset();
      router.refresh();
    } else {
      toast.error(" Please try again ! ");
    }
  };

  return (
    <div
      className="
        rounded-[32px]
        border
        border-black/5
        bg-white/70
        p-4
        shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        backdrop-blur-2xl
        md:p-6
        dark:border-white/10
        dark:bg-white/[0.04]
      "
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Avatar
          className="
                   h-10 w-10
                   ring-2 ring-white
                   dark:ring-[#111827]
                 "
        >
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback
            className="
                     bg-gradient-to-br
                     from-[#7C5CFF]
                     to-[#9F7AEA]
                     text-sm font-semibold text-white
                   "
          >
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <div className="flex-1">
          <form onSubmit={handleAddComment}>
            {/* Textarea */}
            <textarea
              name="comment"
              placeholder="Share your thoughts about this idea..."
              className="
                min-h-[130px]
                w-full
                resize-none
                rounded-[28px]
                border
                border-black/10
                bg-[#F8FAFC]
                px-5
                py-4
                text-sm
                text-[#0F172A]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#94A3B8]
                focus:border-[#7C5CFF]
                focus:ring-4
                focus:ring-violet-500/10
                dark:border-white/10
                dark:bg-[#0F172A]
                dark:text-white
                dark:placeholder:text-[#64748B]
              "
            />

            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                Be respectful and constructive in your feedback.
              </p>

              <button
                type="submit"
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
                  active:scale-[0.98]
                "
              >
                <SendHorizonal className="size-4" />

                <span>Post Comment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
