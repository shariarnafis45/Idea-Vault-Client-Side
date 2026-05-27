"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logout Successful");
    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="relative z-10 flex w-full items-center justify-between"
    >
      <div className="flex items-center gap-5">
        {/* icon */}
        <div
          className="
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            border border-red-200/70
            dark:border-red-500/10
            bg-white/80 dark:bg-red-500/10
            text-red-500
            shadow-md shadow-red-500/5
            transition-all duration-300
            group-hover:bg-red-500
            group-hover:text-white
          "
        >
          <LogOut size={28} />
        </div>

        {/* text */}
        <div className="text-left">
          <h4
            className="
              text-[28px]
              font-black
              tracking-[-0.03em]
              text-red-500
            "
          >
            Logout
          </h4>

          <p
            className="
              mt-1
              text-sm
              text-red-500/70
              dark:text-red-200/70
            "
          >
            Securely sign out from your account
          </p>
        </div>
      </div>

      {/* arrow */}
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-full
          bg-white/80 dark:bg-white/[0.04]
          text-red-500
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:bg-red-500
          group-hover:text-white
        "
      >
        <ArrowRight size={22} />
      </div>
    </button>
  );
};

export default LogoutButton;
