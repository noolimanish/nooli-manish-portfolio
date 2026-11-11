import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("amd");

  const experiences = {
    amd: {
      date: "DEC 2024 — PRESENT",
      badge: "Enterprise Client: AMD",
      title: "Software Engineer I // AI Tools & Backend Infrastructure",
      company: "Mirafra Software Technologies Pvt. Ltd.",
      client: "On-site Client: AMD (Hyderabad, India)",
      tabLabel: "Mirafra (Client: AMD)",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Engineering enterprise Python backends, automated FPGA timing pipelines, and intelligent AI-driven troubleshooting tools within AMD's Rapid Design Infrastructure (RDI) and Linux environment. Replacing manual workflows with normalized PostgreSQL schemas and high-precision semantic search.",
      bullets: [
        "RAG-Powered Debugging Assistant: Built an internal troubleshooting engine combining Python, vector embeddings, and semantic search over 10,000+ historical error logs and Jira threads—accelerating root-cause triage by 40%.",
        "AI-Assisted QoR (Quality of Results) Analysis: Developed an analytical system integrating historical silicon metrics and domain knowledge with LLM-assisted reasoning to diagnose timing anomalies and device variations.",
        "Centralized Engineering Script Backend: Architected a Python/Django/PostgreSQL platform organizing 500+ proprietary hardware scripts, slashing discovery and retrieval latency by 60%.",
        "Automated FPGA Timing Pipelines: Automated FPGA timing flows and speedfile validation via complex XML/JSON extraction and verification routines, cutting manual engineering effort by 45%.",
      ],
      skills: [
        "Python (3.10+)",
        "Django",
        "PostgreSQL",
        "RAG & Vector Embeddings",
        "AMD RDI Framework",
        "Xilinx Vivado",
        "FPGA Speedfiles",
        "Linux Systems",
        "Perforce (P4)",
        "Pytest",
        "Jira",
      ],
    },
    internal: {
      date: "2024 — PRESENT",
      badge: "Internal AI Systems",
      title: "AI & Automation Engineer // Autonomous Agentic Systems",
      company: "Mirafra Software Technologies",
      client: "Internal Engineering Labs & Tooling",
      tabLabel: "Mirafra (Internal AI Systems)",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "Architecting autonomous agentic tooling and LLM-assisted automation microservices to accelerate internal developer velocity, embedded firmware diagnostics, and technical recruitment operations.",
      bullets: [
        "Embedded Software Assistant: Developed automated pipelines for kernel log analysis, crash diagnostics, automated code review support, and dynamic test case generation.",
        "Intelligent Recruitment Assistant: Engineered an agentic system for semantic resume screening, candidate ranking, interview question synthesis, and structured evaluation scorecards.",
        "Model Context Protocol (MCP) Integration: Implemented FastMCP tool servers exposing relational database operations as type-safe tool primitives for autonomous LLM agents.",
        "Deterministic Guardrails: Enforced Pydantic v2 schemas and evaluator-optimizer loops to guarantee zero hallucination in internal tooling workflows.",
      ],
      skills: [
        "Agentic AI",
        "FastMCP & Tool Calling",
        "FastAPI",
        "Pydantic v2",
        "Kernel Log Diagnostics",
        "Semantic Search",
        "Pytest Guardrails",
        "Docker Compose",
      ],
    },
  };

  const currentExp = experiences[activeTab];

  return (
    <section
      id="experience"
      className="relative w-full py-28 md:py-36 bg-transparent text-white overflow-hidden border-t border-white/5 z-20 font-sans"
    >
      {/* Cosmic Orbit Rings Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-500/10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-dashed border-teal-500/5 pointer-events-none" />
      <div className="absolute top-1/4 right-[15%] w-2 h-2 rounded-full bg-cyan-400/40 blur-[1px] shadow-[0_0_12px_#22d3ee] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[20%] w-3 h-3 rounded-full bg-teal-400/30 blur-[2px] shadow-[0_0_14px_#2dd4bf] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400/80 font-bold">
              EDUCATION & WORK
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN: EDUCATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            {/* Degree & Year */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest">
                  2020 — 2024
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight mt-1">
                Bachelor of Technology
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-medium mt-1">
                Computer Science & Engineering
              </p>
              <p className="text-teal-400/90 text-xs font-mono mt-0.5 tracking-wide">
                Sreenidhi Institute of Science and Technology (SNIST)
              </p>
            </div>

            {/* Campus Architectural Grayscale Photo Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#031518]/60 shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <div
                  className="w-full h-full bg-cover bg-center filter grayscale contrast-[1.15] brightness-[0.75] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700 ease-out"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop')`,
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#02090b] via-[#02090b]/40 to-transparent" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80" />

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="inline-block px-3 py-1 rounded-md bg-black/75 border border-white/10 backdrop-blur-md mb-1.5 shadow-lg">
                    <span className="text-[11px] font-mono tracking-wider text-teal-300 font-bold uppercase">
                      Campus Facade
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-heading font-black text-white tracking-wide drop-shadow-md">
                    Sreenidhi Institute of Science & Technology
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Hyderabad, Telangana • Autonomous
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-teal-400/80">Major: Core CS & Systems</span>
                <span className="text-slate-400">CGPA: 8.0+</span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: WORK EXPERIENCE CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {/* Category Switcher Tabs (Mirafra - AMD & Mirafra - Internal) */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 w-fit backdrop-blur-md">
              <button
                onClick={() => setActiveTab("amd")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "amd"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>⚙️ Mirafra - (Client: AMD)</span>
              </button>
              <button
                onClick={() => setActiveTab("internal")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "internal"
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>⚡ Mirafra - (Internal Project)</span>
              </button>
            </div>

            {/* Main Experience Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glacier-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl relative"
              >
                {/* Top Row: Date & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        activeTab === "internal" ? "bg-teal-400" : "bg-amber-400"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold tracking-widest uppercase ${
                        activeTab === "internal" ? "text-teal-300" : "text-amber-400/90"
                      }`}
                    >
                      {currentExp.date}
                    </span>
                  </div>

                  {/* Badge Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-lg ${
                      activeTab === "internal"
                        ? "bg-teal-500/10 border-teal-500/30 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    }`}
                  >
                    {currentExp.icon}
                  </div>
                </div>

                {/* Job Title */}
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight leading-snug">
                  {currentExp.title}
                </h3>

                {/* Company & Client */}
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-5">
                  <span
                    className={`font-bold text-base sm:text-lg ${
                      activeTab === "internal" ? "text-teal-300" : "text-amber-400"
                    }`}
                  >
                    {currentExp.company}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-mono text-xs sm:text-sm">
                    {currentExp.client}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {currentExp.description}
                </p>

                {/* Key Deliverables / Responsibilities */}
                <div className="mb-6 space-y-2.5">
                  {currentExp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span
                        className={`mt-1 font-bold ${
                          activeTab === "internal" ? "text-cyan-400" : "text-amber-400"
                        }`}
                      >
                        ▹
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Pills */}
                <div className="pt-5 border-t border-white/10">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                    Core Capabilities & Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentExp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border transition-colors ${
                          activeTab === "internal"
                            ? "border-teal-500/20 text-teal-300/90 hover:border-teal-400/40 hover:bg-teal-400/10"
                            : "border-amber-500/20 text-amber-300/90 hover:border-amber-400/40 hover:bg-amber-400/10"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
