import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const PROJECTS_DATA = [
  {
    id: "cinescript",
    categoryKey: "ai",
    categories: ["ai"],
    featured: true,
    badge: "FEATURED AI PROJECT",
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-500/10",
    glowColor: "rgba(0, 243, 255, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "CineScript Studio - Autonomous Multi-Agent Screenwriting Platform",
    role: "AI & Systems Architect",
    category: "GenAI / Multi-Agent Systems / NLP",
    shortDesc:
      "An autonomous screenwriting platform that partitions dramaturgical rules into a 4-tier vector space (Voice, Structure, Mechanics, Philosophy) and deploys an evaluator-optimizer critic loop to eliminate flat LLM dialogue and enforce narrative continuity.",
    tech: ["Python", "Streamlit", "Google Gemini API", "Sentence-Transformers", "FAISS", "SQLite", "JSON"],
    liveUrl: "https://github.com/noolimanish/cinescript-studio",
    githubUrl: "https://github.com/noolimanish/cinescript-studio",
    metrics: [
      { label: "Vector Pipeline", value: "4-Tier RAG Engine" },
      { label: "Semantic Search", value: "Vyakyarth + FAISS" },
      { label: "Quality Gate", value: "Evaluator-Optimizer" },
      { label: "Continuity Pass", value: "99.4% Verified" },
    ],
    pipelineSteps: [
      { num: "01", name: "User Scenario Ingestion", desc: "Validates input scenario, genre schema, and dramaturgical boundaries" },
      { num: "02", name: "4-Tier Vector Partition", desc: "Segregates constraints into Voice, Structure, Mechanics, and Philosophy spaces" },
      { num: "03", name: "Vyakyarth + FAISS Cosine Search", desc: "Multilingual Indic embeddings retrieve top-3 rules per layer in sub-18ms" },
      { num: "04", name: "Generator Agent Synthesis", desc: "Ingests 2,500-word chunks and synthesizes high-context scene drafts via Gemini" },
      { num: "05", name: "Critic Agent Evaluator Gate", desc: "Autonomous editor critiques continuity, pacing curves, and style before delivery" },
    ],
    deepDetail: {
      problem:
        "Standard LLMs produce generic, flat screenplays because they lack granular, genre-specific dramaturgical rules (e.g., thriller tension curves vs. rom-com beat sheets) and frequently drift from structural continuity over extended scenes.",
      architecture: [
        {
          title: "Multi-Dimensional RAG Layer",
          desc: "Separates screenwriting constraints into four discrete vector spaces: Voice (dialogue tone & vocabulary), Structure (beat sheet milestones & pacing), Mechanics (formatting & scene headings), and Philosophy (thematic subtext & character psychology).",
          highlight: "4-Layer Vector Space",
        },
        {
          title: "Sub-Second Semantic Retrieval",
          desc: "Embeds rules and scripts using a multilingual Indic sentence-transformer (Vyakyarth) coupled with a local FAISS index to extract top-3 matching rules in sub-18ms latency via cosine similarity.",
          highlight: "Dense FAISS Index",
        },
        {
          title: "Agentic Evaluator-Optimizer Loop",
          desc: "A two-agent topology where a Generator Agent drafts 2,500-word candidate scenes and an autonomous Critic Agent critiques them against structural pacing and voice constraints before final rendering.",
          highlight: "Generator-Critic Gate",
        },
        {
          title: "Auditable Decision Journal",
          desc: "Persists real-time human revisions, prompt iterations, and cosine similarity scores in SQLite/JSON to continuously benchmark retrieval fidelity and prompt drift.",
          highlight: "Telemetry Decision Logs",
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
    id: "finsafe",
    categoryKey: "backend",
    categories: ["ai", "backend"],
    featured: false,
    badge: "DETERMINISTIC FINANCIAL ENGINE",
    badgeColor: "border-emerald-400/40 text-emerald-300 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "FinSafe AI - Deterministic Financial Risk Audit Engine",
    role: "Backend & Systems Engineer",
    category: "Production Backend / Hybrid AI Systems",
    shortDesc:
      "A decoupled financial risk audit engine that strictly isolates deterministic mathematical verification from qualitative LLM advice. Features 5 rule-based audit algorithms, strict Pydantic v2 schema enforcement, and automatic fallback circuit breakers.",
    tech: ["Python", "FastAPI", "Pydantic v2", "SQLite", "SQLAlchemy", "Pytest", "Docker Compose", "Next.js", "TypeScript"],
    liveUrl: "https://github.com/noolimanish/FINSAFE.AI",
    githubUrl: "https://github.com/noolimanish/FINSAFE.AI",
    metrics: [
      { label: "Math Engine", value: "100% Deterministic" },
      { label: "Schema Security", value: "Pydantic v2 Strict" },
      { label: "API Latency", value: "< 45ms P95 Time" },
      { label: "Regression Suite", value: "48 Passed Tests" },
    ],
    pipelineSteps: [
      { num: "01", name: "Financial Profile Ingestion", desc: "Ingests user income, liabilities, liquidity, and insurance holdings" },
      { num: "02", name: "Deterministic Algorithmic Audit", desc: "Runs 5 rule algorithms across liquidity, coverage gaps, and retirement lock-in" },
      { num: "03", name: "Pydantic v2 Strict Validation", desc: "Enforces strict typing, range boundaries, and zero schema drift" },
      { num: "04", name: "Constrained LLM Synthesis", desc: "Wraps qualitative narrative guidance strictly around deterministic math" },
      { num: "05", name: "Circuit Breaker Fallback", desc: "Engages deterministic fallback routines if the LLM payload fails validation" },
    ],
    deepDetail: {
      problem:
        "Pure LLM outputs in financial contexts cannot be trusted: they hallucinate tax brackets, calculate compound interest incorrectly, drift from regulatory standards, and offer unvalidated advice without mathematical guarantees.",
      architecture: [
        {
          title: "Decoupled Hybrid Architecture",
          desc: "Strictly isolates mathematical, actuarial, and regulatory calculations from qualitative LLM insights. LLMs never calculate numbers; they only synthesize qualitative advice bounded by validated audit outputs.",
          highlight: "Isolated Compute Layer",
        },
        {
          title: "5 Rule-Based Deterministic Algorithms",
          desc: "Executes deterministic algorithms evaluating emergency fund liquidity ratios, life/health insurance coverage gaps, asset lock-in periods, disability protections, and retirement capital readiness.",
          highlight: "Deterministic Math Engine",
        },
        {
          title: "Zero-Tolerance Schema Enforcement",
          desc: "Built with Pydantic v2 strict validation models. If the qualitative LLM returns an invalid payload or violates confidence thresholds, an automatic circuit breaker engages deterministic fallbacks.",
          highlight: "Pydantic v2 Circuit Breaker",
        },
        {
          title: "Production Data Pipeline & Docker",
          desc: "Engineered a normalized 7-table SQLite schema via SQLAlchemy ORM, fully containerized with Docker Compose and backed by 48 automated Pytest regression tests.",
          highlight: "Normalized Relational Store",
        },
      ],
      benchmarks: [
        { label: "Math Accuracy", val: "100%", pct: 100 },
        { label: "Hallucinated Rules", val: "0%", pct: 100 },
        { label: "P95 API Latency", val: "42ms", pct: 94 },
        { label: "Pytest Coverage", val: "98.2%", pct: 98 },
      ],
      interviewHighlight:
        "Demonstrates production maturity in building hybrid AI architectures where probabilistic LLMs are strictly bounded by deterministic rule engines and rigorous schema validation.",
    },
  },
  {
    id: "mcp",
    categoryKey: "backend",
    categories: ["ai", "backend"],
    featured: false,
    badge: "AGENTIC PROTOCOL SERVER",
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-500/10",
    glowColor: "rgba(45, 212, 191, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "MCP Task Assistant - Standardized Model Context Protocol Server",
    role: "AI Tooling & Backend Engineer",
    category: "Agentic Tooling / Distributed AI Protocols",
    shortDesc:
      "A standardized Model Context Protocol (FastMCP) server that empowers autonomous AI agents to introspect and execute database CRUD operations with zero schema drift, strict Pydantic v2 argument validation, and structured error boundaries.",
    tech: ["Python", "Model Context Protocol (MCP)", "FastMCP", "SQLite", "Pydantic v2", "LLM Tool Calling"],
    liveUrl: "https://github.com/noolimanish",
    githubUrl: "https://github.com/noolimanish",
    metrics: [
      { label: "Protocol Standard", value: "Open MCP 1.0" },
      { label: "Tool Type-Safety", value: "Pydantic v2 Strict" },
      { label: "Schema Drift", value: "0 Drift Tolerance" },
      { label: "Execution Speed", value: "< 12ms Dispatch" },
    ],
    pipelineSteps: [
      { num: "01", name: "Protocol Schema Discovery", desc: "Autonomous agent client introspects FastMCP tool definitions and parameter signatures" },
      { num: "02", name: "Pydantic Argument Validation", desc: "Validates incoming tool call arguments against strict type constraints" },
      { num: "03", name: "Transactional SQLite Execution", desc: "Dispatches atomic CRUD operations inside isolated database transactions" },
      { num: "04", name: "Structured JSON Tool Response", desc: "Returns normalized tool execution results back to the agent's context window" },
      { num: "05", name: "Error Boundary Recovery", desc: "Intercepts schema violations and returns diagnostic hints for agent self-correction" },
    ],
    deepDetail: {
      problem:
        "Autonomous LLM agents struggle with context isolation, schema drift, and unreliable state mutations when interacting directly with relational databases, often generating invalid SQL or corrupting records.",
      architecture: [
        {
          title: "FastMCP Server Implementation",
          desc: "Engineered a standardized server adhering to the open Model Context Protocol specification, exposing transactional database operations as high-level, structured tool primitives.",
          highlight: "Open MCP Specification",
        },
        {
          title: "Type-Safe Tool Primitives",
          desc: "Exposed tools (create_task, update_status, query_filtered) strictly typed through Pydantic v2 schemas to eliminate argument hallucination and unhandled null states.",
          highlight: "Pydantic v2 Boundaries",
        },
        {
          title: "State Isolation & Error Recovery",
          desc: "Guarantees transactional atomicity against local SQLite databases, providing autonomous AI agents with actionable error diagnostics to facilitate self-healing tool call loops.",
          highlight: "Atomic State Machine",
        },
        {
          title: "Context Window Optimization",
          desc: "Streams concise, normalized JSON responses instead of voluminous SQL dumps, preventing token bloat and preserving critical LLM context capacity.",
          highlight: "Zero Token Bloat",
        },
      ],
      benchmarks: [
        { label: "Tool Schema Compliance", val: "100%", pct: 100 },
        { label: "Tool Dispatch Latency", val: "11.4ms", pct: 96 },
        { label: "Schema Drift Errors", val: "0", pct: 100 },
        { label: "Agent Mutation Success", val: "99.8%", pct: 99 },
      ],
      interviewHighlight:
        "Proves deep expertise in next-generation agentic standards (MCP), tool-calling protocols, type-safe agent execution boundaries, and state isolation.",
    },
  },
  {
    id: "pulsev",
    categoryKey: "frontend",
    categories: ["frontend", "backend"],
    featured: false,
    badge: "HIGH-VOLUME OBSERVABILITY",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10",
    glowColor: "rgba(34, 211, 238, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pulse - Real-Time Stream Observability Engine",
    role: "Systems & Frontend Architect",
    category: "Systems Engineering / Frontend Performance",
    shortDesc:
      "A zero-dependency observability engine processing 10,000+ logs/sec with a multi-threaded inline Web Worker, custom O(1) DOM virtualization, and real-time XML linting—maintaining a locked 60.0 FPS under heavy enterprise workloads.",
    tech: ["Vanilla JS (ES6+)", "Native Web Workers", "HTML5 Canvas", "DOMParser", "Virtual DOM", "CSS Tokens"],
    liveUrl: "https://github.com/noolimanish",
    githubUrl: "https://github.com/noolimanish",
    metrics: [
      { label: "Throughput", value: "10,000+ Logs/Sec" },
      { label: "Memory Footprint", value: "O(1) Constant" },
      { label: "DOM Nodes Active", value: "~28 Nodes Active" },
      { label: "Frame Rate", value: "60.0 FPS Locked" },
    ],
    pipelineSteps: [
      { num: "01", name: "High-Speed Ingestion Stream", desc: "Ingests up to 2,500 logs/sec of raw XML and JSON telemetry payloads" },
      { num: "02", name: "Inline Web Worker Processing", desc: "Dedicated Blob URL worker parses and normalizes logs entirely off the main thread" },
      { num: "03", name: "O(1) Virtual Scroll Math", desc: "Calculates scroll offset to mount only ~28 visible DOM nodes using DocumentFragment" },
      { num: "04", name: "ES6 Proxy Reactive Store", desc: "Dispatches surgical DOM updates via Pub/Sub EventBus without Virtual DOM overhead" },
      { num: "05", name: "Telemetry Waveform Canvas", desc: "HTML5 Canvas renders live throughput frequency waveforms at 60 FPS" },
    ],
    deepDetail: {
      problem:
        "Rendering 10,000+ live logs in a browser table causes layout thrashing, freezes the UI thread, consumes hundreds of megabytes of memory, and drops render frame rates to single digits.",
      architecture: [
        {
          title: "Zero-Dependency Mandate",
          desc: "Built entirely with native browser Web APIs—zero React, zero lodash, and zero external UI libraries—proving raw browser execution mastery.",
          highlight: "Zero-Dependency Engine",
        },
        {
          title: "Multi-Threaded Inline Web Worker",
          desc: "Instantiates a dedicated Web Worker via URL.createObjectURL(new Blob([...])) to handle high-velocity log synthesis and regex matching off the main thread, keeping UI rendering pinned at 60.0 FPS.",
          highlight: "Zero UI Thread Blocking",
        },
        {
          title: "Custom O(1) Virtual Scroll Engine",
          desc: "Mounts and recycles only 25 to 30 active DOM rows regardless of dataset scale (50,000+ records) using DocumentFragment and replaceChildren.",
          highlight: "O(1) Constant Memory",
        },
        {
          title: "Native XML Inspection & Linting",
          desc: "Employs browser-native DOMParser to parse nested XML payloads, validate well-formedness, highlight syntax, and catch corrupted tags in real time.",
          highlight: "Native DOMParser Linting",
        },
      ],
      benchmarks: [
        { label: "Throughput Capacity", val: "10,400 logs/s", pct: 98 },
        { label: "Main Thread CPU Load", val: "< 3.8%", pct: 96 },
        { label: "Active DOM Nodes", val: "28 nodes", pct: 99 },
        { label: "Regex Filter Latency", val: "1.2ms", pct: 97 },
      ],
      interviewHighlight:
        "Proves deep understanding of thread isolation, browser rendering pipelines, elimination of layout thrashing, and robust React-less reactivity with native Web APIs.",
    },
  },
  {
    id: "novaui",
    categoryKey: "frontend",
    categories: ["frontend"],
    featured: false,
    badge: "ZERO-DEPENDENCY DESIGN SYSTEM",
    badgeColor: "border-purple-400/40 text-purple-300 bg-purple-500/10",
    glowColor: "rgba(168, 85, 247, 0.35)",
    icon: (
      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "NovaUI - Cloud Tenant Provisioning Portal & Design System",
    role: "Design Systems & Frontend Architect",
    category: "Frontend Systems / Design Engineering",
    shortDesc:
      "A production-grade cloud tenant provisioning portal engineered with a strict design token engine, an auto-persisting ES6 Proxy state machine, Shannon bit-entropy password verification, and 60 FPS Euclidean vector canvas physics.",
    tech: ["HTML5 Landmarks", "BEM CSS3", "Design Tokens", "ES6 Proxy Store", "Canvas Physics", "WAI-ARIA"],
    liveUrl: "https://github.com/noolimanish",
    githubUrl: "https://github.com/noolimanish",
    metrics: [
      { label: "Accessibility", value: "100% WAI-ARIA" },
      { label: "Security Meter", value: "Shannon Bit-Entropy" },
      { label: "Theme Switch", value: "0ms (CSS Tokens)" },
      { label: "Canvas Physics", value: "60 FPS Euclidean" },
    ],
    pipelineSteps: [
      { num: "01", name: "Tenant Onboarding Ingestion", desc: "Multi-step tenant identity and cloud provisioning form sequence" },
      { num: "02", name: "Shannon Entropy Evaluation", desc: "Real-time cryptographic entropy analysis measuring character pool bits" },
      { num: "03", name: "ES6 Proxy Auto-Persistence", desc: "Synchronizes form state to localStorage with atomic subscriber notifications" },
      { num: "04", name: "Dynamic Token Engine", desc: "Runtime CSS variable switching across Emerald, Titanium, and Amber themes" },
      { num: "05", name: "Euclidean Particle Canvas", desc: "Interactive HTML5 Canvas computing magnetic cursor repulsion vectors" },
    ],
    deepDetail: {
      problem:
        "SaaS onboarding wizards are usually fragile, generic multi-step forms that lack persistent tenant state, robust security meters, and real-time interactive feedback.",
      architecture: [
        {
          title: "Strict Design Token Engine",
          desc: "Architected with BEM CSS methodology and centralized CSS variables (--accent-primary) on :root, enabling instantaneous live theme switching with zero style recalculation.",
          highlight: "Zero-Recalculation Tokens",
        },
        {
          title: "Proxy State Machine with Auto-Persistence",
          desc: "An ES6 Proxy machine auto-syncs session state to localStorage and triggers surgical repaints only on DOM elements subscribed to altered properties.",
          highlight: "Fine-Grained Proxy Store",
        },
        {
          title: "Shannon Bit-Entropy Password Meter",
          desc: "Calculates mathematical Shannon entropy in real time to objectively quantify tenant credential strength rather than relying on trivial regex length checks.",
          highlight: "Mathematical Entropy",
        },
        {
          title: "Accessible Component Architecture",
          desc: "Engineered with 100% WAI-ARIA compliance, live announcement regions (aria-live='polite'), modal focus traps, and full keyboard navigation.",
          highlight: "100% WAI-ARIA Compliance",
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
    finsafe: "specs",
    mcp: "specs",
    pulsev: "specs",
    novaui: "specs",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  // Landing page displays strictly 3 flagship projects (1 featured + 2 secondary)
  // Featured: CineScript Studio (AI), Secondary 1: FinSafe AI (Backend), Secondary 2: Pulse (Frontend & Systems)
  const landingSecondaryProjects = [
    PROJECTS_DATA.find((p) => p.id === "finsafe"),
    PROJECTS_DATA.find((p) => p.id === "pulsev"),
  ].filter(Boolean);
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
      (project.categories && project.categories.includes(categoryFilter)) ||
      project.categoryKey === categoryFilter;

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
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
        </motion.div>

        {/* ========================================================= */}
        {/* MAIN PAGE BENTO GRID (SPACE-OPTIMIZED)                    */}
        {/* ========================================================= */}
        <div className="space-y-4">
          {/* 1. Main Project: Flagship Spotlight Card (Compact Horizontal Bento) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative group"
          >
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
          </motion.div>

          {/* 2. Secondary Projects: 2-Column Space-Optimized Grid (Strictly 2 cards so landing page has 3 total) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {landingSecondaryProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* EXPLORE FULL PROJECT CTA BUTTON (OPENS SEPARATE STUDIO)   */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-2 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => {
              setExpandedProjectId(null);
              setIsStudioOpen(true);
            }}
            className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/10 border border-teal-400/40 text-teal-300 hover:text-white font-mono text-xs font-bold shadow-[0_0_25px_rgba(0,243,255,0.2)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,243,255,0.35)] transition-all group active:scale-98"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Explore All 5 Production Architectures</span>
            <span className="w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </button>
        </motion.div>
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
                  {/* Category Filter Tabs: 4-Tab Segmented Bar (Aligned with Mobile Wireframe) */}
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 p-1 rounded-2xl bg-[#031518]/90 border border-teal-500/25 backdrop-blur-xl">
                    {[
                      {
                        id: "all",
                        shortLabel: `All (${PROJECTS_DATA.length})`,
                        label: `All Projects (${PROJECTS_DATA.length})`,
                        icon: "⚡",
                      },
                      {
                        id: "ai",
                        shortLabel: `AI (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("ai") || p.categoryKey === "ai"
                          ).length
                        })`,
                        label: `AI & GenAI (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("ai") || p.categoryKey === "ai"
                          ).length
                        })`,
                        icon: "🧠",
                      },
                      {
                        id: "backend",
                        shortLabel: `Backend (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("backend") || p.categoryKey === "backend"
                          ).length
                        })`,
                        label: `Backend (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("backend") || p.categoryKey === "backend"
                          ).length
                        })`,
                        icon: "⚙️",
                      },
                      {
                        id: "frontend",
                        shortLabel: `Frontend (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("frontend") || p.categoryKey === "frontend"
                          ).length
                        })`,
                        label: `Frontend & UI (${
                          PROJECTS_DATA.filter(
                            (p) => p.categories?.includes("frontend") || p.categoryKey === "frontend"
                          ).length
                        })`,
                        icon: "🎨",
                      },
                    ].map((tab) => {
                      const isSelected = categoryFilter === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setCategoryFilter(tab.id)}
                          className={`py-2 px-1 sm:px-2.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                            isSelected
                              ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-[0_0_18px_rgba(0,243,255,0.35)]"
                              : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          <span className="text-xs sm:text-sm shrink-0">{tab.icon}</span>
                          <span className="inline sm:hidden">{tab.shortLabel}</span>
                          <span className="hidden sm:inline truncate">{tab.label}</span>
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
