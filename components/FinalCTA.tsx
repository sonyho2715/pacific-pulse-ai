"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

export function FinalCTA() {
  const { openContactModal } = useContactModal();

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10" />

      {/* Floating Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center"
        >
          {/* Icon Badge */}
          <div className="floating-badge mx-auto mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Limitless AI, Limitless Potential</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Ready to Transform{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your journey with Pacific Pulse AI today. Experience the power of intelligent automation
            and unlock your business potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button onClick={openContactModal} className="btn-primary group text-lg px-8 py-4">
              Let&apos;s Talk
              <MessageCircle className="w-5 h-5" />
            </button>
            <button onClick={scrollToAbout} className="btn-secondary text-lg px-8 py-4">
              Learn More
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
