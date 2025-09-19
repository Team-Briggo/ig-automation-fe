import React, { useMemo } from "react";

export default function AnimatedCard({
  width = 200,
  height = 250,
  icon = null,
  title = "Card Title",
  description = "Card description goes here.",
}) {
  const animationDelay = useMemo(() => Math.random() * 10, []);

  return (
    <div
      className="flex overflow-hidden relative z-40 flex-col justify-center items-center rounded-2xl shadow-md"
      style={{ width, height }}
    >
      {/* Inner Content */}
      <div
        className="overflow-hidden absolute top-[5px] left-[5px] z-10 rounded-xl outline-white bg-white/95 backdrop-blur-sm outline outline-2 flex flex-col gap-2 justify-center items-center p-2"
        style={{ width: width - 10, height: height - 10 }}
      >
        {icon && <div className="text-xl">{icon}</div>}
        <p className="text-lg font-semibold text-center">{title}</p>
        <p className="text-xs text-center min-h-12">{description}</p>
      </div>

      {/* Animated Background Blob */}
      <div
        className="absolute z-0 top-1/2 left-1/2 rounded-full bg-gray-800 opacity-100 blur-[12px]"
        style={{
          width: width * 0.75,
          height: height * 0.75,
          transform: "translate(-50%, -50%)",
          animation: `blob-bounce 8s infinite ease`,
          animationDelay: `-${animationDelay}s`,
        }}
      ></div>
    </div>
  );
}
