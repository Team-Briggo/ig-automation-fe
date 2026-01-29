"use client";

import React from "react";

function StickyScrollCards() {
  const cards = [
    {
      title: "Connect your Instagram account",
      description: "Secure, API-approved connection — no password sharing.",
      bgColor: "#404040",
      lightBgColor: "bg-pepper/70",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=675&h=558&fit=crop",
      zIndex: "z-[3]",
    },
    {
      title: "Set automation triggers",
      description:
        "Choose actions like “New follower,” “Keyword message,” or “Story reply.”",
      bgColor: "#61a5fa",
      lightBgColor: "bg-blue-300",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=675&h=558&fit=crop",
      zIndex: "z-[4]",
    },
    {
      title: "Watch your engagement grow",
      description: "Briggo handles your DMs while you gain time and followers.",
      bgColor: "#fca5a5",
      lightBgColor: "bg-red-300",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=675&h=558&fit=crop",
      zIndex: "z-[5]",
    },
  ];

  return (
    <div className="relative px-4 mx-auto w-full max-w-6xl">
      <div className="relative mt-12 space-y-8 xl:mt-[60px]">
        {cards.map((card, index) => (
          <div
            key={index}
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
            <div className="flex relative z-10 flex-col flex-1 justify-center px-8 py-10 xl:px-16 xl:py-20">
              <h2 className="text-3xl font-semibold tracking-tight leading-tight xl:text-5xl text-neutral-900">
                {card.title.split("<br>").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.title.split("<br>").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed xl:text-lg text-neutral-600">
                {card.description}
              </p>
            </div>
            {/* Image */}
            <div
              className="relative z-10 w-full xl:w-[42%] overflow-hidden 
    bg-neutral-100 dark:bg-neutral-900"
            >
              <img
                alt={card.title}
                loading="lazy"
                className="object-cover w-full h-full opacity-90 transition-all duration-700 ease-out scale-100 group-hover:scale-105 group-hover:opacity-100"
                src={card.image}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/10 dark:from-black/30" />
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
