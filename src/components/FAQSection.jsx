"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Is Briggo safe and Meta-compliant?",
    answer:
      "Yes. Briggo is Meta-verified and a Meta Tech Provider, built with safety-first, rate-limited automation that follows Instagram's platform guidelines.",
  },
  {
    question: "Is Briggo free to use?",
    answer:
      "Yes, you can start for free! Briggo gives 1,000 free dms to every new user so you can explore all features without paying anything. Once you've used your free dms, you can purchase more to continue.",
  },
  {
    question: "Does Briggo have a subscription?",
    answer:
      "No. Briggo uses a prepaid system. Buy plan once, use them as needed. No subscriptions, no lock-ins, and no monthly commitments.",
  },
  {
    question: "How does Briggo pricing work?",
    answer:
      "Briggo uses plans \nYour plan is deducted only when you actually use the service.\nThis helps you save money by paying only for what you use.",
  },
  {
    question: "What Instagram automations does Briggo offer?",
    answer:
      "Briggo supports:\nReel & post comment automation,\nStory reply automation,\nDM automation,\nAsk for follow automation,\nCustom & unlimited keywords,\nUnlimited contacts & automations,",
  },
  {
    question: "Is there any limit on automations or keywords?",
    answer:
      "No limits.\nBriggo offers unlimited automations, keywords, and contacts.\nYour usage only depends on the plan you use.",
  },
  {
    question: "What analytics does Briggo provide?",
    answer:
      "Briggo gives you powerful insights:\nDM delivery & response analytics\nClick tracking\nProfile performance analytics\nso you can optimize conversions and engagement.",
  },
  {
    question: "What is Briggo's Refer & Earn program?",
    answer:
      "Invite friends and earn rewards! \nEarn 500 free dm each time a friend connects their Instagram through your referral link.\nPlans are instantly usable for automations.",
  },
  {
    question: "Who is Briggo best suited for?",
    answer:
      "Briggo is ideal for:\nCreators & influencers,\nBusinesses & brands,\nSocial media managers,\nGrowth marketers,\nAnyone looking to automate Instagram engagement without overspending.",
  },
  {
    question: "Do my plans ever expire?",
    answer: "Yes. Plans are valid for 1 year from the date of purchase.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="relative group">
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md dark:shadow-lg dark:hover:shadow-xl">
        <button
          onClick={onClick}
          className="flex gap-4 justify-between items-start p-6 w-full text-left md:p-7 group/button"
        >
          <div className="flex-1 space-y-2">
            <h3
              className={twMerge(
                "pr-2 text-lg font-bold leading-tight text-gray-900 transition-colors duration-200 md:text-xl",
              )}
            >
              {question}
            </h3>
            <div
              className={twMerge(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "mt-3 opacity-100 grid-rows-[1fr]"
                  : "opacity-0 grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[15px] md:text-base leading-relaxed text-gray-600 pb-1">
                  {answer}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 mt-1">
            <div
              className={twMerge(
                "flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full transition-all duration-300",
              )}
            >
              <ChevronDown
                className={twMerge(
                  "w-5 h-5 text-gray-600 transition-all duration-300",
                  isOpen && "rotate-180 scale-110",
                )}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 px-4 py-20 mx-auto max-w-5xl md:py-28">
      {/* Header */}
      <div className="mb-16 space-y-6 text-center">
        <div className="inline-flex justify-center items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-semibold text-pepper-700 dark:text-pepper-300 bg-pepper-50 dark:bg-pepper-950/50 rounded-full border border-pepper-200 dark:border-pepper-800 shadow-sm backdrop-blur-sm">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
        </div>

        <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-[4rem] max-w-4xl mx-auto">
          <span className="inline-block relative">
            <span className="relative z-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-pepper">
              Got questions? We've got answer
            </span>
            {/* Underline decoration */}
            <svg
              className="absolute left-0 -bottom-2 w-full h-4 text-purple-200"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C50 3 100 1 150 2C200 3 250 5 298 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-4 md:space-y-5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
