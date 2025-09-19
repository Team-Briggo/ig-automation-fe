"use client";

import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaStore,
  FaBox,
  FaUser,
  FaCamera,
  FaMicrophone,
  FaVideo,
} from "react-icons/fa";
import Image from "next/image";

const iconsLeft = [FaShoppingBag, FaStore, FaBox];
const iconsRight = [FaUser, FaCamera, FaMicrophone, FaVideo];

const lineAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Dummy() {
  return (
    <div className="relative flex items-center justify-center min-h-[500px] bg-white overflow-hidden">
      {/* Left side - Brands */}
      <div className="flex absolute left-10 top-1/2 flex-col gap-10 -translate-y-1/2">
        {iconsLeft.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-4xl text-blue-500"
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Right side - Creators */}
      <div className="flex absolute right-10 top-1/2 flex-col gap-10 -translate-y-1/2">
        {iconsRight.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-4xl text-pink-500"
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Central Briggo Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex relative z-10 justify-center items-center p-4 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full shadow-lg"
      >
        <Image
          src="/logo.png" // make sure you place Briggo logo in /public/logo.png
          alt="Briggo"
          width={160}
          height={80}
          className="object-contain"
        />
      </motion.div>

      {/* Connection Lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left connections */}
        {iconsLeft.map((_, i) => (
          <motion.path
            key={`l-${i}`}
            d={`M 100 ${200 + i * 100} Q 400 ${250 + i * 50}, 900 250`}
            stroke="url(#grad1)"
            strokeWidth="2"
            fill="transparent"
            variants={lineAnimation}
            initial="hidden"
            animate="visible"
          />
        ))}

        {/* Right connections */}
        {iconsRight.map((_, i) => (
          <motion.path
            key={`r-${i}`}
            d={`M 1800 ${200 + i * 100} Q 1400 ${250 + i * 50}, 900 250`}
            stroke="url(#grad2)"
            strokeWidth="2"
            fill="transparent"
            variants={lineAnimation}
            initial="hidden"
            animate="visible"
          />
        ))}

        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
