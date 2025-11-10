"use client";

import {
  ActivityIcon,
  Handshake,
  Hourglass,
  MessageSquareWarning,
  Users,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { GlowingEffect } from "./DisplayCards";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<MessageSquareWarning className="w-4 h-4" />}
        title="Drowning in DMs"
        description="You're drowning in unread DMs"
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Handshake className="w-4 h-4" />}
        title="Missing Opportunities"
        description="Missing potential collabs or sponsorships."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Hourglass className="w-4 h-4" />}
        title="Time Drain"
        description="Spending hours managing messages instead of creating."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<ActivityIcon className="w-4 h-4" />}
        title="Lost Engagement"
        description="Losing engagement because you can't reply fast enough."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Users className="w-4 h-4" />}
        title="Conversion"
        description="Struggling to turn followers into loyal fans or paying clients"
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={twMerge("list-none min-h-[14rem]", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="flex relative flex-col flex-1 gap-3 justify-between">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function ProblemSection() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <div className="inline-block mb-6">
          <span className="inline-block px-6 py-2 text-lg font-semibold bg-[linear-gradient(102.33deg,#1E4331_28.87%,#188DE7_97.15%)] text-transparent bg-clip-text rounded-full shadow-lg">
            Problem
          </span>
        </div>
        <h2 className="mb-4 text-4xl leading-tight sm:text-6xl">
          <span className="text-pepper">Creators are overwhelmed.</span>
        </h2>
        <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
          <span className="inline-block relative">
            <span className="relative z-10 leading-10 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-pepper">
              Briggo fixes that.
            </span>
            <span className="absolute left-0 bottom-2 w-full h-4 bg-yellow-200 transform -rotate-1 -z-10"></span>
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600">
          Stop letting inbox chaos hold you back from what really matters
        </p>
      </div>
      <GlowingEffectDemo />
    </div>
  );
}
