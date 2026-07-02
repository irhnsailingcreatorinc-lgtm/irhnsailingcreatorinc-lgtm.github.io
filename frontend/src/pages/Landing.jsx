import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import PromptDemo from "@/components/PromptDemo";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div
      data-testid="landing-page"
      className="relative min-h-screen bg-obsidian text-bone font-body overflow-x-hidden"
    >
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <PromptDemo />
        <Workflow />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
