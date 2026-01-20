"use client";

import {
  DollarSign,
  Handshake,
  Hourglass,
  MessageSquareWarning,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t to-transparent opacity-0 transition duration-200 pointer-events-none group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b to-transparent opacity-0 transition duration-200 pointer-events-none group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 px-10 mb-4 text-neutral-600 dark:text-neutral-600">
        {icon}
      </div>
      <div className="relative z-10 px-10 mb-2 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 w-1 h-6 rounded-tr-full rounded-br-full transition-all duration-200 origin-center group-hover/feature:h-8 bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-pepper" />
        <span className="inline-block transition duration-200 group-hover/feature:translate-x-2 text-neutral-800">
          {title}
        </span>
      </div>
      <p className="relative z-10 px-10 max-w-xs text-sm text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default function ProblemSection() {
  const features = [
    {
      title: "Replying to the Same Questions",
      description:
        "Typing the same answers over and over when it could be automatic.",
      icon: <MessageSquareWarning />,
    },
    {
      title: "Missing Important DMs",
      description: "Lost deals and opportunities buried in your inbox.",
      icon: <Handshake />,
    },
    {
      title: "Paying for Unused Features",
      description: "Monthly fees for tools you barely use anymore.",
      icon: <DollarSign />,
    },
    {
      title: "Slow to Respond",
      description: "People waiting days for replies you meant to send.",
      icon: <Hourglass />,
    },
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <div className="inline-block mb-6">
          <span className="inline-block z-10 px-6 py-2 text-lg font-semibold text-transparent bg-clip-text rounded-full border shadow-sm bg-pepper border-border">
            Problem
          </span>
        </div>
        <h2 className="mb-4 text-4xl leading-tight sm:text-6xl">
          <span className="text-pepper">Creators are overwhelmed.</span>
        </h2>
        <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
          <span className="inline-block relative">
            <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
              Why?
            </span>
            <span className="absolute left-0 bottom-2 w-full h-4 bg-yellow-200 transform -rotate-1 -z-10"></span>
          </span>
        </h2>
      </div>

      <div className="grid relative z-10 grid-cols-1 py-4 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}
