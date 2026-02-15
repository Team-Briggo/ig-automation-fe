"use client";

import CreditsPromoSection from "@/components/CreditsPromoSection";
import FAQSection from "@/components/FAQSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import { AnimatedGridPattern } from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import SolutionSection from "@/components/SolutionSection";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 justify-center items-center px-2 min-h-screen bg-salt">
      <div className="flex relative justify-center items-center h-full min-h-[60vh] shrink-0 mb-24">
        <div className="flex flex-col gap-1">
          <p className="z-10 text-3xl font-medium text-center text-black whitespace-pre-wrap md:text-6xl">
            Real results, powered by smart automation.
          </p>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                <span className="inline-block relative">
                  <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
                    Pay only for impact
                  </span>
                  <span className="absolute left-0 bottom-2 w-full h-4 bg-green-200 transform -rotate-1 -z-10"></span>
                </span>
              </h2>
            </div>
          </div>

          <Link
            href="https://creator-app.briggo.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 self-center"
          >
            <Button className="z-10 self-center px-8 py-3 w-max text-xl md:text-3xl">
              Get Started
            </Button>
          </Link>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight">
            <span className="inline-block relative">
              <span className="relative z-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-pepper">
                With 1,000 FREE Tokens
              </span>
              {/* Underline decoration */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-4 text-orange-600"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 3 100 1 150 2C200 3 250 5 298 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <div className="flex z-10 flex-col gap-1 items-center mt-20">
            <p className="text-lg text-gray-600">Approved by</p>
            <img
              src="/images/meta.png"
              alt="Meta Logo"
              width={150}
              height={60}
              className="object-contain"
            />{" "}
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={twMerge(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />

      <CreditsPromoSection />
      <FeatureHighlights />

      <FAQSection />
    </main>
  );
}
