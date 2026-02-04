"use client";

import { motion } from "framer-motion";
import {
  Code,
  RefreshCw,
  Rocket,
  ArrowUpRight,
  Users,
  Cloud,
} from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

const services = [
  {
    icon: Code,
    title: "Custom AI Development",
    description: "Tailored AI solutions built specifically for your business needs and workflows.",
    tags: ["Automation", "API Access"],
    stats: null,
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Continuous AI Optimization",
    description: "Self-improving algorithms that enhance performance over time.",
    tags: ["Machine Learning", "Analytics"],
    stats: null,
    hasRobot: true,
  },
  {
    icon: Rocket,
    title: "AI-Driven R&D Acceleration",
    description: "Speed up research and development with intelligent automation.",
    tags: ["Innovation", "Research"],
    stats: { value: "99.7%", label: "Cloud storage free", subValue: "75.6 GB", subLabel: "Data backup" },
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools for your entire team.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud platforms.",
  },
];

export function Features() {
  const { openContactModal } = useContactModal();

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            Powerful <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your business with our cutting-edge AI services designed to boost efficiency and drive growth.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              {/* Icon Row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-violet-400" />
                </div>
                {service.hasRobot && (
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#1a1a2e] flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats (for R&D card) */}
              {service.stats && (
                <div className="mb-6 glass-card-light p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.stats.value}</div>
                      <div className="text-xs text-gray-400">{service.stats.label}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-violet-600/30 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-violet-400" />
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>{service.stats.subLabel}</span>
                    <span>{service.stats.subValue}</span>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={openContactModal}
                className="btn-primary w-full justify-center text-sm group"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Row */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
