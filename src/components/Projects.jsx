import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const PROJECTS_DATA = [
  {
    id: "cinescript",
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
  const [selectedStudioProject, setSelectedStudioProject] = useState(PROJECTS_DATA[0]);
  const [studioActiveTab, setStudioActiveTab] = useState("specs"); // 'specs' | 'pipeline' | 'benchmarks' | 'interview'
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
      categoryFilter === "all" ||
      (categoryFilter === "genai" && project.category.includes("GenAI")) ||
      (categoryFilter === "systems" && project.category.includes("High-Throughput")) ||
      (categoryFilter === "saas" && project.category.includes("Cloud SaaS"));

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
                        setSelectedStudioProject(featuredProject);
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
                      setSelectedStudioProject(project);
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
              setSelectedStudioProject(PROJECTS_DATA[0]);
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
      {/* (Rendered directly via createPortal to document.body outside stacking context) */}
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
                {/* Top Studio Bar */}
                <div className="sticky top-0 z-20 w-full border-b border-white/10 bg-[#02090b]/95 backdrop-blur-xl px-4 sm:px-8 py-3.5">
                  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Back button & Title */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsStudioOpen(false)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-teal-500/30 bg-[#031518] text-teal-300 hover:text-white hover:bg-teal-500/20 text-xs font-mono transition-all group"
                      >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span>Return to Portfolio</span>
                      </button>

                      <div className="hidden sm:block w-px h-5 bg-white/10" />

                      <div className="hidden md:flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono tracking-wider text-slate-300">
                          SYSTEMS ARCHITECTURE STUDIO
                        </span>
                      </div>
                    </div>

                    {/* Search Bar (Dedicated in Studio View) */}
                    <div className="flex items-center gap-3 flex-1 max-w-md">
                      <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-mono">
                          🔍
                        </span>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search architecture, stack, algorithms..."
                          className="w-full bg-[#031518]/90 border border-teal-500/25 rounded-xl pl-8 pr-7 py-1.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
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

                      {/* Close [ESC] Button */}
                      <button
                        onClick={() => setIsStudioOpen(false)}
                        className="p-1.5 rounded-xl border border-white/10 hover:border-teal-400/40 bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
                        title="Close [Esc]"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Studio Main Body: 2-Panel Master-Detail Studio Layout */}
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 flex-1">
                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {[
                      { id: "all", label: "All Systems (3)" },
                      { id: "genai", label: "GenAI & Vector RAG" },
                      { id: "systems", label: "High-Throughput Web" },
                      { id: "saas", label: "Cloud SaaS & Security" },
                    ].map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCategoryFilter(c.id)}
                        className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all border ${
                          categoryFilter === c.id
                            ? "bg-teal-500/20 border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.25)]"
                            : "bg-[#031518]/80 border-white/10 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>

                  {/* Master-Detail Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Panel: Project Selectors (4 cols) */}
                    <div className="lg:col-span-4 space-y-2.5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        SELECT PRODUCTION DEPLOYMENT
                      </div>

                      {studioProjects.length === 0 ? (
                        <div className="p-5 rounded-xl bg-[#031518]/60 border border-white/10 text-center text-xs font-mono text-slate-400">
                          No architectures found matching "{searchQuery}"
                        </div>
                      ) : (
                        studioProjects.map((p) => {
                          const isSelected = selectedStudioProject.id === p.id;
                          return (
                            <button
                              key={p.id}
                              onClick={() => setSelectedStudioProject(p)}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-2 ${
                                isSelected
                                  ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/10 border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.15)]"
                                  : "bg-[#031518]/60 border-white/10 hover:border-teal-500/30 hover:bg-[#031518]/90"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-md border ${p.badgeColor}`}>
                                  {p.badge}
                                </span>
                                <span className="text-[9px] font-mono text-slate-400">
                                  {isSelected ? "● ACTIVE" : "Select"}
                                </span>
                              </div>

                              <div className="font-heading font-bold text-white text-sm">
                                {p.title}
                              </div>

                              <div className="flex flex-wrap gap-1">
                                {p.tech.slice(0, 3).map((t) => (
                                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>

                    {/* Right Panel: Active Architecture Blueprint Studio (8 cols) */}
                    <div className="lg:col-span-8">
                      <div className="glacier-card rounded-2xl border border-teal-500/30 bg-[#031518]/90 p-5 sm:p-7 backdrop-blur-2xl space-y-5">
                        {/* Header: Title, Links & Tabs */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-cyan-300 uppercase">{selectedStudioProject.category}</span>
                              <span className="text-slate-500">•</span>
                              <span className="text-xs font-mono text-slate-300">{selectedStudioProject.role}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-heading font-black text-white mt-1">
                              {selectedStudioProject.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={selectedStudioProject.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-teal-400/40 bg-white/[0.04] text-xs font-mono text-slate-300 hover:text-white transition-all"
                            >
                              Source Code
                            </a>
                            <a
                              href={selectedStudioProject.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 rounded-lg border border-teal-500/40 bg-teal-500/10 text-xs font-mono text-teal-300 hover:text-white transition-all shadow-[0_0_12px_rgba(45,212,191,0.2)]"
                            >
                              Live Prototype ↗
                            </a>
                          </div>
                        </div>

                        {/* Navigation Tabs for Deep Inspection */}
                        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-white/5">
                          {[
                            { id: "specs", label: "System Specs & Native APIs" },
                            { id: "pipeline", label: "Visual Pipeline Flow" },
                            { id: "benchmarks", label: "Telemetry & Verification" },
                            { id: "interview", label: "Interview Defense" },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setStudioActiveTab(tab.id)}
                              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                                studioActiveTab === tab.id
                                  ? "bg-teal-500/20 text-teal-300 border border-teal-400/50 shadow-inner"
                                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* TAB CONTENT 1: System Specs & Architecture */}
                        {studioActiveTab === "specs" && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                            <div className="p-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-500/30">
                              <span className="text-[11px] font-mono uppercase text-amber-300 font-bold block mb-1">
                                ⚠️ The Core Technical Bottleneck
                              </span>
                              <p className="text-xs sm:text-sm font-sans text-slate-200 leading-relaxed">
                                {selectedStudioProject.deepDetail.problem}
                              </p>
                            </div>

                            <div className="space-y-2.5">
                              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                                ⚡ Native Architecture & Implementation
                              </span>
                              <div className="grid grid-cols-1 gap-2">
                                {selectedStudioProject.deepDetail.architecture.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-[#02090b]/80 border border-teal-500/20 rounded-xl p-3 flex flex-col sm:flex-row sm:items-start justify-between gap-2 hover:border-teal-400/40 transition-colors"
                                  >
                                    <div className="space-y-0.5">
                                      <div className="text-xs font-bold text-white flex items-center gap-2">
                                        <span className="text-teal-400 font-mono text-[10px]">0{idx + 1}.</span>
                                        <span>{item.title}</span>
                                      </div>
                                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                                        {item.desc}
                                      </p>
                                    </div>
                                    <span className="sm:self-start shrink-0 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-[9px] font-mono text-teal-300">
                                      {item.highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* TAB CONTENT 2: Visual Pipeline Flow (Interactive Diagram) */}
                        {studioActiveTab === "pipeline" && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                              <span>EXECUTION PATHWAY TELEMETRY</span>
                              <span>STEP-BY-STEP DATA FLOW</span>
                            </div>

                            <div className="space-y-2.5 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-teal-400 before:via-cyan-400 before:to-emerald-400">
                              {selectedStudioProject.pipelineSteps.map((step, idx) => (
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
                          </motion.div>
                        )}

                        {/* TAB CONTENT 3: Telemetry & Verification */}
                        {studioActiveTab === "benchmarks" && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {selectedStudioProject.metrics.map((m, i) => (
                                <div key={i} className="p-2.5 rounded-xl bg-[#02090b] border border-teal-500/20">
                                  <div className="text-[9px] font-mono text-slate-400 uppercase">{m.label}</div>
                                  <div className="text-xs font-mono font-bold text-teal-300 mt-0.5">{m.value}</div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-2.5 pt-1">
                              <span className="text-xs font-mono uppercase text-slate-300 font-bold block">
                                Measured System Performance & Reliability
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {selectedStudioProject.deepDetail.benchmarks.map((b, i) => (
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
                            </div>
                          </motion.div>
                        )}

                        {/* TAB CONTENT 4: Interview Defense */}
                        {studioActiveTab === "interview" && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                            <div className="p-4 rounded-xl bg-teal-500/[0.08] border border-teal-500/35 space-y-2">
                              <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-300 font-bold">
                                <span className="w-2 h-2 rounded-full bg-teal-400" />
                                <span>Staff / Senior Engineering Verification Defense</span>
                              </div>
                              <p className="text-xs sm:text-sm font-sans text-slate-200 leading-relaxed font-medium">
                                {selectedStudioProject.deepDetail.interviewHighlight}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-[#02090b]/80 border border-white/5 text-xs font-mono text-slate-400 space-y-1">
                              <div>• Zero-dependency implementation verification</div>
                              <div>• Validated against memory scale and browser paint profiles</div>
                              <div>• Unit test coverage and schema validation contracts</div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Studio Footer */}
                <div className="w-full border-t border-white/10 bg-[#02090b]/90 px-4 sm:px-8 py-2.5 text-center text-[10px] font-mono text-slate-500">
                  NOOLI MANISH // SYSTEMS ARCHITECTURAL PORTFOLIO • PRESS ESC TO EXIT STUDIO
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
