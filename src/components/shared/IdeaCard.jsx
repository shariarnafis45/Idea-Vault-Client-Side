import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { PiCubeLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";

const IdeaCard = ({ idea }) => {
  const {
    ideaTitle,
    shortDescription,
    category,
    tags,
    imageURL,
    estimatedBudget,
    targetAudience,
  } = idea;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/70
        dark:border-white/10
        bg-white/55
        dark:bg-white/5
        backdrop-blur-[24px]
        shadow-[0_10px_40px_rgba(139,92,246,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_70px_rgba(124,58,237,0.16)]
      "
    >
      {/* TOP IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={imageURL}
          alt={ideaTitle}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

        {/* category */}
        <div className="absolute top-5 left-5">
          <span
            className="
              h-[38px]
              px-4
              inline-flex
              items-center
              rounded-full
              bg-[#7C3AED]
              text-white
              text-[13px]
              font-semibold
              shadow-lg
            "
          >
            {category}
          </span>
        </div>

        {/* trending */}
        <div className="absolute top-5 right-5">
          <div
            className="
              h-[40px]
              px-4
              rounded-full
              bg-white/80
              dark:bg-black/40
              backdrop-blur-xl
              border
              border-white/60
              dark:border-white/10
              flex items-center gap-2
              shadow-md
            "
          >
            <FaFire className="text-orange-500 text-sm" />

            <span className="text-[14px] font-semibold text-[#0B1023] dark:text-white">
              1.2k
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">
        {/* TOP INFO */}
        <div className="mb-6">
          <h3
            className="
              text-3xl
              leading-[1.1]
              font-black
              tracking-[-1px]
              text-[#0B1023]
              dark:text-white
              mb-2
              transition-colors
              duration-300
              group-hover:text-[#7C3AED]
            "
          >
            {ideaTitle}
          </h3>

          <p
            className="
              text-[#667085]
              dark:text-gray-400
              text-[17px]
              leading-[1.8]
              font-medium
              line-clamp-2
            "
          >
            {shortDescription}
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-4">
          {tags?.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="
                px-4
                h-[34px]
                rounded-full
                bg-[#F4F0FF]
                dark:bg-violet-500/10
                text-[#7C3AED]
                dark:text-violet-300
                text-[13px]
                font-semibold
                inline-flex
                items-center
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div
          className="
    pt-6
    border-t
    border-[#ECE9FE]
    dark:border-white/10
    flex
    items-end
    justify-between
    gap-5
  "
        >
          {/* LEFT */}
          <div className="space-y-3 min-w-0">
            <div className="flex items-center gap-2 text-[#475467] dark:text-gray-300">
              <PiCubeLight className="text-[18px] shrink-0" />

              <span className="text-[15px] font-medium truncate">
                {estimatedBudget}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#475467] dark:text-gray-300">
              <HiOutlineUserGroup className="text-[18px] shrink-0" />

              <span className="text-[15px] font-medium line-clamp-1">
                {targetAudience}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <Link href={"/"} className="shrink-0">
            <button
              className="
        group/button
        h-[50px]
        px-5
        rounded-full
        border
        border-violet-200
        dark:border-violet-500/20
        bg-white
        dark:bg-white/5
        backdrop-blur-xl
        text-[#7C3AED]
        dark:text-violet-300
        font-semibold
        text-[14px]
        flex
        items-center
        gap-2
        transition-all
        duration-300
        hover:bg-violet-50
        dark:hover:bg-violet-500/10
        hover:border-violet-300
        dark:hover:border-violet-500/40
        hover:shadow-[0_8px_24px_rgba(124,58,237,0.12)]
      "
            >
              <span>View Details</span>

              <FiArrowRight
                className="
          text-[17px]
          transition-transform
          duration-300
          group-hover/button:translate-x-1
        "
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
