import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const NoUserInterectionCard = () => {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-black/5
      bg-white/70
      px-8
      py-16
      text-center
      shadow-[0_15px_50px_rgba(15,23,42,0.05)]
      backdrop-blur-2xl
      dark:border-white/10
      dark:bg-white/[0.04]
    "
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        {/* Icon */}
        <div
          className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[28px]
          bg-gradient-to-br
          from-[#7C5CFF]
          to-[#6D4FFF]
          text-white
          shadow-[0_20px_50px_rgba(124,92,255,0.35)]
        "
        >
          <MessageCircle className="size-12" />
        </div>

        {/* Heading */}
        <h3
          className="
          mt-8
          text-3xl
          font-black
          tracking-[-0.04em]
          text-[#0F172A]
          dark:text-white
        "
        >
          No Interactions Yet
        </h3>

        {/* Description */}
        <p
          className="
          mx-auto
          mt-4
          max-w-xl
          text-base
          leading-8
          text-[#64748B]
          dark:text-[#A1A1B5]
        "
        >
          You haven't commented on any ideas yet. Explore innovative projects
          from the community and start sharing your thoughts.
        </p>

        {/* CTA */}
        <Link
          href="/ideas"
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-2xl
          bg-[#7C5CFF]
          px-7
          py-4
          text-sm
          font-bold
          text-white
          shadow-[0_15px_40px_rgba(124,92,255,0.35)]
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:bg-[#6D4FFF]
        "
        >
          Explore Ideas
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default NoUserInterectionCard;
