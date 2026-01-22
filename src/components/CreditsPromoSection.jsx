"use client";

import { Gift, Infinity, RotateCcw, TrendingUp } from "lucide-react";
import Link from "next/link";

const Icon = ({ icon, iconColor }) => {
  const IconComponent = icon;
  return (
    <div className={`p-3 mb-6 bg-white rounded-full shadow-md ${iconColor}`}>
      <IconComponent size={32} strokeWidth={1.5} />
    </div>
  );
};

export default function CreditsPromoSection() {
  return (
    <div className="hidden relative z-10 px-4 py-10 mx-auto max-w-7xl sm:block">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          <span className="inline-block relative">
            <span className="relative z-10 leading-tight text-transparent bg-clip-text bg-pepper/90">
              Get 1,000 FREE DMs
            </span>
            <span className="absolute left-0 bottom-2 w-full h-5 bg-lime-200 transform -rotate-1 -z-10"></span>
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
          Start automating your Instagram instantly
        </p>
      </div>

      {/* Main Promo Card */}
      <div className="relative mx-auto mb-6 max-w-4xl">
        <div className="overflow-hidden relative rounded-2xl border-pepper/30 bg-white/65">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl -z-10"></div>

          <div className="flex relative z-10 flex-col gap-8">
            <div className="flex gap-2 justify-center items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Briggo?</h3>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative min-h-60">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative col-span-1 justify-center items-center rounded-lg backdrop-blur-lg bg-white/80 min-w-96 min-h-72">
                    <div className="absolute top-0 justify-center items-center w-full h-full bg-gradient-to-br from-white via-indigo-100 to-indigo-300 rounded-xl" />
                    <div className="absolute -bottom-0.5 left-1/2 w-full h-2 bg-gradient-to-r from-white to-white -translate-x-1/2 max-w-60 via-indigo-300" />
                    <div className="absolute -bottom-0.5 left-1/2 w-full h-2 bg-gradient-to-r from-white to-white -translate-x-1/2 max-w-60 via-indigo-300" />
                    <div className="absolute top-0 -right-0.5 w-2 h-full max-h-60 bg-gradient-to-b from-white to-white via-indigo-300" />
                    <div className="absolute top-0 -right-0.5 w-2 h-full max-h-60 bg-gradient-to-b from-white to-white via-indigo-300" />
                    <div className="flex z-10 flex-col col-span-1 gap-2 justify-center items-center p-4 w-full h-full rounded-lg backdrop-blur-lg bg-white/80">
                      <Icon icon={TrendingUp} iconColor={"text-green-600"} />
                      <p className="text-2xl font-bold">Pay As You Grow</p>
                      <p className="text-center text-gray-600 text-md text-wrap max-w-60">
                        Only pay for what you actually use
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col col-span-1 justify-center items-center p-4 text-center rounded-lg min-h-72 min-w-96">
                    <Icon icon={RotateCcw} iconColor={"text-blue-600"} />
                    <p className="text-2xl font-bold">DM's Carry Over</p>
                    <p className="text-center text-gray-600 text-md text-wrap max-w-68">
                      Unused balance automatically carries forward
                    </p>
                  </div>
                  <div className="flex flex-col col-span-1 justify-center items-center p-4 rounded-lg min-w-96 min-h-72">
                    <Icon icon={Gift} iconColor={"text-red-400"} />
                    <p className="text-2xl font-bold">
                      Earn More with Referrals
                    </p>
                    <p className="text-center text-gray-600 text-md text-wrap max-w-60">
                      Turn referrals into account dms
                    </p>
                  </div>
                  <div className="relative col-span-1 justify-center items-center rounded-lg backdrop-blur-lg bg-white/80 min-w-96 min-h-72">
                    <div className="absolute top-0 col-span-1 justify-center items-center bg-gradient-to-tl from-white via-green-100 to-green-300 rounded-lg min-w-96 min-h-72" />
                    <div className="absolute -top-0.5 left-1/2 w-full h-2 bg-gradient-to-r from-white to-white -translate-x-1/2 max-w-60 via-green-300" />
                    <div className="absolute -top-0.5 left-1/2 w-full h-2 bg-gradient-to-r from-white to-white -translate-x-1/2 max-w-60 via-green-300" />
                    <div className="absolute top-0 -left-0.5 w-2 h-full max-h-60 bg-gradient-to-b from-white to-white via-green-300" />
                    <div className="absolute top-0 -left-0.5 w-2 h-full max-h-60 bg-gradient-to-b from-white to-white via-green-300" />
                    <div className="flex z-10 flex-col col-span-1 gap-2 justify-center items-center p-4 w-full h-full rounded-lg backdrop-blur-lg bg-white/80">
                      <Icon icon={Infinity} iconColor={"text-purple-600"} />
                      <p className="text-2xl font-bold">
                        No Expiring Subscriptions
                      </p>
                      <p className="text-center text-gray-600 text-md text-wrap max-w-68">
                        No monthly deadlines or renewal pressure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute z-10 top-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-pepper"></div>
                  <div className="absolute z-10 top-1/2 -right-1.5 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-pepper"></div>
                  <div className="absolute bottom-2.5 p-2 w-24 h-24 rounded-full border-2 border-pepper/30"></div>
                  <div className="absolute top-2.5 right-0 p-2 w-24 h-24 rounded-full border-2 border-pepper/30"></div>
                  <div className="z-20 p-4 w-32 h-32 rounded-full backdrop-blur-sm bg-white/80">
                    <img
                      src="/logo.png"
                      alt="Card Preview"
                      className="object-contain w-full max-w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text-center">
              <Link
                href="https://apps.apple.com/in/app/briggo-creators/id6757666181"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-200 transform bg-pepper/90">
                  Claim Your 1,000 Free Tokens →
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
