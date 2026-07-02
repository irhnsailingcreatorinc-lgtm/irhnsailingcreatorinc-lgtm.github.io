import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Describe it",
    text: "\u201CA marketplace for vintage synthesizers with stripe checkout and seller messaging.\u201D",
  },
  {
    n: "02",
    title: "Watch it build",
    text: "Schemas, endpoints, screens and state are drafted in real time. You approve, tweak, iterate.",
  },
  {
    n: "03",
    title: "Ship it",
    text: "One click deploys to a live URL. Export the source when you\u2019re ready.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      data-testid="workflow-section"
      className="relative py-24 md:py-36 border-t border-white/10 bg-[#0c0c0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                How it works
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight font-medium text-balance">
              Three steps.
              <br />
              No boilerplate.
            </h2>
            <p className="mt-6 text-zinc-400 max-w-sm">
              We compress the boring ninety percent so you spend all your time
              on the ten percent that actually differentiates your product.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`workflow-step-${i}`}
                className="relative rounded-2xl border border-white/10 bg-surface p-8 flex flex-col justify-between min-h-[280px] hover:border-terracotta/60 transition-colors"
              >
                <span className="font-display text-6xl text-terracotta/80 leading-none">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bone font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
