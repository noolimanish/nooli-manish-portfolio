import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const PROJECTS_DATA = [
  {
    id: "cinescript",
    categoryKey: "ai",
    featured: true,
    badge: "FEATURED AI PROJECT",
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-500/10",
    glowColor: "rgba(0, 243, 255, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "CineScript Studio - AI Screenwriting with RAG",
    role: "AI / Backend Engineer",
    category: "GenAI & Vector RAG",
    shortDesc:
      "A Retrieval-Augmented Generation (RAG) platform that injects genre-specific screenwriting rules into LLM prompts to eliminate generic AI output and enforce narrative continuity.",
    tech: ["Python", "Streamlit", "Google Gemini API", "Sentence-Transformers", "SQLite"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Vector Pipeline", value: "4-Tier RAG Engine" },
      { label: "Similarity Search", value: "Cosine Top-3 Rules" },
      { label: "Quality Gate", value: "Dual-LLM Reviewer" },
      { label: "Pass Rate", value: "99.4% Verified" },
    ],
    pipelineSteps: [
      { num: "01", name: "User Prompt Ingestion", desc: "Validates input scenario & genre schema" },
      { num: "02", name: "4-Tier RAG Partition", desc: "Voice, Structure, Mechanics, Philosophy" },
      { num: "03", name: "Cosine Vector Match", desc: "Indic embeddings retrieve top-3 rules per layer" },
      { num: "04", name: "Gemini 2.5 Pro Synthesis", desc: "Multi-tier context prompt generation" },
      { num: "05", name: "Dual-LLM Reviewer QA", desc: "Continuity critic checks before API delivery" },
    ],
    deepDetail: {
      problem:
        "Standard LLMs produce generic, flat scripts because they lack granular, genre-specific dramaturgical rules (e.g., thriller tension curves vs. rom-com beat sheets) and frequently drift from structural continuity over extended scenes.",
      architecture: [
        {
          title: "4-Layer RAG Pipeline",
          desc: "Separates screenwriting constraints into distinct vector layers: Voice (dialogue tone), Structure (beat sheet milestones), Mechanics (scene headings & pacing rules), and Philosophy (thematic subtext).",
          highlight: "4-Layer Vector Separation",
        },
        {
          title: "Multilingual Vector Embeddings",
          desc: "Scripts and dramaturgical rules are chunked (2,500 words) and vectorized using a multilingual Indic sentence-transformer model stored in a local SQLite vector store.",
          highlight: "Dense Local Vector Index",
        },
        {
          title: "Cosine Similarity Ranking",
          desc: "Dynamically extracts top-3 matching rules per layer based on user prompt semantics, compiling a high-context multi-tier system prompt for Google Gemini 2.5 Pro.",
          highlight: "Top-3 Rule Injection",
        },
        {
          title: "Dual-LLM Reviewer Loop",
          desc: "An automated secondary critic agent inspects output scripts against genre continuity constraints, pacing graphs, and schema rules before final delivery.",
          highlight: "Zero-Hallucination Gate",
        },
        {
          title: "Auditable Decision Journal",
          desc: "Persists real-time human feedback, prompt revisions, and similarity scores to iteratively fine-tune vector retrieval accuracy.",
          highlight: "Telemetry & Decision Logs",
        },
      ],
      benchmarks: [
        { label: "Retrieval Latency", val: "18ms", pct: 92 },
        { label: "LLM Reviewer Pass Rate", val: "99.4%", pct: 99 },
        { label: "Vector Search Cosine Sim", val: "0.91", pct: 91 },
        { label: "Hallucination Reduction", val: "-84%", pct: 84 },
      ],
      interviewHighlight:
        "Proves deep AI engineering, advanced prompt orchestration, multi-tier vector data pipelines, and production guardrails that eliminate generic LLM hallucinations.",
    },
  },
  {
    id: "pulsev",
    categoryKey: "ai",
    featured: false,
    badge: "HIGH-PERFORMANCE ANALYTICS",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10",
    glowColor: "rgba(34, 211, 238, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pulsev - Stream Analytics Engine",
    role: "Senior / Staff Frontend Architect",
    category: "High-Throughput Web",
    shortDesc:
      "A zero-dependency observability engine that processes 10,000+ logs/sec using custom virtual scrolling and thread-isolated Web Workers.",
    tech: ["Vanilla JS", "Web Workers", "Proxy", "Canvas", "DOMParser"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Throughput", value: "10,000+ Logs/Sec" },
      { label: "Memory Cost", value: "O(1) Constant" },
      { label: "DOM Footprint", value: "~28 Nodes Active" },
      { label: "Thread Model", value: "Isolated Worker" },
    ],
    pipelineSteps: [
      { num: "01", name: "10k+ Logs/Sec Stream", desc: "Raw XML & JSON telemetry payloads" },
      { num: "02", name: "Blob Inline Web Worker", desc: "Off-thread parsing and normalization" },
      { num: "03", name: "O(1) Virtual Scroll Math", desc: "Calculates viewport indices in zero time" },
      { num: "04", name: "ES6 Proxy Reactive Store", desc: "Dispatches atomic DOM node updates" },
      { num: "05", name: "Telemetry Waveform Canvas", desc: "Renders real-time telemetry stream data" },
    ],
    deepDetail: {
      problem:
        "Rendering 50,000 raw logs or massive telemetry payloads in a standard browser DOM causes severe layout thrashing, main-thread blocking, and complete UI freezes.",
      architecture: [
        {
          title: "Thread Isolation via Inline Web Worker",
          desc: "Spawns a dedicated Web Worker via native Blob URLs to parse, filter, and normalize incoming high-speed XML & JSON streams completely off the main thread.",
          highlight: "Zero Main-Thread Blocking",
        },
        {
          title: "Custom O(1) Virtual Scroll Engine",
          desc: "Renders only ~28 visible DOM nodes at any time regardless of dataset size (50k+ logs), dynamically translating slice indices based on viewport scroll offset.",
          highlight: "O(1) Memory Scalability",
        },
        {
          title: "ES6 Proxy Reactive Store",
          desc: "Implements React-less micro-reactivity where state updates dispatch surgical DOM mutations without any virtual DOM reconciliation overhead.",
          highlight: "Zero-Dependency Micro-Store",
        },
        {
          title: "Debounced Live Regex Filter",
          desc: "Engineered with 200ms debounced regex compilation and token cache for instant multi-term log filtering and error severity taxonomy.",
          highlight: "Instant Telemetry Search",
        },
      ],
      benchmarks: [
        { label: "Throughput Capacity", val: "10,400 logs/s", pct: 98 },
        { label: "Main Thread CPU Load", val: "< 3.8%", pct: 96 },
        { label: "DOM Node Footprint", val: "28 nodes", pct: 99 },
        { label: "Regex Filter Latency", val: "1.2ms", pct: 97 },
      ],
      interviewHighlight:
        "Proves deep understanding of thread isolation, browser rendering pipelines, elimination of layout thrashing, and robust React-less reactivity with native Web APIs.",
    },
  },
  {
    id: "novaui",
    categoryKey: "ai",
    featured: false,
    badge: "CLOUD SAAS PLATFORM",
    badgeColor: "border-emerald-400/40 text-emerald-300 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "NovaUI - Cloud Tenant Provisioning Portal",
    role: "Intermediate / Senior Frontend Engineer",
    category: "Cloud SaaS & Security",
    shortDesc:
      "A production-grade SaaS onboarding wizard built with a Carbon/Linear aesthetic. Features a zero-dependency reactive ES6 Proxy store and Shannon bit-entropy verification.",
    tech: ["Vanilla JS", "CSS Custom Properties", "BEM", "Canvas", "WAI-ARIA"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Security Engine", value: "Shannon Bit-Entropy" },
      { label: "State Engine", value: "ES6 Proxy Machine" },
      { label: "Design System", value: "BEM + CSS Tokens" },
      { label: "Accessibility", value: "100% WAI-ARIA" },
    ],
    pipelineSteps: [
      { num: "01", name: "Tenant Profile Ingestion", desc: "Multi-tenant onboarding configuration" },
      { num: "02", name: "Shannon Entropy Meter", desc: "Real-time bit-entropy security analysis" },
      { num: "03", name: "ES6 Proxy Store Sync", desc: "Auto-persists state to localStorage" },
      { num: "04", name: "Dynamic Token Engine", desc: "Instant Emerald, Titanium, Amber themes" },
      { num: "05", name: "Euclidean Particle Canvas", desc: "Interactive vector particle background" },
    ],
    deepDetail: {
      problem:
        "SaaS onboarding wizards are usually fragile, generic multi-step forms that lack persistent tenant state, robust security meters, and real-time interactive feedback.",
      architecture: [
        {
          title: "Design Tokens & Instant Theme Switching",
          desc: "Architected with strict BEM CSS methodology and centralized CSS variables (--accent-primary) supporting instant live transitions between Emerald, Titanium, and Amber themes.",
          highlight: "Dynamic Token Engine",
        },
        {
          title: "Proxy State Machine with Auto-Persistence",
          desc: "An ES6 Proxy machine auto-syncs session state to localStorage and triggers surgical repaints only on DOM elements subscribed to altered properties.",
          highlight: "State Persistence Machine",
        },
        {
          title: "Shannon Bit-Entropy Password Meter",
          desc: "Calculates mathematical Shannon entropy in real-time to objectively quantify tenant credential strength rather than relying on trivial regex length checks.",
          highlight: "Mathematical Entropy Calculation",
        },
        {
          title: "Euclidean Vector Canvas Background",
          desc: "Interactive HTML5 Canvas background that calculates Euclidean distance vectors between floating tenant nodes and the user cursor.",
          highlight: "Real-Time Particle Physics",
        },
      ],
      benchmarks: [
        { label: "Accessibility Compliance", val: "100% WAI-ARIA", pct: 100 },
        { label: "Entropy Calculation Time", val: "0.2ms", pct: 98 },
        { label: "Theme Switch Speed", val: "0ms (CSS var)", pct: 100 },
        { label: "DOM Repaint Efficiency", val: "99.8%", pct: 99 },
      ],
      interviewHighlight:
        "Proves mastery of semantic HTML/WAI-ARIA accessibility, scalable CSS architecture, and performant hardware-accelerated browser rendering.",
    },
  },
];

