"use client";

import { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { AlertTriangle, ShieldAlert, Trash2, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const IdeaDelete = ({ idea }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    console.log(data);
    if (
      data.ideaDeleteResult.acknowledged &&
      data.ideaCommentsDelete.acknowledged
    ) {
      toast.success(`Your ${idea.ideaTitle} Idea Deleted Successfully`);
      router.refresh();
    } else {
      toast.error("Please try again ");
    }
  };
  return (
    <AlertDialog>
      {/* trigger */}
      <Button
        className="
          group/delete
          flex items-center gap-3
          rounded-2xl
          border border-red-200 dark:border-red-500/20
          bg-red-50 dark:bg-red-500/10
          px-5 py-6
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-red-100
          dark:hover:bg-red-500/20
        "
      >
        <div
          className="
            rounded-2xl
            bg-red-500/10
            p-2.5
            text-red-500
            transition-all duration-300
            group-hover/delete:scale-110
            group-hover/delete:rotate-6
          "
        >
          <Trash2 size={18} />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
            Delete
          </span>

          <span className="text-[11px] text-red-500/70">
            Remove permanently
          </span>
        </div>
      </Button>

      {/* modal */}
      <AlertDialog.Backdrop className="bg-black/60 backdrop-blur-md">
        <AlertDialog.Container placement="center">
          <AlertDialog.Dialog
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border border-black/5 dark:border-white/10
              bg-white dark:bg-[#0F172A]
              shadow-2xl
              sm:max-w-[520px]
            "
          >
            {/* top glow */}
            <div
              className="
                absolute inset-x-0 top-0 h-1
                bg-gradient-to-r
                from-red-500
                via-rose-500
                to-orange-400
              "
            />

            {/* close button */}
            <AlertDialog.CloseTrigger
              className="
    absolute right-6 top-6 z-50

    flex h-11 w-11 items-center justify-center

    overflow-hidden

    rounded-2xl

    border border-black/10
    dark:border-white/10

    bg-white
    dark:bg-[#1E293B]

    text-default-500
    dark:text-default-400

    shadow-xl

    transition-all duration-300

    hover:scale-105
    hover:border-red-500/20
    hover:bg-red-500/10
    hover:text-red-500

    active:scale-95

    outline-none
    focus:outline-none
    focus-visible:ring-0

    before:hidden
  "
            >
              <X
                size={18}
                className="transition-transform duration-300 hover:rotate-90 text-black dark:text-white "
              />
            </AlertDialog.CloseTrigger>

            {/* content */}
            <div className="p-7">
              {/* icon */}
              <div
                className="
                  mx-auto
                  flex h-20 w-20 items-center justify-center
                  rounded-[28px]
                  bg-gradient-to-br
                  from-red-500/15
                  to-orange-500/10
                  text-red-500
                  shadow-lg shadow-red-500/10
                "
              >
                <ShieldAlert size={36} />
              </div>

              {/* heading */}
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-black tracking-tight text-default-900 dark:text-white">
                  Delete Idea Permanently?
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-default-500">
                  You are about to permanently remove this startup idea and all
                  associated data from your workspace.
                </p>
              </div>

              {/* idea preview */}
              <div
                className="
                  mt-6
                  rounded-3xl
                  border border-red-200/60 dark:border-red-500/10
                  bg-red-50/70 dark:bg-red-500/5
                  p-5
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-2xl
                      bg-red-500/10
                      text-red-500
                    "
                  >
                    <AlertTriangle size={20} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                      Selected Idea
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-default-900 dark:text-white">
                      {idea?.ideaTitle}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-default-500">
                      This action cannot be undone once confirmed.
                    </p>
                  </div>
                </div>
              </div>

              {/* actions */}
              <div className="mt-8 flex items-center justify-end gap-3 border-t border-black/5 pt-6 dark:border-white/10">
                <Button
                  slot="close"
                  className="
                    h-11 rounded-2xl
                    border border-black/5 dark:border-white/10
                    bg-white dark:bg-white/[0.04]
                    px-5
                    font-medium
                    text-default-700 dark:text-white
                    transition-all duration-300
                    hover:bg-black/5
                    dark:hover:bg-white/10
                  "
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleDelete}
                  variant="danger"
                  className="
                    h-11 rounded-2xl
                    bg-gradient-to-r
                    from-red-500
                    to-rose-500
                    px-5
                    font-semibold
                    text-white
                    shadow-lg shadow-red-500/20
                    transition-all duration-300
                    hover:scale-[1.02]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <Trash2 size={16} />
                  Delete Permanently
                </Button>
              </div>
            </div>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default IdeaDelete;
