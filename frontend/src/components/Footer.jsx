import React from "react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/10 bg-obsidian"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-terracotta grid place-items-center">
              <span className="font-display text-lg font-semibold text-obsidian">
                N
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-[15px] font-medium">
                Nicole&rsquo;s AI Studio
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                Build Anything
              </div>
            </div>
          </div>
          <p className="mt-6 text-zinc-500 text-sm max-w-sm leading-relaxed">
            A prompt-native studio for makers, founders, and teams who want to
            ship product &mdash; not manage stacks.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-4">
            Studio
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li><a href="#features" className="hover:text-bone transition-colors">Features</a></li>
            <li><a href="#workflow" className="hover:text-bone transition-colors">Workflow</a></li>
            <li><a href="#waitlist" className="hover:text-bone transition-colors">Waitlist</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-4">
            Resources
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-bone transition-colors">Docs</a></li>
            <li><a href="#" className="hover:text-bone transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-bone transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-4">
            Contact
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>hello@nicoleai.studio</li>
            <li>Twitter &mdash; @nicoleaistudio</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span>&copy; {new Date().getFullYear()} Nicole&rsquo;s AI Studio. Crafted with intent.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-bone transition-colors">Privacy</a>
            <a href="#" className="hover:text-bone transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
