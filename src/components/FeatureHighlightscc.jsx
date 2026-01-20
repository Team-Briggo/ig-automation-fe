"use client";

import {
  Check,
  Link2,
  MessageSquare,
  RefreshCw,
  Rocket,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { GlowingEffect } from "./DisplayCards";

const features = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Smart DM Automation",
    description: "Automatically reply to followers, leads, and fans.",
    color: "bg-blue-100",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Personalized Responses",
    description: "Add custom names, emojis, and tones that match your style.",
    color: "bg-purple-100",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Campaign Builder",
    description: "Schedule and launch DM sequences that drive engagement.",
    color: "bg-pink-100",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Auto Follow-ups",
    description:
      "Nurture leads with smart reminders and time-based follow-ups.",
    color: "bg-green-100",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Growth Analytics",
    description:
      "Track conversions, engagement rate, and campaign performance.",
    color: "bg-orange-100",
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Instagram API Integration",
    description: "100% secure and compliant with Instagram Business APIs.",
    color: "bg-indigo-100",
  },
];

const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
        <div className={twMerge("p-3 rounded-lg w-fit", color)}>{icon}</div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-foreground md:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FeatureHighlights() {
  return (
    <div className="relative z-10 px-4 mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <div className="inline-block mb-10">
          <span className="inline-block px-6 py-2 text-lg font-semibold text-transparent bg-clip-text rounded-full border shadow-sm bg-pepper">
            Feature Highlights
          </span>
        </div>
        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          <span className="inline-block relative">
            <span className="relative z-10 leading-tight text-transparent bg-clip-text bg-pepper/90">
              Why creators love Briggo
            </span>
            <span className="absolute left-0 bottom-2 w-full h-5 transform -rotate-1 bg-stone-300 -z-10"></span>
          </span>
        </h2>
        <Feature />
        {/* <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-[4rem] max-w-4xl mx-auto">
          <span className="inline-block relative">
            <span className="relative z-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-pepper">
              Why creators love Briggo
            </span>

            <svg
              className="absolute left-0 -bottom-2 w-full h-4 text-indigo-200 dark:text-indigo-900"
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
        </h2> */}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="min-h-[14rem]">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="py-20 w-full lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-start py-20 lg:py-40">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl tracking-tighter md:text-5xl lg:max-w-xl font-regular">
              Something new!
            </h2>
            <p className="max-w-xl text-lg tracking-tight leading-relaxed lg:max-w-xl text-muted-foreground">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="flex flex-col gap-10 pt-12 w-full">
            <div className="grid grid-cols-2 gap-10 items-start lg:grid-cols-3">
              <div className="flex flex-row gap-6 items-start w-full">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Smart DM Automation</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically reply to followers, leads, and fans.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Fast and reliable</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve made it fast and reliable.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Beautiful and modern</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve made it beautiful and modern.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start w-full">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy to use</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve made it easy to use and understand.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Fast and reliable</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve made it fast and reliable.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Beautiful and modern</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve made it beautiful and modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
