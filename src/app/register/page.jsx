import Image from "next/image";
import Link from "next/link";
import Element from "@/assets/login.png";
import Logo from "@/assets/logo.png";
import { FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FiArrowRight, FiEye, FiLock, FiMail } from "react-icons/fi";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f2ff] dark:bg-[#070b17] transition-colors duration-300 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-10 md:py-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(124,58,237,0.15)] bg-white dark:bg-[#0b1120] border border-white/20 dark:border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative hidden lg:flex bg-[#060b1d] overflow-hidden flex-col justify-between p-8 xl:p-12 min-h-full">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.35),transparent_45%)]" />

            {/* Dots */}
            <div className="absolute right-10 top-40 opacity-20">
              <div className="grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                  <span
                    key={i}
                    className="h-[2px] w-[2px] rounded-full bg-violet-400"
                  />
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="relative z-10">
              <Link
                href="/"
                className="
              relative flex items-center
              transition-all duration-300
              hover:opacity-90
            "
              >
                <div
                  className="
                absolute -inset-2 rounded-full
                bg-[#6D5EF5]/10 blur-2xl
              "
                />

                <Image
                  src={Logo}
                  width={132}
                  height={40}
                  priority
                  alt="Idea Vault Logo"
                  className="relative w-auto h-auto object-contain"
                />
              </Link>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-20">
              <h2 className="text-5xl font-black leading-tight text-white">
                Join <span className="text-violet-500">IdeaVault</span><br />
                and bring your ideas to life
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300 max-w-md">
                Connect with a community of innovators, get feedback and build impactfull solutions together.
              </p>
            </div>
            {/* Illustration */}
            <div className="relative z-10 mt-16 flex justify-center">
              <div className="relative w-full max-w-[420px] h-[420px]">
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-violet-600/30 blur-3xl rounded-full" />
                <Image
                  src={Element}
                  width={900}
                  height={900}
                  alt="Element"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white dark:bg-[#0b1120] px-6 sm:px-10 lg:px-16 py-10 lg:py-14 flex flex-col justify-between">
            {/* Top Link */}
            <div className="flex justify-center lg:justify-end">
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                Already have an account ?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-violet-600 hover:text-violet-500 transition-colors"
                >
                  LogIn
                </Link>
              </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-xl mx-auto mt-10 lg:mt-0">
              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                  Create your account
                </h2>

                <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                  Start your journey with IdeaVault
                </p>
              </div>

              {/* FORM */}
              <div className="mt-10">
                <RegisterForm />
              </div>

              {/* Social Divider */}
              <div className="flex items-center gap-4 my-10">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />

                <span className="text-sm text-slate-400 whitespace-nowrap">
                  or continue with
                </span>

                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Social Buttons */}

              <button className="w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-slate-700 dark:text-slate-200 shadow-sm">
                <FaGoogle className="text-xl" />
                Google
              </button>

              {/* Bottom Note */}
              <div className="mt-10 flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                <FiLock className="mt-0.5 text-base" />

                <p>
                  Your data is{" "}
                  <span className="text-violet-600 font-medium">secure</span>{" "}
                  with us. We never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
