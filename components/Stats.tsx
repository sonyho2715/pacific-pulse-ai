"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Businesses",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction Rate",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "AI Support",
  },
  {
    icon: Zap,
    value: "Enterprise",
    label: "Ready",
  },
];

export function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mb-4">
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
