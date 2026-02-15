"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import {
  Bolt,
  Cart,
  Gear,
  Users,
  Heart,
  PaperPlane,
  Msgs,
  Sitemap,
  MoneyBill,
  Sparkle,
  CircleChartLine,
} from "nucleo-glass-icons/react";

const ease = [0.23, 1, 0.32, 1];

const pricing = [
  {
    title: "Free",
    charges: "₹0",
    credits: "1,000 DMs",
    perDmCost: "Free",
    buttonTitle: "Start Free",
    chargesGradient:
      "bg-[linear-gradient(102.33deg,#313131_28.87%,#9B9B9B_97.15%)]",
  },
  {
    title: "Starter",
    charges: "₹49",
    credits: "4,000 DMs",
    perDmCost: "₹0.012/DM",
    buttonTitle: "Get Started",
    chargesGradient:
      "bg-[linear-gradient(102.33deg,#1E4331_28.87%,#188DE7_97.15%)]",
  },
  {
    title: "Growth",
    charges: "₹99",
    credits: "10,000 DMs",
    perDmCost: "₹0.010/DM",
    buttonTitle: "Get Started",
    chargesGradient:
      "bg-[linear-gradient(102.33deg,#7C3AED_28.87%,#EC4899_97.15%)]",
    highlight: true,
  },
  {
    title: "Pro",
    charges: "₹199",
    credits: "25,000 DMs",
    perDmCost: "₹0.008/DM",
    buttonTitle: "Get Started",
    chargesGradient:
      "bg-[linear-gradient(102.33deg,#EA580C_28.87%,#FBBF24_97.15%)]",
  },
  {
    title: "Plus",
    charges: "₹299",
    credits: "40,000 DMs",
    perDmCost: "₹0.007/DM",
    buttonTitle: "Get Started",
    chargesGradient:
      "bg-[linear-gradient(102.33deg,#EA580C_28.87%,#FBBF24_97.15%)]",
  },
];

const heroPlan = pricing.find((p) => p.highlight);
const gridPlans = pricing.filter((p) => !p.highlight);

