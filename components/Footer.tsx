"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { useToast } from "@/components/ui/Toast";
import { useContactModal } from "@/components/ContactModalProvider";

const footerLinks = {
  product: [
    { label: "Features", href: "/#services" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Apply", href: "/apply" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "#contact", isContactButton: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const { openContactModal } = useContactModal();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast("error", "Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    const result = await subscribeToNewsletter(email);

    if (result.success) {
      showToast("success", "Successfully subscribed to newsletter!");
      setEmail("");
    } else {
      showToast("error", result.error || "Failed to subscribe");
    }

    setIsSubmitting(false);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string, isContactButton?: boolean) => {
    if (isContactButton) {
      e.preventDefault();
      openContactModal();
      return;
    }

    // Handle smooth scroll for anchor links
    if (href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Handle anchors with path (like /#services) when already on home page
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const anchor = href.substring(1);
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative border-t border-violet-500/10 bg-[#0a0a12]">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold gradient-text">
                PACIFIC PULSE
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-xs">
              Empowering businesses with cutting-edge AI solutions. Transform your operations
              and unlock unlimited potential.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-white font-medium mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-violet-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary py-2.5 px-4 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-8">
            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.isContactButton)}
                      className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-violet-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-violet-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Pacific Pulse AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-violet-400 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-violet-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
