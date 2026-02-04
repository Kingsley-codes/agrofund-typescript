"use client";

import {
  IoMdMenu,
  IoIosAdd,
  IoMdClose,
  IoIosNotifications,
} from "react-icons/io";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { TbCreditCardPay } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      icon: <MdDashboard />,
      label: "Dashboard",
      target: "/admin/dashboard",
    },
    {
      icon: <FaUsers />,
      label: "Users",
      target: "/admin/dashboard/users",
    },
    {
      icon: <PiPlantDuotone />,
      label: "Produce",
      target: "/admin/dashboard/produce",
    },
    {
      icon: <TbCreditCardPay />,
      label: "Payments",
      target: "/admin/dashboard/payments",
    },
    {
      icon: <FaMoneyBills />,
      label: "Withdrawals",
      target: "/admin/dashboard/withdrawals",
    },
  ];

  const bottomNavItems = [
    {
      icon: <IoSettingsOutline />,
      label: "Settings",
      target: "/admin/dashboard/settings",
    },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="h-30 sm:flex items-center justify-between px-6 lg:px-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f1a0c]/80 backdrop-blur-md z-30">
        <div className="flex sm:hidden pt-3 items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 w-full text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <IoMdMenu className="w-6 h-6" />
            )}
          </button>
          {/* Mobile Logo - Center aligned */}
          <div className="flex w-full pl-9 items-center gap-3 left-1/2 transform -translate-x-1/2">
            <div className="h-7 w-7">
              <CldImage
                src="y3byxgonrtyk5ti1290h"
                alt="Agrofund Hub logo"
                width={24}
                height={24}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight whitespace-nowrap">
                Agrofund Hub
              </h1>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Admin Portal
              </span>
            </div>
          </div>
          <div>
            <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors relative">
              <IoIosNotifications className="text-gray-700 h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-black"></span>
            </button>
          </div>
          {/* User Profile for Mobile Header - Right side */}{" "}
          {/* <div className="sm:hidden bg-blue-500 flex items-center gap-2"> <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7FVrX9bE3VIiPSKpwKwMA1j9VUCBGAQ15XMLyO9CKSo-miKnL8qxhtE-LV1SCiFnU26Z_5lUmFqZDJ5NjQg5NVUKpzV6TaJbPWoLM0oDf23Gx3qLVBr18OaB91BlSDXXQkGxHPHNr1JyVzLNa8lcCtaTPb1bY5PT8tKs75POUnYT94s7rCHL5O-LDtkx-NJ5Pd1t1JknEbmZFJVhGlEcQB7upkSE4G5QiurDv6yBuOUrXseuOCqPFWp6bmX2Vf_UeSgcc9IflJ6c'), }} aria-label="Admin user profile picture" /> </div> */}
        </div>

        <div className="flex sm:w-full items-center justify-between">
          <h2 className="text-xl pt-3 w-full text-center sm:text-left font-semibold tracking-tight text-slate-800 dark:text-white">
            Dashboard Overview
          </h2>

          <div className="flex items-center gap-4 lg:gap-8">
            {/* Search */}
            <div className="hidden relative md:flex items-center h-10 w-64 lg:w-80 bg-slate-100 dark:bg-white/5 rounded-xl px-8 border border-transparent focus-within:border-primary transition-colors">
              <input
                className="bg-transparent border-none mr-2 focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                placeholder="Search users, IDs..."
                type="text"
              />
              <FaSearch className="text-gray-700 absolute right-2.5 top-2.5" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden size-10 sm:flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors relative">
                <IoIosNotifications className="text-gray-700 h-5 w-5" />
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-black"></span>
              </button>

              <button className="hidden sm:flex h-10 px-4 items-center justify-center rounded-xl bg-primary text-gray-800 text-sm font-semibold hover:bg-primary-dark transition-colors gap-2 whitespace-nowrap">
                <IoIosAdd className="text-gray-700 h-5 w-5 shrink-0" />
                <span>New Produce</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside the header */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "bg-black/50 visible opacity-100"
            : "bg-transparent invisible opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Sidebar */}
        <aside
          className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#0f1a0c] border-r border-slate-200 dark:border-slate-800 z-30 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button at Top Right */}
          <div className="absolute right-3 top-3">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Logo Section */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pt-12">
            <div className="h-7 w-7">
              <CldImage
                src="y3byxgonrtyk5ti1290h"
                alt="Agrofund Hub logo"
                width={24}
                height={24}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight">
                Agrofund Hub
              </h1>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Admin Portal
              </span>
            </div>
          </div>

          <div className="flex flex-col pb-5 h-125 justify-between">
            {/* Mobile Navigation */}

            <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.target;
                return (
                  <Link
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-colors ${
                      isActive
                        ? "bg-primary text-black shadow-sm shadow-primary/30"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 group"
                    }`}
                    href={item.target}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`text-xl ${
                        isActive
                          ? ""
                          : "group-hover:text-primary transition-colors"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800">
              {bottomNavItems.map((item) => {
                const isActive = pathname === item.target;
                return (
                  <Link
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 group"
                    }`}
                    href={item.target}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`text-xl ${
                        isActive
                          ? "text-primary"
                          : "group-hover:text-primary transition-colors"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}

              {/* User Profile */}
              <div className="mt-4 flex items-center gap-3 px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-xl">
                <div
                  className="size-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7FVrX9bE3VIiPSKpwKwMA1j9VUCBGAQ15XMLyO9CKSo-miKnL8qxhtE-LV1SCiFnU26Z_5lUmFqZDJ5NjQg5NVUKpzV6TaJbPWoLM0oDf23Gx3qLVBr18OaB91BlSDXXQkGxHPHNr1JyVzLNa8lcCtaTPb1bY5PT8tKs75POUnYT94s7rCHL5O-LDtkx-NJ5Pd1t1JknEbmZFJVhGlEcQB7upkSE4G5QiurDv6yBuOUrXseuOCqPFWp6bmX2Vf_UeSgcc9IflJ6c')`,
                  }}
                  aria-label="Admin user profile picture showing a smiling man"
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold truncate">
                    Alex Morgan
                  </span>
                  <span className="text-xs text-slate-500 truncate">
                    Super Admin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
