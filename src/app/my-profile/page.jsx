import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  LogOut,
  Mail,
  User2,
} from "lucide-react";

import { ProfileUpdateModal } from "@/components/ui/ProfileUpdateModal";
import LogoutButton from "@/components/ui/LogOutButton";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F5F3FF] dark:bg-[#070B14]
        py-14 md:py-16
        transition-colors duration-500
      "
    >
      {/* bg blur */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-[140px] dark:bg-violet-500/10" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-[140px] dark:bg-indigo-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* top */}
        <div className="mb-10">
          <h1 className="text-[36px] font-black tracking-[-0.04em] text-[#0F172A] dark:text-white md:text-[52px]">
            My Profile
          </h1>

          <p className="mt-2 text-base text-[#6B7280] dark:text-[#A1A1B5] md:text-lg">
            View and manage your personal information
          </p>
        </div>

        {/* profile card */}
        <div
          className="
            rounded-[34px]
            border border-black/5 dark:border-white/10
            bg-white dark:bg-[#0F172A]
            p-5 shadow-xl shadow-violet-500/5
            transition-colors duration-500
            md:p-8
          "
        >
          <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            {/* left */}
            <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center">
              {/* image */}
              <div className="relative">
                <div
                  className="
                    relative
                    h-[150px] w-[150px]
                    overflow-hidden
                    rounded-full
                    border-[6px]
                    border-[#F3F0FF]
                    dark:border-white/10
                    shadow-lg
                  "
                >
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* badge */}
                <div
                  className="
                    absolute bottom-2 right-0
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    border-4 border-white dark:border-[#0F172A]
                    bg-violet-100 dark:bg-violet-500/10
                    text-violet-600
                    shadow-lg
                  "
                >
                  <User2 size={22} />
                </div>
              </div>

              {/* info */}
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h2 className="text-3xl font-black text-[#0F172A] dark:text-white md:text-5xl">
                    {user?.name}
                  </h2>

                  <div
                    className="
                      rounded-xl
                      bg-violet-100 dark:bg-violet-500/10
                      px-4 py-2
                      text-sm font-bold
                      text-violet-700 dark:text-violet-300
                    "
                  >
                    Idea Creator
                  </div>
                </div>

                {/* email */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        bg-violet-100 dark:bg-violet-500/10
                        text-violet-600
                      "
                    >
                      <Mail size={18} />
                    </div>

                    <span className="text-base text-[#475569] dark:text-[#CBD5E1]">
                      {user?.email}
                    </span>
                  </div>

                  {user?.emailVerified && (
                    <div
                      className="
                        flex items-center gap-1.5
                        rounded-full
                        bg-emerald-100 dark:bg-emerald-500/10
                        px-3 py-1.5
                        text-sm font-semibold
                        text-emerald-600 dark:text-emerald-400
                      "
                    >
                      Verified
                      <BadgeCheck size={16} />
                    </div>
                  )}
                </div>

                {/* member */}
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-violet-100 dark:bg-violet-500/10
                      text-violet-600
                    "
                  >
                    <CalendarDays size={18} />
                  </div>

                  <span className="text-lg text-[#475569] dark:text-[#CBD5E1]">
                    Member since{" "}
                    {new Date(user?.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* update btn */}
            <div className="w-full xl:w-auto">
              <ProfileUpdateModal user={user} />
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* profile info */}
            <div
              className="
        rounded-[32px]
        border border-black/5 dark:border-white/10
        bg-white dark:bg-[#0F172A]
        p-6 md:p-8
        shadow-xl shadow-violet-500/5
      "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-[#0F172A] dark:text-white">
                  Profile Information
                </h3>

                <div
                  className="
            rounded-full
            bg-violet-100 dark:bg-violet-500/10
            px-4 py-2
            text-sm font-semibold
            text-violet-600
          "
                >
                  Active Account
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {/* row */}
                <div
                  className="
            flex flex-col gap-5
            border-b border-black/5 dark:border-white/10
            pb-5
            md:flex-row md:items-center md:justify-between
          "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-violet-100 dark:bg-violet-500/10
                text-violet-600
              "
                    >
                      <User2 size={22} />
                    </div>

                    <span className="text-lg font-semibold text-[#475569] dark:text-[#CBD5E1]">
                      Name
                    </span>
                  </div>

                  <span className="text-lg font-semibold text-[#0F172A] dark:text-white">
                    {user?.name}
                  </span>
                </div>

                {/* email */}
                <div
                  className="
            flex flex-col gap-5
            border-b border-black/5 dark:border-white/10
            pb-5
            md:flex-row md:items-center md:justify-between
          "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-violet-100 dark:bg-violet-500/10
                text-violet-600
              "
                    >
                      <Mail size={22} />
                    </div>

                    <span className="text-lg font-semibold text-[#475569] dark:text-[#CBD5E1]">
                      Email Address
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg font-semibold text-[#0F172A] dark:text-white">
                      {user?.email}
                    </span>

                    {user?.emailVerified && (
                      <div
                        className="
                  rounded-full
                  bg-emerald-100 dark:bg-emerald-500/10
                  px-3 py-1
                  text-xs font-bold
                  text-emerald-600 dark:text-emerald-400
                "
                      >
                        Verified
                      </div>
                    )}
                  </div>
                </div>

                {/* created */}
                <div
                  className="
            flex flex-col gap-5
            border-b border-black/5 dark:border-white/10
            pb-5
            md:flex-row md:items-center md:justify-between
          "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-violet-100 dark:bg-violet-500/10
                text-violet-600
              "
                    >
                      <CalendarDays size={22} />
                    </div>

                    <span className="text-lg font-semibold text-[#475569] dark:text-[#CBD5E1]">
                      Member Since
                    </span>
                  </div>

                  <span className="text-lg font-semibold text-[#0F172A] dark:text-white">
                    {new Date(user?.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* updated */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-violet-100 dark:bg-violet-500/10
                text-violet-600
              "
                    >
                      <Clock3 size={22} />
                    </div>

                    <span className="text-lg font-semibold text-[#475569] dark:text-[#CBD5E1]">
                      Last Updated
                    </span>
                  </div>

                  <span className="text-lg font-semibold text-[#0F172A] dark:text-white">
                    {new Date(user?.updatedAt).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* logout card */}
            <div
              className="
        group
        relative overflow-hidden

        rounded-[30px]

        border border-red-200/60
        dark:border-red-500/10

        bg-gradient-to-br
        from-red-50
        via-white
        to-rose-50

        dark:from-red-500/[0.04]
        dark:via-[#0F172A]
        dark:to-red-500/[0.02]

        p-6

        shadow-lg shadow-red-500/[0.04]

        transition-all duration-500

        hover:-translate-y-1
        hover:border-red-400/40
      "
            >
              {/* blur */}
              <div
                className="
          absolute right-0 top-0
          h-32 w-32
          rounded-full
          bg-red-400/10
          blur-3xl
        "
              />
              <LogoutButton />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* update profile card */}
            <div
              className="
        rounded-[32px]
        border border-black/5 dark:border-white/10
        bg-white dark:bg-[#0F172A]
        p-6 md:p-8
        shadow-xl shadow-violet-500/5
      "
            >
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

              <h3 className="mt-6 text-3xl font-black text-[#0F172A] dark:text-white">
                Update Your Profile
              </h3>

              <p className="mt-3 text-base leading-8 text-[#6B7280] dark:text-[#94A3B8]">
                Keep your personal information updated to maintain a better
                profile experience inside IdeaVault.
              </p>

              <div className="mt-8">
                <ProfileUpdateModal user={user} />
              </div>
            </div>

            {/* account status */}
            <div
              className="
        relative overflow-hidden

        rounded-[32px]

        border border-black/5 dark:border-white/10

        bg-gradient-to-br
        from-violet-600
        to-indigo-500

        p-7

        text-white

        shadow-2xl shadow-violet-500/20
      "
            >
              {/* glow */}
              <div
                className="
          absolute right-[-40px] top-[-40px]
          h-40 w-40 rounded-full
          bg-white/10 blur-3xl
        "
              />

              <div className="relative z-10">
                <div
                  className="
            inline-flex items-center gap-2
            rounded-full
            bg-white/10
            px-4 py-2
            text-sm font-semibold
            backdrop-blur-xl
          "
                >
                  <BadgeCheck size={16} />
                  Verified Creator
                </div>

                <h3 className="mt-6 text-3xl font-black leading-tight">
                  Your profile is looking great ✨
                </h3>

                <p className="mt-4 text-base leading-8 text-white/80">
                  Your account is verified and fully active. Continue sharing
                  amazing startup ideas with the community.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />

                  <span className="text-sm font-semibold text-white/90">
                    Account Status : Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;
