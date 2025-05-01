"use client";

import { IconSunFilled } from "@tabler/icons-react";
import { Progress } from "./ui/progress";
import { TypographyH1, TypographyH2, TypographyH3 } from "./ui/typography";
import { motion } from "framer-motion";
import { CheckCircle2, Mic } from "lucide-react";

import { Brain, Compass, Settings, Sparkles } from "lucide-react";

const SectionThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 py-10 md:px-10"
    >
      <TypographyH1 className="border-b-0 text-white text-4xl md:text-6xl">
        The{" "}
        <span className="bg-[linear-gradient(90deg,_rgba(109,145,147,1)_0%,_rgba(132,134,137,1)_50%,_rgba(158,120,124,1)_100%)] bg-clip-text text-transparent">
          Solution
        </span>
      </TypographyH1>
      <TypographyH2 className="mt-5 text-white/80 font-thin border-b-0 tracking-wide">
        FinWise: A Revolution in Personal Finance
      </TypographyH2>

      {/* Main Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left: Description + Approach */}
        <div className="lg:w-1/2 space-y-6 text-white/80 text-base leading-relaxed">
          <p>
            FinWise transforms traditional financial apps by creating a holistic
            system that understands your life goals, psychology, and financial
            habits to guide you toward true financial freedom.
          </p>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Approach:
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Goal-first planning instead of budget-first constraints",
                "Behavioral science to transform money habits",
                "Voice-first interaction for accessibility",
                "Smart automation to remove friction",
                "AI-powered opportunity detection",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Mobile Card UI */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[320px] rounded-3xl bg-gradient-to-b from-[#131c3f] to-[#1c2d55] p-5 text-white shadow-[0_0_30px_rgba(0,255,255,0.3)] relative">
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <div className="text-sm text-white/80">Good morning, Alex</div>
                <div className="text-xs text-white/50 mb-4">April 21, 2025</div>
              </div>
              <div>
                <IconSunFilled className="text-yellow-300" />
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <div className="text-sm font-medium mb-1">Freedom Meter™</div>
              <Progress value={64} />
              <p className="text-xs mt-2 text-white/60">
                You're 36% away from financial freedom
              </p>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold mb-2">Your Life Goals</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-full outline-1 outline-green-500">
                  Retirement at 50
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full outline-1 outline-green-500">
                  Home in 3 years
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full outline-1 outline-green-500">
                  Travel yearly
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70 cursor-pointer bg-white/10 py-2 px-2 rounded-xl shadow-blue-300 shadow-sm outline-blue-300 outline-1">
              <Mic className="w-4 h-4 text-white/60" />
              Ask FinWise anything...
            </div>

            <div className="absolute bottom-[-10px] left-[-10px] w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-orange-300 blur-md opacity-70"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <TypographyH3 className="text-white text-center">
          Four Pillars of Financial Freedom with FinWise:
        </TypographyH3>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl px-4 mx-auto">
          {[
            {
              icon: <Compass className="w-10 h-10 bg-white/20 text-white rounded-xl "  />,
              title: "Goal-Driven Planning",
              description:
                "Start with life goals and work backward to daily finances.",
            },
            {
              icon: <Brain className="w-10 h-10 bg-[#579bf8] text-white rounded-xl" />,
              title: "Behavioral Coaching",
              description:
                "Reshape money habits with psychology-based guidance.",
            },
            {
              icon: <Settings className="w-10 h-10 bg-[#f5b21f] text-white rounded-xl" />,
              title: "Smart Automation",
              description: "Put wealth-building on autopilot with AI systems.",
            },
            {
              icon: <Sparkles className="w-10 h-10 bg-[#ef5a5a] text-white rounded-xl" />,
              title: "Opportunity AI",
              description: "Proactively identify ways to grow wealth faster.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="bg-white/10 space-y-3 text-start py-10 px-8 text-white border border-white/20 rounded-xl flex flex-col items-start justify-center shadow-md hover:shadow-xl transition "
            >
              {item.icon}
              <h4 className="text-lg  font-semibold">{item.title}</h4>
              <p className="text-sm font-thin text-white/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionThree;
