"use client";

import Link from "next/link";
import { useState } from "react";

const TickRounded = ({ size = "16" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#10B981" />
    <path
      d="M8 12l2 2 4-4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Button = ({ children, className }) => (
  <button className={className}>{children}</button>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  const commonFeatures = [
    "Trigger on any comment",
    "Unlimited keywords",
    "Unlimited automations",
    "Unlimited contacts",
    "Ask for follow before DM",
    "DM automation",
    "Story reply automation",
    "Comment automation",
    "No subscription",
    "No branding",
    "Analytics",
  ];

  const pricing = [
    {
      title: "Free",
      charges: "₹0",
      description: "Perfect to start",
      credits: "1,000 tokens",
      buttonTitle: "Start Free",
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#313131_28.87%,#9B9B9B_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(253,251,255,0.25)_4.1%,rgba(191,191,191,0.25)_24.69%,rgba(255,255,255,0.25)_91.56%)]",
    },
    {
      title: "Bronze",
      charges: "₹49",
      description: "For growing creators",
      credits: "4,000 tokens",
      buttonTitle: "Get Started",
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#1E4331_28.87%,#188DE7_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(223,240,245,0.25)_4.1%,rgba(140,198,255,0.25)_24.69%,rgba(230,242,245,0.25)_91.56%)]",
    },
    {
      title: "Silver",
      charges: "₹99",
      description: "For scaling accounts",
      credits: "10,000 tokens",
      buttonTitle: "Get Started",
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#7C3AED_28.87%,#EC4899_97.15%)]",
      highlight: true,
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(243,232,255,0.25)_4.1%,rgba(251,207,232,0.25)_24.69%,rgba(245,234,255,0.25)_91.56%)]",
    },
    {
      title: "Gold",
      charges: "₹199",
      description: "For power users",
      credits: "25,000 tokens",
      buttonTitle: "Get Started",
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#EA580C_28.87%,#FBBF24_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(237,255,241,0.25)_4.1%,rgba(199,255,214,0.25)_24.69%,rgba(240,255,247,0.25)_91.56%)]",
    },
    {
      title: "Platinum",
      charges: "₹299",
      description: "For power users",
      credits: "40,000 tokens",
      buttonTitle: "Get Started",
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#EA580C_28.87%,#FBBF24_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(237,245,255,0.25)_4.1%,rgba(199,214,255,0.25)_24.69%,rgba(240,247,255,0.25)_91.56%)]",
    },
  ];

  const selectedPlanData = pricing[selectedPlan];

  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center p-3 min-h-screen sm:p-4 lg:p-6">
      <div
        className="w-full h-full z-0 absolute -bottom-28 max-w-[1400px] max-h-[800px] mix-blend-darken pointer-events-none opacity-40"
        style={{
          background:
            "url('/images/bg_grid.png') center center / contain no-repeat",
        }}
      />

      <div className="flex z-10 flex-col gap-6 w-full max-w-5xl sm:gap-8 lg:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 px-2 text-center sm:gap-3">
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Every plan includes all features
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            <strong>No feature restrictions.</strong> Choose a plan based on the
            tokens you need—every tier includes all features.
          </p>
        </div>

        {/* Plan Selector Cards */}
        <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-4 sm:gap-3 lg:gap-4">
          {pricing.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 border-1 ${
                plan.gradient
              } ${
                selectedPlan === index
                  ? "border-blue-500 shadow-md border-2"
                  : ""
              }`}
            >
              {plan.highlight && selectedPlan === index && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-blue-500 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <p className="mb-1 font-bold text-gray-900 text-md">
                {plan.title}
              </p>
              <div className="flex gap-1 justify-center items-baseline mb-1">
                <p
                  className={`text-2xl font-bold text-transparent ${plan.chargesGradient} bg-clip-text`}
                >
                  {plan.charges}
                </p>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                {plan.credits}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <div className="px-2">
          <div className="p-4 rounded-lg border border-gray-200 backdrop-blur-sm sm:p-6 lg:p-8 sm:rounded-xl bg-white/50">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Plan Header */}
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
                  {selectedPlanData.title} Plan
                </h2>
                <p className="text-sm text-gray-600 sm:text-base">
                  {selectedPlanData.description}
                </p>
              </div>

              {/* Plan Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p
                    className={`text-xl sm:text-2xl font-bold text-transparent ${selectedPlanData.chargesGradient} bg-clip-text mt-1`}
                  >
                    {selectedPlanData.charges}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide font-semibold">
                    Tokens Included
                  </p>
                  <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                    {selectedPlanData.credits.split(" ")[0]}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="https://apps.apple.com/in/app/briggo-creators/id6757666181"
                target="_blank"
                rel="noopener noreferrer"
                // className="z-10 self-center"
              >
                <Button className="px-6 py-3 w-full text-sm font-bold text-white bg-gradient-to-r rounded-lg shadow-lg transition-all duration-200 from-pepper/70 to-pepper sm:py-4 sm:rounded-xl sm:text-base hover:bg-pepper/80 hover:shadow-xl">
                  {selectedPlanData.buttonTitle}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-3 p-4 mx-2 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 sm:rounded-xl bg-white/50 sm:gap-4 lg:gap-6">
          <div>
            <h3 className="text-lg font-bold text-center text-gray-900 sm:text-xl lg:text-2xl">
              Everything included
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 lg:gap-4">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-2.5 items-start p-2 rounded-md hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <TickRounded size="14" />
                </div>
                <p className="text-xs leading-snug text-gray-700 sm:text-sm lg:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
