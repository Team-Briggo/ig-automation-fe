"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className={`fixed top-6 left-1/2 z-50 p-2 w-max max-w-[calc(100%-0.8rem)] rounded-md shadow-md backdrop-blur-md transition-transform duration-700 -translate-x-1/2 sm:top-8 bg-white/80`}
    >
      <div className="flex gap-36 justify-between items-center w-full">
        <div className="flex gap-6 items-center">
          <img
            src="/logo.png"
            alt="Card Preview"
            className="object-contain pl-2 max-w-full min-w-[80px] h-8 cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="w-[0.2px] h-8 bg-gray-400 hidden sm:flex" />
          <nav className="hidden sm:flex">
            <ul className="flex gap-4 items-center">
              {/* <li>
                <Link
                  href="#"
                  className="leading-tight text-black no-underline text-md hover:text-pepper/80"
                >
                  About
                </Link>
              </li> */}
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
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                href="https://apps.apple.com/in/app/briggo-creators/id6757666181"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-max text-sm leading-tight md:text-[1rem]">
                  Start For Free
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