const features = [
  {
    label: "Trigger on any comment",
    Icon: Bolt,
    colors: ["#F59E0B", "#D97706"],
    bg: "rgba(245, 158, 11, 0.08)",
    ring: "rgba(245, 158, 11, 0.15)",
  },
  {
    label: "Unlimited keywords",
    Icon: Cart,
    colors: ["#3B82F6", "#1D4ED8"],
    bg: "rgba(59, 130, 246, 0.08)",
    ring: "rgba(59, 130, 246, 0.15)",
  },
  {
    label: "Unlimited automations",
    Icon: Gear,
    colors: ["#8B5CF6", "#6D28D9"],
    bg: "rgba(139, 92, 246, 0.08)",
    ring: "rgba(139, 92, 246, 0.15)",
  },
  {
    label: "Unlimited contacts",
    Icon: Users,
    colors: ["#10B981", "#047857"],
    bg: "rgba(16, 185, 129, 0.08)",
    ring: "rgba(16, 185, 129, 0.15)",
  },
  {
    label: "Ask for follow before DM",
    Icon: Heart,
    colors: ["#F43F5E", "#BE123C"],
    bg: "rgba(244, 63, 94, 0.08)",
    ring: "rgba(244, 63, 94, 0.15)",
  },
  {
    label: "DM automation",
    Icon: PaperPlane,
    colors: ["#0EA5E9", "#0369A1"],
    bg: "rgba(14, 165, 233, 0.08)",
    ring: "rgba(14, 165, 233, 0.15)",
  },
  {
    label: "Story reply automation",
    Icon: Msgs,
    colors: ["#6366F1", "#4338CA"],
    bg: "rgba(99, 102, 241, 0.08)",
    ring: "rgba(99, 102, 241, 0.15)",
  },
  {
    label: "Comment automation",
    Icon: Sitemap,
    colors: ["#F97316", "#C2410C"],
    bg: "rgba(249, 115, 22, 0.08)",
    ring: "rgba(249, 115, 22, 0.15)",
  },
  {
    label: "No subscription",
    Icon: MoneyBill,
    colors: ["#22C55E", "#15803D"],
    bg: "rgba(34, 197, 94, 0.08)",
    ring: "rgba(34, 197, 94, 0.15)",
  },
  {
    label: "No branding",
    Icon: Sparkle,
    colors: ["#EAB308", "#A16207"],
    bg: "rgba(234, 179, 8, 0.08)",
    ring: "rgba(234, 179, 8, 0.15)",
  },
  {
    label: "Analytics",
    Icon: CircleChartLine,
    colors: ["#14B8A6", "#0F766E"],
    bg: "rgba(20, 184, 166, 0.08)",
    ring: "rgba(20, 184, 166, 0.15)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const APP_STORE_URL = "https://creator-app.briggo.in/";

const Pricing = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center px-3 pb-6 sm:px-4 lg:px-6">
      {/* Background grid */}
      <div
        className="w-full h-full z-0 absolute -bottom-28 max-w-[1400px] max-h-[800px] mix-blend-darken pointer-events-none opacity-30"
        style={{
          background:
            "url('/images/bg_grid.png') center center / contain no-repeat",
        }}
      />

      <div className="flex z-10 flex-col w-full max-w-5xl">
        {/* Section 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-3 text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900">
            Simple, honest pricing
          </h1>
          <p className="mt-1 mb-3 text-sm text-gray-500">
            Every plan. Every feature. Just pick your tokens.
          </p>
        </motion.div>

        {/* Section 2: Plan Cards */}
        <div className="relative mb-6 sm:mb-8">
          {/* ── Mobile layout: Hero + 2-col grid ── */}
          <div className="flex flex-col gap-2.5 sm:hidden">
            {/* Hero card — Growth (highlighted plan) */}
            {heroPlan && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="flex relative justify-between items-center p-5 rounded-xl border ring-1 shadow-md backdrop-blur-sm border-gray-200/60 bg-white/70 ring-pepper/10"
              >
                <div className="flex flex-col">
                  <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {heroPlan.title}
                  </p>
                  <p
                    className={`text-4xl font-bold text-transparent ${heroPlan.chargesGradient} bg-clip-text mt-1`}
                  >
                    {heroPlan.charges}
                  </p>
                  <p className="text-base text-gray-600 mt-0.5 font-semibold">
                    {heroPlan.credits}
                  </p>
                  <p className="text-[12px] font-medium text-gray-500 mt-0.5">
                    {heroPlan.perDmCost}
                  </p>
                </div>

                <Link
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pepper text-salt hover:bg-pepper/90 text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  {heroPlan.buttonTitle}
                </Link>

                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="absolute top-2.5 right-2.5 text-[11px] font-bold uppercase tracking-wide bg-pepper text-salt px-2 py-0.5 rounded-full"
                >
                  Popular
                </motion.span>
              </motion.div>
            )}

            {/* Compact grid — remaining 4 plans */}
            <div className="grid grid-cols-2 gap-2.5">
              {gridPlans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.06 + i * 0.06,
                    ease,
                  }}
                  className="flex flex-col items-center p-4 rounded-xl border shadow-sm backdrop-blur-sm border-gray-200/60 bg-white/70"
                >
                  <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {plan.title}
                  </p>
                  <p
                    className={`text-3xl font-bold text-transparent ${plan.chargesGradient} bg-clip-text mt-1`}
                  >
                    {plan.charges}
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5 font-semibold">
                    {plan.credits}
                  </p>
                  <p className="text-[12px] font-medium text-gray-500 mt-0.5">
                    {plan.perDmCost}
                  </p>
                  <Link
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full text-center text-xs font-semibold py-1.5 rounded-lg transition-colors border border-pepper/20 text-pepper hover:bg-pepper hover:text-salt"
                  >
                    {plan.buttonTitle}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop layout: 5-col grid (sm+) ── */}
          <div className="hidden sm:grid sm:grid-cols-5 sm:gap-3">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease,
                }}
                className={twMerge(
                  "flex flex-col items-center rounded-xl border border-gray-200/60 bg-white/70 backdrop-blur-sm p-4 transition-shadow",
                  plan.highlight
                    ? "shadow-md ring-1 ring-pepper/10 relative overflow-visible"
                    : "shadow-sm",
                )}
              >
                {plan.highlight && (
                  <>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.5,
                      }}
                      className="mb-2 text-[12px] font-bold uppercase tracking-wide bg-pepper text-salt px-2 py-0.5 rounded-full"
                    >
                      Popular
                    </motion.span>
                  </>
                )}

                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  {plan.title}
                </p>

                <p
                  className={`text-5xl font-bold text-transparent ${plan.chargesGradient} bg-clip-text mt-1`}
                >
                  {plan.charges}
                </p>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  {plan.credits}
                </p>
                <p className="text-[13px] font-medium text-gray-500 mt-0.5">
                  {plan.perDmCost}
                </p>

                <Link
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={twMerge(
                    "mt-3 w-full text-center text-xs font-semibold py-1.5 rounded-lg transition-colors",
                    plan.highlight
                      ? "bg-pepper text-salt hover:bg-pepper/90"
                      : "border border-pepper/20 text-pepper hover:bg-pepper hover:text-salt",
                  )}
                >
                  {plan.buttonTitle}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Included Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="px-6 py-8 rounded-2xl border backdrop-blur-sm border-gray-200/60 bg-white/50 sm:px-10 sm:py-10"
        >
          <p className="mb-8 text-sm font-semibold tracking-widest text-center text-gray-400 uppercase">
            Included in every plan
          </p>

          <div className="grid grid-cols-1 gap-y-1 gap-x-8 mx-auto max-w-2xl sm:grid-cols-2">
            {features.map((feat) => (
              <motion.div
                key={feat.label}
                variants={featureVariants}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex gap-3 items-center px-3 py-2 -mx-3 rounded-lg transition-colors cursor-default hover:bg-gray-50/80"
              >
                <div
                  className="flex justify-center items-center w-8 h-8 rounded-lg shrink-0"
                  style={{ backgroundColor: feat.bg }}
                >
                  <feat.Icon
                    size={18}
                    stopColor1={feat.colors[0]}
                    stopColor2={feat.colors[1]}
                  />
                </div>
                <span className="text-base font-medium text-gray-700">
                  {feat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
