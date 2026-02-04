"use client";

import { Bolt, Crosshairs, MoneyBill, Msgs } from "nucleo-glass-icons/react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={twMerge(
        "absolute inset-0 w-full h-full pointer-events-none fill-neutral-400/80",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

const cardContents = [
  {
    icon: Msgs,
    title: "AI Handles Repetitive Replies",
    description:
      "Smart automation responds to common questions instantly, freeing your time.",
  },
  {
    icon: Crosshairs,
    title: "Never Miss Important Messages",
    description:
      "Priority inbox highlights what matters, surfaces opportunities automatically.",
  },
  {
    icon: MoneyBill,
    title: "Pay Only for What You Use",
    description:
      "Simple pricing that scales with you, no wasted subscriptions.",
  },
  {
    icon: Bolt,
    title: "Instant Response Times",
    description:
      "Automated replies keep conversations moving while you focus on creating.",
  },
];

const PlusCard = ({ className = "", icon: Icon, title, description }) => {
  return (
    <div
      className={twMerge(
        "relative p-6 bg-white rounded-lg border border-dashed border-zinc-400 min-h-[200px]",
        "flex flex-col justify-between",
        className,
      )}
    >
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold text-gray-900">
          {Icon && (
            <div className="mb-3">
              <Icon className="w-8 h-8 text-pepper" />
            </div>
          )}
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

function FeatureCards() {
  return (
    <section className="bg-white border border-gray-200 dark:bg-black dark:bg-transparent dark:border-gray-800">
      <div className="container px-4 py-12 mx-auto border border-t-0 border-gray-200 dark:border-gray-800">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <PlusCard
            {...cardContents[0]}
            className="lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[1]}
            className="lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[2]}
            className="lg:col-span-4 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[3]}
            className="lg:col-span-2 lg:row-span-1"
          />
        </div>
      </div>
    </section>
  );
}

export default function SolutionSection() {
  return (
    <div className="overflow-hidden relative py-6 w-full bg-background">
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="inline-block mb-6">
            <span className="inline-block z-10 px-6 py-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r to-gray-700 rounded-full border shadow-sm from-pepper border-border">
              Solution
            </span>
          </div>
          <h2 className="mb-4 text-4xl leading-tight sm:text-6xl">
            <span className="text-pepper">We built the answer.</span>
          </h2>
          <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="inline-block relative">
              <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
                How?
              </span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-green-200 transform rotate-1 dark:bg-green-900/30 -z-10"></span>
            </span>
          </h2>
        </div>
      </div>

      <DotPattern
        className={twMerge(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "opacity-40 dark:opacity-20",
        )}
      />
      <FeatureCards />
    </div>
  );
}
