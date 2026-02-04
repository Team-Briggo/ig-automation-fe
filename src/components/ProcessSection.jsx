"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scatterConfigs = {
  1: [{ x: 0, y: 0, rotate: -2, zIndex: 1 }],
  2: [
    { x: -25, y: 12, rotate: -4, zIndex: 1 },
    { x: 25, y: -12, rotate: 3, zIndex: 2 },
  ],
};

function ScatteredScreens({ images, stepNumber }) {
  const configs = scatterConfigs[images.length] || scatterConfigs[1];
  const [activeIndex, setActiveIndex] = useState(0);
  const isMulti = images.length > 1;

  useEffect(() => {
    if (!isMulti) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isMulti]);

  return (
    <div className="relative flex justify-center items-center w-full h-full min-h-[550px]">
      {images.map((src, i) => {
        const config = configs[i];
        return (
          <motion.div
            key={i}
            className="absolute w-[210px] h-[450px]"
            initial={{ x: 0, y: 80, opacity: 0 }}
            whileInView={{
              x: config.x,
              y: config.y,
              opacity: isMulti && i !== activeIndex ? 0.4 : 1,
              rotate: config.rotate,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.5,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.5 },
            }}
            style={{ zIndex: i === activeIndex ? 10 : config.zIndex }}
          >
            {/* Step badge — active screenshot only */}
            {i === activeIndex && (
              <div className="flex absolute -top-2 -right-2 z-10 justify-center items-center w-7 h-7 bg-white rounded-full shadow-md">
                <span className="text-sm font-bold text-gray-700">
                  {stepNumber}
                </span>
              </div>
            )}
            <div className="overflow-hidden w-full h-full rounded-xl border shadow-lg border-white/20">
              <img
                src={src}
                alt={`Step ${stepNumber} screenshot`}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function StickyScrollCards() {
  const cards = [
    {
      title: "Connect your Instagram account",
      description: "Secure, API-approved connection — no password sharing.",
      thirdPartyLogo: "/images/meta.png",
      bgColor: "#404040",
      lightBgColor: "bg-pepper/70",
      images: ["/images/connect.jpg"],
      zIndex: "z-[3]",
    },
    {
      title: "Set automation triggers",
      description:
        'Choose actions like "New follower," "Keyword message," or "Story reply."',
      bgColor: "#61a5fa",
      lightBgColor: "bg-blue-300",
      images: ["/images/choose_trigger.jpg", "/images/keywords.jpg"],
      zIndex: "z-[4]",
    },
    {
      title: "Watch your engagement grow",
      description: "Briggo handles your DMs while you gain time and followers.",
      bgColor: "#fca5a5",
      lightBgColor: "bg-red-300",
      images: ["/images/listing.jpg", "/images/preview.jpg"],
      zIndex: "z-[5]",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = cardRefs.current.length - 1; i >= 0; i--) {
        const el = cardRefs.current[i];
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveStep(i);
          return;
        }
      }
      setActiveStep(0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-4 mx-auto w-full max-w-6xl">
      {/* Mobile sticky text */}
      <div className="sticky top-[80px] z-30 bg-white pb-4 px-2 pt-2 xl:hidden overflow-hidden rounded-b-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {cards[activeStep].thirdPartyLogo && (
              <img
                src={cards[activeStep].thirdPartyLogo}
                alt="Third Party Logo"
                width={80}
                height={32}
                className="object-contain mb-2"
              />
            )}
            <h2 className="text-2xl font-semibold tracking-tight leading-tight text-neutral-900">
              {cards[activeStep].title}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              {cards[activeStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative mt-12 space-y-8 xl:mt-[60px]">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`group relative flex flex-col overflow-hidden xl:h-[420px] xl:flex-row
    bg-white
    border border-neutral-200/70
    rounded-2xl shadow-sm hover:shadow-xl
    transition-all duration-500 ease-out
    ${card.zIndex}`}
            style={{
              position: "sticky",
              top: `calc(120px + ${index * 20}px)`,
            }}
          >
            {/* Soft gradient hover layer */}
            <div className="absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 from-neutral-100/70 to-neutral-200/60 dark:from-neutral-900/40 dark:to-neutral-800/40" />

            {/* Content */}

            {/* Image */}
            <div className="relative z-10 w-full xl:w-[42%] overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
              <ScatteredScreens images={card.images} stepNumber={index + 1} />
            </div>
            <div className="hidden relative z-10 flex-col flex-1 justify-center px-8 py-10 xl:flex xl:px-16 xl:py-20">
              {card.thirdPartyLogo && (
                <img
                  src={card.thirdPartyLogo}
                  alt="Third Party Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              )}
              <h2 className="text-2xl font-semibold tracking-tight leading-tight xl:text-5xl text-neutral-900">
                {card.title.split("<br>").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.title.split("<br>").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed xl:text-lg text-neutral-600">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <div className="relative py-12 w-full min-h-screen bg-white">
      <div className="absolute top-10 left-1/2 z-20 transform -translate-x-1/2">
        <span className="inline-block px-6 py-2 text-lg font-semibold text-gray-800 bg-white rounded-full border border-gray-200 shadow-sm">
          Process
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="pt-20 mb-16 text-center">
          <h2 className="mb-2 text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="inline-block relative">
              <span className="relative z-10 leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-gray-900">
                Set it once
              </span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-red-200 transform -rotate-1 -z-10"></span>
            </span>
          </h2>
          <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="inline-block relative">
              <span className="relative z-10 leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-gray-900">
                Let Briggo do the rest.
              </span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-indigo-200 transform -rotate-1 -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Sticky Scroll Cards */}
        <div className="relative">
          <StickyScrollCards />
        </div>
      </div>
    </div>
  );
}
