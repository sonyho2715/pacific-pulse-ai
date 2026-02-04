"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Basic AI features",
      "10,000 requests/month",
      "Email support",
      "Dashboard analytics",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "For growing businesses ready to scale",
    features: [
      "Advanced AI features",
      "100,000 requests/month",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Team collaboration",
      "White-label options",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro",
      "Unlimited requests",
      "Dedicated support",
      "Custom AI models",
      "SLA guarantee",
      "On-premise deployment",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
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
          <span className="section-label">PRICING</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl bg-[#12121f] border ${
                  plan.popular
                    ? "border-violet-500 shadow-lg shadow-violet-500/20"
                    : "border-violet-500/20"
                } backdrop-blur-sm`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={openContactModal}
                  className={`w-full mb-8 py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "btn-primary justify-center"
                      : "bg-transparent border border-violet-500/30 text-white hover:bg-violet-500/10"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
