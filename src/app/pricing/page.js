import Button from "@/components/ui/Button";
import React from "react";
import TickRounded from "../../../public/svg/tickRounded";
import CancelRounded from "../../../public/svg/cancelRounded";

const Pricing = () => {
  const pricing = [
    {
      title: "Free",
      charges: "0",
      buttonTitle: "Go Free",
      buttonLink: "/pricing",
      features: ["3 Automations", "1000 DMs"],
      nonAvailableFeatures: ["Follow before DM", "AI FAQs"],
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#313131_28.87%,#9B9B9B_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(253,251,255,0.25)_4.1%,rgba(191,191,191,0.25)_24.69%,rgba(255,255,255,0.25)_91.56%)]",
    },
    {
      title: "Pro",
      charges: "499",
      buttonTitle: "Go Pro",
      buttonLink: "/pricing",
      features: [
        "Unlimited Automations",
        "Unlimited DMs",
        "Follow before DM",
        "AI FAQs",
      ],
      chargesGradient:
        "bg-[linear-gradient(102.33deg,#1E4331_28.87%,#188DE7_97.15%)]",
      gradient:
        "bg-[linear-gradient(102.05deg,rgba(223,240,245,0.25)_4.1%,rgba(140,198,255,0.25)_24.69%,rgba(230,242,245,0.25)_91.56%)]",
    },
  ];

  return (
    <div className="flex relative flex-col gap-10 justify-center items-center p-6 px-4 min-h-screen sm:px-6">
      <div
        className="w-full h-full z-0 absolute -bottom-28 max-w-[1400px] max-h-[800px] mix-blend-darken pointer-events-none"
        style={{
          background: "url('/images/bg_grid.png') center center / contain",
        }}
      />
      <p className="text-4xl font-bold text-center sm:text-5xl md:text-7xl">
        Simple & affordable <br /> pricing for you
      </p>

      <div className="flex flex-wrap gap-12 justify-center py-4 w-full">
        {pricing.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 min-w-[18rem] bg-white/50 z-20 p-3 rounded-3xl shadow-md border-[#e5e7eb] border w-full sm:w-max"
          >
            <div
              className={`flex flex-col gap-4 p-4 rounded-3xl ${item.gradient}  border-2 border-white`}
            >
              <div className="flex gap-2 items-end">
                <p
                  className={`text-4xl font-bold text-transparent ${item.chargesGradient} bg-clip-text`}
                >
                  ₹{item.charges}
                </p>
                <span
                  className={`text-transparent ${item.chargesGradient} bg-clip-text`}
                >
                  / mo
                </span>
              </div>
              <p className="font-bold text-md">{item.title}</p>
              <Button className="w-full text-lg font-bold rounded-xl backdrop-blur-md bg-white/80 text-pepper">
                {item.buttonTitle}
              </Button>
            </div>
            <p className="px-2 text-sm font-light text-gray-500">
              What's included?
            </p>
            <div className="flex flex-col gap-3 px-2 pb-2">
              {item.features.map((feature, index) => (
                <p
                  key={index}
                  className="flex gap-2 justify-between items-center text-md"
                >
                  {feature} <TickRounded size="18" />
                </p>
              ))}
              {item.nonAvailableFeatures?.map((feature, index) => (
                <p
                  key={index}
                  className="flex gap-2 justify-between items-center text-md"
                >
                  {feature} <CancelRounded size="18" />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
