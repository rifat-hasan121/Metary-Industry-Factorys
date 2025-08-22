import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = (
    <>
      <li>
        {" "}
        <a href="">HOME</a>
      </li>
      <li>
        <a href="">SERVICES</a>
      </li>
      <li>
        <a href="">PAGES</a>
      </li>
      <li>
        <a href="">CONTACT</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <button className="flex justify-center items-center text-xl">
          <Image src={"/logo.png"} width={80} height={80} />
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold color-primary">
              METARY
            </span>
            <span className="text-xl md:text-2xl font-bold">SPECIALIST</span>
          </div>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <Link href="/register">
          <button className="btn bg-[#fc5220] rounded-xl text-white text-md md:text-lg ">
            Sign In
            </button>
          </Link>
          <Link href="/login">
          <button className="btn bg-[#fc5220] rounded-xl text-white text-md md:text-lg ">
            LogIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
