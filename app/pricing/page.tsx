import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing | Pacific Pulse AI",
  description: "Simple, transparent pricing for AI solutions that transform your business.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a12] text-white">
      <Navbar />
      <div className="pt-20">
        <Pricing />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
