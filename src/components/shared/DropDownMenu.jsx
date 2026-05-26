"use client";

import { Avatar, Button } from "@heroui/react";
import { ChevronDown, LogOut } from "lucide-react";

import NavLinkItem from "./NavLink";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DropDownMenu = ({ user, privateLinks }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success(`Logout Successfull`);
    router.refresh();
  };
  return (
    <div className="dropdown dropdown-end">
      {/* Trigger */}
      <div
        tabIndex={0}
        role="button"
        className="
          flex items-center gap-2.5
          rounded-2xl
          border border-black/[0.06]
          bg-white/75
          px-2.5 py-2
          shadow-[0_6px_30px_rgba(0,0,0,0.05)]
          backdrop-blur-xl
          transition-all duration-300
          hover:border-[#7C5CFF]/20
          hover:shadow-[0_10px_40px_rgba(124,92,255,0.10)]
          dark:border-white/[0.08]
          dark:bg-white/[0.03]
        "
      >
        {/* Avatar */}
        <Avatar
          className="
            h-10 w-10
            ring-2 ring-white
            dark:ring-[#111827]
          "
        >
          <Avatar.Image alt={user?.name} src={user?.image} />

          <Avatar.Fallback
            className="
              bg-gradient-to-br
              from-[#7C5CFF]
              to-[#9F7AEA]
              text-sm font-semibold text-white
            "
          >
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        {/* User Info */}
        <div className="hidden text-left sm:block">
          <h4
            className="
              max-w-[110px] truncate
              text-[13px] font-semibold
              text-[#111827]
              dark:text-white
            "
          >
            {user?.name}
          </h4>

          <p
            className="
              text-[11px]
              text-gray-500
              dark:text-gray-400
            "
          >
            Idea Creator
          </p>
        </div>

        {/* Arrow */}
        <div
          className="
            flex h-8 w-8 items-center justify-center
            rounded-xl
            bg-black/[0.03]
            text-gray-500
            transition-colors duration-300
            hover:bg-[#7C5CFF]/10
            hover:text-[#7C5CFF]
            dark:bg-white/[0.04]
            dark:text-gray-300
          "
        >
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Dropdown Content */}
      <ul
        tabIndex={0}
        className="
          menu dropdown-content
          z-[999]
          mt-3 w-64
          rounded-2xl
          border border-black/[0.06]
          bg-white/92
          p-2
          shadow-[0_20px_70px_rgba(0,0,0,0.12)]
          backdrop-blur-2xl
          dark:border-white/[0.08]
          dark:bg-[#0F172A]/95
        "
      >
        {/* User Section */}
        <div
          className="
            mb-2 flex items-center gap-3
            rounded-2xl
            border border-black/[0.04]
            bg-[#F8F7FF]
            p-3
            dark:border-white/[0.05]
            dark:bg-white/[0.03]
          "
        >
          <Avatar className="h-11 w-11">
            <Avatar.Image alt={user?.name} src={user?.image} />

            <Avatar.Fallback
              className="
                bg-gradient-to-br
                from-[#7C5CFF]
                to-[#9F7AEA]
                text-white
              "
            >
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>

          <div className="overflow-hidden">
            <h3
              className="
                truncate
                text-sm font-semibold
                text-[#111827]
                dark:text-white
              "
            >
              {user?.name}
            </h3>

            <p
              className="
                truncate
                text-xs
                text-gray-500
                dark:text-gray-400
              "
            >
              {user?.email}
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="space-y-1">
          {privateLinks.map((link, i) => (
            <NavLinkItem key={i} path={link.path}>
              
                {link.pathName}
              
            </NavLinkItem>
          ))}
        </div>

        {/* Divider */}
        <div className="my-2 h-px bg-black/[0.05] dark:bg-white/[0.06]" />

        {/* Logout */}
        <Button
          onClick={handleLogout}
          className="
            h-10 w-full
            rounded-xl
            border-0
            bg-red-500/8
            text-[13px] font-semibold
            text-red-500
            transition-all duration-300
            hover:bg-red-500
            hover:text-white
          "
        >
          <LogOut size={15} />
          Logout
        </Button>
      </ul>
    </div>
  );
};

export default DropDownMenu;
