"use client";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "@heroui/react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Browse Jobs", path: "/jobs" },
    { name: "Company", path: "/companies" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 ">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">

        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              <span className="text-blue-500">hire</span>
              <span className="text-orange-500">loop</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/auth/signin"
              className="text-violet-400 font-medium hover:text-violet-300"
            >
              Sign In
            </Link>

            <Button
              color="primary"
              radius="lg"
              className="bg-linear-to-r from-indigo-500 to-violet-600 px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/10 px-6 py-5">
            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-white/10" />

              <Link
                href="/login"
                className="text-violet-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>

              <Button
                color="primary"
                radius="lg"
                className="w-full bg-linear-to-r from-indigo-500 to-violet-600"
              >
                Get Started
              </Button>

            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;