import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TEXTURE =
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZXh0dXJlZCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzc5NzU3MTAxfDA&ixlib=rb-4.1.0&q=85";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);
  const [joined, setJoined] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${API}/waitlist/count`)
      .then((r) => mounted && setCount(r.data.count))
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/waitlist`, {
        email: email.trim(),
        interest: interest.trim() || null,
      });
      setJoined(data);
      setCount(data.position);
      toast.success(`You're in. Position #${data.position}.`);
      setEmail("");
      setInterest("");
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        (err?.response?.status === 422
          ? "Please enter a valid email."
          : "Something went wrong. Try again.");
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      data-testid="waitlist-section"
      className="relative py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="absolute inset-0">
            <img
              src={TEXTURE}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian/70 to-surface" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,93,57,0.22),transparent_55%)]" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-8 md:p-14 lg:p-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-terracotta" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  Founding Builders / Early Access
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-bone font-medium leading-[1.05] text-balance">
                Start your next
                <br />
                AI startup <em className="text-terracotta not-italic" style={{ fontStyle: "italic" }}>today</em>.
              </h2>
              <p className="mt-6 text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
                Join the private waitlist. Founding builders get lifetime
                pricing, priority studio access, and a direct line to Nicole.
              </p>

              {count !== null && (
                <div
                  data-testid="waitlist-count"
                  className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-zinc-300"
                >
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse-soft" />
                  {count.toLocaleString()} builders already waiting
                </div>
              )}
            </div>

            <div className="lg:col-span-5 lg:pl-10 lg:border-l border-white/10">
              {joined ? (
                <div
                  data-testid="waitlist-success"
                  className="rounded-2xl border border-terracotta/40 bg-terracotta/10 p-8"
                >
                  <div className="text-[11px] uppercase tracking-[0.28em] text-terracotta mb-3">
                    Confirmed
                  </div>
                  <h3 className="font-display text-2xl text-bone mb-2 font-medium">
                    You&rsquo;re builder #{joined.position}.
                  </h3>
                  <p className="text-zinc-300 text-sm">
                    We&rsquo;ll email <span className="text-bone">{joined.email}</span>{" "}
                    the moment your studio spins up.
                  </p>
                  <button
                    data-testid="waitlist-add-another"
                    onClick={() => setJoined(null)}
                    className="mt-6 text-sm text-terracotta hover:text-ochre transition-colors"
                  >
                    Add another email &rarr;
                  </button>
                </div>
              ) : (
                <form
                  data-testid="waitlist-form"
                  onSubmit={submit}
                  className="rounded-2xl border border-white/10 bg-obsidian/60 backdrop-blur-xl p-6 md:p-8 space-y-4"
                >
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                      Email
                    </span>
                    <input
                      data-testid="waitlist-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-terracotta outline-none py-2.5 text-bone placeholder:text-zinc-600 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                      What will you build? <span className="normal-case tracking-normal text-zinc-600">(optional)</span>
                    </span>
                    <input
                      data-testid="waitlist-interest-input"
                      type="text"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      placeholder="A marketplace, a CRM, a wild idea..."
                      className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-terracotta outline-none py-2.5 text-bone placeholder:text-zinc-600 transition-colors"
                    />
                  </label>
                  <button
                    data-testid="waitlist-submit-button"
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-2 mt-2 px-6 py-3.5 rounded-full bg-terracotta text-obsidian font-medium hover:bg-ochre transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Reserving your seat...
                      </>
                    ) : (
                      <>
                        Request Early Access
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    By joining, you agree to receive occasional product updates.
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
