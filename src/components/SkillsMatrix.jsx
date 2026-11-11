import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    id: "genai",
    label: "GenAI & Agentic Systems",
    icon: "🧠",
    badge: "Core Differentiator",
    focus: "Real trending AI tech. No fluff.",
    skills: [
      {
        id: "rag",
        title: "4-Tier Vector RAG Engine",
        icon: "📚",
        description: "Partitions knowledge into Voice, Structure, Mechanics, and Philosophy vector spaces to eliminate generic LLM output.",
        coreMechanism: "Built a custom retrieval pipeline using Sentence-Transformers (Indic Vyakyarth embeddings) and cosine similarity over a local FAISS index to fetch top-3 rules per layer, dynamically compiling multi-tier prompt context.",
        productionVerification: "Achieved an 18ms retrieval latency in CineScript Studio, ensuring strict narrative pacing, formatting, and voice fidelity across generated scenes.",
        associatedStack: ["4-Tier RAG", "FAISS Index", "Indic Vyakyarth", "Cosine Similarity"],
      },
      {
        id: "react-agents",
        title: "Agentic AI & Evaluator-Optimizer",
        icon: "⚡",
        description: "Deconstructs complex goals into autonomous reasoning chains with dual-agent verification loops.",
        coreMechanism: "Implemented ReAct agent loops and generator-critic architectures that allow the model to autonomously call tools, inspect state, and critique candidate scenes before final API delivery.",
        productionVerification: "Automated extraction of 2,500-word chunks into structured JSON schemas using Gemini 2.5 Pro and Groq API with zero manual intervention.",
        associatedStack: ["Agentic AI", "ReAct Loops", "Gemini API", "Groq API", "FastMCP"],
      },
      {
        id: "mcp",
        title: "Model Context Protocol (FastMCP)",
        icon: "🔌",
        description: "Standardized context injection, state isolation, and tool discovery for autonomous AI agents.",
        coreMechanism: "Designed standardized FastMCP servers exposing database CRUD and analytical operations as strictly typed tool primitives with Pydantic v2 schema validation.",
        productionVerification: "Built a type-safe MCP server preventing prompt injection while enabling autonomous AI agents to introspect and mutate relational databases with error boundaries.",
        associatedStack: ["FastMCP", "Model Context Protocol", "Pydantic v2", "Tool Primitives"],
      },
      {
        id: "reviewer",
        title: "Dual-LLM Reviewer Loops",
        icon: "🛡️",
        description: "A secondary critic agent verifies generated output against strict domain rules before delivery.",
        coreMechanism: "Chained a second LLM call post-generation to act as an autonomous editor, critiquing the first model's output for continuity, style violations, and schema compliance.",
        productionVerification: "Achieved a 99.4% pass rate on generated scripts, eliminating repetitive phrasing and generic AI tropes.",
        associatedStack: ["LLM Orchestration", "Automated QA", "Chain-of-Thought"],
      },
      {
        id: "embeddings",
        title: "Semantic Search & Embeddings",
        icon: "🔍",
        description: "High-density vector generation and mathematical score normalization.",
        coreMechanism: "Engineered a persistent local vector index that embeds queries into high-dimensional space, ranking results using mathematical cosine distance.",
        productionVerification: "Reduced search latency to milliseconds while maintaining high semantic accuracy across thousands of unstructured text chunks.",
        associatedStack: ["Embeddings", "Vector Databases", "Local Indexing"],
      },
      {
        id: "multi-agent",
        title: "Multi-Agent Orchestration",
        icon: "👥",
        description: "Routing user intents to specialized sub-agents with isolated memory states.",
        coreMechanism: "Built a central orchestrator that delegates tasks to distinct LLM personas (e.g., a 'Retriever' agent, a 'Writer' agent, and a 'Critic' agent).",
        productionVerification: "Utilized in CineScript to separate the complex task of script generation into manageable, deterministic AI workflows.",
        associatedStack: ["LangChain Concepts", "Agent Orchestration", "State Machines"],
      },
    ],
  },
  {
    id: "backend",
    label: "Python & Enterprise Backends",
    icon: "⚙️",
    badge: "Enterprise Scale",
    focus: "Real Python engineering. No 'XML parsing' as a skill.",
    skills: [
      {
        id: "python",
        title: "Python 3.12 & Asyncio",
        icon: "🐍",
        description: "High-throughput automation pipelines utilizing asynchronous concurrency.",
        coreMechanism: "Leveraged Python's asyncio and multiprocessing to ingest, validate, and transform massive streams of enterprise data concurrently without blocking the main thread.",
        productionVerification: "Built internal Python tools at AMD that automated the validation of hardware payloads, saving hours of manual engineering effort daily.",
        associatedStack: ["OOP", "AsyncIO", "Concurrency", "Design Patterns"],
      },
      {
        id: "django",
        title: "Django & REST Framework",
        icon: "🌐",
        description: "Scalable REST APIs, relational schemas, and session access control.",
        coreMechanism: "Architected service-layer backend logic using Django REST Framework, implementing custom serializers, authentication guards, and ORM query optimization.",
        productionVerification: "Developed the backend for 'Mini-CricHeroes,' supporting full CRUD operations for players, teams, and matches with session-based auth.",
        associatedStack: ["Django", "DRF", "API Design", "Authentication"],
      },
      {
        id: "fastapi",
        title: "FastAPI, Pydantic v2 & Microservices",
        icon: "🚀",
        description: "High-concurrency microservices delivering streaming AI completions and deterministic validation with sub-50ms latency.",
        coreMechanism: "Built decoupled API architectures using FastAPI and Pydantic v2 strict models to enforce type-safe boundaries, automatic error recovery, and async request pooling.",
        productionVerification: "Engineered FinSafe AI's backend with 100% deterministic mathematical isolation and strict fallback circuit breakers.",
        associatedStack: ["FastAPI", "Pydantic v2", "SQLAlchemy", "AsyncIO", "Docker"],
      },
      {
        id: "sql",
        title: "PostgreSQL, SQLAlchemy & Relational Schema",
        icon: "🗄️",
        description: "Relational database schema design, indexing strategies, normalization, and ORM query tuning.",
        coreMechanism: "Designed normalized 3NF schemas, foreign key constraints, and indexed queries across PostgreSQL, SQLite, and MySQL to handle high-concurrency transactions without data drift.",
        productionVerification: "Centralized 500+ AMD engineering scripts into indexed PostgreSQL tables, cutting query latency by 60%.",
        associatedStack: ["PostgreSQL", "SQLite", "SQLAlchemy ORM", "Django ORM", "Schema Design"],
      },
      {
        id: "pipelines",
        title: "Enterprise Data Pipelines",
        icon: "📦",
        description: "Automated ingestion, transformation, and validation pipelines for complex data.",
        coreMechanism: "Built robust ETL (Extract, Transform, Load) pipelines using Python to process highly structured enterprise hardware payloads.",
        productionVerification: "Built the automated ingestion pipeline for AMD, ensuring 100% schema compliance across engineering data.",
        associatedStack: ["Data Pipelines", "XML", "JSON", "Structured Logging"],
      },
      {
        id: "oop",
        title: "Object-Oriented Architecture",
        icon: "📐",
        description: "Clean, maintainable code using advanced OOP and design patterns.",
        coreMechanism: "Applied SOLID principles, MVC architecture, and service-layer patterns to ensure the Python codebase remained modular and testable.",
        productionVerification: "Maintained enterprise-grade Python backends at AMD, ensuring code was easily reviewable and extensible by other engineers.",
        associatedStack: ["OOP", "SOLID", "MVC", "Clean Code"],
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Architecture & Web APIs",
    icon: "🎨",
    badge: "Hardware & Native",
    focus: "React, Performance, Browser APIs, Accessibility.",
    skills: [
      {
        id: "virtual-scroll",
        title: "Virtual Scrolling & DOM Optimization",
        icon: "📜",
        description: "Renders only visible DOM nodes regardless of dataset scale, keeping the browser at 60 FPS.",
        coreMechanism: "Built a custom virtual scroll engine that calculates visible viewport ranges, mounts only ~28 DOM nodes using DocumentFragment, and recycles nodes as the user scrolls.",
        productionVerification: "Eliminated layout thrashing and memory spikes while scrolling through 50,000+ log rows in the Pulsev engine.",
        associatedStack: ["Virtual Scrolling", "O(1) Memory", "DOM API"],
      },
      {
        id: "workers",
        title: "Web Workers & Thread Isolation",
        icon: "🧵",
        description: "Offloads heavy computation off the main browser thread to prevent UI freezing.",
        coreMechanism: "Instantiated Web Workers using in-memory Blobs (URL.createObjectURL) to bypass CORS, isolating all data parsing and regex matching from the UI thread.",
        productionVerification: "Maintained a locked 60 FPS UI in Pulsev while ingesting 10,000+ logs per second in the background.",
        associatedStack: ["Web Workers", "Blob API", "Thread Isolation"],
      },
      {
        id: "proxy-state",
        title: "Custom Reactive State Management",
        icon: "🔄",
        description: "Built a reactive state store from scratch using ES6 Proxy, eliminating framework overhead.",
        coreMechanism: "Wrapped application state in an ES6 Proxy with set trap interceptors, using a Pub/Sub Event Bus to update only subscribed UI components (no virtual DOM).",
        productionVerification: "Achieved Vue-like fine-grained reactivity in pure Vanilla JS at zero framework cost (NovaUI).",
        associatedStack: ["ES6 Proxy", "Pub/Sub", "State Management"],
      },
      {
        id: "react-ui",
        title: "React, Tailwind & Framer Motion",
        icon: "⚛️",
        description: "Component-driven UIs with utility-first styling and physics-based animations.",
        coreMechanism: "Built immersive, high-craft interfaces using React, Tailwind CSS, and Framer Motion for scroll-linked animations and spring physics.",
        productionVerification: "Delivered the immersive portfolio you're viewing now, balancing heavy visuals with responsive performance.",
        associatedStack: ["React", "Tailwind CSS", "Framer Motion"],
      },
      {
        id: "canvas",
        title: "HTML5 Canvas & Animation",
        icon: "🌌",
        description: "Hardware-accelerated particle systems and real-time telemetry waveforms.",
        coreMechanism: "Rendered dynamic particle fields and data waves via HTML5 <canvas> and requestAnimationFrame, using Euclidean vector physics for interactivity.",
        productionVerification: "Delivered high-frame-rate visuals without triggering browser layout repaints.",
        associatedStack: ["Canvas API", "requestAnimationFrame", "Physics"],
      },
      {
        id: "accessibility",
        title: "Accessibility & Semantic HTML",
        icon: "♿",
        description: "WAI-ARIA compliant interfaces with full keyboard navigation and screen reader support.",
        coreMechanism: "Implemented WAI-ARIA roles, live regions (aria-live), and focus traps to build standards-compliant interactive components.",
        productionVerification: "Ensured the NovaUI portal and portfolio meet modern accessibility standards with full keyboard support.",
        associatedStack: ["WAI-ARIA", "Semantic HTML", "Focus Traps"],
      },
    ],
  },
  {
    id: "tooling",
    label: "Testing, Systems & DevOps",
    icon: "🛡️",
    badge: "Reliability & Ops",
    focus: "Engineering Practices.",
    skills: [
      {
        id: "pytest",
        title: "Pytest & Test Automation",
        icon: "🧪",
        description: "Unit, integration, and API test suites guaranteeing deterministic code reliability.",
        coreMechanism: "Wrote comprehensive Pytest suites covering models, services, APIs, and authentication layers, utilizing mocking for external API dependencies.",
        productionVerification: "Achieved a zero-regression deployment record across enterprise silicon validation scripts at AMD.",
        associatedStack: ["Fixtures", "Mocking", "Regression Suites", "Pytest"],
      },
      {
        id: "linux",
        title: "Linux & Bash Scripting",
        icon: "🐧",
        description: "Linux server environments, shell automation, and system-level debugging.",
        coreMechanism: "Operated comfortably within Linux environments, writing Bash scripts for automation and managing complex Git workflows (branching, rebasing, PR reviews).",
        productionVerification: "Maintained stable deployment pipelines and automated repetitive engineering workflows using Bash and Git.",
        associatedStack: ["Bash", "Linux", "Shell Automation"],
      },
      {
        id: "cicd",
        title: "Git & CI/CD Pipelines",
        icon: "🔀",
        description: "Version control workflows and automated deployment pipelines.",
        coreMechanism: "Managed complex Git histories, branch protection rules, and automated CI/CD workflows for seamless code integration.",
        productionVerification: "Ensured stable, repeatable deployments for enterprise Python backends with zero merge conflicts.",
        associatedStack: ["Git", "GitHub Actions", "CI/CD", "Branch Policies"],
      },
      {
        id: "streamlit",
        title: "Streamlit AI Dashboards",
        icon: "📊",
        description: "Rapid AI prototyping dashboards visualizing vector cosine scores and prompt pass rates.",
        coreMechanism: "Built interactive Python dashboards using Streamlit to expose the internal workings of the RAG pipeline and debug retrieval accuracy.",
        productionVerification: "Gave stakeholders transparency into the AI's decision-making process by visualizing cosine similarity scores in real-time.",
        associatedStack: ["Streamlit", "Data Visualization", "Python"],
      },
      {
        id: "agile",
        title: "Agile SDLC & Delivery",
        icon: "📋",
        description: "Production sprint planning, technical documentation, and cross-functional handoffs.",
        coreMechanism: "Collaborated within Agile environments using Jira, participating in sprint planning, code reviews, and daily standups.",
        productionVerification: "Successfully delivered enterprise Python backend modules at Mirafra for client AMD, adhering to strict enterprise SDLC standards.",
        associatedStack: ["Agile", "Jira", "SDLC", "Sprint Cycles"],
      },
      {
        id: "debugging",
        title: "Code Review & Debugging",
        icon: "🔍",
        description: "Systematic root-cause analysis and peer code review practices.",
        coreMechanism: "Utilized advanced debugging tools, logging (Python logging module), and exception handling to identify and resolve production bottlenecks.",
        productionVerification: "Maintained high code quality through rigorous peer reviews and automated linting standards.",
        associatedStack: ["Debugging", "Logging", "Code Review", "Linters"],
      },
    ],
  },
];

export default function SkillsMatrix() {
  const [activeCategoryId, setActiveCategoryId] = useState("genai");
  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];
  const [selectedSkill, setSelectedSkill] = useState(activeCategory.skills[0]);
  const [mobileHudTab, setMobileHudTab] = useState("mechanism");

  // Handle category switch
  const handleCategoryChange = (catId) => {
    setActiveCategoryId(catId);
    const cat = SKILL_CATEGORIES.find((c) => c.id === catId);
    if (cat && cat.skills.length > 0) {
      setSelectedSkill(cat.skills[0]);
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-14 sm:py-24 px-4 sm:px-6 z-20 font-sans border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">Competencies</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Real production competencies across autonomous agent systems, high-concurrency backends, and low-latency browser engines.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CATEGORY SWITCHER PILLS (SMOOTH TABS, HORIZONTAL SCROLL)  */}
        {/* ========================================================= */}
        <div className="flex items-center justify-start sm:justify-center gap-2 p-1.5 rounded-2xl bg-[#031518]/90 border border-teal-500/25 max-w-full overflow-x-auto no-scrollbar mx-auto backdrop-blur-xl shadow-lg">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 flex items-center gap-2 shrink-0 whitespace-nowrap ${
                  isActive
                    ? "text-black bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE SKILL MATRIX WORKBENCH (SPLIT VIEW)           */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* LEFT PANEL: 6 Interactive Skill Tiles (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider font-bold flex items-center gap-2">
                <span>⚡</span>
                <span>{activeCategory.label}</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded border border-white/10 bg-white/[0.02]">
                {activeCategory.focus}
              </span>
            </div>

            {/* 6 Skill Cards Grid (Compact 2-col on mobile, full desktop layout preserved) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {activeCategory.skills.map((skill) => {
                const isSelected = selectedSkill?.id === skill.id;
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 sm:gap-3 ${
                      isSelected
                        ? "bg-gradient-to-br from-teal-500/20 via-[#031518]/95 to-cyan-500/10 border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.25)]"
                        : "glacier-card bg-[#031518]/70 border-teal-500/20 hover:border-teal-400/50 hover:bg-[#031518]/90"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#02090b] border border-teal-500/30 flex items-center justify-center text-sm sm:text-base shadow-inner shrink-0">
                          {skill.icon}
                        </div>
                        <span
                          className={`text-[8px] sm:text-[9px] font-mono uppercase px-1.5 sm:px-2 py-0.5 rounded font-bold border ${
                            isSelected
                              ? "bg-cyan-400/20 text-cyan-300 border-cyan-400/50"
                              : "bg-white/[0.04] text-slate-400 border-white/10"
                          }`}
                        >
                          {isSelected ? "Active" : "Inspect"}
                        </span>
                      </div>

                      <h4 className="font-heading font-black text-white text-xs sm:text-base tracking-tight leading-snug line-clamp-2">
                        {skill.title}
                      </h4>

                      <p className="hidden sm:block text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="hidden sm:flex pt-2 border-t border-white/5 flex-wrap gap-1">
                      {skill.associatedStack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: Live Telemetry & Verification HUD (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glacier-card rounded-3xl border border-teal-400/35 bg-[#031518]/90 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_0_35px_rgba(0,243,255,0.12)] flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  {/* HUD Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-[10px] font-mono uppercase text-cyan-300 tracking-widest font-bold">
                        SKILL ARCHITECTURE INSPECTOR
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">REAL SIGNAL</span>
                  </div>

                  {/* Selected Skill Title & Badges */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-2xl">{selectedSkill.icon}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-teal-400/40 text-teal-300 bg-teal-500/10 font-bold uppercase">
                        {activeCategory.label}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight mt-1">
                      {selectedSkill.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  {/* Mobile Segmented Toggle (Reduces vertical scroll by 50% on phone screens) */}
                  <div className="flex sm:hidden items-center gap-1.5 p-1 rounded-xl bg-[#02090b] border border-teal-500/25 w-fit">
                    <button
                      onClick={() => setMobileHudTab("mechanism")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                        mobileHudTab === "mechanism"
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                          : "text-slate-400"
                      }`}
                    >
                      ⚡ Mechanism
                    </button>
                    <button
                      onClick={() => setMobileHudTab("verification")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                        mobileHudTab === "verification"
                          ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                          : "text-slate-400"
                      }`}
                    >
                      🛡️ Proof & Verification
                    </button>
                  </div>

                  {/* 1. Core Technical Mechanism */}
                  <div className={`p-3.5 rounded-xl bg-[#02090b]/80 border border-teal-500/20 space-y-1 ${
                    mobileHudTab === "mechanism" ? "block" : "hidden sm:block"
                  }`}>
                    <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>Core Technical Mechanism</span>
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      {selectedSkill.coreMechanism}
                    </p>
                  </div>

                  {/* 2. Production Verification Proof */}
                  <div className={`p-3.5 rounded-xl bg-teal-500/[0.08] border border-teal-500/30 space-y-1 ${
                    mobileHudTab === "verification" ? "block" : "hidden sm:block"
                  }`}>
                    <span className="text-[10px] font-mono uppercase text-teal-300 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span>Production Verification</span>
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      {selectedSkill.productionVerification}
                    </p>
                  </div>

                  {/* 3. Associated Stack Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                      Associated Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.associatedStack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-teal-300 font-bold px-2.5 py-0.5 rounded-md bg-teal-400/10 border border-teal-400/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Verified Production Skill
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* BOTTOM STATUS STRIP                                       */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-5 rounded-2xl glacier-card border border-teal-500/20 bg-[#031518]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
            <span>
              <strong className="text-white">Zero Fluff Architecture</strong>: 24 production capabilities backed by shipped software.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-400">
            <span>● 100% Native Implementations</span>
            <span>● Production Guardrails</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
