"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a0f] text-gray-300">
      {/* CTA */}
      <div className="w-full mx-auto text-center border-white/10 text-white border-b pb-16">
        <h2 className="font-semibold text-gray-200 text-2xl md:text-3xl lg:text-4xl pb-7 pt-16 px-4">
          Interested in farming but never had the land, or time?
        </h2>
        <p className="text-gray-400 mb-8 md:text-sm w-1/2 mx-auto">
          Join thousands of remote farmers like you on Agrofund Hub. You decide
          what to farm and how many units to cultivate. We handle the producers,
          monitoring, and harvest while you choose whether to collect the
          produce or cash out.
        </p>

        <button>
          <Link
            href="/signup"
            className="text-xs text-gray-800 md:text-sm font-bold bg-primary px-6 py-3 rounded-lg hover:bg-[#3cd610] transition-colors"
          >
            Create Free Account
          </Link>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-5 h-5 rounded-full">
                <CldImage
                  src="y3byxgonrtyk5ti1290h"
                  alt="Agrofund Hub logo"
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-semibold text-white">Agrofund Hub</span>
            </div>
            <p className="text-sm text-gray-400">
              Own the harvest without owning the land. Farm remotely, harvest
              physically, or sell for profit.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/risk-disclosure">Risk Disclosure</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AgrofundHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
