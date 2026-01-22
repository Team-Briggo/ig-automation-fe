"use client";

import React from "react";

function StickyScrollCards() {
  const cards = [
    {
      title: "Connect your Instagram account",
      description:
        "Secure, API-approved connection — no password sharing. Link your account in seconds through Instagram's official authentication. Your credentials stay safe, and you maintain full control.",
      details: [
        "OAuth 2.0 secure authentication",
        "No password required",
        "Revoke access anytime",
        "Full data encryption",
      ],
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=675&h=558&fit=crop",
      zIndex: "z-[1]",
    },
    {
      title: "Set automation triggers",
      description:
        'Choose actions like "New follower," "Keyword message," or "Story reply." Create custom triggers based on your specific needs and audience behavior.',
      details: [
        "Keyword-based triggers",
        "Comment automation on posts",
        "Story reply automation",
        "New follower welcome messages",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=675&h=558&fit=crop",
      zIndex: "z-[2]",
    },
    {
      title: "Customize your messages",
      description:
        "Design personalized message templates with dynamic variables. Add user names, custom greetings, links, and calls-to-action that feel authentic and engaging.",
      details: [
        "Dynamic user personalization",
        "Multiple message templates",
        "Rich media support",
        "Custom variables and placeholders",
      ],
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=675&h=558&fit=crop",
      zIndex: "z-[3]",
    },
    {
      title: "Test and refine",
      description:
        "Preview how your automation works before going live. Test messages, check triggers, and optimize your workflow to ensure everything runs smoothly.",
      details: [
        "Preview mode for testing",
        "Analytics dashboard",
        "A/B testing capabilities",
        "Real-time performance metrics",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=675&h=558&fit=crop",
      zIndex: "z-[4]",
    },
    {
      title: "Launch and monitor",
      description:
        "Activate your automation and watch it work in real-time. Track engagement rates, response times, and conversions through our comprehensive dashboard.",
      details: [
        "Real-time activity monitoring",
        "Detailed engagement analytics",
        "Conversion tracking",
        "Performance insights",
      ],
      image:
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=675&h=558&fit=crop",
      zIndex: "z-[5]",
    },
    {
      title: "Watch your engagement grow",
      description:
        "Briggo handles your DMs while you gain time and followers. Focus on creating great content while automation manages your community engagement 24/7.",
      details: [
        "Automated 24/7 engagement",
        "Increased response rates",
        "More time for content creation",
        "Scalable growth without extra staff",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=675&h=558&fit=crop",
      zIndex: "z-[6]",
    },
  ];

  return (
    <div className="relative px-4 mx-auto w-full max-w-6xl">
      <div className="relative mt-12 space-y-8 xl:mt-[60px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group relative flex flex-col overflow-hidden xl:h-[520px] xl:flex-row 
    bg-white  
    border border-gray-300
    rounded-2xl shadow-sm hover:shadow-xl
    transition-all duration-500 ease-out
    ${card.zIndex}`}
            style={{
              position: "sticky",
              top: `calc(120px + ${index * 20}px)`,
            }}
          >
            {/* Soft gradient hover layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

            {/* Content */}
            <div className="flex relative z-10 flex-col flex-1 justify-center px-8 py-10 xl:px-16 xl:py-16">
              {/* Step number */}
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-gray-900 rounded-full">
                  {index + 1}
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight leading-tight xl:text-4xl text-gray-900">
                {card.title.split("<br>").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.title.split("<br>").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
                {card.description}
              </p>

              {/* Details list */}
              <div className="mt-6 space-y-2">
                {card.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-gray-900 rounded-full"></div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative z-10 w-full xl:w-[42%] overflow-hidden bg-gray-100">
              <img
                alt={card.title}
                loading="lazy"
                className="object-cover w-full h-full opacity-90 transition-all duration-700 ease-out scale-100 group-hover:scale-105 group-hover:opacity-100"
                src={card.image}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
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
        <span className="inline-block px-6 py-2 text-lg font-semibold text-gray-800 bg-white rounded-full border border-gray-300 shadow-sm">
          Process
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="pt-20 mb-8 text-center">
          <h2 className="mb-2 text-5xl font-semibold leading-tight sm:text-6xl text-gray-900">
            Set it once
          </h2>
          <h2 className="mb-6 text-5xl font-semibold leading-tight sm:text-6xl text-gray-900">
            Let Briggo do the rest.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Get started with Instagram automation in minutes. Our simple 6-step
            process takes you from setup to success with no technical knowledge
            required.
          </p>
        </div>

        {/* Sticky Scroll Cards */}
        <div className="relative">
          <StickyScrollCards />
        </div>
      </div>
    </div>
  );
}
