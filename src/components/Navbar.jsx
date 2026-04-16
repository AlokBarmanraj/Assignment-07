"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiLineChart } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  const navLink = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "bg-[#244D3F] text-white font-bold rounded-lg" : "text-[#64748B] font-bold"}`}
        >
          <MdHome />Home
        </Link>
      </li>
      <li>
        <Link
          href="/timeline"
          className={`${pathName === "/timeline" ? "bg-[#244D3F] text-white font-bold rounded-lg" : "text-[#64748B] font-bold"}`}
        >
          <IoTimeOutline />Timeline
        </Link>
      </li>
      <li>
        <Link
          href="/stats"
          className={`${pathName === "/stats" ? "bg-[#244D3F] text-white font-bold rounded-lg" : "text-[#64748B] font-bold"}`}
        >
        <BiLineChart/>Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm top-0 sticky">
      <div className="navbar w-full lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>


          <Link href="/" className="font-bold text-2xl flex items-center">
            <span className="text-[#1F2937]">Keen</span>
            <span className="text-[#244D3F]">Keeper</span>
          </Link>
        </div>

        <div className="navbar-end gap-3">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
