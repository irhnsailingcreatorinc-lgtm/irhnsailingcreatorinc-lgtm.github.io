import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Rocket,
  Shield,
  Code2,
  Wand2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const AI_BRAIN =
  "https://static.prod-images.emergentagent.com/jobs/6cdeeb50-7f5d-4c6c-8fc8-eb93bd010b61/images/3445bcd6bfd66f0ff9d1dd8192b0d31954ee2e4e8148d59fa8f954ed0bd06e68.png";
const DEPLOY_IMG =
  "https://static.prod-images.emergentagent.com/jobs/6cdeeb50-7f5d-4c6c-8fc8-eb93bd010b61/images/371ae456280dfc88e8d87b6453b0347c9366dd8c7ca2fdbbd2afe0b7a96a47bc.png";

const features = [
  {
    icon: Brain,
    title: "An AI that reads your intent.",
    text: "Describe the app in plain English. The studio drafts data models, screens, and API routes in one pass.",
    span: "md:col-span-8 md:row-span-2",
    kind: "hero",
    image: AI_BRAIN,
    tag: "01 / Core",
  },
  {
    icon: Rocket,
    title: "Deploy in one keystroke.",
    text: "From prompt to production URL with zero YAML.",
    span: "md:col-span-4",
    kind: "media",
    image: DEPLOY_IMG,
    tag: "02",
  },
  {
    icon: Shield,
    title: "Auth, DB & APIs built-in.",
    text: "Modern security defaults with production-ready primitives.",
    span: "md:col-span-4",
    kind: "text",
    tag: "03",
  },
  {
    icon: Code2,
    title: "Every line, yours.",
    text: "Export production-grade React, FastAPI and Mongo — no lock-in.",
    span: "md:col-span-4",
    kind: "text",
    tag: "04",
  },
  {
    icon: Wand2,
    title: "Interfaces that don't look AI-made.",
    text: "Curated typography, motion and layout systems ship by default.",
    span: "md:col-span-4",
    kind: "text",
    tag: "05",
  },
  {
    icon: Sparkles,
    title: "Agents you can compose.",
    text: "Chain LLMs, tools and cron into automations that run themselves.",
    span: "md:col-span-4",
    kind: "text",
    tag: "06",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                What&rsquo;s inside
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance font-medium">
              Six things that make it feel <em className="text-terracotta not-italic" style={{ fontStyle: "italic" }}>unfair</em>.
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm">
            A tightly-scoped toolkit, not a bloated platform. Every capability
            was earned by shipping a real product with it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              data-testid={`feature-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-8 md:p-10 ${f.span}`}
            >
              {f.kind === "hero" && (
                <>
                  <div className="absolute inset-0 opacity-90">
                    <img
                      src={f.image}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-obsidian/70 to-transparent" />
                  </div>
                  <div className="relative h-full flex flex-col justify-between min-h-[380px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                        {f.tag}
                      </span>
                      <f.icon className="w-5 h-5 text-terracotta" />
                    </div>
                    <div className="max-w-lg">
                      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone font-medium leading-[1.05]">
                        {f.title}
                      </h3>
                      <p className="mt-5 text-zinc-300 text-base md:text-lg leading-relaxed">
                        {f.text}
                      </p>
                      <div className="mt-8 inline-flex items-center gap-2 text-terracotta text-sm">
                        Learn more
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {f.kind === "media" && (
                <>
                  <div className="absolute inset-0 opacity-70">
                    <img
                      src={f.image}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/60 to-obsidian" />
                  </div>
                  <div className="relative h-full flex flex-col justify-between min-h-[380px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                        {f.tag}
                      </span>
                      <f.icon className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight text-bone font-medium leading-tight">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {f.kind === "text" && (
                <div className="relative h-full flex flex-col justify-between min-h-[200px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                      {f.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 grid place-items-center group-hover:border-terracotta group-hover:bg-terracotta/10 transition-colors">
                      <f.icon className="w-4 h-4 text-terracotta" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight text-bone font-medium leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
