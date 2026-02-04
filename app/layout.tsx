import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Pacific Pulse AI - Scale Your Business with AI That Works",
  description: "Transform your business with Pacific Pulse AI. Intelligent automation, predictive analytics, and real-time optimization powered by cutting-edge artificial intelligence.",
  keywords: ["AI", "artificial intelligence", "business automation", "predictive analytics", "machine learning", "AI consulting", "enterprise AI"],
  authors: [{ name: "Pacific Pulse AI" }],
  openGraph: {
    title: "Pacific Pulse AI - Scale Your Business with AI That Works",
    description: "Transform your business with intelligent automation and predictive analytics.",
    type: "website",
    locale: "en_US",
    siteName: "Pacific Pulse AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Pulse AI - Scale Your Business with AI That Works",
    description: "Transform your business with intelligent automation and predictive analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${kanit.variable}`}>
      <body className="font-sans">
        <ToastProvider>
          <ContactModalProvider>{children}</ContactModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
