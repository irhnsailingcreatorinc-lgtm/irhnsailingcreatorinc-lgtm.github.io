import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/6cdeeb50-7f5d-4c6c-8fc8-eb93bd010b61/images/955b028086fe15f95155b94bdff2aa05f193ed5fe56d95f6382e0cfeb1b413b0.png";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,93,57,0.18),transparent_55%)]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:80px_80px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-[1400px] mx-auto px-6 md:px-10"
      >
        {/* Label row */}
        <motion.div variants={item} className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400 font-medium">
            AI Powered Builder / v1.0
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span className="text-xs text-zinc-300">
                Now accepting founding builders
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse-soft" />
            </motion.div>

            <motion.h1
              variants={item}
              data-testid="hero-headline"
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.95] tracking-tight text-balance font-medium"
            >
              Ship the app
              <br />
              you keep <em className="not-italic text-terracotta font-normal italic-alt" style={{ fontStyle: "italic" }}>daydreaming</em>
              <br />
              about.
            </motion.h1>
          </div>

          <motion.div
            variants={item}
            className="lg:col-span-4 lg:pl-8 lg:border-l border-white/10"
          >
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
              Nicole&rsquo;s AI Studio turns plain-language prompts into full-stack
              apps, SaaS products and automation systems &mdash; with production
              code you actually own.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                data-testid="cta-start-building"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-obsidian font-medium hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(217,93,57,0.55)] transition-all"
              >
                Start Building
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#workflow"
                data-testid="cta-watch-demo"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-bone hover:bg-white/10 transition-colors"
              >
                <Play className="w-4 h-4 text-terracotta" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-white/10 pt-10"
        >
          {[
            { k: "12K+", v: "Builders shipping weekly" },
            { k: "48s", v: "Median prompt to preview" },
            { k: "100%", v: "Source code exportable" },
            { k: "0", v: "Config files to write" },
          ].map((s, i) => (
            <div
              key={i}
              className={`md:px-8 ${
                i !== 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <div className="font-display text-3xl md:text-4xl text-bone font-medium tracking-tight">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mt-2">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