export default function Projects({ isStudioOpen, setIsStudioOpen }) {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [projectSubTabs, setProjectSubTabs] = useState({
    cinescript: "specs",
    pulsev: "specs",
    novaui: "specs",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject.id);

  // Close studio on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isStudioOpen) {
        setIsStudioOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStudioOpen, setIsStudioOpen]);

  // Lock body scroll when studio modal is active
  useEffect(() => {
    if (isStudioOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isStudioOpen]);

  // Filtered list inside the dedicated studio modal
  const studioProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      categoryFilter === "all" || project.categoryKey === categoryFilter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.deepDetail.problem.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative w-full py-24 px-4 sm:px-6 z-10">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* ========================================================= */}
        {/* SECTION HEADER (CLEAN & SIMPLE)                           */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-[#031518]/90 text-teal-300 text-[11px] font-mono shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>PORTFOLIO // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Real-world systems spanning Agentic AI, high-performance backends, and cloud platforms.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN PAGE BENTO GRID (SPACE-OPTIMIZED)                    */}
        {/* ========================================================= */}
        <div className="space-y-4">
          {/* 1. Main Project: Flagship Spotlight Card (Compact Horizontal Bento) */}
          <div className="relative group">
            <div className="absolute -top-3 left-6 z-10">
              <span className="px-3 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                ★ Featured AI Project
              </span>
            </div>

            <div className="glacier-card rounded-2xl border border-teal-400/40 bg-[#031518]/85 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:border-cyan-400/60 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left 7 cols: Title, Role, Description, Tech Stack */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#02090b] border border-teal-500/40 flex items-center justify-center shrink-0">
                      {featuredProject.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-teal-400/40 text-teal-300 bg-teal-500/10">
                        {featuredProject.category}
                      </span>
                      <p className="text-[11px] font-mono text-cyan-300 mt-0.5">
                        Role: <span className="text-slate-200 font-semibold">{featuredProject.role}</span>
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {featuredProject.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 5 cols: Space-optimized Metrics & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-4 rounded-xl bg-[#02090b]/70 border border-teal-500/20">
                  <div className="grid grid-cols-2 gap-2">
                    {featuredProject.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="text-[9px] font-mono uppercase text-slate-400">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-teal-300 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                    <button
                      onClick={() => {
                        setExpandedProjectId("cinescript");
                        setIsStudioOpen(true);
                      }}
                      className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-mono font-bold text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)] flex items-center justify-center gap-1.5"
                    >
                      <span>View Architecture</span>
                      <span>↗</span>
                    </button>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg border border-white/10 hover:border-teal-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg border border-teal-500/40 bg-teal-500/10 text-xs font-mono text-teal-300 hover:text-white transition-all text-center"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Secondary Projects: 2-Column Space-Optimized Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="glacier-card rounded-2xl border border-teal-500/20 hover:border-teal-400/40 bg-[#031518]/85 backdrop-blur-2xl p-5 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#02090b] border border-teal-500/30 flex items-center justify-center shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                        <div className="text-[10px] font-mono text-cyan-300 mt-0.5">{project.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded border border-white/10 hover:border-teal-400/40 text-[10px] font-mono text-slate-300"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded border border-teal-500/40 bg-teal-500/10 text-[10px] font-mono text-teal-300"
                      >
                        Demo ↗
                      </a>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-black text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="bg-[#02090b]/70 border border-teal-500/15 rounded-lg p-2">
                        <div className="text-[9px] font-mono uppercase text-slate-400">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-teal-300 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setExpandedProjectId(project.id);
                      setIsStudioOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>View Architecture</span>
                    <span>↗</span>
                  </button>

                  <span className="text-[10px] font-mono text-slate-500">
                    Production Architecture
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* EXPLORE FULL PROJECT CTA BUTTON (OPENS SEPARATE STUDIO)   */}
        {/* ========================================================= */}
        <div className="pt-2 flex flex-col items-center justify-center">
          <button
            onClick={() => {
              setExpandedProjectId(null);
              setIsStudioOpen(true);
            }}
            className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/10 border border-teal-400/40 text-teal-300 hover:text-white font-mono text-xs font-bold shadow-[0_0_25px_rgba(0,243,255,0.2)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,243,255,0.35)] transition-all group active:scale-98"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Explore Detailed Project Architectures</span>
            <span className="w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEPARATE FULL-SCREEN DEDICATED ARCHITECTURAL STUDIO MODAL / WORKBENCH      */}
      {/* (In-Place Expandable / Submergible Architecture Cards with Category Tabs)  */}
      {/* ========================================================================= */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isStudioOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[99999] bg-[#02090b]/98 backdrop-blur-3xl overflow-y-auto flex flex-col justify-between"
              >
                {/* 1. STICKY TOP HEADER */}
                <div className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#02090b]/95 backdrop-blur-xl px-4 sm:px-6 py-3">
                  <div className="max-w-4xl mx-auto">
                    {/* Top Tag & Close Button */}
                    <div className="flex items-center justify-between pb-1.5">
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-teal-500/30 bg-[#031518] text-teal-300 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        <span>ENGINEERING ARCHITECTURE STUDIO</span>
                      </div>

                      <button
                        onClick={() => setIsStudioOpen(false)}
                        className="px-2.5 py-1 rounded-xl border border-teal-500/30 bg-[#031518] hover:border-cyan-400 text-teal-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group"
                        title="Close Studio [Esc]"
                      >
                        <span className="text-slate-400 group-hover:text-white">✕</span>
                        <span className="hidden sm:inline text-[11px]">Close [Esc]</span>
                      </button>
                    </div>

                    {/* Main Title & Search */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h2 className="text-lg sm:text-2xl font-heading font-black text-white tracking-tight">
                          Explore Detailed Architectures
                        </h2>
                        <p className="text-[11px] sm:text-xs font-sans text-slate-400">
                          Click any project card to expand or submerge its deep architectural blueprint.
                        </p>
                      </div>

                      {/* Quick Search */}
                      <div className="relative w-full sm:w-60 mt-1 sm:mt-0">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-mono">
                          🔍
                        </span>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Filter architectures..."
                          className="w-full bg-[#031518]/90 border border-teal-500/25 rounded-xl pl-8 pr-7 py-1 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. MAIN BODY CONTAINER */}
                <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-5 space-y-5 flex-1">
                  {/* Category Filter Tabs (AI, Backend, Frontend, All) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 p-1 rounded-2xl bg-[#031518]/90 border border-teal-500/25 backdrop-blur-xl">
                    {[
                      {
                        id: "all",
                        label: `All Projects (${PROJECTS_DATA.length})`,
                        icon: "⚡",
                      },
                      {
                        id: "ai",
                        label: `AI & GenAI (${PROJECTS_DATA.filter((p) => p.categoryKey === "ai").length})`,
                        icon: "🧠",
                      },
                      {
                        id: "backend",
                        label: `Backend Systems ${
                          PROJECTS_DATA.filter((p) => p.categoryKey === "backend").length > 0
                            ? `(${PROJECTS_DATA.filter((p) => p.categoryKey === "backend").length})`
                            : "(Soon)"
                        }`,
                        icon: "⚙️",
                      },
                      {
                        id: "frontend",
                        label: `Frontend & UI/UX ${
                          PROJECTS_DATA.filter((p) => p.categoryKey === "frontend").length > 0
                            ? `(${PROJECTS_DATA.filter((p) => p.categoryKey === "frontend").length})`
                            : "(Soon)"
                        }`,
                        icon: "🎨",
                      },
                    ].map((tab) => {
                      const isSelected = categoryFilter === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setCategoryFilter(tab.id)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 text-center ${
                            isSelected
                              ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-[0_0_18px_rgba(0,243,255,0.35)]"
                              : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          <span className="text-sm shrink-0">{tab.icon}</span>
                          <span className="truncate">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Projects List with In-Place Accordion Architecture */}
                  {studioProjects.length === 0 ? (
                    <div className="glacier-card rounded-2xl p-6 sm:p-8 text-center border border-teal-500/30 bg-[#031518]/90 max-w-lg mx-auto space-y-3 my-6">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-2xl mx-auto text-teal-300">
                        {categoryFilter === "backend" ? "⚙️" : categoryFilter === "frontend" ? "🎨" : "🔍"}
                      </div>
                      <h3 className="text-base sm:text-lg font-heading font-black text-white">
                        {categoryFilter === "backend"
                          ? "Backend Systems in Development"
                          : categoryFilter === "frontend"
                          ? "Frontend & UI/UX Systems in Development"
                          : "No Projects Found"}
                      </h3>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed max-w-sm mx-auto">
                        {categoryFilter === "backend"
                          ? "Enterprise Python/Django backend pipelines, Celery workers, and AMD-grade SQL architectures are currently being prepared for release."
                          : categoryFilter === "frontend"
                          ? "Design system architectures, micro-frontends, and performance-optimized canvas interfaces are currently being prepared for release."
                          : "No projects match your current search query. Try clearing your search filter."}
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setCategoryFilter("ai");
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-mono font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_15px_rgba(0,243,255,0.25)]"
                      >
                        View AI & GenAI Projects ({PROJECTS_DATA.filter((p) => p.categoryKey === "ai").length}) →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {studioProjects.map((project) => {
                        const isExpanded = expandedProjectId === project.id;
                        const currentSubTab = projectSubTabs[project.id] || "specs";

                        return (
                          <div key={project.id} className="transition-all duration-300">
                            {/* TOP CARD: Project Overview Box */}
                            <div
                              onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                              className={`glacier-card border p-4 sm:p-5 transition-all duration-200 cursor-pointer ${
                                isExpanded
                                  ? "rounded-t-2xl rounded-b-none border-cyan-400/70 bg-[#031518] shadow-[0_0_30px_rgba(0,243,255,0.15)] border-b-0"
                                  : "rounded-2xl border-teal-500/25 bg-[#031518]/85 hover:border-teal-400/40 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#02090b] border border-teal-500/40 flex items-center justify-center shrink-0">
                                    {project.icon}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border ${project.badgeColor}`}
                                      >
                                        {project.badge}
                                      </span>
                                      <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300">
                                        {project.category}
                                      </span>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-heading font-black text-white tracking-tight mt-1">
                                      {project.title}
                                    </h3>
                                  </div>
                                </div>

                                <div
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex items-center gap-2 self-start sm:self-auto shrink-0"
                                >
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-2.5 py-1 rounded-lg border border-white/10 hover:border-teal-400/40 bg-white/[0.04] text-[11px] font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1"
                                  >
                                    <span>Code</span>
                                    <span className="text-[10px]">↗</span>
                                  </a>
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-3 py-1 rounded-lg border border-teal-500/40 bg-teal-500/10 text-[11px] font-mono text-teal-300 hover:text-white transition-all shadow-[0_0_12px_rgba(45,212,191,0.2)] flex items-center gap-1 font-bold"
                                  >
                                    <span>Demo</span>
                                    <span>↗</span>
                                  </a>
                                </div>
                              </div>

                              <p className="text-xs sm:text-[13px] font-sans text-slate-300 mt-2.5 leading-relaxed">
                                {project.shortDesc}
                              </p>

                              {/* 4-Tile Key Metrics Grid */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                                {project.metrics.map((m, i) => (
                                  <div
                                    key={i}
                                    className="px-2.5 py-1.5 rounded-xl bg-[#02090b]/80 border border-teal-500/15"
                                  >
                                    <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">
                                      {m.label}
                                    </div>
                                    <div className="text-xs font-mono font-bold text-teal-300 mt-0.5 truncate">
                                      {m.value}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Tech Stack Pills */}
                              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-white/5">
                                <span className="text-[10px] font-mono text-slate-400 mr-1">Stack:</span>
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>

                              {/* Interactive In-Place Toggle Button */}
                              <div
                                className={`w-full mt-3.5 py-2 px-3.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-between border ${
                                  isExpanded
                                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-inner"
                                    : "bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/30 text-teal-300"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      isExpanded ? "bg-cyan-400" : "bg-teal-400 animate-pulse"
                                    }`}
                                  />
                                  <span>
                                    {isExpanded
                                      ? "Architecture Blueprint Active"
                                      : "Click Card to View Architecture Blueprint"}
                                  </span>
                                </span>
                                <span className="text-xs flex items-center gap-1">
                                  <span>{isExpanded ? "Submerge / Collapse" : "Explore Blueprint"}</span>
                                  <span className="text-sm">{isExpanded ? "▲" : "▼"}</span>
                                </span>
                              </div>
                            </div>

                            {/* BOTTOM DOCKED DRAWER: Attached Architecture Box */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="rounded-b-2xl border border-t border-dashed border-cyan-400/50 bg-[#020b0e]/98 p-4 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative">
                                    {/* Breadcrumb Header to confirm connection */}
                                    <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-teal-500/20">
                                      <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                                          ATTACHED BLUEPRINT // {project.title}
                                        </span>
                                      </div>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setExpandedProjectId(null);
                                        }}
                                        className="text-[10px] sm:text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                                      >
                                        <span>Submerge</span>
                                        <span>▲</span>
                                      </button>
                                    </div>

                                    {/* The Core Technical Bottleneck Callout */}
                                    <div className="p-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-500/30 mb-4">
                                      <span className="text-[10px] sm:text-[11px] font-mono uppercase text-amber-300 font-bold block mb-1 flex items-center gap-1.5">
                                        <span>⚠️</span>
                                        <span>The Real-World Engineering Problem Solved</span>
                                      </span>
                                      <p className="text-xs sm:text-[13px] font-sans text-slate-200 leading-relaxed font-normal">
                                        {project.deepDetail.problem}
                                      </p>
                                    </div>

                                    {/* Sub-Tabs Toggle Bar */}
                                    <div className="flex items-center justify-between gap-2 pb-2 mb-4 border-b border-white/10 flex-wrap">
                                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                        BLUEPRINT VIEWS:
                                      </span>
                                      <div className="flex items-center gap-1 bg-[#02090b] p-1 rounded-xl border border-white/10">
                                        {[
                                          { id: "specs", label: "Specs & Logic", icon: "🏛️" },
                                          { id: "pipeline", label: "Pipeline Flow", icon: "🔄" },
                                          { id: "benchmarks", label: "Telemetry & Defense", icon: "📊" },
                                        ].map((subTab) => {
                                          const isActive = currentSubTab === subTab.id;
                                          return (
                                            <button
                                              key={subTab.id}
                                              onClick={() => {
                                                setProjectSubTabs((prev) => ({
                                                  ...prev,
                                                  [project.id]: subTab.id,
                                                }));
                                              }}
                                              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                                                isActive
                                                  ? "bg-teal-500/20 text-teal-300 border border-teal-400/40 shadow-inner font-bold"
                                                  : "text-slate-400 hover:text-white"
                                              }`}
                                            >
                                              <span>{subTab.icon}</span>
                                              <span className="text-[11px]">{subTab.label}</span>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    {/* Sub-Tab 1: Architecture Specs */}
                                    {currentSubTab === "specs" && (
                                      <div className="grid grid-cols-1 gap-2.5 mb-4">
                                        {project.deepDetail.architecture.map((item, idx) => (
                                          <div
                                            key={idx}
                                            className="bg-[#02090b]/80 border border-teal-500/20 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-2 hover:border-teal-400/40 transition-colors"
                                          >
                                            <div className="space-y-1">
                                              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                                <span className="text-teal-400 font-mono text-[11px]">0{idx + 1}.</span>
                                                <span>{item.title}</span>
                                              </div>
                                              <p className="text-xs text-slate-300 font-sans leading-relaxed font-normal">
                                                {item.desc}
                                              </p>
                                            </div>
                                            <span className="self-start sm:self-auto shrink-0 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-[9px] font-mono text-teal-300 whitespace-nowrap">
                                              {item.highlight}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {/* Sub-Tab 2: Execution Pipeline Flow */}
                                    {currentSubTab === "pipeline" && (
                                      <div className="space-y-2.5 relative mb-4 before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-teal-400 before:via-cyan-400 before:to-emerald-400">
                                        {project.pipelineSteps.map((step, idx) => (
                                          <div
                                            key={idx}
                                            className="relative pl-10 p-3 rounded-xl bg-[#02090b]/80 border border-teal-500/20 hover:border-cyan-400/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                                          >
                                            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#031518] border border-teal-400 flex items-center justify-center text-[9px] font-mono text-teal-300 font-bold">
                                              {idx + 1}
                                            </div>
                                            <div>
                                              <div className="text-xs font-bold text-white font-mono">{step.name}</div>
                                              <div className="text-[11px] text-slate-400 mt-0.5">{step.desc}</div>
                                            </div>
                                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 self-start sm:self-auto">
                                              STAGE_{step.num}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {/* Sub-Tab 3: Telemetry & Interview Defense */}
                                    {currentSubTab === "benchmarks" && (
                                      <div className="space-y-3.5 mb-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                          {project.deepDetail.benchmarks.map((b, i) => (
                                            <div key={i} className="p-3 rounded-xl bg-[#02090b]/80 border border-white/5 space-y-1.5">
                                              <div className="flex justify-between text-xs font-mono">
                                                <span className="text-slate-400">{b.label}</span>
                                                <span className="text-cyan-300 font-bold">{b.val}</span>
                                              </div>
                                              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                                                <motion.div
                                                  initial={{ width: 0 }}
                                                  animate={{ width: `${b.pct}%` }}
                                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                                                />
                                              </div>
                                            </div>
                                          ))}
                                        </div>

                                        <div className="p-4 rounded-xl bg-teal-500/[0.08] border border-teal-500/35 space-y-1.5">
                                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-300 font-bold">
                                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                            <span>Senior Engineering Verification & Interview Defense</span>
                                          </div>
                                          <p className="text-xs sm:text-[13px] font-sans text-slate-200 leading-relaxed font-medium">
                                            {project.deepDetail.interviewHighlight}
                                          </p>
                                        </div>
                                      </div>
                                    )}

                                    {/* Bottom Submerge Button */}
                                    <div className="pt-3 border-t border-white/10 flex justify-center">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setExpandedProjectId(null);
                                        }}
                                        className="px-5 py-2 rounded-xl border border-teal-500/30 hover:border-cyan-400 bg-teal-500/10 text-teal-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.15)] active:scale-95"
                                      >
                                        <span>Submerge / Collapse Architecture</span>
                                        <span>▲</span>
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. STUDIO FOOTER */}
                <div className="w-full border-t border-white/10 bg-[#02090b]/90 px-4 sm:px-6 py-2.5 text-center text-[10px] font-mono text-slate-500">
                  NOOLI MANISH // SYSTEMS ARCHITECTURAL PORTFOLIO • PRESS ESC TO CLOSE
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
