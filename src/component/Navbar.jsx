"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Cars",
      link: "/cars",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <div className=" cursor-pointer">
              <h2 className="text-xl font-extrabold tracking-tight">
                <span className="text-primary">Go</span>Rent
              </h2>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8">
              {menu.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href={"/login"} className="btn btn-primary">
                Sign In
              </Link>
              {/* <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Register
              </button> */}
            </div>

            {/* MOBILE HAMBURGER */}
            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <span className="material-symbols-outlined">
                <FaBars size={20} />
              </span>
            </button>
          </div>
        </Container>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-base-200 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h3 className="font-bold text-lg">Menu</h3>
          <button onClick={() => setOpen(false)}>
            <span className="material-symbols-outlined">
              <FaXmark size={20} />
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}

          <hr />

          <Link href={"/login"} className="btn btn-primary">
            Sign In
          </Link>
          {/* <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg">
            Register
          </button> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
