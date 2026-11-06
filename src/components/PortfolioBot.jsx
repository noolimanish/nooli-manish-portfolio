import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MANISH_KNOWLEDGE = {
  intro: {
    title: "Who is Manish Nooli?",
    answer:
      "Hey! I'm **Manish Nooli**, a **Pure AI & Agentic Systems Engineer** based in Hyderabad. Currently, I work as a **Software Engineer I at Mirafra Technologies**, building scalable backend automation and telemetry pipelines for our client **AMD**.\n\nI specialize in **Generative AI & Agentic Architecture**:\n• Autonomous ReAct agents with dynamic tool-calling\n• 4-tier RAG retrieval with Sentence-Transformers & cosine embeddings\n• Dual-LLM reviewer loops with Pytest guardrails for zero-hallucination delivery\n• High-throughput Python/Django/SQL enterprise backend pipelines.",
  },
  agentic: {
    title: "What is Manish's Agentic AI & RAG expertise?",
    answer:
      "Manish designs production-grade autonomous agent architectures:\n\n• **ReAct Planner & Execution**: Deconstructs user queries into reasoning steps ([THOUGHT] -> [ACTION] -> [OBSERVATION]) to select between semantic vector search or relational database tools.\n• **4-Tier RAG Engine**: Developed in **CineScript Studio** to index rules into Voice, Structure, Mechanics, and Philosophy tiers, using dense embeddings and top-K cosine ranking.\n• **Dual-LLM Reviewer Gates**: A secondary critic agent validates continuity, schema compliance, and format before API dispatch (achieving **99.4% pass rate**).\n• **Zero Hallucination Guardrails**: Hardened with Pytest assertions and strict JSON schema validators.",
  },
  amd: {
    title: "What did Manish build at AMD?",
    answer:
      "At **Mirafra Technologies for AMD**, Manish:\n\n• **Automated XML & Silicon Log Pipelines**: Replaced slow manual inspection with high-throughput Python validation tools.\n• **Django & SQL Database Telemetry**: Migrated raw file storage to structured relational databases with query optimization.\n• **Automated Triage Parsers**: Developed regex and regex-free parsers that triage silicon validation logs and categorize errors automatically.\n• **Reliability Testing**: Built comprehensive test suites with Pytest to guarantee zero regression.",
  },
  cinescript: {
    title: "What is CineScript Studio?",
    answer:
      "**CineScript Studio** is Manish's flagship GenAI venture—a narrative intelligence platform for cinematic storytelling:\n\n• **4-Tier RAG Engine**: Separates screenwriting rules into Voice, Structure, Mechanics, and Philosophy.\n• **Dense Vector Search**: Uses Sentence-Transformers and cosine similarity for contextual prompt retrieval.\n• **Multi-Agent Reviewer Loop**: A secondary critic agent validates draft scripts against continuity constraints before final delivery.\n• **Stack**: Python, FastAPI, Google Gemini 2.5 Pro API, Vector Embeddings, React & Framer Motion.",
  },
  pulsev: {
    title: "What is Pulsev?",
    answer:
      "**Pulsev** is a high-volume log & XML stream analytics engine built with zero dependencies:\n\n• **10,000+ logs/sec**: Processes telemetry off the main thread using an inline Web Worker via Blob URLs.\n• **O(1) Virtual Scrolling**: Renders only ~28 DOM nodes at any time regardless of dataset size (50k+ logs), completely eliminating layout thrashing.\n• **ES6 Proxy Store**: Reactive state management with 200ms debounced live regex filtering.",
  },
  novaui: {
    title: "What is NovaUI?",
    answer:
      "**NovaUI** is a production-grade cloud tenant provisioning portal with Carbon/Linear dark aesthetics:\n\n• **Zero-Dependency Proxy Store**: Auto-persists session state to localStorage and surgically updates subscribed UI components.\n• **Shannon Bit-Entropy**: Mathematical password strength quantification.\n• **Canvas Physics**: 60FPS Euclidean distance vector particle physics background with 100% WAI-ARIA accessibility.",
  },
  skills: {
    title: "What are Manish's core skills?",
    answer:
      "Manish brings pure AI engineering strength across three pillars:\n\n1. **GenAI & Agentic Systems**: Autonomous ReAct Agents, 4-Tier RAG, Google Gemini 2.5 Pro API & Tool Calling, Sentence-Transformers, Vector Search, Dual-LLM Reviewer Loops.\n2. **Python Backend & Architecture**: Django REST Framework, FastAPI, SQL (MySQL/SQLite), Pytest, REST APIs, XML/JSON parsing, Linux & Git.\n3. **Creative Visual Wrappers**: React, Tailwind CSS, Framer Motion, Streamlit AI telemetry UIs, and UI/UX design in Figma.",
  },
  hire: {
    title: "What can Manish do for your team?",
    answer:
      "Manish can:\n\n• Architect scalable autonomous multi-agent pipelines & ReAct state graphs.\n• Build custom 4-Tier RAG engines with high-precision vector retrieval.\n• Implement dual-LLM reviewer loops to eliminate hallucinations in production.\n• Build enterprise Python backend pipelines and wrap them in intuitive 60fps UIs.\n\nInterested in working together? Reach out directly at: **manishnooli143@gmail.com**!",
  },
};

