import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const TIERS = [
  {
    name: "Sketch",
    price: "Free",
    tag: "For tinkering",
    desc: "Everything you need to prototype ideas before your morning coffee gets cold.",
    features: [
      "5 apps per month",
      "Community templates",
      "Preview deployments",
      "Export source code",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Studio",
    price: "$29",
    per: "/mo",
    tag: "Most popular",
    desc: "For makers shipping real revenue. Bring your own keys, keep your builds.",
    features: [
      "Unlimited apps",
      "Custom domains",
      "Priority AI throughput",
      "Automations & agents",
      "Git integration",
    ],
    cta: "Reserve Studio",
    highlighted: true,
  },
  {
    name: "Atelier",
    price: "Let's talk",
    tag: "For teams",
    desc: "White-glove setup with SSO, audit trails and a dedicated build engineer.",
    features: [
      "Everything in Studio",
      "SSO / SAML",
      "SOC 2 workspace",
      "Dedicated engineer",
      "Custom SLAs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-36 border-t border-white/10 bg-[#0c0c0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                Pricing
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-balance">
              Priced like a tool.
              <br />
              Feels like a{" "}
              <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
                team.
              </em>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm">
            Founding builders lock lifetime pricing on the Studio plan. Cancel
            anytime, own everything you shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-testid={`pricing-tier-${t.name.toLowerCase()}`}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                t.highlighted
                  ? "border-terracotta/60 bg-gradient-to-b from-terracotta/[0.08] to-surface glow-ring"
                  : "border-white/10 bg-surface"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.24em] px-3 py-1 rounded-full bg-terracotta text-obsidian font-medium">
                  {t.tag}
                </span>
              )}
              {!t.highlighted && (
                <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {t.tag}
                </span>
              )}

              <div className="mt-4">
                <div className="font-display text-2xl text-bone tracking-tight">
                  {t.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl text-bone tracking-tight">
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-zinc-500 text-sm">{t.per}</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  {t.desc}
                </p>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        t.highlighted ? "text-terracotta" : "text-zinc-500"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className={`mt-8 group inline-flex items-center justify-between px-5 py-3.5 rounded-full text-sm font-medium transition-colors ${
                  t.highlighted
                    ? "bg-terracotta text-obsidian hover:bg-ochre"
                    : "bg-white/5 text-bone border border-white/10 hover:bg-white/10"
                }`}
              >
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
