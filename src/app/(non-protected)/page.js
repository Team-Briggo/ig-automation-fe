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
          {/* <Link
            href="https://creator-app.briggo.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 self-center"
          >
            <Button className="z-10 self-center px-8 py-3 w-max text-xl md:text-3xl">
              Get Started
            </Button>
          </Link> */}
          <div className="flex z-10 gap-4 justify-center items-center my-4 w-full text-center sm:gap-8">
            <Link
              href="https://apps.apple.com/in/app/briggo-creators/id6757666181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[180px]"
            >
              <button
                type="button"
                className="w-full px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  fill="#fff"
                  className="inline mr-2 shrink-0"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  />
                </svg>
                <div>
                  <p className="text-[10px] text-white leading-none text-left font-medium">
                    Download via
                  </p>
                  <p className="text-[14px] sm:text-[16px] text-left whitespace-nowrap">
                    App Store
                  </p>
                </div>
              </button>
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.briggoCreatorMobileApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[180px]"
            >
              <button
                type="button"
                className="w-full px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  fill="#fff"
                  className="inline mr-2 shrink-0"
                  viewBox="0 0 64 64"
                >
                  <path fill="#57cef3" d="M7 3v58l33-29z" />
                  <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                  <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                  <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                  <path
                    fill="#f33"
                    d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                  />
                  <path
                    fill="#0779e4"
                    d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                  />
                  <path
                    fill="#314a52"
                    d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                  />
                </svg>
                <div>
                  <p className="text-[10px] text-white leading-none text-left font-medium">
                    Get it on
                  </p>
                  <p className="text-[14px] sm:text-[16px] whitespace-nowrap">
                    Google Play
                  </p>
                </div>
              </button>
            </Link>
          </div>

          {/* <div className="flex z-10 gap-4 justify-center items-center my-4 w-full text-center sm:gap-8">
            <Link
              href="https://apps.apple.com/in/app/briggo-creators/id6757666181"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="w-fit px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  fill="#fff"
                  className="inline mr-2"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  />
                </svg>
                <div>
                  <p className="text-[10px] text-white leading-none text-left font-medium">
                    Download via
                  </p>
                  <p className="text-[14px] sm:text-[16px] text-left whitespace-nowrap">
                    App Store
                  </p>
                </div>
              </button>
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.briggoCreatorMobileApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="w-fit px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  fill="#fff"
                  className="inline mr-2"
                  viewBox="0 0 64 64"
                >
                  <path fill="#57cef3" d="M7 3v58l33-29z" />
                  <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                  <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                  <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                  <path
                    fill="#f33"
                    d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                  />
                  <path
                    fill="#0779e4"
                    d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                  />
                  <path
                    fill="#314a52"
                    d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                  />
                </svg>
                <div>
                  <p className="text-[10px] text-white leading-none text-left font-medium">
                    Get it on
                  </p>
                  <p className="text-[14px] sm:text-[16px] whitespace-nowrap">
                    Google Play
                  </p>
                </div>
              </button>
            </Link>
          </div> */}
          {/* <div className="flex z-10 gap-4 justify-center items-center mt-4 w-full text-center sm:gap-8">
            <button
              type="button"
              className="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 22.773 22.773"
              >
                <path
                  d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                  data-original="#000000"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left font-medium">
                  Download on the
                </p>
                <p className="text-[14px] sm:text-[16px] text-left">
                  App Store
                </p>
              </div>
            </button>

            <button
              type="button"
              className="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-pepper hover:bg-[#222]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#57cef3"
                  d="M7 3v58l33-29z"
                  data-original="#57cef3"
                />
                <path
                  fill="#fff200"
                  d="m36 32 8-10 15 10-15 10z"
                  data-original="#fff200"
                />
                <path
                  fill="#48ff48"
                  d="M36 32 7 3h4l34 20z"
                  data-original="#48ff48"
                />
                <path
                  fill="#ff6c58"
                  d="M36 32 7 61h4l34-20z"
                  data-original="#ff6c58"
                />
                <path
                  fill="#f33"
                  d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                  data-original="#ff3333"
                />
                <path
                  fill="#0779e4"
                  d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                  data-original="#0779e4"
                />
                <path
                  fill="#314a52"
                  d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                  data-original="#314a52"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left font-medium">
                  Get it on
                </p>
                <p className="text-[14px] sm:text-[16px]">Google Play</p>
              </div>
            </button>
          </div> */}

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
