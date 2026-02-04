"use client";

import { CldImage } from "next-cloudinary";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { TbCreditCardPay } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
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

  return (
    <>
      {/* Desktop Sidebar - only visible on large screens and above */}
      <aside className="hidden lg:flex flex-col h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f1a0c] w-64">
        {/* Logo Section */}
        <div className="p-6 flex items-center gap-3">
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

        {/* Navigation */}
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
              >
                <span
                  className={`text-xl ${
                    isActive ? "" : "group-hover:text-primary transition-colors"
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
              <span className="text-sm font-bold truncate">Alex Morgan</span>
              <span className="text-xs text-slate-500 truncate">
                Super Admin
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
