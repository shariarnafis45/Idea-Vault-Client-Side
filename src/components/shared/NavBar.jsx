import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";

import { Button } from "@heroui/react";
import { SlLogin } from "react-icons/sl";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import NavLinkItem from "@/components/shared/NavLink";
import { ThemeSwitch } from "./ThemeSwitch";

const NavBar = () => {
  const publicLinks = [
    { path: "/", pathName: "Home" },
    { path: "/ideas", pathName: "Ideas" },
    { path: "/add-idea", pathName: "Add Idea" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-white/75
        backdrop-blur-2xl
        dark:bg-[#050816]/80
        
      "
    >
      {/* top glow */}
      <div
        className="
          absolute inset-x-0 top-0 h-[1px]
          bg-gradient-to-r from-transparent via-[#6D5EF5] to-transparent
          opacity-60
        "
      />

      <div className="navbar max-w-7xl mx-auto h-[78px] px-4 lg:px-6">
        {/* LEFT */}
        <div className="navbar-start gap-3">
          {/* mobile menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-black/5
                bg-white/70
                text-gray-700
                shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                transition-all duration-300
                hover:border-[#6D5EF5]/30
                hover:bg-[#6D5EF5]/5
                hover:text-[#6D5EF5]
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-200
              "
            >
              <HiOutlineMenuAlt3 size={20} />
            </div>

            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                mt-4 w-64 space-y-1
                rounded-2xl
                border border-white/10
                bg-white/90 p-3
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                backdrop-blur-2xl
                dark:bg-[#0B1120]/95
              "
            >
              {publicLinks.map((link, i) => (
                <NavLinkItem key={i} path={link.path}>
                  {link.pathName}
                </NavLinkItem>
              ))}
            </ul>
          </div>

          {/* logo */}
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

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className="
              flex items-center gap-1.5
              rounded-full
              border border-black/5
              bg-white/65
              px-2 py-2
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
            "
          >
            {publicLinks.map((link, i) => (
              <NavLinkItem key={i} path={link.path}>
                {link.pathName}
              </NavLinkItem>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          
          <ThemeSwitch />
          <Link href="/login">
            <Button
              className="
                group relative h-11 overflow-hidden
                rounded-full border-0 px-5
                bg-[#0F172A]
                text-white
                shadow-[0_10px_30px_rgba(109,94,245,0.25)]
                transition-all duration-300
                hover:scale-[1.02]
                dark:bg-white dark:text-black
              "
            >
              {/* gradient hover */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#6D5EF5]
                  to-[#4FD1C5]
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative flex items-center gap-2">
                <SlLogin size={16} />
                <span className="text-sm font-semibold tracking-wide">
                  Login
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
