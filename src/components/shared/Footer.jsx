import Link from "next/link";
import Logo from "@/assets/logo.png";

import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { RiSendPlaneLine, RiBookOpenLine } from "react-icons/ri";

import { BsBriefcase, BsPeople, BsHeartFill } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f6f3ff] dark:bg-[#050816] px-4 pb-10 pt-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 bg-white dark:bg-[#060B2D] px-6 py-14 shadow-[0_10px_60px_rgba(15,23,42,0.06)] dark:shadow-[0_20px_80px_rgba(2,6,23,0.45)] md:px-10 lg:px-14">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.18),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.22),transparent_28%)]" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7c5cff]/10 blur-[120px]" />

          {/* Main Grid */}
          <div className="relative grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
            {/* Left */}
            <div>
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src={Logo}
                  width={132}
                  height={40}
                  priority
                  alt="Idea Vault Logo"
                  className="relative w-auto h-auto object-contain"
                />
              </Link>

              {/* Description */}
              <p className="mt-8 max-w-sm text-[16px] leading-8 text-slate-600 dark:text-[#b5bdd8]">
                A community-driven platform to share ideas, get feedback, and
                build impactful solutions together.
              </p>

              {/* Newsletter */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c5cff]">
                  Stay In The Loop
                </p>

                <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-500 dark:text-[#aeb6d2]">
                  Subscribe to our newsletter for the latest updates and
                  trending ideas.
                </p>

                {/* Input */}
                <div className="mt-6 flex h-14 overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-xl">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent px-5 text-sm text-[#111827] outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-[#9ea4c5]"
                  />

                  <button className="flex aspect-square h-full items-center justify-center bg-gradient-to-r from-[#7c5cff] to-[#8b5cf6] text-white transition-all duration-300 hover:brightness-110">
                    <RiSendPlaneLine className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="#"
                  className="flex size-12 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 hover:text-[#7c5cff]"
                >
                  <FiGithub className="text-lg" />
                </Link>

                <Link
                  href="#"
                  className="flex size-12 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 hover:text-[#7c5cff]"
                >
                  <FiTwitter className="text-lg" />
                </Link>

                <Link
                  href="#"
                  className="flex size-12 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 hover:text-[#7c5cff]"
                >
                  <FiInstagram className="text-lg" />
                </Link>

                <Link
                  href="#"
                  className="flex size-12 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-slate-700 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 hover:text-[#7c5cff]"
                >
                  <BsPeople className="text-lg" />
                </Link>
              </div>
            </div>

            {/* Platform */}
            <div>
              <div className="flex items-center gap-2 text-[#7c5cff]">
                <BsPeople className="text-lg" />

                <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
                  Platform
                </h3>
              </div>

              <ul className="mt-10 space-y-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/ideas">Ideas</Link>
                </li>
                <li>
                  <Link href="/">Trending Ideas</Link>
                </li>
                <li>
                  <Link href="/">Categories</Link>
                </li>
                <li>
                  <Link href="/">How It Works</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2 text-[#7c5cff]">
                <RiBookOpenLine className="text-lg" />

                <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
                  Resources
                </h3>
              </div>

              <ul className="mt-10 space-y-5">
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Guides</Link>
                </li>
                <li>
                  <Link href="/">Help Center</Link>
                </li>
                <li>
                  <Link href="/">Community</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="flex items-center gap-2 text-[#7c5cff]">
                <BsBriefcase className="text-lg" />

                <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
                  Company
                </h3>
              </div>

              <ul className="mt-10 space-y-5">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Our Mission</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 text-[#7c5cff]">
                <HiOutlineMail className="text-lg" />

                <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
                  Contact Us
                </h3>
              </div>

              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-[#7c5cff]">
                    <HiOutlineMail className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-[#9ea4c5]">
                      Email
                    </p>

                    <p className="mt-1 text-[16px] text-slate-700 dark:text-[#e4e8f8]">
                      support@ideavault.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-[#7c5cff]">
                    <HiOutlinePhone className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-[#9ea4c5]">
                      Phone
                    </p>

                    <p className="mt-1 text-[16px] text-slate-700 dark:text-[#e4e8f8]">
                      +880 188777655
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-[#7c5cff]">
                    <HiOutlineLocationMarker className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-[#9ea4c5]">
                      Address
                    </p>

                    <p className="mt-1 leading-7 text-[16px] text-slate-700 dark:text-[#e4e8f8]">
                      Feni, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative mt-16 flex flex-col gap-5 border-t border-black/5 dark:border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-slate-500 dark:text-[#aeb6d2]">
              © 2026{" "}
              <span className="font-semibold text-[#7c5cff]">IdeaVault</span>.
              All rights reserved.Developed By <Link href={'/'} className="font-semibold text-[#7c5cff]">Nafis Shah</Link>
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-[#aeb6d2]">
              <BsHeartFill className="text-[#7c5cff]" />

              <span>Built with passion for innovators around the world.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
