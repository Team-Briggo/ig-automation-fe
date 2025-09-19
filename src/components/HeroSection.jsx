import { FaApple } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";
import { HiMiniSparkles } from "react-icons/hi2";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import AnimatedCard from "./ui/AnimatedCard";

const HeroSection = () => {
  return (
    <div className="flex relative flex-col justify-center items-center px-6 py-36 w-full min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-40 from-salt/5 via-pepper/10 to-salt/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,rgba(120,119,198,0.1),transparent)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r rounded-full opacity-20 blur-3xl animate-pulse from-pepper via-pepper/5 to-salt"></div>
      <div className="absolute right-1/4 bottom-1/3 w-24 h-24 bg-gradient-to-r rounded-full opacity-20 blur-2xl delay-1000 animate-pulse from-pepper via-pepper/5 to-salt"></div>

      {/* Main Content */}
      <div className="flex relative z-10 flex-col gap-12 items-center mx-auto max-w-6xl">
        {/* Header Badge */}
        <div className="inline-flex gap-3 items-center px-6 py-3 rounded-full border shadow-md backdrop-blur-md transition-all duration-300 group bg-white/90 border-white/20">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-pepper"></div>
          </div>
          <span className="text-sm font-medium text-pepper">
            Where Brands & Creators Unite
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 text-center">
          <div className="relative">
            <h1 className="relative z-10 text-5xl font-bold leading-tight md:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r drop-shadow-lg from-pepper via-pepper/90 to-pepper/95">
                Connect. Create. Collaborate.
              </span>
              {/* Shine effect overlay */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent to-transparent opacity-50 animate-pulse via-salt/30">
                Connect. Create. Collaborate.
              </span>
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r opacity-30 blur-xl scale-110 from-pepper/20 via-salt/10 to-pepper/20"></div>
          </div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            The ultimate platform bridging brands and creators for authentic
            partnerships
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
          <button className="flex gap-3 items-center px-6 py-4 text-white rounded-xl shadow-lg transition-all duration-300 cursor-pointer bg-pepper hover:shadow-xl hover:border-pepper hover:bg-salt hover:text-pepper">
            <FaApple size={24} />
            <div className="flex flex-col items-start">
              <span className="text-xs opacity-80">Download on the</span>
              <span className="text-lg font-semibold leading-none">
                App Store
              </span>
            </div>
          </button>

          <button className="flex gap-3 items-center px-6 py-4 text-white rounded-xl shadow-lg transition-all duration-300 cursor-pointer bg-pepper hover:shadow-xl hover:border-pepper hover:bg-salt hover:text-pepper">
            <IoLogoGooglePlaystore size={24} />
            <div className="flex flex-col items-start">
              <span className="text-xs opacity-80">Get it on</span>
              <span className="text-lg font-semibold leading-none">
                Google Play
              </span>
            </div>
          </button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center mt-8">
          <AnimatedCard
            width={240}
            height={280}
            icon={<MdVerified size={64} className="text-pepper/90" />}
            title={
              <span className="font-bold text-pepper">Vetted Creators</span>
            }
            description="Every creator is verified and reviewed for quality content and authentic engagement"
          />

          <AnimatedCard
            width={240}
            height={280}
            icon={<GoWorkflow size={60} className="text-pepper/90" />}
            title={
              <span className="font-bold text-pepper">Seamless Workflow</span>
            }
            description="From discovery to payment, everything is handled seamlessly in one unified platform"
          />

          <AnimatedCard
            width={240}
            height={280}
            icon={<HiMiniSparkles size={60} className="text-pepper/90" />}
            title={
              <span className="font-bold text-pepper">Smart Matching</span>
            }
            description="AI-powered algorithm intelligently connects brands with their perfect creator matches"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
