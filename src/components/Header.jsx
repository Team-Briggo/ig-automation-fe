"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Header() {
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsHidden(true); // scrolling down → hide
      } else {
        setIsHidden(false); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed shadow-sm top-0 left-0 w-full bg-transparent backdrop-blur-md backdrop-saturate-150 p-6 transition-transform duration-700 z-50
      ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-12 items-center">
          <img
            src="/logo.png"
            alt="Card Preview"
            className="object-contain max-w-full h-8"
          />
          <nav className="hidden sm:flex">
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  href="#"
                  className="text-sm text-black no-underline hover:text-pepper/80"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black no-underline hover:text-pepper/80"
                >
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black no-underline hover:text-pepper/80"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black no-underline hover:text-pepper/80"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Button
                onClick={() => {
                  router.push("/auth/login");
                }}
                className="text-sm"
              >
                Sign in
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
