import React from "react";

const LOGOS = [
  "OPENAI",
  "ANTHROPIC",
  "STRIPE",
  "SUPABASE",
  "VERCEL",
  "MONGODB",
  "RESEND",
  "TWILIO",
  "GEMINI",
  "FIGMA",
];

export default function Marquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section
      data-testid="marquee-section"
      className="relative py-10 border-y border-white/10 bg-obsidian overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-6 flex items-center gap-4">
        <div className="h-px w-8 bg-white/20" />
        <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          Wire up every service you already use
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="flex marquee whitespace-nowrap gap-16 will-change-transform">
          {items.map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl tracking-widest text-zinc-600 hover:text-terracotta transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
