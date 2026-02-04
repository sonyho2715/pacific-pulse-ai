"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Shield, Brain } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

const floatingBadges = [
  { icon: Sparkles, text: "Insight Beyond", delay: 0 },
  { icon: Brain, text: "Intelligence", delay: 0.1 },
  { icon: Shield, text: "Secure AI", delay: 0.2 },
];

export function Hero() {
  const { openContactModal } = useContactModal();

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Floating Badges */}
            <div className="flex flex-col gap-3 mb-8">
              {floatingBadges.map((badge) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: badge.delay }}
                  className="floating-badge w-fit"
                >
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
            >
              Innovate{" "}
              <span className="gradient-text">Without Limits</span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button onClick={openContactModal} className="btn-primary group">
                Get Started
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button onClick={scrollToServices} className="btn-secondary group">
                <Play className="w-5 h-5" />
                See Services
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8"
            >
              <div>
                <div className="text-4xl font-display font-bold text-white">320M+</div>
                <div className="text-sm text-gray-400">Business</div>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <div className="text-4xl font-display font-bold text-white">590K+</div>
                <div className="text-sm text-gray-400">Happy Client</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - AI Visual & Cards */}
          <div className="relative">
            {/* Main AI Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Robot/AI Character Placeholder */}
              <div className="relative mx-auto w-[350px] h-[450px] flex items-center justify-center">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-500/30 to-transparent blur-2xl" />

                {/* AI Head Visual */}
                <div className="relative w-64 h-80 rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-600 overflow-hidden glow-purple">
                  {/* Face Plate */}
                  <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700">
                    {/* Eyes */}
                    <div className="flex justify-center gap-8 mt-16">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                      />
                    </div>
                    {/* Mouth Line */}
                    <div className="mx-auto mt-12 w-16 h-1 rounded-full bg-violet-500/50" />
                  </div>

                  {/* Ear Pieces */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-20 rounded-l-lg bg-gradient-to-r from-violet-600 to-violet-700" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-4 h-20 rounded-r-lg bg-gradient-to-l from-violet-600 to-violet-700" />
                </div>

                {/* Headphones */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-8 rounded-t-full bg-gradient-to-r from-violet-700 via-violet-600 to-violet-700 border-t border-violet-500" />
              </div>

              {/* Floating Stats Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 stats-card"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-400">Profit</div>
                  <div className="text-2xl font-bold text-green-400">68.5%</div>
                </div>
                {/* Mini Chart */}
                <div className="mt-3 flex items-end gap-1 h-12">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      className="w-3 rounded-t bg-gradient-to-t from-violet-600 to-violet-400"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Card - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 -right-8 stats-card flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.7%</div>
                  <div className="text-xs text-gray-400">Cloud storage free</div>
                </div>
              </motion.div>

              {/* Brand Identity Card - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-1/3 -right-16 glass-card-light p-4 hidden xl:block"
              >
                <div className="text-xs text-gray-400 uppercase tracking-wider">Brand&apos;s Digital</div>
                <div className="text-sm font-semibold text-white">Identity</div>
                <div className="mt-2 flex items-center gap-2 text-xs text-violet-400">
                  Explore more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
