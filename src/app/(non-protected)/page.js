"use client";

import { AnimatedGridPattern } from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center px-2 min-h-screen bg-salt">
      <div className="flex relative justify-center items-center h-full min-h-[60vh] shrink-0 mb-36">
        <div className="flex flex-col gap-1">
          <p className="z-10 text-3xl font-medium tracking-tighter text-center text-black whitespace-pre-wrap dark:text-white">
            Automate Your Instagram DMs.
          </p>
          <p className="z-10 text-6xl font-medium text-center text-black whitespace-pre-wrap dark:text-white">
            Boost Your Growth Effortlessly.
          </p>
        </div>
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={twMerge(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      <ProblemSection />
      <SolutionSection />

      {/* <img src="/images/meta_logo.webp" alt="Logo" /> */}

      {/* <HeroSection /> */}
      {/* <section className="max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Salt & Pepper App</h1>
        <p className="mb-6 text-lg text-muted">
          Classic UI, minimal Amplify v6 auth demo.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/register" className="px-4 py-2 rounded-md border">
            Get started
          </Link>
          <Link href="/auth/login" className="px-4 py-2 rounded-md border">
            Sign in
          </Link>
        </div>
      </section> */}
    </main>
  );
}
