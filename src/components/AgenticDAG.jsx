import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DAG_NODES = [
  {
    id: "intent",
    step: "01",
    shortName: "Ingestion",
    title: "User Intent & Payload Ingestion",
    role: "Validation & Normalization",
    badge: "STAGE 01 // INGEST",
    icon: "⚡",
    metrics: "Latency: 12ms | Schema: Validated",
    description:
      "Captures natural language screenwriting prompts or enterprise XML/log payloads, normalizing inputs and validating schemas before routing.",
    tech: ["REST APIs", "Data Validation", "JSON/XML", "Python"],
    logOutput: "> [INGEST] Payload validated. Routing to ReAct Orchestrator...",
  },
  {
    id: "orchestrator",
    step: "02",
    shortName: "Reasoning",
    title: "ReAct Agent Orchestrator",
    role: "Planner & Dynamic Router",
    badge: "STAGE 02 // REASON",
    icon: "🧠",
    metrics: "Model: Gemini 2.5 Pro | Temp: 0.2",
    description:
      "Deconstructs complex goals into autonomous reasoning steps ([THOUGHT] -> [ACTION]). Dynamically selects between semantic vector search or relational backend tools.",
    tech: ["Gemini API", "Multi-Turn Prompts", "State Machine", "OOP"],
    logOutput: "> [THOUGHT] Intent classified. Dispatching parallel sub-agent tools...",
  },
  {
    id: "rag_tools",
    step: "03",
    shortName: "Retrieval",
    title: "Context Retrieval & Backend Tools",
    role: "Semantic Search & SQL",
    badge: "STAGE 03 // RETRIEVAL",
    icon: "🔍",
    metrics: "Top-K: 3 Rules | Cosine Sim: 0.94",
    description:
      "Executes semantic search across domain rule layers via Sentence-Transformers, or queries relational SQLite/MySQL schemas for system telemetry.",
    tech: ["Sentence-Transformers", "Cosine Similarity", "Django ORM", "SQL"],
    logOutput: "> [TOOL_CALL] Retrieved top-3 rule vectors (sim=0.94) + SQL context.",
  },
  {
    id: "reviewer",
    step: "04",
    shortName: "Reflection",
    title: "Self-Critique Reviewer Loop",
    role: "Quality & Continuity Gate",
    badge: "STAGE 04 // CRITIQUE",
    icon: "🛡️",
    metrics: "Pass Rate: 99.4% | Deterministic QA",
    description:
      "A secondary LLM critic agent evaluates generated output against narrative continuity, pacing rules, and schema constraints before approving final delivery.",
    tech: ["Critic Loops", "Pytest Assertions", "Exception Handling", "Logging"],
    logOutput: "> [CRITIQUE] Continuity & constraints verified. Output approved.",
  },
  {
    id: "wrapper",
    step: "05",
    shortName: "Delivery",
    title: "Client Delivery & Presentation",
    role: "High-Craft UI Presentation",
    badge: "STAGE 05 // DELIVERY",
    icon: "✨",
    metrics: "Sub-ms Rendering | Responsive UI",
    description:
      "Delivers rock-solid backend intelligence inside a clean, intuitive Glacier glass interface—ensuring powerful engines have an unforgettable, accessible cover.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Streamlit"],
    logOutput: "> [DELIVERED] Response rendered to UI with similarity telemetry.",
  },
];

