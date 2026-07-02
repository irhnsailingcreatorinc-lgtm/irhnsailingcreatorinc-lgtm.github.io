import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Do I actually own the code the studio produces?",
    a: "Yes. Every project can be exported as clean, documented React + FastAPI + Mongo source. No vendor runtime, no obfuscation, no lock-in. If we vanished tomorrow your apps would keep shipping.",
  },
  {
    q: "How is this different from a chat-based codegen tool?",
    a: "The studio doesn't just answer prompts \u2014 it builds and maintains a live project: schemas, endpoints, screens, state and deploy pipeline. You steer with prompts, but the model of your product persists between sessions.",
  },
  {
    q: "Which stacks do you support?",
    a: "React 19 + Tailwind on the frontend, FastAPI on the backend, and MongoDB by default. Postgres, Supabase and Convex adapters are on the roadmap for Studio and Atelier plans.",
  },
  {
    q: "Can I bring my own AI keys?",
    a: "On Studio and Atelier, yes \u2014 plug in OpenAI, Anthropic or Gemini. On the free Sketch plan we route through our managed proxy with fair-use limits.",
  },
  {
    q: "What happens after the waitlist?",
    a: "Founding builders get invited in weekly cohorts. You'll receive a personal onboarding link, lifetime Studio pricing, and a direct Slack channel with Nicole and the team.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 md:py-36 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
              Frequently asked
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-medium leading-[1.05] text-balance">
            The questions
            <br />
            we get{" "}
            <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
              most.
            </em>
          </h2>
          <p className="mt-6 text-zinc-400 max-w-sm">
            Missed something? Ping{" "}
            <a
              href="mailto:hello@nicoleai.studio"
              className="text-bone hover:text-terracotta transition-colors border-b border-white/20"
            >
              hello@nicoleai.studio
            </a>{" "}
            and we&rsquo;ll answer within a business day.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} data-testid={`faq-item-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  >
                    <span className="font-display text-lg md:text-xl text-bone tracking-tight leading-snug group-hover:text-terracotta transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border border-white/15 grid place-items-center transition-colors ${
                        isOpen ? "bg-terracotta border-terracotta" : "bg-transparent"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-obsidian" />
                      ) : (
                        <Plus className="w-4 h-4 text-bone" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-16 text-zinc-400 leading-relaxed max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
