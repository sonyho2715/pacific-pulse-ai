"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Basic AI features",
      "10,000 requests/month",
      "Email support",
      "Dashboard analytics",
      "API access",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$2,500",
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
    popular: true,
  },
  {
    id: "enterprise",
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
  },
];

export default function ApplyPage() {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#0a0a12] text-white">
        <Navbar />
        <div className="pt-32 pb-24 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-display font-bold mb-4">
              Application Received!
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for your interest in Pacific Pulse AI. Our team will
              review your application and contact you within 24-48 hours.
            </p>
            <a
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a12] text-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="section-label">GET STARTED</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
              Apply for <span className="gradient-text">Pacific Pulse AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select your plan and fill out the form below. Our team will reach
              out to get you started.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Plan Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                1. Select Your Plan
              </h2>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative p-6 rounded-xl cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? "bg-violet-600/20 border-2 border-violet-500"
                        : "bg-[#12121f] border-2 border-violet-500/20 hover:border-violet-500/40"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {plan.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold gradient-text">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                2. Your Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121f] border border-violet-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121f] border border-violet-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121f] border border-violet-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121f] border border-violet-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121f] border border-violet-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    placeholder="What are you looking to achieve with AI?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center py-4 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-violet-400 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-violet-400 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
