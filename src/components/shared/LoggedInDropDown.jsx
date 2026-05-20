import { Avatar } from "@heroui/react";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

export function UserDropdown() {
  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="
          flex items-center gap-2
          rounded-full
          border border-black/5 dark:border-white/10
          bg-white/70 dark:bg-white/5
          px-2 py-1.5
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-md
        "
      >
        <Avatar>
          <Avatar.Image
            alt="User"
            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            className="h-8 w-8 rounded-full"
          />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar>

        <FaAngleDown size={14} className="text-gray-500" />
      </button>

      {/* Dropdown */}
      <div
        className="
          absolute right-0 mt-3 w-56
          rounded-2xl border border-black/5
          bg-white/95 p-2 shadow-xl
          backdrop-blur-2xl
          dark:border-white/10 dark:bg-[#0B1120]/95
          z-50
        "
      >
        <DropdownItem href="/profile">Profile</DropdownItem>
        <DropdownItem href="/my-ideas">My Ideas</DropdownItem>
        <DropdownItem href="/my-interactions">My Interactions</DropdownItem>

        <hr className="my-2 border-black/5 dark:border-white/10" />

        <DropdownItem href="/settings">Settings</DropdownItem>

        <button
          className="
            w-full rounded-xl px-3 py-2 text-left
            text-sm font-medium text-red-500
            hover:bg-red-500/10
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

/* reusable item */
function DropdownItem({ href, children }) {
  return (
    <Link
      href={href}
      className="
        block rounded-xl px-3 py-2
        text-sm font-medium
        text-gray-700 dark:text-gray-200
        hover:bg-[#6D5EF5]/10
        hover:text-[#6D5EF5]
        transition
      "
    >
      {children}
    </Link>
  );
}