export default function AgenticDAG() {
  const [activeNode, setActiveNode] = useState(DAG_NODES[2]); // Default to Retrieval node
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(-1);
  const [mobileDagView, setMobileDagView] = useState("specs"); // "specs" | "logs" on mobile
  const [logs, setLogs] = useState([
    "> [SYSTEM] Multi-Agent Pipeline ready. Select nodes or trigger simulation.",
  ]);
  const logContainerRef = useRef(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Run animated pipeline simulation
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);
    setActiveNode(DAG_NODES[0]);
    setMobileDagView("logs"); // Auto-show live logs on mobile during execution
    setLogs(["> [TRACE_START] Initiating multi-agent execution pipeline..."]);
  };

  useEffect(() => {
    if (!isSimulating || simStep < 0) return;

    if (simStep < DAG_NODES.length) {
      const currentNode = DAG_NODES[simStep];
      setActiveNode(currentNode);
      setLogs((prev) => [...prev, currentNode.logOutput]);

      const timer = setTimeout(() => {
        setSimStep((prev) => prev + 1);
      }, 900);

      return () => clearTimeout(timer);
    } else {
      setLogs((prev) => [
        ...prev,
        "> [SUCCESS] Pipeline execution complete in 380ms. Delivered safely.",
      ]);
      setIsSimulating(false);
      setSimStep(-1);
    }
  }, [isSimulating, simStep]);

  return (
    <section
      id="agentic-dag"
      className="relative w-full py-12 sm:py-20 bg-transparent text-white overflow-hidden border-t border-white/5 z-20 font-sans"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>INTERACTIVE PIPELINE CIRCUIT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-white">
              Multi-Agent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">
                Execution Circuit
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
              An interactive visual map showing how queries pass from intent to ReAct routing, vector retrieval, and reviewer validation.
            </p>
          </div>

          {/* Simulate Pipeline Button */}
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
              isSimulating
                ? "bg-teal-500/20 text-teal-300 border border-teal-400/40 cursor-wait shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                : "bg-gradient-to-r from-teal-400 to-cyan-400 text-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(45,212,191,0.35)]"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isSimulating ? "bg-teal-300 animate-ping" : "bg-black"
              }`}
            />
            {isSimulating ? "Simulating..." : "▶ Run Simulation"}
          </button>
        </motion.div>

        {/* ========================================================= */}
        {/* PLAYFUL COMPACT INTERACTIVE CIRCUIT PIPELINE (SAVES 65% SPACE) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glacier-card rounded-2xl p-4 sm:p-5 border border-teal-500/25 bg-[#031518]/85 backdrop-blur-xl shadow-lg relative overflow-hidden"
        >
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span className="text-cyan-300 flex items-center gap-1.5">
              <span>⚡</span>
              <span>AGENTIC FLOW MAP</span>
            </span>
            <span>CLICK ANY NODE TO INSPECT</span>
          </div>

          {/* Interactive Circuit Line */}
          <div className="relative flex items-center justify-between px-2 sm:px-6 py-2 overflow-x-auto scrollbar-none gap-2 sm:gap-0">
            {/* Background Circuit Track */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 z-0 hidden sm:block" />

            {/* Animated Energy Progress Beam */}
            <div className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 z-0 hidden sm:block overflow-hidden pointer-events-none">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width:
                    simStep >= 0
                      ? `${((simStep + 1) / DAG_NODES.length) * 100}%`
                      : "100%",
                  opacity: simStep >= 0 ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 shadow-[0_0_12px_#00f3ff]"
              />
            </div>

            {/* 5 Compact Milestone Nodes */}
            {DAG_NODES.map((node, index) => {
              const isSelected = activeNode.id === node.id;
              const isPassed = isSimulating && simStep >= index;

              return (
                <div
                  key={node.id}
                  onClick={() => !isSimulating && setActiveNode(node)}
                  className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer group shrink-0"
                >
                  {/* Glowing Node Circle */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: isSelected ? 1.15 : 1,
                      boxShadow: isSelected || isPassed
                        ? "0 0 20px rgba(0, 243, 255, 0.45)"
                        : "0 0 0px rgba(0,0,0,0)",
                    }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-base sm:text-lg transition-all duration-200 border ${
                      isSelected || isPassed
                        ? "bg-gradient-to-br from-teal-400/30 to-cyan-500/20 border-cyan-400 text-white"
                        : "bg-[#02090b] border-white/15 text-slate-400 group-hover:border-teal-400/50 group-hover:text-white"
                    }`}
                  >
                    <span>{node.icon}</span>
                  </motion.div>

                  {/* Node Step & Title Label */}
                  <div className="text-center">
                    <div
                      className={`text-[9px] font-mono font-bold tracking-wider ${
                        isSelected ? "text-cyan-300" : "text-slate-400"
                      }`}
                    >
                      {node.step}. {node.shortName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile View Switcher (Saves 300px+ vertical height on phone screens) */}
        <div className="flex lg:hidden items-center justify-center gap-2 p-1 rounded-xl bg-[#031518]/90 border border-teal-500/25 max-w-fit mx-auto backdrop-blur-xl">
          <button
            onClick={() => setMobileDagView("specs")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              mobileDagView === "specs"
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🔍 Architecture Specs
          </button>
          <button
            onClick={() => setMobileDagView("logs")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              mobileDagView === "logs"
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>💻 Trace Logs</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* UNIFIED COMPACT INSPECTOR WORKBENCH (NODE DETAILS + LOGS) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left 7 cols: Active Node Details */}
          <div className={`lg:col-span-7 glacier-card rounded-2xl p-5 sm:p-6 border border-teal-500/30 bg-[#031518]/90 backdrop-blur-xl flex flex-col justify-between space-y-4 ${
            mobileDagView === "specs" ? "block" : "hidden lg:flex"
          }`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{activeNode.icon}</span>
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-teal-400/40 bg-teal-500/10 text-teal-300 font-bold">
                      {activeNode.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-black text-white mt-0.5">
                      {activeNode.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20 hidden sm:inline">
                  {activeNode.role}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {activeNode.description}
              </p>

              {/* Stack tags */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
              <span className="text-slate-400">Telemetry Specs:</span>
              <span className="text-teal-300 font-bold">{activeNode.metrics}</span>
            </div>
          </div>

          {/* Right 5 cols: Compact Telemetry Log Terminal */}
          <div className={`lg:col-span-5 rounded-2xl bg-[#02090b]/90 border border-teal-500/25 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden ${
            mobileDagView === "logs" ? "block" : "hidden lg:flex"
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-bold">AGENT_TRACE_TELEMETRY</span>
              </div>
              <span>AUTO_SCROLL</span>
            </div>

            <div
              ref={logContainerRef}
              className="flex-1 overflow-y-auto space-y-1.5 py-3 min-h-[130px] max-h-[170px] text-[11px] text-slate-300 scrollbar-none"
            >
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`${
                    log.includes("[CRITIQUE]")
                      ? "text-amber-300"
                      : log.includes("[SUCCESS]")
                      ? "text-emerald-400 font-bold"
                      : log.includes("[TOOL_CALL]")
                      ? "text-cyan-300"
                      : "text-slate-300"
                  } leading-relaxed`}
                >
                  {log}
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
              <span>STATUS: {isSimulating ? "EXECUTING" : "IDLE"}</span>
              <span className="text-teal-400">LATENCY: 18ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
