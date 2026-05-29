"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertTriangle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteComment = ({ comment }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${comment._id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.acknowledged) {
        toast.success("Comment deleted successfully");
        router.refresh();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to delete comment");
    }
  };

  return (
    <AlertDialog>
      {/* Delete Button */}
      <Button
        className="
          group
          relative
          inline-flex
          items-center
          gap-2
          overflow-hidden
          rounded-2xl
          border
          border-red-200/70
          bg-white/80
          px-4
          py-2.5
          text-sm
          font-semibold
          text-red-500
          shadow-sm
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-red-300
          hover:bg-red-50
          hover:shadow-lg
          dark:border-red-500/20
          dark:bg-white/[0.03]
          dark:text-red-400
          dark:hover:border-red-500/40
          dark:hover:bg-red-500/10
          dark:hover:shadow-red-500/10
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-red-500/0
            via-red-500/5
            to-red-500/0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <Trash2 className="relative size-4 transition-transform duration-300 group-hover:scale-110" />

        <span className="relative">Delete</span>
      </Button>

      {/* Modal */}
      <AlertDialog.Backdrop className="bg-black/50 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white
              shadow-2xl
              dark:border-white/10
              dark:bg-[#0F172A]
              sm:max-w-[430px]
            "
          >
            <AlertDialog.CloseTrigger>
              <div
                className="
                    flex p-2 items-center justify-center
                    rounded-full
                    border border-black/10 dark:border-white/10
                    bg-white dark:bg-[#111827]
                    text-gray-500 dark:text-gray-300
                    transition-all duration-300
                    hover:bg-red-500/10
                    hover:text-red-500
                  "
              >
                <X size={18} />
              </div>
            </AlertDialog.CloseTrigger>

            {/* Header */}
            <AlertDialog.Header className="flex flex-col items-center pt-8 text-center">
              <div
                className="
                  mb-4
                  flex
                  size-16
                  items-center
                  justify-center
                  rounded-full
                  bg-red-100
                  dark:bg-red-500/10
                "
              >
                <AlertTriangle className="size-8 text-red-500 dark:text-red-400" />
              </div>

              <AlertDialog.Heading
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                Delete Comment?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* Body */}
            <AlertDialog.Body className="px-6 pb-2 text-center">
              <p
                className="
                  text-sm
                  leading-relaxed
                  text-gray-600
                  dark:text-gray-400
                "
              >
                This action will permanently remove this comment from your
                project. Once deleted, it cannot be recovered.
              </p>
            </AlertDialog.Body>

            {/* Footer */}
            <AlertDialog.Footer className="flex gap-3 px-6 pb-6 pt-4">
              <Button
                slot="close"
                className="
                  flex-1
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  py-2.5
                  font-medium
                  text-gray-700
                  transition-all
                  duration-300
                  hover:bg-gray-100
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-gray-300
                  dark:hover:bg-white/[0.06]
                "
              >
                Cancel
              </Button>

              <Button
                slot="close"
                onClick={handleDelete}
                className="
                  flex-1
                  rounded-xl
                  bg-gradient-to-r
                  from-red-500
                  to-rose-500
                  py-2.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-red-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-red-500/40
                "
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteComment;
