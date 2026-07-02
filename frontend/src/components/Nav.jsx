import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-obsidian/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a
          href="/"
          data-testid="brand-link"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-terracotta grid place-items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <span className="relative font-display text-lg font-semibold text-obsidian">
              N
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-medium tracking-tight text-bone">
              Nicole&rsquo;s AI Studio
            </div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              Build Anything
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {[
            { label: "Features", id: "features" },
            { label: "Workflow", id: "workflow" },
            { label: "Waitlist", id: "waitlist" },
          ].map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="hover:text-bone transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button
          data-testid="launch-builder-btn"
          onClick={() => scrollTo("waitlist")}
          className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-bone text-obsidian text-sm font-medium hover:bg-terracotta hover:text-obsidian transition-colors duration-300"
        >
          Launch Builder
          <span className="w-7 h-7 rounded-full bg-obsidian text-bone grid place-items-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </motion.header>
  );
}
