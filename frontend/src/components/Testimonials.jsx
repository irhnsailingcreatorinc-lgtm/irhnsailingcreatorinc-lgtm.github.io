import React from "react";
import { motion } from "framer-motion";

const QUOTES = [
  {
    quote:
      "I shipped a working invoicing product in a weekend. My co-founder thought I'd hired an agency.",
    name: "Maya Osei",
    role: "Founder, Tallywave",
    initials: "MO",
  },
  {
    quote:
      "The default aesthetic alone would justify the price. It just so happens the code is production-clean too.",
    name: "Jonas Weiss",
    role: "Design Lead, Kaltura",
    initials: "JW",
  },
  {
    quote:
      "Our lean team stopped hiring contractors. Two engineers now ship what used to take six.",
    name: "Priya Ramesh",
    role: "CTO, Northlane",
    initials: "PR",
  },
  {
    quote:
      "It reads intent like a senior product engineer. First tool I've kept paying for after the free trial.",
    name: "Sam Iverson",
    role: "Indie hacker",
    initials: "SI",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                Loved by builders
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight font-medium leading-[1.05] text-balance">
              What the first
              <br />
              <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
                thousand
              </em>{" "}
              said.
            </h2>
            <p className="mt-6 text-zinc-400 max-w-sm leading-relaxed">
              Founders, engineers, and design leads shipping real revenue with
              the studio. A few of their unsolicited notes.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {QUOTES.map((q, i) => (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`testimonial-card-${i}`}
                className={`rounded-2xl border border-white/10 bg-surface p-8 flex flex-col justify-between ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <blockquote
                  className={`font-display text-bone leading-snug tracking-tight ${
                    i === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                  }`}
                >
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-ochre grid place-items-center font-display text-sm text-obsidian">
                    {q.initials}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm text-bone">{q.name}</div>
                    <div className="text-xs text-zinc-500">{q.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
