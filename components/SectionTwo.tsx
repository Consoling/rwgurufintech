"use client";

import { Progress } from "./ui/progress";
import { TypographyH1, TypographyH2, TypographyH3 } from "./ui/typography";
import { motion } from "framer-motion";
import { FaRobot, FaChartPie, FaBrain, FaCog } from "react-icons/fa";

const keyChallenges = [
  {
    icon: <FaRobot className="text-xl md:text-2xl text-white" />,
    title: "Generic AI Advice",
    description:
      "Most apps offer one-size-fits-all recommendations without accounting for individual life goals and psychology.",
    className: "bg-[#f14f4f] text-white",
  },
  {
    icon: <FaChartPie className="text-xl md:text-2xl text-white" />,
    title: "Data without Direction",
    description:
      "Apps track spending and saving but fail to translate numbers into actionable paths toward financial freedom.",
    className: "bg-[#f7ab14] text-white",
  },
  {
    icon: <FaBrain className="text-xl md:text-2xl text-white" />,
    title: "Behavior Gap",
    description:
      "Current tools ignore the psychological aspects of money habits, leading to poor long-term adherence.",
    className: "bg-[#4c92f8] text-white",
  },
  {
    icon: <FaCog className="text-xl md:text-2xl text-white" />,
    title: "Manual Management",
    description:
      "Most wealth-building tools require constant manual intervention, reducing consistency and results.",
    className: "bg-[#27415d] text-white",
  },
];

const SectionTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 py-10 md:px-10"
    >
      {/* Problem Header */}
      <TypographyH1 className="border-b-0 text-white text-4xl md:text-6xl">
        The{" "}
        <span className="bg-[linear-gradient(90deg,_rgba(109,145,147,1)_0%,_rgba(132,134,137,1)_50%,_rgba(158,120,124,1)_100%)] bg-clip-text text-transparent">
          Problem
        </span>
      </TypographyH1>
      <TypographyH2 className="mt-5 text-white/80 font-thin border-b-0 tracking-wide">
        Financial Apps Today: Data-Rich but Insight-Poor
      </TypographyH2>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4 mx-auto">
        {[
          {
            value: 67,
            text: "of people feel financially stressed regularly",
          },
          {
            value: 78,
            text: "abandon financial goals due to lack of guidance",
            className: "text-[#fbbf24]",
          },
          {
            value: 43,
            text: "struggle with linking financial actions to life goals",
            className: "text-[#f87171]",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            className="bg-white/10 space-y-4 py-10 px-8 text-white border border-white/20 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition"
          >
            <TypographyH3 className={`text-5xl font-bold ${item?.className}`}>
              {item.value}%
            </TypographyH3>
            <span className="text-sm text-center leading-5 font-thin tracking-wide px-4">
              {item.text}
            </span>
            <Progress value={item.value} className="bg-[#374151]" />
          </motion.div>
        ))}
      </div>

      {/* Key Challenges */}
      <TypographyH2 className="my-20 text-2xl text-white/80 font-thin border-b-0 tracking-wide text-center">
        Key Challenges in Current Financial Apps
      </TypographyH2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {keyChallenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="flex items-start gap-4"
          >
            <div className={`p-2 rounded-full ${challenge.className}`}>
              {challenge.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg md:text-xl mb-1">
                {challenge.title}
              </h4>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-thin">
                {challenge.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Inspirational Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-20 max-w-4xl mx-auto px-6 py-8 rounded-xl bg-white/10 backdrop-blur border border-white/20"
      >
        <p className="text-white/80 italic text-center text-lg md:text-xl leading-relaxed">
          "People don't need more financial data—they need a personalized path to financial freedom paired with the psychological
          tools to stay on that path."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SectionTwo;
