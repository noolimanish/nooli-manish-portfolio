import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "manishnooli143@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Open native mailto with filled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Manish,\n\n${formState.message}\n\nBest,\n${formState.name}\n${formState.email}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const socialLinks = [
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "Nooli Manish",
      url: "https://linkedin.com",
      color: "text-[#0077b5]",
      border: "border-[#0077b5]/30 hover:border-[#0077b5]/60",
      icon: (
        <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
    },
    {
      id: "github",
      name: "GitHub",
      handle: "Repositories & Code",
      url: "https://github.com",
      color: "text-white",
      border: "border-white/20 hover:border-white/50",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      id: "medium",
      name: "Medium",
      handle: "AI & Tech Articles",
      url: "https://medium.com",
      color: "text-emerald-400",
      border: "border-emerald-500/30 hover:border-emerald-400/60",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 bg-transparent text-white overflow-hidden border-t border-white/5 z-20 font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
            <span>COMMUNICATION GATEWAY // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">
              High-Impact
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Interested in hiring for AI & backend roles, discussing agentic architectures, or collaborating on high-concurrency software? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Direct Channels & Telemetry (6 cols) */}
          <div className="lg:col-span-6 glacier-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-500/25 bg-[#031518]/85 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div className="space-y-6">
              {/* Direct Email Pill with 1-click Copy */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Direct Email Dispatch
                </span>
                <div className="p-3.5 rounded-2xl bg-[#02090b]/80 border border-teal-500/30 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-mono text-xs sm:text-sm text-teal-300 hover:text-white transition-colors truncate font-semibold"
                  >
                    {emailAddress}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-mono transition-all shrink-0 flex items-center gap-1.5"
                  >
                    {copied ? (
                      <span className="text-emerald-400 font-bold">✓ Copied!</span>
                    ) : (
                      <span>📋 Copy</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Status & Location Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <span>📍</span> Hyderabad, India
                  </div>
                  <div className="text-[10px] font-mono text-teal-400">Remote / Hybrid Ready</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Availability</div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Roles
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">AI & Backend SWE</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Professional Networks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 rounded-xl bg-[#02090b]/60 border ${s.border} flex flex-col justify-between transition-all group hover:-translate-y-1`}
                    >
                      <div className="flex items-center justify-between">
                        {s.icon}
                        <span className="text-[10px] text-slate-400 group-hover:text-white">↗</span>
                      </div>
                      <div className="mt-2">
                        <div className="font-heading font-bold text-xs text-white">{s.name}</div>
                        <div className="text-[9px] font-mono text-slate-400 truncate">{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
              <span className="text-teal-400">STATUS: ONLINE</span>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatcher Form (6 cols) */}
          <div className="lg:col-span-6 glacier-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-500/25 bg-[#031518]/90 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    DISPATCH TRANSMISSION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">ENCRYPTED // DIRECT</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Chen // Engineering Lead"
                    className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Message / Opportunity Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about the role, technical challenge, or project..."
                    className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(0,243,255,0.35)] flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <span className="text-black font-bold">✓ Opening Mail Client...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <span>↗</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 text-center text-[10px] font-mono text-slate-500">
              Form dispatches to manishnooli143@gmail.com with structured headers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

