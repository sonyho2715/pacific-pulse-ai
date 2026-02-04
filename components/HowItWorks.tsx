"use client";

import { motion } from "framer-motion";
import { Search, Target, Lightbulb, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Consultation",
    subtitle: "Initial Consultation",
    points: [
      "Understand your goals and challenges",
      "Identify key areas for AI integration",
      "Create value proposition",
    ],
  },
  {
    icon: Target,
    number: "02",
    title: "Strategy Development",
    subtitle: "Custom Planning",
    points: [
      "Design tailored AI roadmap",
      "Set measurable objectives",
      "Allocate resources effectively",
    ],
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Implementation",
    subtitle: "Build & Deploy",
    points: [
      "Develop AI solutions",
      "Integrate with existing systems",
      "Test and optimize performance",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Scale & Support",
    subtitle: "Growth Phase",
    points: [
      "Provide ongoing maintenance",
      "Scale solutions as needed",
      "Continuous improvement",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <span className="section-label">HOW IT WORKS</span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              Turn Ideas into Impact,{" "}
              <span className="gradient-text">Without Boundaries</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-8 leading-relaxed">
              Scalable, tailored, and AI-powered solutions to fuel your business growth.
              Our proven process ensures successful implementation at every stage.
            </p>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              {/* Process Visual */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0a0a12] border border-violet-500/20">
                {/* Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central Hub */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full border border-violet-500/30"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-6 rounded-full border border-cyan-500/30"
                    />
                    <div className="absolute inset-12 rounded-full bg-gradient-to-br from-violet-600/50 to-cyan-600/50 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-sm">AI</span>
                    </div>

                    {/* Orbiting Nodes */}
                    {[0, 90, 180, 270].map((deg, i) => (
                      <motion.div
                        key={deg}
                        className="absolute w-4 h-4 rounded-full bg-violet-500"
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                        animate={{
                          x: Math.cos((deg * Math.PI) / 180) * 96 - 8,
                          y: Math.sin((deg * Math.PI) / 180) * 96 - 8,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Corner Labels */}
                <div className="absolute top-4 left-4 floating-badge text-xs">Discovery</div>
                <div className="absolute top-4 right-4 floating-badge text-xs">Strategy</div>
                <div className="absolute bottom-4 left-4 floating-badge text-xs">Build</div>
                <div className="absolute bottom-4 right-4 floating-badge text-xs">Scale</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-violet-500/40 transition-all"
              >
                <div className="flex gap-5">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs text-violet-400 mb-1">{step.subtitle}</div>
                    <h3 className="text-lg font-display font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
