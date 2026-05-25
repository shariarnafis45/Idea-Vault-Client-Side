"use client";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Google = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-slate-700 dark:text-slate-200 shadow-sm cursor-pointer"
    >
      <FaGoogle className="text-xl" />
      Google
    </button>
  );
};

export default Google;
