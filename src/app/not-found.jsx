import Link from "next/link";
import { Button } from "@heroui/react";
import {
  ArrowLeft,
  Compass,
  Home,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import BackButton from "@/components/ui/BackButton";
export const metadata = {
  title: "Page Not Found | IdeaVault",
  description: "The page you are looking for does not exist or has been moved.",
};

const NotFoundPage = () => {
  return (
    <section
      className="
        relative overflow-hidden

        bg-[#F5F3FF]
        dark:bg-[#070B14]

        transition-colors duration-500
      "
    >
      {/* glow bg */}
      <div
        className="
          absolute left-[-120px] top-[-120px]
          h-[420px] w-[420px]
          rounded-full
          bg-violet-400/15
          blur-[140px]
          dark:bg-violet-500/10
        "
      />

      <div
        className="
          absolute bottom-[-100px] right-[-100px]
          h-[360px] w-[360px]
          rounded-full
          bg-indigo-400/15
          blur-[140px]
          dark:bg-indigo-500/10
        "
      />

      <div
        className="
          relative mx-auto
          flex min-h-screen max-w-7xl
          items-center justify-center
          px-4 py-16 md:px-8
        "
      >
        {/* card */}
        <div
          className="
            relative overflow-hidden

            w-full max-w-3xl

            rounded-[40px]

            border border-black/5
            dark:border-white/10

            bg-white/90
            dark:bg-[#0F172A]/90

            p-8 md:p-14

            shadow-[0_20px_80px_rgba(124,92,255,0.08)]

            backdrop-blur-xl
          "
        >
          {/* decorative blur */}
          <div
            className="
              absolute right-[-50px] top-[-50px]
              h-48 w-48 rounded-full
              bg-violet-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute bottom-[-60px] left-[-60px]
              h-48 w-48 rounded-full
              bg-indigo-500/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            {/* top badge */}
            <div
              className="
                inline-flex items-center gap-2

                rounded-full

                border border-violet-200
                dark:border-violet-500/20

                bg-violet-100/80
                dark:bg-violet-500/10

                px-4 py-2

                text-sm font-semibold
                text-violet-700 dark:text-violet-300
              "
            >
              <Sparkles size={16} />
              Oops! Something went wrong
            </div>

            {/* 404 */}
            <div className="mt-8 flex items-center justify-center">
              <div className="relative">
                <h1
                  className="
                    text-[120px]
                    font-black
                    leading-none
                    tracking-[-0.08em]

                    text-[#0F172A]
                    dark:text-white

                    md:text-[180px]
                  "
                >
                  404
                </h1>

                {/* floating icon */}
                <div
                  className="
                    absolute -right-2 top-4

                    flex h-16 w-16 items-center justify-center

                    rounded-2xl

                    border border-red-200/60
                    dark:border-red-500/20

                    bg-red-100/80
                    dark:bg-red-500/10

                    text-red-500

                    shadow-lg shadow-red-500/10

                    backdrop-blur-xl
                  "
                >
                  <TriangleAlert size={28} />
                </div>
              </div>
            </div>

            {/* heading */}
            <div className="mx-auto mt-6 max-w-2xl text-center">
              <h2
                className="
                  text-3xl font-black
                  tracking-[-0.04em]

                  text-[#0F172A]
                  dark:text-white

                  md:text-5xl
                "
              >
                Page Not Found
              </h2>

              <p
                className="
                  mx-auto mt-5 max-w-xl

                  text-base leading-8

                  text-[#6B7280]
                  dark:text-[#94A3B8]

                  md:text-lg
                "
              >
                The page you are trying to access may have been removed,
                renamed, or is temporarily unavailable.
              </p>
            </div>

            {/* actions */}
            <div
              className="
                mt-10
                flex flex-col items-center justify-center gap-4
                sm:flex-row
              "
            >
              <Link href="/">
                <Button
                  className="
                    group

                    h-[58px]
                    rounded-2xl

                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-500

                    px-8

                    text-base font-bold
                    text-white

                    shadow-xl shadow-violet-500/20

                    transition-all duration-300

                    hover:scale-[1.02]
                  "
                >
                  <Home
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  Back To Home
                </Button>
              </Link>

              <BackButton />
            </div>

            {/* bottom status */}
            <div
              className="
                mt-12

                flex flex-wrap items-center justify-center gap-4

                border-t border-black/5
                dark:border-white/10

                pt-8
              "
            >
              <div
                className="
                  flex items-center gap-2

                  rounded-full

                  bg-emerald-100
                  dark:bg-emerald-500/10

                  px-4 py-2

                  text-sm font-semibold

                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Server Status Active
              </div>

              <div
                className="
                  flex items-center gap-2

                  rounded-full

                  bg-slate-100
                  dark:bg-white/5

                  px-4 py-2

                  text-sm font-semibold

                  text-slate-600
                  dark:text-slate-300
                "
              >
                <Compass size={15} />
                Error Code : NOT_FOUND
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
