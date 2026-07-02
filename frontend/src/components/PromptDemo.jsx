import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Layers, CheckCircle2 } from "lucide-react";

const PROMPTS = [
  {
    text: "A marketplace for vintage synthesizers with Stripe checkout, seller messaging and a wishlist.",
    tags: ["Marketplace", "Stripe", "Messaging"],
  },
  {
    text: "A meal-planning app that generates weekly menus from my pantry and drops the shopping list into Instacart.",
    tags: ["Consumer", "AI", "Automation"],
  },
  {
    text: "An internal CRM for our sales team with pipeline stages, Slack alerts, and a Notion export.",
    tags: ["B2B", "Slack", "Integrations"],
  },
];

const STEPS = [
  { label: "Parsing intent", icon: Terminal },
  { label: "Drafting schema", icon: Layers },
  { label: "Generating UI", icon: Cpu },
  { label: "Ready to ship", icon: CheckCircle2 },
];

function useTyped(text, speed = 22) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export default function PromptDemo() {
  const [idx, setIdx] = useState(0);
  const current = PROMPTS[idx];
  const typed = useTyped(current.text);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % PROMPTS.length), 8500);
    return () => clearTimeout(t);
  }, [idx]);

  useEffect(() => {
    setActiveStep(0);
    const ids = STEPS.map((_, i) =>
      setTimeout(() => setActiveStep(i), 1200 + i * 900)
    );
    return () => ids.forEach(clearTimeout);
  }, [idx]);

  return (
    <section
      id="demo"
      data-testid="prompt-demo-section"
      className="relative py-24 md:py-36 border-t border-white/10 bg-obsidian overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-terracotta/10 blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                Live demo
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight font-medium leading-[1.05] text-balance">
              From sentence to
              <br />
              <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
                shipping
              </em>{" "}
              in under a minute.
            </h2>
            <p className="mt-6 text-zinc-400 max-w-md leading-relaxed">
              Type what you want. Watch the studio parse intent, model your
              data, and draft real UI in the same breath.
            </p>

            <div className="mt-8 flex gap-2">
              {PROMPTS.map((_, i) => (
                <button
                  key={i}
                  data-testid={`prompt-pill-${i}`}
                  onClick={() => setIdx(i)}
                  className={`w-10 h-1.5 rounded-full transition-all ${
                    i === idx ? "bg-terracotta w-16" : "bg-white/15"
                  }`}
                  aria-label={`Prompt ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-3xl border border-white/10 bg-surface overflow-hidden shadow-[0_40px_80px_-40px_rgba(217,93,57,0.35)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-black/40">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta/70" />
                <div className="ml-3 text-[11px] font-mono text-zinc-500 tracking-tight">
                  studio.nicoleai / new
                </div>
              </div>

              {/* Prompt input */}
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-3">
                  Prompt
                </div>
                <div className="font-display text-xl md:text-2xl lg:text-3xl leading-snug text-bone min-h-[112px] md:min-h-[132px]">
                  <span data-testid="prompt-typed">{typed}</span>
                  <span className="inline-block w-[2px] h-6 md:h-7 lg:h-8 bg-terracotta align-middle ml-1 animate-pulse-soft" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-zinc-400 bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Build pipeline */}
              <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {STEPS.map((s, i) => {
                  const active = i <= activeStep;
                  const done = i < activeStep;
                  return (
                    <motion.div
                      key={s.label}
                      animate={{
                        borderColor: active ? "rgba(217,93,57,0.5)" : "rgba(255,255,255,0.08)",
                        backgroundColor: done ? "rgba(217,93,57,0.06)" : "rgba(255,255,255,0.02)",
                      }}
                      transition={{ duration: 0.4 }}
                      className="rounded-xl border p-4 flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <s.icon
                          className={`w-4 h-4 ${
                            active ? "text-terracotta" : "text-zinc-600"
                          }`}
                        />
                        {done ? (
                          <CheckCircle2 className="w-4 h-4 text-terracotta" />
                        ) : (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              i === activeStep
                                ? "bg-terracotta animate-pulse-soft"
                                : "bg-zinc-700"
                            }`}
                          />
                        )}
                      </div>
                      <div
                        className={`text-xs font-medium tracking-tight ${
                          active ? "text-bone" : "text-zinc-500"
                        }`}
                      >
                        {s.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Preview */}
              <div className="border-t border-white/10 bg-black/30 p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-4">
                  Generated preview
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-12 gap-3"
                  >
                    <div className="col-span-12 md:col-span-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <div className="h-2 w-16 rounded-full bg-terracotta/60 mb-3" />
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-4/5 rounded-full bg-white/10" />
                        <div className="h-2 w-3/5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-between">
                      <div className="h-2 w-14 rounded-full bg-white/15" />
                      <div className="font-display text-2xl text-bone">$42.9k</div>
                      <div className="text-[10px] uppercase tracking-widest text-terracotta">
                        +18.2%
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-4 rounded-lg border border-white/10 bg-terracotta/10 p-4 flex items-end">
                      <div className="w-full flex items-end gap-1 h-16">
                        {[40, 60, 30, 75, 55, 90, 68].map((h, k) => (
                          <div
                            key={k}
                            className="flex-1 rounded-t bg-terracotta/80"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
