"use client";

import { Button, Form, Label, Modal, TextArea, TextField } from "@heroui/react";

import { Edit3, MessageSquareQuote, Save, X } from "lucide-react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CommentUpdateModal = ({ comment }) => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedComment = Object.fromEntries(formData.entries());
    if (updatedComment.commentText.trim().length === 0) {
      toast.error("Empty Field");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${comment._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedComment),
      },
    );

    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Comment updated ");

      router.refresh();
    } else {
      toast.error("Please try again ");
    }
  };
  return (
    <Modal size="2xl">
      {/* Trigger */}
      <Button
        className="
          h-10
          rounded-xl
          border border-black/5 dark:border-white/10
          bg-white dark:bg-white/[0.04]
          px-4
          text-sm
          font-semibold
          text-[#0F172A] dark:text-white
          transition-all duration-300
          hover:border-violet-400/40
          hover:text-violet-600
          dark:hover:text-violet-400
        "
      >
        <Edit3 size={16} />
        Edit
      </Button>

      {/* Modal */}
      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog
            className="
              relative overflow-hidden
              rounded-[34px]
              border border-black/5 dark:border-white/10
              bg-white dark:bg-[#0F172A]
              shadow-2xl
            "
          >
            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Close */}
            <div className="absolute right-6 top-6 z-50">
              <Modal.CloseTrigger>
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
              </Modal.CloseTrigger>
            </div>

            {/* Header */}
            <Modal.Header className="border-b border-black/5 p-7 dark:border-white/10">
              <div className="flex items-start gap-4 pr-12">
                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    rounded-3xl
                    bg-violet-100 dark:bg-violet-500/10
                    text-violet-600 dark:text-violet-400
                  "
                >
                  <MessageSquareQuote size={28} />
                </div>

                <div>
                  <Modal.Heading className="text-4xl font-black text-[#0F172A] dark:text-white">
                    Edit Comment
                  </Modal.Heading>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-7">
              <Form onSubmit={onSubmit} className="space-y-6">
                <TextField>
                  <Label className="form-label">Your Comment</Label>

                  <TextArea
                    name="commentText"
                    rows={6}
                    placeholder="Update your comment..."
                    className="form-textarea"
                  />
                </TextField>

                {/* Character Count */}
                <div className="flex justify-end">
                  <span className="text-xs text-[#6B7280] dark:text-[#94A3B8]"></span>
                </div>

                {/* Footer */}
                <div
                  className="
                    flex flex-col-reverse gap-4
                    border-t border-black/5 pt-6
                    dark:border-white/10
                    sm:flex-row sm:justify-end
                  "
                >
                  <Modal.Footer>
                    <Button
                      slot="close"
                      className="
                        h-12 rounded-2xl
                        border border-black/5 dark:border-white/10
                        bg-white dark:bg-white/[0.04]
                        px-6
                        font-semibold
                        text-default-700 dark:text-white
                        transition-all duration-300
                        hover:bg-black/5 dark:hover:bg-white/10
                      "
                    >
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      type="submit"
                      className="
                        h-12 rounded-2xl
                        bg-gradient-to-r
                        from-violet-600
                        to-indigo-500
                        px-7
                        font-semibold
                        text-white
                        shadow-lg shadow-violet-500/20
                        transition-all duration-300
                        hover:scale-[1.02]
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                      "
                    >
                      <Save size={17} />
                      Update
                    </Button>
                  </Modal.Footer>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CommentUpdateModal;
