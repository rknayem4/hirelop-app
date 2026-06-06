"use client";

import { useState } from "react";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: session,
    isPending,
  } = authClient.useSession();

  const navLinks = [
    { name: "Browse Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "Pricing", path: "/pricing" },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-500">hire</span>
              <span className="text-orange-500">loop</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {isPending ? (
              <span className="text-sm text-gray-400">
                Loading...
              </span>
            ) : session ? (
              <>
                <span className="text-white font-medium">
                  {session.user?.name}
                </span>

                <Button
                  color="danger"
                  variant="flat"
                  onPress={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="font-medium text-violet-400 hover:text-violet-300"
                >
                  Sign In
                </Link>

                <Button
                  color="primary"
                  radius="lg"
                  className="bg-gradient-to-r from-indigo-500 to-violet-600"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiXMark size={28} />
            ) : (
              <HiBars3 size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/10 px-6 py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-white/10" />

              {isPending ? (
                <span className="text-gray-400">
                  Loading...
                </span>
              ) : session ? (
                <>
                  <span className="font-medium text-white">
                    {session.user?.name}
                  </span>

                  <Button
                    color="danger"
                    variant="flat"
                    onPress={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="font-medium text-violet-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>

                  <Button
                    color="primary"
                    radius="lg"
                    className="bg-gradient-to-r from-indigo-500 to-violet-600"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}