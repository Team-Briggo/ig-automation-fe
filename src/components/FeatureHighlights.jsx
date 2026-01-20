"use client";

import {
  ActivityIcon,
  BotIcon,
  Handshake,
  Hourglass,
  InstagramIcon,
  MessageSquareWarning,
  SparkleIcon,
  Users,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { GlowingEffect } from "./DisplayCards";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<BotIcon className="w-4 h-4" />}
        title="Smart DM Automation"
        description="Automatically reply to followers, leads, and fans."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<SparkleIcon className="w-4 h-4" />}
        title="Personalized Responses"
        description="Add custom names, emojis, and tones that match your style."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<InstagramIcon className="w-4 h-4" />}
        title="Instagram API Integration"
        description="100% secure and compliant with Instagram Business APIs."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<ActivityIcon className="w-4 h-4" />}
        title="Better for Casual or Seasonal Creators"
        description="If you post inconsistently or engagement fluctuates, you’re not locked into a monthly fee. You use your tokens only when needed."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Users className="w-4 h-4" />}
        title="Lower Barrier to Entry"
        description="The 1,000-token starter package lets creators try automation risk-free and see results before spending money."
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
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm md:p-6">
          <div className="flex relative flex-col flex-1 gap-3 justify-between">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function FeatureHighlights() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <div className="inline-block mb-6">
          <span className="inline-block z-10 px-6 py-2 text-lg font-semibold text-transparent bg-clip-text rounded-full border shadow-sm bg-pepper border-border">
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
      </div>
      <GlowingEffectDemo />
    </div>
  );
}
