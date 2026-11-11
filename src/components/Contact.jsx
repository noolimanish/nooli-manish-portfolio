import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [activeIntent, setActiveIntent] = useState("fulltime");
  const [viewMode, setViewMode] = useState("form"); // "form" | "json"
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "nmanish10@gmail.com";
  const phoneNumber = "+91 7569596435";

  const intents = [
    {
      id: "fulltime",
      label: "Full-Time Role (AI / Backend)",
      icon: "🎯",
      defaultMsg:
        "Hi Manish, we have an engineering opportunity (AI / Python Backend) and would love to discuss your experience.",
    },
    {
      id: "agentic",
      label: "Agentic AI & RAG Systems",
      icon: "🧠",
      defaultMsg:
        "Hi Manish, saw your CineScript 4-tier RAG and MCP server work. We'd like to discuss building agentic workflows with you.",
    },
    {
      id: "backend",
      label: "Python Backend & Architecture",
      icon: "⚙️",
      defaultMsg:
        "Hi Manish, we're building high-concurrency Python/Django microservices and need your systems engineering expertise.",
    },
    {
      id: "sync",
      label: "Technical Sync / Chat",
      icon: "☕",
      defaultMsg:
        "Hi Manish, saw your portfolio and would love to connect for a casual engineering exchange.",
    },
  ];

  const handleSelectIntent = (intentId) => {
    setActiveIntent(intentId);
    const selected = intents.find((i) => i.id === intentId);
    if (selected && (!formState.message || intents.some((i) => i.defaultMsg === formState.message))) {
      setFormState((prev) => ({ ...prev, message: selected.defaultMsg }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const currentIntentObj = intents.find((i) => i.id === activeIntent);
    const subject = encodeURIComponent(
      `[${currentIntentObj ? currentIntentObj.label : "Inquiry"}] Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Hi Manish,\n\nIntent: ${currentIntentObj ? currentIntentObj.label : "General"}\nFrom: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}\n\n---\nSent via Manish Nooli Portfolio Transmission Protocol`
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
      handle: "in/noolimanish",
      url: "https://www.linkedin.com/in/noolimanish/",
      color: "text-[#0077b5]",
      border: "border-[#0077b5]/30 hover:border-[#0077b5]/60",
      icon: (
        <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      id: "github",
      name: "GitHub",
      handle: "github.com/noolimanish",
      url: "https://github.com/noolimanish",
      color: "text-white",
      border: "border-white/20 hover:border-white/50",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      id: "behance",
      name: "Behance",
      handle: "behance.net/nmanish",
      url: "https://www.behance.net/nmanish",
      color: "text-cyan-400",
      border: "border-cyan-500/30 hover:border-cyan-400/60",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.148 0-6.625-3.051-6.625-6.85 0-3.957 2.62-6.95 6.425-6.95 4.398 0 5.867 3.447 5.568 6.95h-9.156c.074 2.148 1.488 4.25 3.864 4.25 1.733 0 2.871-.852 3.325-1.95h1.7zm-4.726-5.8c-.059-1.802-1.282-3.2-3.15-3.2-1.968 0-3.197 1.398-3.325 3.2h6.475zm-13.411 7.8h-5.589v-14h5.719c3.082 0 4.945 1.574 4.945 4.092 0 1.583-.873 2.895-2.28 3.518 1.761.644 2.617 2.152 2.617 3.842 0 2.756-2.122 4.548-5.412 4.548zm-2.889-8.1h2.511c1.55 0 2.485-.75 2.485-1.933 0-1.229-.982-1.867-2.435-1.867h-2.561v3.8zm0 5.95h2.695c1.677 0 2.784-.813 2.784-2.175 0-1.398-1.074-2.175-2.734-2.175h-2.745v4.35z" />
        </svg>
      ),
    },
  ];

  const payloadJson = JSON.stringify(
    {
      protocol: "SECURE_DISPATCH_v2.4",
      destination: "nmanish10@gmail.com",
      status: "OPEN_FOR_ROLES",
      sender: {
        identity: formState.name || "Anonymous Reviewer",
        contact_channel: formState.email || "pending_input@domain.com",
      },
      transmission_intent: intents.find((i) => i.id === activeIntent)?.label,
      payload_message: formState.message || "Message buffer empty...",
      telemetry: {
        latency: "18ms",
        encryption: "TLS_1.3_STRICT",
        location: "Hyderabad, India (IST / UTC+5:30)",
      },
    },
    null,
    2
  );

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 bg-transparent text-white overflow-hidden border-t border-white/5 z-20 font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
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
            Actively open to full-time AI Engineering & Backend roles, discussing agentic architectures, or collaborating on high-throughput software.
          </p>

          {/* Live Handshake Telemetry Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-[#031518]/90 border border-teal-500/25 text-[11px] font-mono text-slate-300 backdrop-blur-md mt-2 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold">LIVE TELEMETRY: 18ms</span>
            </div>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300">TLS 1.3 ENCRYPTED</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">TARGET: MANISH AI GATEWAY</span>
          </div>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Direct Channels & Telemetry (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 glacier-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-500/25 bg-[#031518]/85 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-6">
              {/* Direct Email & Phone Pills with 1-click Copy */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      Direct Email Dispatch
                    </span>
                    <span className="text-[10px] font-mono text-teal-400">Response &lt; 12h</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#02090b]/80 border border-teal-500/30 flex items-center justify-between gap-2 hover:border-teal-400/50 transition-colors">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-mono text-xs sm:text-sm text-teal-300 hover:text-white transition-colors truncate font-semibold"
                    >
                      {emailAddress}
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={handleCopyEmail}
                        className="px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-mono transition-all flex items-center gap-1"
                      >
                        {copied ? (
                          <span className="text-emerald-400 font-bold">✓ Copied!</span>
                        ) : (
                          <span>📋 Copy</span>
                        )}
                      </button>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="p-1.5 rounded-xl bg-white/5 hover:bg-teal-500/20 text-slate-300 hover:text-white border border-white/10 transition-all text-xs"
                        title="Open Email Client"
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      Direct Phone & WhatsApp
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">Direct Connect</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#02090b]/80 border border-cyan-500/30 flex items-center justify-between gap-2 hover:border-cyan-400/50 transition-colors">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-mono text-xs sm:text-sm text-cyan-300 hover:text-white transition-colors truncate font-semibold"
                    >
                      {phoneNumber}
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={handleCopyPhone}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-all flex items-center gap-1"
                      >
                        {phoneCopied ? (
                          <span className="text-emerald-400 font-bold">✓ Copied!</span>
                        ) : (
                          <span>📋 Copy</span>
                        )}
                      </button>
                      <a
                        href={`https://wa.me/917569596435?text=${encodeURIComponent(
                          "Hi Manish, I reviewed your engineering portfolio and would like to connect."
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1"
                        title="Chat on WhatsApp"
                      >
                        <span>💬</span>
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Location Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location & Base</div>
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <span>📍</span> Hyderabad, India
                  </div>
                  <div className="text-[10px] font-mono text-teal-400">Remote / Hybrid / Relocation Ready</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Current Availability</div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Offers
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">AI / Python Backend SWE</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Verified Engineering Networks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 rounded-xl bg-[#02090b]/60 border ${s.border} flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-md`}
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
              <span className="text-teal-400">DISPATCH SLA: &lt; 12 HOURS</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300">SYSTEMS READY</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Protocol Console & Dispatcher (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 glacier-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-500/25 bg-[#031518]/90 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-5"
          >
            <div>
              {/* Terminal Console Header with Mode Toggle */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    INTERACTIVE PROTOCOL DISPATCH
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#02090b] p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                  <button
                    type="button"
                    onClick={() => setViewMode("form")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      viewMode === "form"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-400/40 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Form View
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("json")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      viewMode === "json"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    JSON Stream
                  </button>
                </div>
              </div>

              {/* Interactive Intent Chips */}
              <div className="mb-4 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Select Opportunity Scope:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {intents.map((item) => {
                    const isSelected = activeIntent === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectIntent(item.id)}
                        className={`p-2 rounded-xl text-[11px] font-mono text-left transition-all flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-cyan-400 text-white shadow-[0_0_12px_rgba(0,243,255,0.2)] font-bold"
                            : "bg-[#02090b]/60 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15"
                        }`}
                      >
                        <span className="shrink-0">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* View Mode 1: Interactive Dispatch Form */}
              {viewMode === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Your Identity / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Chen // Engineering Lead"
                      className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Your Contact Channel (Email)
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Transmission Payload / Project Scope
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about the role, tech stack, or engineering bottleneck..."
                      className="w-full bg-[#02090b]/80 border border-teal-500/25 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 text-black font-mono font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(0,243,255,0.35)] flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <span className="text-black font-bold">✓ Opening Direct Dispatch Channel...</span>
                    ) : (
                      <>
                        <span>Transmit Encrypted Dispatch</span>
                        <span>↗</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* View Mode 2: Real-time Structured JSON Stream */
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#02090b] border border-cyan-500/30 overflow-x-auto text-[11px] font-mono text-cyan-300 leading-relaxed max-h-[220px]">
                    <pre>{payloadJson}</pre>
                  </div>
                  <button
                    type="button"
                    onClick={() => setViewMode("form")}
                    className="w-full py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-500/30 transition-all text-center"
                  >
                    ← Return to Interactive Dispatch Form
                  </button>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>DESTINATION: nmanish10@gmail.com</span>
              <span className="text-teal-400 font-semibold">STATUS: ENCRYPTED // 200 OK</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
