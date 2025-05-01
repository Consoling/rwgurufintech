"use client";

import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { IconDeviceAnalytics } from "@tabler/icons-react";
import { TypographyH1, TypographyH2, TypographyH3 } from "./ui/typography";
import { motion } from "framer-motion";

const featureItems = [
  { emoji: "🧠", label: "Behavioral Finance" },
  { emoji: "🤖", label: "AI-Driven" },
  { emoji: "🔉", label: "Voice Assistant" },
  { emoji: "💰", label: "Wealth Building" },
];

const SectionOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 py-10 md:px-10 flex flex-col items-center justify-center text-center"
    >
      <Card className="w-28 h-28 bg-white/10 border-none shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardContent className="h-full w-full flex justify-center items-center">
          <IconDeviceAnalytics size={50} className="text-white" />
        </CardContent>
      </Card>

      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <TypographyH1 className="bg-[linear-gradient(90deg,_rgba(109,145,147,1)_0%,_rgba(132,134,137,1)_50%,_rgba(158,120,124,1)_100%)] bg-clip-text text-transparent text-4xl md:text-6xl">
          RW Guru Fintech
        </TypographyH1>
        <TypographyH2 className="text-gray-300 font-thin border-b-0 tracking-wide">
          Your Financial Assistant
        </TypographyH2>
        <TypographyH3 className="text-center leading-relaxed font-normal tracking-wide text-gray-400 text-lg md:text-xl mt-8 max-w-4xl">
          A personalized AI financial advisor that grows with you — guiding you <br />
          toward financial freedom using smart automation, psychology-driven <br />
          coaching, and real-time financial insights.
        </TypographyH3>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl px-4">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
            className="bg-white/10 text-white border border-white/20 rounded-xl p-4 flex  items-center justify-center shadow-md hover:shadow-xl transition"
          >
            <span className="text-3xl mb-2">{item.emoji}</span>
            <p className="text-md font-medium text-center">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionOne;
