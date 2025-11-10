"use client";

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
        className
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

export default function SolutionSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="absolute top-16 z-20 mb-6 bg-white">
        <span className="inline-block px-6 py-2 text-lg font-semibold rounded-full shadow-lg text-pepper">
          Solution
        </span>
      </div>
      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="inline-block relative">
              <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
                Set it once
              </span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-red-200 transform -rotate-1 -z-10"></span>
            </span>
          </h2>
          <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="inline-block relative">
              <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
                Let Briggo do the rest.
              </span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-indigo-200 transform -rotate-1 -z-10"></span>
            </span>
          </h2>
        </div>
        <DotPattern
          className={twMerge(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}
