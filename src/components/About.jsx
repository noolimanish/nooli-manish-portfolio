import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTerminalTab, setActiveTerminalTab] = useState("profile");
  const [activePillarId, setActivePillarId] = useState("genai");

  const terminalTabs = {
    profile: {
      filename: "manish_profile.json",
      content: {
        name: "Nooli Manish",
        role: "AI & Python Backend Engineer",
        experience: "~2 Years Production Engineering",
        location: "Hyderabad, India",
        company: "Mirafra Technologies",
        client_work: "AMD (Enterprise Backends & AI Telemetry)",
        personal_passion: "Screenwriting, UI/UX Design & Filmography",
        creative_craft: "Medium Case Studies & Business Problem Solving",
        ethos: "Grounded engineering > Hype. Deterministic code backed by tests.",
      },
    },
    story: {
      filename: "why_i_build.md",
      bullets: [
        "• Screenwriting Frustration: I write scripts. Generic LLMs write flat dialogue and lose pacing after 2 scenes.",
        "• The CineScript Fix: Built a domain retrieval engine injecting screenplay rules before LLM generation.",
        "• The AMD Discipline: Automating silicon validation taught me that brittle pipelines block dozens of engineers.",
        "• The Golden Rule: Native Web APIs, clean Python concurrency, and zero buzzword bloat.",
      ],
    },
    stack: {
      filename: "daily_stack.py",
      code: [
        "# Core daily engineering drivers",
        "languages = ['Python 3.12', 'JavaScript (ES6+)']",
        "ai_tooling = ['Google Gemini API', 'Vector Embeddings', 'ReAct Loops', 'MCP']",
        "backend = ['Django / DRF', 'FastAPI', 'SQL', 'Pytest']",
        "frontend = ['React', 'Tailwind CSS', 'Framer Motion', 'Web Workers']",
      ],
    },
  };

  const engineeringPillars = {
    genai: {
      id: "genai",
      title: "Autonomous AI",
      allocation: "40%",
      badge: "Agentic AI & Systems",
      icon: "🧠",
      summary:
        "Building autonomous reasoning loops and targeted vector retrieval that eliminate generic LLM hallucinations and enforce real domain constraints.",
      deliverables: [
        "ReAct agent planners with dynamic tool-calling and observation memory",
        "Vector search injecting structural rules for narrative continuity in CineScript",
        "Secondary critic reviewer loops guaranteeing a 99.4% constraint pass rate",
      ],
      shippedIn: "CineScript Studio & AI Labs",
      metric: "Top-3 Rule Injection • 18ms Latency",
      animationType: "nodes",
    },
    backend: {
      id: "backend",
      title: "Python Backend & AI",
      allocation: "35%",
      badge: "Enterprise Backend",
      icon: "⚙️",
      summary:
        "Engineering high-throughput Python validation pipelines, Django/SQL telemetry systems, and AI-assisted triage microservices for AMD silicon workflows.",
      deliverables: [
        "Automated validation pipelines replacing slow manual payload checks",
        "Intelligent log triage parsers that classify hardware validation errors",
        "Relational telemetry databases with query optimization and Pytest suites",
      ],
      shippedIn: "Mirafra (Client: AMD)",
      metric: "10,000+ Logs/Sec • Zero Regression",
      animationType: "stream",
    },
    uiux: {
      id: "uiux",
      title: "Creativity Corner",
      allocation: "25%",
      badge: "Product Design & UI/UX",
      icon: "🎨",
      summary:
        "Solving real user pain points through thoughtful visual design. I craft clean UI/UX systems, write in-depth product design case studies on Medium, and build intuitive human interfaces.",
      deliverables: [
        "Publishing in-depth UI/UX teardowns and product design case studies on Medium",
        "Deconstructing complex business friction into intuitive, high-conversion visual interfaces",
        "Designing responsive design systems, interactive prototypes, and motion aesthetics in Figma",
      ],
      shippedIn: "Medium Articles & Behance Portfolio",
      metric: "Case Studies • Medium • Behance",
      animationType: "design",
      behanceUrl: "https://www.behance.net",
    },
  };

  const activePillar = engineeringPillars[activePillarId];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 bg-transparent text-white overflow-hidden border-t border-white/5 z-10 font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-[-10%] w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* ========================================================= */}
        {/* TOP HERO GREETING (PROMINENT, IMPRESSIVE SYNE TYPOGRAPHY) */}
        {/* ========================================================= */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>ABOUT ME // BACKGROUND</span>
          </motion.div>

          {/* Big Bold Impressive Headline */}
          <div className="space-y-1.5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-['Syne',sans-serif] font-black tracking-tight text-white leading-tight">
              Hey, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300 drop-shadow-[0_0_35px_rgba(0,243,255,0.35)]">
                Manish.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-['Syne',sans-serif] font-bold text-slate-300 tracking-wide">
              AI & Python Backend Engineer{" "}
              <span className="text-teal-400 font-mono text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30">
                2 Years Experience
              </span>
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BENTO ROW 1: PERSONAL STORY + INTERACTIVE TERMINAL HUD     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* LEFT: Authentic Story Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glacier-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-teal-500/25 bg-[#031518]/85 backdrop-blur-2xl flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-3.5">
              {/* Online Location Status */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono text-teal-300 font-bold tracking-wider uppercase">
                  ACTIVE @ MIRAFRA TECHNOLOGIES • CLIENT: AMD • HYDERABAD
                </span>
              </div>

              {/* Bio Narrative */}
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
                <p>
                  I'm an <strong className="text-white font-semibold">AI & Python Backend Engineer</strong> who loves cinema, storytelling, and building systems that eliminate real engineering friction.
                </p>
                <p>
                  I've always loved writing film scripts. When I noticed generic LLMs generated flat, repetitive scenes that drifted off-narrative after two beats, I built <span className="text-purple-300 font-medium">CineScript Studio</span> to solve my own creative frustration—using multi-tier vector retrieval to inject dramaturgical rules before generation.
                </p>
                <p>
                  At <strong className="text-teal-300 font-semibold">Mirafra Technologies for client AMD</strong>, I bring that same intolerance for friction to backend architecture: automating high-throughput validation pipelines, building telemetry microservices, and developing intelligent log triage that classifies silicon errors automatically.
                </p>
              </div>
            </div>

            {/* Quick Context Chips */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1">
                <span>📍</span> Hyderabad, India
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold flex items-center gap-1">
                <span>💼</span> 2 Years Experience
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1">
                <span>🎬</span> Film & Screenwriting
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                <span>⚡</span> Backend + AI Triage
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Compact Terminal HUD (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glacier-card rounded-2xl sm:rounded-3xl border border-teal-500/30 bg-[#02090b]/90 backdrop-blur-2xl flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Terminal Header */}
            <div className="px-4 py-2.5 bg-[#031518] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1 bg-[#02090b] p-0.5 rounded-lg border border-white/10 text-[9px] sm:text-[10px] font-mono">
                {Object.keys(terminalTabs).map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTerminalTab(tabKey)}
                    className={`px-2 py-0.5 rounded-md transition-all capitalize ${
                      activeTerminalTab === tabKey
                        ? "bg-teal-500/20 text-teal-300 border border-teal-400/40 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tabKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Content Body */}
            <div className="p-4 font-mono text-[11px] text-slate-300 flex-1 overflow-x-auto min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTerminalTab === "profile" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-1"
                  >
                    <div className="text-slate-500 text-[10px] mb-1.5">
                      // {terminalTabs.profile.filename}
                    </div>
                    {Object.entries(terminalTabs.profile.content).map(([k, v]) => (
                      <div key={k} className="leading-snug">
                        <span className="text-cyan-400">"{k}"</span>:{" "}
                        <span className="text-emerald-300">"{v}"</span>,
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTerminalTab === "story" && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-2 text-[10px] sm:text-[11px] text-slate-300"
                  >
                    <div className="text-slate-500 text-[10px]">
                      /* {terminalTabs.story.filename} */
                    </div>
                    {terminalTabs.story.bullets.map((b, i) => (
                      <div key={i} className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 leading-relaxed">
                        {b}
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTerminalTab === "stack" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-1 text-slate-300 text-[10px] sm:text-[11px]"
                  >
                    <div className="text-slate-500 text-[10px] mb-1">
                      # {terminalTabs.stack.filename}
                    </div>
                    {terminalTabs.stack.code.map((line, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {line.startsWith("#") ? (
                          <span className="text-slate-500">{line}</span>
                        ) : line.includes("=") ? (
                          <span>
                            <span className="text-cyan-300">{line.split("=")[0]}</span>=
                            <span className="text-amber-300">{line.split("=")[1]}</span>
                          </span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Terminal Prompt Bar */}
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-500">
                <span className="text-teal-400">➜</span>
                <span className="text-slate-400">~/manish</span>
                <span className="text-teal-300 font-bold">git:(main)</span>
                <span className="w-1.5 h-2.5 bg-teal-400 animate-pulse inline-block" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* BENTO ROW 2: ULTRA-COMPACT INTERACTIVE ENGINEERING HUB     */}
        {/* (Eliminates giant vertical boxes; reduced height by 60%!) */}
        {/* ========================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
            <div>
              <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>TIME ALLOCATION</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight mt-0.5">
                Where I Spend My Time
              </h3>
            </div>

            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
              Select category to inspect live simulation
            </span>
          </div>

          {/* Interactive Responsive Pill Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#031518]/90 border border-teal-500/25 w-full max-w-3xl backdrop-blur-xl">
            {Object.values(engineeringPillars).map((p) => {
              const isSelected = activePillarId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 flex items-center justify-between text-left ${
                    isSelected
                      ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-[0_0_15px_rgba(0,243,255,0.35)]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm shrink-0">{p.icon}</span>
                    <span className="font-semibold text-xs sm:text-[13px] tracking-tight">{p.title}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md shrink-0 ml-2 ${
                      isSelected
                        ? "bg-black/25 text-black font-extrabold"
                        : "text-teal-300 bg-white/5 border border-white/5"
                    }`}
                  >
                    {p.allocation}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SINGLE COMPACT UNIFIED INTERACTIVE WORKBENCH CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="glacier-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-teal-400/40 bg-[#031518]/90 backdrop-blur-2xl shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left 7 cols: Crisp summary & Deliverables */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{activePillar.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-teal-400/40 bg-teal-500/10 text-teal-300 font-bold">
                          {activePillar.badge}
                        </span>
                        <span className="text-xs font-mono text-cyan-300 font-bold">
                          {activePillar.allocation} Time Focus
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-heading font-black text-white tracking-tight mt-0.5">
                        {activePillar.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {activePillar.summary}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {activePillar.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-teal-400 mt-0.5 text-[11px] font-bold">▹</span>
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* UI/UX Portfolio Link Button */}
                  {activePillar.behanceUrl && (
                    <div className="pt-2">
                      <a
                        href={activePillar.behanceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,243,255,0.35)] group"
                      >
                        <span>View UI/UX Portfolio</span>
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono">
                    <span className="text-slate-400">Shipped In: <strong className="text-cyan-300">{activePillar.shippedIn}</strong></span>
                    <span className="self-start sm:self-auto text-teal-300 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-[10px] sm:text-[11px]">
                      {activePillar.metric}
                    </span>
                  </div>
                </div>

                {/* Right 5 cols: Playful Interactive Live Simulation */}
                <div className="lg:col-span-5 rounded-2xl bg-[#02090b]/90 border border-teal-500/30 p-4 flex flex-col justify-between min-h-[160px]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      LIVE SIMULATION ENGINE
                    </span>
                    <span>ACTIVE</span>
                  </div>

                  {/* Animation 1: ReAct Node Pathway */}
                  {activePillar.animationType === "nodes" && (
                    <div className="w-full flex items-center justify-between px-2 py-4 relative">
                      {["Prompt", "Vector RAG", "Gemini Pro", "Critic QA"].map((node, idx) => (
                        <div key={node} className="flex flex-col items-center gap-1.5 z-10">
                          <motion.div
                            animate={{
                              scale: [1, 1.25, 1],
                              borderColor: ["rgba(45,212,191,0.3)", "#00f3ff", "rgba(45,212,191,0.3)"],
                              boxShadow: ["0 0 0px #00f3ff", "0 0 12px #00f3ff", "0 0 0px #00f3ff"],
                            }}
                            transition={{ repeat: Infinity, duration: 2.2, delay: idx * 0.55 }}
                            className="w-6 h-6 rounded-full bg-[#031518] border border-teal-400 flex items-center justify-center text-[10px] text-teal-300 font-bold"
                          >
                            0{idx + 1}
                          </motion.div>
                          <span className="text-[8px] sm:text-[9px] font-mono text-slate-300 truncate max-w-[55px]">
                            {node}
                          </span>
                        </div>
                      ))}
                      <div className="absolute top-[28px] left-6 right-6 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 opacity-40 z-0" />
                    </div>
                  )}

                  {/* Animation 2: Telemetry Wave & AI Classifier (AMD) */}
                  {activePillar.animationType === "stream" && (
                    <div className="w-full flex flex-col items-center justify-center gap-2 py-2">
                      <div className="w-full flex items-center justify-between text-[9px] font-mono text-cyan-300">
                        <span>10k/s Stream Ingestion</span>
                        <span className="text-emerald-400 font-bold">AI Triage Classifier</span>
                      </div>
                      <svg className="w-full h-10" viewBox="0 0 200 40">
                        <motion.path
                          d="M0,20 Q25,5 50,20 T100,20 T150,35 T200,20"
                          fill="none"
                          stroke="url(#cyanGradAbout)"
                          strokeWidth="2.5"
                          animate={{ strokeDashoffset: [0, -100] }}
                          strokeDasharray="10 5"
                          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        />
                        <defs>
                          <linearGradient id="cyanGradAbout" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#2dd4bf" />
                            <stop offset="100%" stopColor="#00f3ff" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  {/* Animation 3: UI/UX Case Study & Design System Wireframe */}
                  {activePillar.animationType === "design" && (
                    <div className="w-full text-left font-mono text-[10px] space-y-2 py-1">
                      <div className="flex items-center justify-between text-cyan-300 pb-1.5 border-b border-white/5">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>MEDIUM CASE STUDY PIPELINE</span>
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                          BEHANCE LIVE
                        </span>
                      </div>

                      {/* Mini Wireframe Blueprint Nodes */}
                      <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-teal-500/30 text-[9px] text-teal-300 flex flex-col items-center">
                          <span className="text-xs">📐</span>
                          <span className="font-bold mt-0.5">User Journey</span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-cyan-500/30 text-[9px] text-cyan-300 flex flex-col items-center">
                          <span className="text-xs">✨</span>
                          <span className="font-bold mt-0.5">Visual UX</span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-emerald-500/30 text-[9px] text-emerald-300 flex flex-col items-center">
                          <span className="text-xs">📈</span>
                          <span className="font-bold mt-0.5">Conversion</span>
                        </div>
                      </div>

                      <div className="text-slate-400 text-[9px] sm:text-[10px] flex items-center justify-between pt-1 border-t border-white/5">
                        <span>Usability Score:</span>
                        <span className="text-emerald-400 font-bold">99.2% Frictionless</span>
                      </div>
                    </div>
                  )}

                  {/* Animation 4: Diagnostic Terminal (Assistant & Virtual DOM) */}
                  {activePillar.animationType === "terminal" && (
                    <div className="w-full text-left font-mono text-[10px] text-slate-300 space-y-1.5 py-1">
                      <div className="flex items-center justify-between text-teal-300">
                        <span>&gt; [DIAGNOSTIC ASSISTANT ACTIVE]</span>
                        <span className="text-emerald-400 animate-pulse text-[9px]">● SCANNING</span>
                      </div>
                      <div className="text-slate-400 truncate text-[9px] sm:text-[10px]">
                        Analyzing kernel panic logs... <span className="text-cyan-300">Triage: Complete</span>
                      </div>
                      <div className="text-[9px] text-slate-500">
                        Virtual Scroll Memory: <span className="text-teal-300">O(1) footprint (~28 nodes)</span>
                      </div>
                    </div>
                  )}

                  <div className="text-[9px] font-mono text-slate-500 text-center pt-1 border-t border-white/5">
                    Click tabs above to switch live execution pipeline
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM PHILOSOPHY BANNER                                  */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-5 rounded-2xl glacier-card border border-teal-500/20 bg-[#031518]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
            <span>
              <strong className="text-white">Practical Engineering Ethos</strong>: Fast builds, deterministic AI pipelines, and code that solves real friction.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-400 text-[11px]">
            <span>● Hyderabad, India</span>
            <span>● Open to High-Impact Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
