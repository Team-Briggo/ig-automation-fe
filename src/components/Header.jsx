"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./ui/Button";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-6 left-1/2 z-50 p-2 w-full sm:w-max max-w-[calc(100%-0.8rem)] rounded-md shadow-md backdrop-blur-md transition-transform duration-700 -translate-x-1/2 sm:top-8 bg-white/80`}
    >
      <div className="flex gap-2 justify-between items-center w-full sm:gap-36">
        <div className="flex gap-2 items-center sm:gap-6">
          <img
            src="/logo.png"
            alt="Card Preview"
            className="object-contain pl-2 max-w-full min-w-[80px] h-8 cursor-pointer"
            onClick={() => router.push("/")}
          />

          <div className="w-[0.2px] h-8 bg-gray-400 hidden sm:flex" />
          <nav className="hidden sm:flex">
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  href="/pricing"
                  className="leading-tight text-black no-underline text-md hover:text-pepper/80"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Button always visible */}
        <div className="flex gap-2 items-center">
          <nav>
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  href="https://creator-app.briggo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-max text-sm leading-tight md:text-[1rem]">
                    Start Free
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger menu */}
          <button
            className="p-1 text-black rounded transition-colors sm:hidden hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="pt-2 mt-2 border-t border-gray-200 sm:hidden">
          <nav>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/pricing"
                  className="block px-3 py-2 leading-tight text-black no-underline rounded transition-colors text-md hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