function getBotReply(question) {
  const q = question.toLowerCase();

  if (
    q.includes("agent") ||
    q.includes("agentic") ||
    q.includes("react") ||
    q.includes("loop") ||
    q.includes("reviewer") ||
    q.includes("orchestrat")
  ) {
    return MANISH_KNOWLEDGE.agentic.answer;
  }

  if (
    q.includes("who") ||
    q.includes("intro") ||
    q.includes("about") ||
    q.includes("manish") ||
    q.includes("yourself")
  ) {
    return MANISH_KNOWLEDGE.intro.answer;
  }

  if (
    q.includes("amd") ||
    q.includes("mirafra") ||
    q.includes("enterprise") ||
    q.includes("work") ||
    q.includes("experience")
  ) {
    return MANISH_KNOWLEDGE.amd.answer;
  }

  if (
    q.includes("pulsev") ||
    q.includes("virtual scroll") ||
    q.includes("worker") ||
    q.includes("log stream")
  ) {
    return MANISH_KNOWLEDGE.pulsev.answer;
  }

  if (
    q.includes("novaui") ||
    q.includes("nova") ||
    q.includes("tenant") ||
    q.includes("entropy")
  ) {
    return MANISH_KNOWLEDGE.novaui.answer;
  }

  if (
    q.includes("cinescript") ||
    q.includes("rag") ||
    q.includes("project") ||
    q.includes("genai") ||
    q.includes("ai") ||
    q.includes("script")
  ) {
    return MANISH_KNOWLEDGE.cinescript.answer;
  }

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("python") ||
    q.includes("django") ||
    q.includes("tools")
  ) {
    return MANISH_KNOWLEDGE.skills.answer;
  }

  if (
    q.includes("hire") ||
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("what can you do") ||
    q.includes("collaborate")
  ) {
    return MANISH_KNOWLEDGE.hire.answer;
  }

  // Strict scope fallback
  return "I am Manish's portfolio assistant, specifically tuned to introduce his work! You can ask me:\n\n• **Who is Manish?**\n• **What is his Agentic AI & RAG expertise?**\n• **What did he build at AMD?**\n• **Tell me about CineScript Studio**\n• **What are his technical skills?**\n• **How can he help your team?**";
}

export default function PortfolioBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey! I'm **Manish's Portfolio Agent**. Ask me about his enterprise backend work at **AMD**, his **CineScript Studio** GenAI project, or his full **skill set**!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotReply(query);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 450);
  };

  const quickChips = [
    "👋 Who is Manish?",
    "⚙️ AMD Backend Work",
    "🎬 CineScript Studio",
    "⚡ Skills & Stack",
  ];

  return (
    <>
      {/* Floating Trigger Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#031518]/90 border border-teal-500/40 text-teal-300 shadow-[0_0_25px_rgba(20,184,166,0.35)] backdrop-blur-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white group-hover:text-teal-300 transition-colors">
            {isOpen ? "Close Assistant" : "Ask Manish AI"}
          </span>
          <span className="text-base">🤖</span>
        </button>
      </motion.div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] rounded-3xl bg-[#031518]/95 border border-teal-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 text-sm shadow-inner">
                  🤖
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Manish AI Assistant
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      v2.5
                    </span>
                  </h4>
                  <p className="text-[10px] font-mono text-teal-400/80">
                    Verified Portfolio Knowledge
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            {/* Quick Chips */}
            <div className="px-4 py-2.5 border-b border-white/5 bg-white/[0.01] flex items-center gap-2 overflow-x-auto scrollbar-none">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.replace(/^[^\w]+/, ""))}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono text-teal-300/90 bg-teal-500/10 border border-teal-500/20 whitespace-nowrap hover:bg-teal-500/20 transition-all shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Messages Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-black font-medium rounded-tr-none shadow-md"
                        : "glacier-card border border-teal-500/20 text-slate-200 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text.split("\n\n").map((paragraph, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
                        {paragraph.split("**").map((chunk, cIdx) =>
                          cIdx % 2 === 1 ? (
                            <strong
                              key={cIdx}
                              className={
                                msg.sender === "user"
                                  ? "font-black text-black"
                                  : "font-bold text-teal-300"
                              }
                            >
                              {chunk}
                            </strong>
                          ) : (
                            chunk
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="glacier-card border border-teal-500/20 rounded-2xl p-3 rounded-tl-none flex items-center gap-1.5 text-teal-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-white/[0.02] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, AMD, or skills..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-black font-bold text-xs hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

