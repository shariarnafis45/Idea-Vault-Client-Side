"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import { Pencil, Sparkles, Send, X } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function IdeaUpdateModal({ idea, categories }) {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedIdea = Object.fromEntries(formData.entries());
    updatedIdea.tags = updatedIdea.tags.split(",").map((tag) => tag.trim());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedIdea),
      },
    );
    const data = await res.json();
    if (data.acknowledged) {
      toast.success(`Your ${updatedIdea.ideaTitle} Idea Updated Successfully`);
      router.refresh();
    } else {
      toast.error("Please try again ");
    }
  };

  return (
    <Modal size="4xl">
      {/* trigger */}
      <Button
        className="
          group
          flex items-center gap-3
          rounded-2xl
          border border-violet-200 dark:border-violet-500/20
          bg-violet-50 dark:bg-violet-500/10
          px-5 py-6
          transition-all duration-300
          hover:bg-violet-100
          dark:hover:bg-violet-500/20
        "
      >
        <div
          className="
            rounded-xl
            bg-violet-500/10
            p-2
            text-violet-500
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <Pencil size={17} />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            Update
          </span>

          <span className="text-[11px] text-violet-500/70">Edit idea</span>
        </div>
      </Button>

      {/* modal */}
      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog
            className="
               relative
               overflow-hidden
            rounded-[32px]
            border border-black/5 dark:border-white/10
            bg-white dark:bg-[#0F172A]
            shadow-2xl
            "
          >
            {/* close btn */}
            <div className="absolute right-6 top-6 z-50">
              <Modal.CloseTrigger className="outline-none">
                <div
                  className="
        flex h-11 w-11 items-center justify-center
        rounded-full
        p-4

        border border-black/10 dark:border-white/10

        bg-white dark:bg-[#1E293B]

        text-gray-500 dark:text-gray-300

        shadow-sm

        transition-all duration-300

        hover:scale-105
        hover:border-red-500/20
        hover:bg-red-500/10
        hover:text-red-500
      "
                >
                  <X size={18} />
                </div>
              </Modal.CloseTrigger>
            </div>

            {/* header */}
            <Modal.Header className="border-b border-black/5 p-6 dark:border-white/10">
              <div className="flex items-start gap-4 pr-16">
                <div
                  className="
          flex h-14 w-14 items-center justify-center
          rounded-3xl
          bg-violet-500/10
          text-violet-500
        "
                >
                  <Sparkles size={24} />
                </div>

                <div>
                  <Modal.Heading className="text-3xl font-black text-default-900 dark:text-white">
                    Update Idea
                  </Modal.Heading>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-default-500">
                    Refine your startup idea and keep it polished.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* body */}
            <Modal.Body className="max-h-[72vh] overflow-y-auto p-6">
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {/* title */}
                <TextField
                  name="ideaTitle"
                  defaultValue={idea?.ideaTitle}
                  className="md:col-span-2"
                >
                  <Label className="form-label">Idea Title</Label>

                  <Input
                    placeholder="Enter idea title"
                    className="form-input"
                  />
                </TextField>

                {/* short desc */}
                <TextField
                  name="shortDescription"
                  defaultValue={idea?.shortDescription}
                  className="md:col-span-2"
                >
                  <Label className="form-label">Short Description</Label>

                  <TextArea
                    rows={3}
                    placeholder="Write a short description..."
                    className="form-textarea"
                  />
                </TextField>

                {/* detailed desc */}
                <TextField
                  name="detailedDescription"
                  defaultValue={idea?.detailedDescription}
                  className="md:col-span-2"
                >
                  <Label className="form-label">Detailed Description</Label>

                  <TextArea
                    rows={5}
                    placeholder="Describe your idea in detail..."
                    className="form-textarea"
                  />
                </TextField>

                {/* category */}
                <Select name="category" defaultSelectedKey={idea?.category}>
                  <Label className="form-label">Category</Label>

                  <Select.Trigger className="form-input">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox
                      className="
                        rounded-2xl
                        border border-black/5 dark:border-white/10
                        bg-white dark:bg-[#111827]
                        p-2
                      "
                    >
                      {categories?.map((category) => (
                        <ListBox.Item
                          key={category._id}
                          id={category.categoryId}
                          textValue={category.title}
                          className="rounded-xl"
                        >
                          {category.title}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>

                {/* tags */}
                <TextField name="tags" defaultValue={idea?.tags?.join(", ")}>
                  <Label className="form-label">Tags</Label>

                  <Input
                    placeholder="ai, startup, saas"
                    className="form-input"
                  />
                </TextField>

                {/* image url */}
                <TextField
                  name="imageURL"
                  defaultValue={idea?.imageURL}
                  className="md:col-span-2"
                >
                  <Label className="form-label">Image URL</Label>

                  <Input
                    placeholder="https://example.com/image.jpg"
                    className="form-input"
                  />
                </TextField>

                {/* budget */}
                <TextField
                  name="estimatedBudget"
                  defaultValue={idea?.estimatedBudget}
                >
                  <Label className="form-label">Estimated Budget</Label>

                  <Input placeholder="$10,000" className="form-input" />
                </TextField>

                {/* audience */}
                <TextField
                  name="targetAudience"
                  defaultValue={idea?.targetAudience}
                >
                  <Label className="form-label">Target Audience</Label>

                  <Input
                    placeholder="Students, startups..."
                    className="form-input"
                  />
                </TextField>

                {/* problem */}
                <TextField
                  name="problemStatement"
                  defaultValue={idea?.problemStatement}
                >
                  <Label className="form-label">Problem Statement</Label>

                  <TextArea
                    rows={4}
                    placeholder="What problem does this solve?"
                    className="form-textarea"
                  />
                </TextField>

                {/* solution */}
                <TextField
                  name="proposedSolution"
                  defaultValue={idea?.proposedSolution}
                >
                  <Label className="form-label">Proposed Solution</Label>

                  <TextArea
                    rows={4}
                    placeholder="Explain your solution..."
                    className="form-textarea"
                  />
                </TextField>
                {/* action buttons */}
                <div className="md:col-span-2 mt-6 flex items-center justify-end gap-4 border-t border-black/5 pt-6 dark:border-white/10">
                  <Modal.Footer>
                    <Button
                      slot="close"
                      className="
      h-11 rounded-2xl
      border border-black/5 dark:border-white/10
      bg-white dark:bg-white/[0.04]
      px-6
      font-medium
      text-default-700 dark:text-white
      transition-all duration-300
      hover:bg-black/5 dark:hover:bg-white/10
    "
                    >
                      <X size={16} />
                      Close
                    </Button>

                    <Button
                    slot="close"
                      type="submit"
                      className="
      h-11 rounded-2xl
      bg-gradient-to-r
      from-violet-600
      to-indigo-500
      px-6
      font-semibold
      text-white
      shadow-lg shadow-violet-500/20
      transition-all duration-300
      hover:scale-[1.02]
      disabled:cursor-not-allowed
      disabled:opacity-70
    "
                    >
                      <Send size={16} />
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
