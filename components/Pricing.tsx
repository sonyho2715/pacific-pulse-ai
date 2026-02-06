"use client";

import { motion } from "framer-motion";
import { Check, Globe, Bot, Calendar, ShoppingCart } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

const services = [
  {
    name: "Web Development",
    icon: Globe,
    description: "Custom websites and web applications built for growth",
    features: [
      "Next.js 15 + React + TypeScript",
      "Vercel hosting with 99.9% uptime",
      "PostgreSQL database on Railway",
      "SEO optimized for local search",
      "Mobile-first responsive design",
      "Google Analytics & conversion tracking",
    ],
    examples: "VietHawaii (50K+ monthly users)",
    popular: false,
  },
  {
    name: "AI Automation",
    icon: Bot,
    description: "24/7 AI assistants that handle inquiries and capture leads",
    features: [
      "Claude AI with custom business training",
      "Lead capture with CRM integration",
      "Multi-language support available",
      "Calendar sync (Google, Calendly, Acuity)",
      "Natural language understanding & context",
      "Smart escalation to human when needed",
    ],
    examples: "Aloha Coaches (80% of inquiries)",
    popular: true,
  },
  {
    name: "Booking & Payments",
    icon: ShoppingCart,
    description: "Complete booking systems with automated payments",
    features: [
      "Custom booking or platform integration",
      "Stripe payment & deposit collection",
      "Twilio SMS/email reminders",
      "Multi-service and multi-staff support",
      "Custom availability rules & buffers",
      "PCI-DSS compliant (we never store cards)",
    ],
    examples: "Aloha Massage Spa (12-47 weekly bookings)",
    popular: false,
  },
];

export function Pricing() {
  const { openContactModal } = useContactModal();

  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">SERVICES & PRICING</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            Custom Solutions,{" "}
            <span className="gradient-text">Transparent Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every business is unique. We build custom solutions tailored to your
            specific needs. Schedule a free consultation to discuss your project
            and receive a detailed proposal.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full p-8 rounded-2xl bg-[#12121f] border ${
                    service.popular
                      ? "border-violet-500 shadow-lg shadow-violet-500/20"
                      : "border-violet-500/20"
                  } backdrop-blur-sm`}
                >
                  {/* Service Icon & Header */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-white">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Example Case Study */}
                  <div className="pt-4 border-t border-violet-500/20 mb-6">
                    <p className="text-xs text-violet-400 font-semibold mb-1">
                      CASE STUDY
                    </p>
                    <p className="text-sm text-gray-300">{service.examples}</p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={openContactModal}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                      service.popular
                        ? "btn-primary justify-center"
                        : "bg-transparent border border-violet-500/30 text-white hover:bg-violet-500/10"
                    }`}
                  >
                    Get Custom Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#12121f] border border-violet-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              How We Price Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-violet-400">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  Free Consultation
                </h4>
                <p className="text-sm text-gray-400">
                  30-minute call to understand your business, goals, and
                  technical requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-violet-400">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  Detailed Proposal
                </h4>
                <p className="text-sm text-gray-400">
                  Within 48 hours, receive a proposal with timeline, pricing,
                  and exactly what we'll build
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-violet-400">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  Transparent Build
                </h4>
                <p className="text-sm text-gray-400">
                  Weekly progress updates. You see exactly what we're building,
                  no surprises
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={openContactModal}
                className="btn-primary inline-flex items-center justify-center"
              >
                Schedule Free Consultation
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No obligation. We'll honestly tell you if we're a good fit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-2">
            <span className="text-violet-400 font-semibold">
              90-Day ROI Guarantee:
            </span>{" "}
            If you don't see at least 10 new bookings or your setup fee back in
            90 days, we'll refund your project fee. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
