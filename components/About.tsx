"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, Heart, Check } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Empowering Innovation",
    description: "Drive creative solutions with AI-powered insights",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "Latest AI models and frameworks at your fingertips",
  },
  {
    icon: Heart,
    title: "Ethical Commitment",
    description: "Responsible AI development with transparency",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-cyan-500/20 rounded-3xl blur-2xl" />

              {/* Image Placeholder - Cyberpunk Style */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#0a0a12] border border-violet-500/20">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />

                {/* Tech Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Outer Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-violet-500/30 border-dashed"
                    />
                    {/* Middle Ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 rounded-full border-2 border-cyan-500/40"
                    />
                    {/* Inner Core */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                      <Cpu className="w-16 h-16 text-white" />
                    </div>
                    {/* Floating Dots */}
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                      <motion.div
                        key={deg}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute w-3 h-3 rounded-full bg-cyan-400"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${deg}deg) translateX(96px) translateY(-50%)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-600/10 to-transparent" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 stats-card"
            >
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white">320M+</div>
                  <div className="text-xs text-gray-400 mt-1">Business</div>
                </div>
                <div className="w-px bg-gray-700" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white">590K+</div>
                  <div className="text-xs text-gray-400 mt-1">Happy Client</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <span className="section-label">ABOUT US</span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              <span className="gradient-text-purple">Boost Efficiency,</span>
              <br />
              Maximize Profits with
              <br />
              Smart AI Solutions.
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-8 leading-relaxed">
              We help businesses transform their operations with tailored AI solutions that redefine possibilities,
              delivering measurable results and sustainable growth.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
