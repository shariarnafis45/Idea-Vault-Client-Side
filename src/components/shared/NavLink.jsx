'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinkItem = ({ children, path }) => {
  const pathName = usePathname();
  
  return (
    <li className={`${path === pathName ? "bg-[#6D5EF5] rounded-full text-white" : ""} py-1 px-2 text-[0.8rem] `}>
      <Link href={path}>{children}</Link>
    </li>
  );
};

export default NavLinkItem;
