"use client";

import { Button, Input, Label, Modal, TextField } from "@heroui/react";

import { BadgeCheck, Pencil, Save, User2, X } from "lucide-react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function ProfileUpdateModal({ user }) {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedUser = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${user?.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      },
    );

    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Profile updated successfully");

      router.refresh();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal size="2xl">
      {/* trigger */}
      <Button
        className="
          h-[70px]
          w-full md:w-[260px]
          rounded-[22px]
          bg-gradient-to-r
          from-violet-600
          to-indigo-500
          px-8
          text-lg
          font-bold
          text-white
          shadow-xl shadow-violet-500/20
          transition-all duration-300
          hover:scale-[1.02]
        "
      >
        <Pencil size={20} />
        Update Profile
      </Button>

      {/* modal */}
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
            {/* close */}
            <div className="absolute right-6 top-6 z-50">
              <Modal.CloseTrigger>
                <div
                  className="
                    flex p-3 items-center justify-center
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

            {/* header */}
            <Modal.Header className="border-b border-black/5 p-7 dark:border-white/10">
              <div className="flex items-start gap-4 pr-12">
                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    rounded-3xl
                    bg-violet-100 dark:bg-violet-500/10
                    text-violet-600
                  "
                >
                  <User2 size={28} />
                </div>

                <div>
                  <Modal.Heading className="text-4xl font-black text-[#0F172A] dark:text-white">
                    Update Profile
                  </Modal.Heading>

                  <p className="mt-2 text-sm leading-7 text-[#6B7280] dark:text-[#94A3B8]">
                    Manage your profile information and keep it updated.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* body */}
            <Modal.Body className="p-7">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* name */}
                <TextField name="name" defaultValue={user?.name}>
                  <Label className="form-label">Name</Label>

                  <Input placeholder="Enter your name" className="form-input" />
                </TextField>

                {/* email */}
                <TextField name="email" defaultValue={user?.email}>
                  <Label className="form-label">Email</Label>

                  <Input disabled className="form-input opacity-70" />
                </TextField>

                <p className="-mt-3 text-sm text-[#6B7280] dark:text-[#94A3B8]">
                  Email cannot be changed
                </p>

                {/* image */}
                <TextField name="image" defaultValue={user?.image}>
                  <Label className="form-label">Profile Image URL</Label>

                  <Input
                    placeholder="https://example.com/image.jpg"
                    className="form-input"
                  />
                </TextField>

                <p className="-mt-3 text-sm text-[#6B7280] dark:text-[#94A3B8]">
                  Paste a valid image URL (JPG, PNG, WebP)
                </p>

                {/* footer */}
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
                      "
                    >
                      <Save size={17} />
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
