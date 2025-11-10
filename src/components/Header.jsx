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
    // ${isHidden ? "-translate-y-full" : "translate-y-0"}
    <header
      className={`fixed top-6 left-1/2 z-50 p-2 px-4 w-max rounded-md shadow-md backdrop-blur-md transition-transform duration-700 -translate-x-1/2 sm:top-8 bg-white/90`}
    >
      <div className="flex gap-36 justify-between items-center w-full">
        <div className="flex gap-6 items-center">
          <img
            src="/logo.png"
            alt="Card Preview"
            className="object-contain max-w-full h-8"
          />
          <div className="w-[0.2px] h-8 bg-gray-400 hidden sm:flex" />
          <nav className="hidden sm:flex">
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  href="#"
                  className="text-black no-underline text-md hover:text-pepper/80"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-black no-underline text-md hover:text-pepper/80"
                >
                  Pricing
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
                className="text-md"
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
