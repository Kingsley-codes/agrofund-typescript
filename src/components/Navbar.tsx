"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/opportunities", label: "Opportunities" },
    { href: "#", label: "How it works" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#eaf3e7] dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center pl-4 gap-2">
          <Link href="/" className="flex gap-3">
            <div className="md:h-9 md:w-9 w-8 h-8">
              <CldImage
                src="y3byxgonrtyk5ti1290h"
                alt="Agrofund Hub logo"
                width={36}
                height={36}
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-primary dark:text-white">
              Agrofund Hub
            </h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-base font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:flex h-10 items-center justify-center rounded-xl bg-primary/10 px-4 text-sm font-bold text-text-main dark:text-white hover:bg-primary/20 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="hidden md:flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-bold text-[#111b0d] hover:bg-[#3cd610] hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-text-main dark:text-white hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <GiCancel className="w-7 h-7 text-primary hover:cursor-pointer" />
            ) : (
              <IoMdMenu className="w-7 h-7 text-primary hover:cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed left-0 right-0 top-16 bottom-0 bg-black/50 z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-16 w-full bg-background-light/95 dark:bg-gray-900 shadow-lg z-50 animate-slideIn">
            <div className="flex flex-col p-4">
              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  className="py-3 px-4 text-base font-medium hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/login"
                  className="flex h-12 items-center justify-center rounded-xl bg-primary/10 text-base font-bold text-text-main dark:text-white hover:bg-primary/20 transition-colors"
                  onClick={closeMenu}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex h-12 items-center justify-center rounded-xl bg-primary text-base font-bold text-[#111b0d] hover:bg-[#3cd610] hover:shadow-lg hover:shadow-primary/20 transition-all"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
