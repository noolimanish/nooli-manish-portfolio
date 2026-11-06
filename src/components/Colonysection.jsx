import React from "react";
import { motion } from "framer-motion";

export default function ColonySection() {
  const colonyBlocks = [
    {
      id: "cinema",
      title: "Autonomous 4-Tier RAG // CineScript Studio",
      tag: "Production GenAI",
      color: "from-purple-500/15 to-pink-500/5",
      border: "border-purple-500/30",
      icon: "🤖",
      colSpan: "lg:col-span-2",
      content:
        "Architected a custom 4-tier RAG engine separating screenwriting intelligence into Voice, Structure, Mechanics, and Philosophy. Integrates Sentence-Transformers cosine vector embeddings with Google Gemini 2.5 Pro multi-pass generation.",
      chips: ["4-Tier RAG", "Gemini 2.5 Pro", "Dense Embeddings", "Prompt Architecture", "Cosine Index"],
    },
    {
      id: "engine",
      title: "Enterprise AI Telemetry // Mirafra & AMD",
      tag: "Silicon Validation",
      color: "from-teal-400/15 to-emerald-500/5",
      border: "border-teal-500/30",
      icon: "⚙️",
      colSpan: "lg:col-span-2",
      content:
        "Engineered scalable Python automation tools and Django/SQL telemetry modules for AMD engineering pipelines. Automated high-throughput XML schema verification and accelerated log-parsing analytics with zero regressions.",
      chips: ["Python Automation", "Django", "SQL Telemetry", "Log Parsers", "XML Ingestion", "Linux/Git"],
    },
    {
      id: "reviewer",
      title: "Dual-LLM Reviewer Loops & Guardrails",
      tag: "Zero Hallucination",
      color: "from-amber-500/15 to-yellow-500/5",
      border: "border-amber-500/30",
      icon: "🛡️",
      colSpan: "lg:col-span-1",
      content:
        "Secondary LLM critic agents evaluate generated outputs against continuity rules and schema constraints before delivery. Bounded by strict Pytest regression suites to ensure production-grade deterministic reliability.",
      chips: ["Critic Loops", "Pytest Guardrails", "Schema Constraints", "Evaluation"],
    },
    {
      id: "agentic",
      title: "Multi-Agent ReAct State Orchestration",
      tag: "Autonomous DAG",
      color: "from-cyan-500/15 to-blue-500/5",
      border: "border-cyan-500/30",
      icon: "🧠",
      colSpan: "lg:col-span-3",
      content:
        "Implemented ReAct ([THOUGHT] -> [ACTION] -> [OBSERVATION]) state machines dynamically selecting between vector semantic search or relational SQL backend tools. Wrapped in real-time 60fps telemetry dashboards built with React and Tailwind.",
      chips: ["ReAct Agent Loops", "Tool Calling", "Vector Routing", "FastAPI", "React UI Wrapper"],
    },
  ];

  return (
    <section id="colony" className="relative w-full bg-transparent py-28 border-t border-white/5 z-20 font-sans">
      
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-3 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>The Colony of Blocks // AI Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white">
            Engineering With An{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">
              Agentic Lens
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
            Four specialized engineering territories—spanning autonomous ReAct loops, 4-tier vector retrieval, dual-LLM critique gates, and enterprise backend pipelines.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {colonyBlocks.map((block, idx) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.015, y: -4 }}
              className={`${block.colSpan} relative bg-gradient-to-br ${block.color} glacier-card rounded-3xl p-6 md:p-7 flex flex-col justify-between border border-teal-500/20 bg-[#031518]/70 backdrop-blur-xl group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {block.icon}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-teal-300 font-bold px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/25">
                    {block.tag}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                  {block.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {block.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {block.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-[10px] font-mono text-teal-300/90 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
