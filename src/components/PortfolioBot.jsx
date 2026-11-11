import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MANISH_KNOWLEDGE = {
  intro: {
    title: "Who is Manish Nooli?",
    answer:
      "Hey! I'm **Nooli Manish**, a **Software Engineer** specializing in **Python Backends, Production RAG Pipelines, and Autonomous Agentic Systems**, based in Hyderabad, India.\n\n• **Experience**: 2 Years of Production Engineering at **Mirafra Technologies** (on-site client: **AMD**), building internal RAG troubleshooting tools, silicon QoR telemetry backends, and automated FPGA pipelines.\n• **Education**: B.Tech in Computer Science & Engineering from **SNIST** (Sreenidhi Institute of Science and Technology, 2020–2024, CGPA 8.0+).\n• **Core Ethos**: I design hybrid systems where probabilistic LLM reasoning is strictly bounded by deterministic schemas (Pydantic v2), normalized databases (PostgreSQL/SQLAlchemy), and zero-dependency web performance.\n• **Target Roles**: GenAI Application Engineer, Applied AI Engineer, Python Backend Developer.",
  },

  projects_overview: {
    title: "What projects has Manish built?",
    answer:
      "Manish has built **5 production-grade architectural systems**:\n\n1. **CineScript Studio** (Flagship AI): Autonomous multi-agent screenwriting platform with a 4-tier vector layer (Voice, Structure, Mechanics, Philosophy) and generator-critic evaluator loops.\n2. **FinSafe AI** (Backend & AI): Decoupled financial risk audit engine with 5 deterministic rule algorithms and strict Pydantic v2 validation (100% math accuracy, 0% hallucinations).\n3. **MCP Task Assistant** (Agentic AI): Standardized Model Context Protocol (FastMCP) server exposing database CRUD as type-safe tool primitives for autonomous agents.\n4. **Pulse** (Systems & Frontend): Zero-dependency stream observability engine processing 10,000+ logs/sec with an inline Web Worker and O(1) DOM virtualization at locked 60 FPS.\n5. **NovaUI** (Frontend Systems): SaaS tenant provisioning portal featuring live Shannon bit-entropy verification, zero-recalculation CSS design tokens, and Euclidean canvas physics.\n\n*Tip: The landing page spotlights the top 3 projects, and clicking 'Explore All 5 Production Architectures' opens the full interactive studio!*",
  },

  amd: {
    title: "What did Manish build at AMD?",
    answer:
      "At **Mirafra Technologies for on-site client AMD** (Dec 2024 – Present, Hyderabad):\n\n• **RAG-Powered Debugging Assistant**: Built a semantic search and triage engine in Python over **10,000+ historical error logs and Jira threads**, accelerating root-cause analysis by **40%**.\n• **AI-Assisted QoR (Quality of Results) Analysis**: Integrated historical silicon performance metrics and domain knowledge with LLM-assisted reasoning to diagnose timing anomalies across device runs.\n• **Centralized Hardware Script Backend**: Architected a Python/Django/PostgreSQL platform organizing **500+ proprietary hardware scripts**, reducing discovery latency by **60%**.\n• **Automated FPGA Timing Pipelines**: Automated FPGA timing flows and speedfile validation via complex XML/JSON extraction, eliminating **45% of manual engineering effort**.\n• **Environment**: Linux, AMD Rapid Design Infrastructure (RDI), Xilinx Vivado, Perforce (P4), Jira, Pytest.",
  },

  experience: {
    title: "What is Manish's work experience?",
    answer:
      "Manish has **2 years of production engineering experience**:\n\n1. **Software Engineer I — Mirafra Technologies (Client: AMD)** [Dec 2024 – Present]\n• Enterprise Python backends, automated FPGA timing pipelines, and RAG error triage systems.\n• Normalized PostgreSQL schemas for 500+ hardware scripts, cutting lookup time by 60%.\n• Built AI-assisted QoR analysis for silicon device timing variations.\n\n2. **AI & Automation Engineer — Mirafra Internal AI Labs** [2024 – Present]\n• Implemented FastMCP protocol servers enabling autonomous LLM agents to safely mutate relational databases.\n• Embedded kernel log crash diagnostics and automated test case generation.\n• Agentic recruitment screening engine with structured candidate evaluation scorecards.",
  },

  education: {
    title: "What is Manish's educational background?",
    answer:
      "Manish holds a **Bachelor of Technology (B.Tech) in Computer Science and Engineering**:\n\n• **Institution**: Sreenidhi Institute of Science and Technology (SNIST), Hyderabad, India.\n• **Duration**: October 2020 – May 2024.\n• **Academics**: CGPA 8.0+ / 10.\n• **Focus Areas**: Data Structures & Algorithms, Distributed Systems, Relational Database Management (DBMS), Operating Systems, OOP in Python & C++, Computer Networks.",
  },

  cinescript: {
    title: "Tell me about CineScript Studio",
    answer:
      "**CineScript Studio** is an autonomous multi-agent screenwriting platform solving the problem of flat dialogue and narrative drift in standard LLMs:\n\n• **4-Tier RAG Engine**: Partitions knowledge into Voice (dialogue tone), Structure (beat sheet milestones), Mechanics (formatting), and Philosophy (character psychology).\n• **Sub-Second Vector Search**: Multilingual Indic sentence-transformers (**Vyakyarth**) + local **FAISS** index extracting top-3 matching rules in sub-18ms via cosine similarity.\n• **Generator-Critic Evaluator Loop**: Generator Agent drafts 2,500-word scenes; autonomous Critic Agent critiques continuity, pacing, and formatting before rendering (**99.4% pass rate**).\n• **Stack**: Python, Streamlit, Google Gemini API, Sentence-Transformers, FAISS, SQLite, JSON.",
  },

  finsafe: {
    title: "Tell me about FinSafe AI",
    answer:
      "**FinSafe AI** is a deterministic financial risk audit engine:\n\n• **The Bottleneck**: LLMs cannot be trusted for financial math—they hallucinate tax brackets, miscalculate compound interest, and drift from regulations.\n• **Decoupled Architecture**: Strictly isolates deterministic mathematical computation from qualitative LLM advice (100% math accuracy, 0% hallucinations).\n• **5 Rule-Based Algorithms**: Evaluates emergency liquidity ratios, life/health coverage gaps, asset lock-in periods, disability protections, and retirement readiness.\n• **Schema Enforcement**: Built with strict **Pydantic v2** validation. Automatic circuit breakers engage deterministic fallbacks if LLM payloads fail verification.\n• **Stack**: Python, FastAPI, Pydantic v2, SQLite, SQLAlchemy ORM, Pytest (48 automated tests), Docker Compose, Next.js, TypeScript.",
  },

  mcp: {
    title: "Tell me about the MCP Task Assistant",
    answer:
      "**MCP Task Assistant** is a standardized **Model Context Protocol (FastMCP)** server:\n\n• **The Problem**: Autonomous LLM agents suffer from schema drift, hallucinated SQL, and unhandled exceptions when mutating relational databases directly.\n• **Open MCP 1.0 Specification**: Standardizes database CRUD operations (`create_task`, `update_status`, `query_filtered`) as high-level, type-safe tool primitives.\n• **Pydantic v2 Guardrails**: Validates incoming arguments against strict type constraints before executing atomic SQLite transactions.\n• **Structured JSON Responses**: Streams normalized JSON instead of voluminous SQL dumps, saving critical LLM context capacity.\n• **Stack**: Python, Model Context Protocol (FastMCP), SQLite, Pydantic v2, LLM Tool Calling.",
  },

  pulse: {
    title: "Tell me about Pulse",
    answer:
      "**Pulse** is a real-time stream observability engine built with **zero external dependencies**:\n\n• **The Problem**: Rendering 10,000+ live logs in a browser table causes layout thrashing, freezes the UI thread, and drops frame rates to single digits.\n• **Inline Web Worker**: Dedicated Blob URL worker handles 10,000+ logs/sec Off-Thread, keeping UI rendering locked at **60.0 FPS**.\n• **O(1) Virtual Scrolling**: Calculates viewport offsets to mount only **~28 active DOM nodes** using `DocumentFragment` and node recycling.\n• **Native XML Linting**: Uses browser-native `DOMParser` for real-time syntax checking and corrupted tag detection without third-party libraries.\n• **Stack**: Vanilla JS (ES6+), Native Web Workers, HTML5 Canvas, DOMParser, Virtual DOM, CSS Design Tokens.",
  },

  novaui: {
    title: "Tell me about NovaUI",
    answer:
      "**NovaUI** is a zero-dependency SaaS cloud tenant provisioning portal and design system:\n\n• **Zero-Recalculation Token Engine**: Built with CSS custom properties on `:root` enabling instant live theme switching (Emerald, Titanium, Amber) with zero style recalculations.\n• **Shannon Bit-Entropy Meter**: Real-time cryptographic entropy analysis measuring actual character pool bits instead of basic string length checks.\n• **Euclidean Particle Canvas**: Interactive HTML5 Canvas computing magnetic cursor repulsion vectors at 60 FPS.\n• **100% WAI-ARIA**: Modal focus traps, live announcement regions (`aria-live='polite'`), and full keyboard navigation.\n• **Stack**: HTML5 Semantic Landmarks, BEM CSS3, Design Tokens, ES6 Proxy, Canvas Physics.",
  },

  agentic: {
    title: "What is Manish's Agentic AI & RAG expertise?",
    answer:
      "Manish specializes in **practical, grounded Agentic AI systems**:\n\n• **Autonomous ReAct Loops**: Multi-turn reasoning loops ([THOUGHT] → [ACTION] → [OBSERVATION]) that autonomously select semantic search or relational tools.\n• **Evaluator-Optimizer Topology**: Dual-LLM reviewer architectures where a generator synthesizes drafts and a critic agent enforces domain constraints before API response.\n• **Multi-Tier RAG Architecture**: Segregating embeddings into distinct vector spaces (Voice, Structure, Mechanics, Philosophy) with Indic sentence-transformers & FAISS (18ms retrieval).\n• **Model Context Protocol (FastMCP)**: Building standard MCP servers exposing transactional database tools to autonomous agents.\n• **Production Guardrails**: Strict Pydantic v2 validation models with fallback circuit breakers preventing hallucinated parameters.",
  },

  skills: {
    title: "What are Manish's technical skills & stack?",
    answer:
      "Manish's technical capabilities are split into core pillars:\n\n• **Languages**: Python (3.10+), SQL, JavaScript (ES6+), TypeScript, Bash, Linux Systems.\n• **Backend & APIs**: FastAPI, Django, Django REST Framework, Pydantic v2, SQLAlchemy ORM, asyncio, Microservices, RESTful APIs.\n• **GenAI & Agentic**: 4-Tier RAG, Model Context Protocol (FastMCP), Google Gemini API, Groq API, ReAct Agent Loops, Evaluator-Optimizer, Sentence-Transformers, FAISS Vector DB.\n• **Databases**: PostgreSQL, SQLite, MySQL, relational schema optimization.\n• **Frontend & Systems**: Native Web Workers, O(1) DOM Virtualization, ES6 Proxy Reactivity, Canvas Physics, React, Tailwind CSS, Framer Motion.\n• **Tooling & Ops**: Docker Compose, Pytest (48+ regression suites), Git, Perforce (P4), AMD RDI, Vivado, Linux, Jira.",
  },

  dag: {
    title: "What is the Multi-Agent Execution Circuit (DAG)?",
    answer:
      "The **Interactive Execution Circuit** on the portfolio simulates Manish's production agentic pipeline across 5 stages:\n\n1. **Stage 01 // Ingest**: Captures user intent, normalizes payload, and validates schemas (12ms latency).\n2. **Stage 02 // Reason**: ReAct Agent Orchestrator (Gemini 2.5 Pro) decomposes goals and plans dynamic tool calls.\n3. **Stage 03 // Retrieval**: Executes semantic vector search (Sentence-Transformers + FAISS) or queries relational SQL databases.\n4. **Stage 04 // Reflection**: Secondary Critic Agent checks candidate output against continuity and domain constraints.\n5. **Stage 05 // Gate**: Pydantic v2 schema gate verifies types and dispatches payload with zero hallucinations.\n\n*You can click '▶ Run Simulation' on the pipeline in the portfolio to watch live telemetry!*",
  },

  contact: {
    title: "How can I contact or hire Manish?",
    answer:
      "You can connect directly with Manish through any of these verified channels:\n\n• **Email**: [nmanish10@gmail.com](mailto:nmanish10@gmail.com) (Response time: < 12 hours)\n• **Phone / WhatsApp**: [+91 7569596435](tel:+917569596435) / [Chat on WhatsApp](https://wa.me/917569596435)\n• **LinkedIn**: [linkedin.com/in/noolimanish](https://www.linkedin.com/in/noolimanish/)\n• **GitHub**: [github.com/noolimanish](https://github.com/noolimanish)\n• **Behance**: [behance.net/nmanish](https://www.behance.net/nmanish)\n• **Location**: Hyderabad, India (IST / UTC+5:30) — Open to Full-Time Remote, Hybrid, or Relocation roles for AI & Backend Engineering!",
  },

  location: {
    title: "Where is Manish located?",
    answer:
      "Manish is based in **Hyderabad, Telangana, India** (UTC+5:30).\n\nHe is actively available for **Full-Time On-Site, Hybrid, or Remote roles** across India, the US, Europe, and global engineering teams. He is also open to relocation for high-impact opportunities.",
  },

  resume: {
    title: "Can I get Manish's resume or CV?",
    answer:
      "Yes! Manish's full technical resume highlights his **2 years of experience at Mirafra (on-site client AMD)**, B.Tech CSE from SNIST, and production systems (CineScript, FinSafe, MCP, Pulse, NovaUI).\n\n• **Email to request resume**: [nmanish10@gmail.com](mailto:nmanish10@gmail.com)\n• **Direct call / WhatsApp**: [+91 7569596435](https://wa.me/917569596435)\n• Or submit your details through the **Communication Gateway** form at the bottom of the portfolio!",
  },

  backend_focus: {
    title: "What is Manish's Python Backend experience?",
    answer:
      "Manish has deep expertise in enterprise Python backend architectures:\n\n• **FastAPI & AsyncIO**: High-throughput microservices, strict request validation via Pydantic v2, and sub-45ms P95 API responses.\n• **Django & DRF**: Normalized relational architectures with PostgreSQL, handling 500+ centralized hardware scripts at AMD.\n• **Relational Stores**: SQLAlchemy ORM, complex SQL joins, indexing strategies, and SQLite in-memory testing.\n• **Testing & Reliability**: Automated regression suites with Pytest, mock fixtures for external LLM APIs, and zero-regression deployment records.\n• **Containerization**: Docker and Docker Compose setups for reproducible local and cloud environments.",
  },

  frontend_focus: {
    title: "What is Manish's Frontend & UI/UX engineering experience?",
    answer:
      "Unlike conventional frontends that rely heavily on bloated libraries, Manish builds **high-performance systems interfaces**:\n\n• **Zero-Dependency Web Engines**: Multi-threaded Web Workers, O(1) DOM virtualization, and custom ES6 Proxy reactivity (Pulse & NovaUI).\n• **Hardware-Accelerated Visuals**: HTML5 Canvas particle systems computing Euclidean distance vectors at locked 60 FPS.\n• **Modern React Stack**: React, Tailwind CSS, and Framer Motion for high-craft physics-based animations (like this portfolio!).\n• **UI/UX & Product Design**: Published design case studies on [Behance](https://www.behance.net/nmanish) with strict attention to typography, visual hierarchy, and 100% WAI-ARIA accessibility.",
  },
};

/**
 * Intelligent Keyword & Intent Matcher
 * Maps natural recruiter queries to verified portfolio facts.
 */
export function getBotReply(question) {
  const q = question.toLowerCase().trim();

  // 1. CineScript Studio
  if (
    q.includes("cinescript") ||
    q.includes("screenwriting") ||
    q.includes("script") ||
    q.includes("dramaturg") ||
    q.includes("vyakyarth") ||
    q.includes("voice structure")
  ) {
    return MANISH_KNOWLEDGE.cinescript.answer;
  }

  // 2. FinSafe AI
  if (
    q.includes("finsafe") ||
    q.includes("financial") ||
    q.includes("finance") ||
    q.includes("audit engine") ||
    q.includes("deterministic") ||
    q.includes("risk audit")
  ) {
    return MANISH_KNOWLEDGE.finsafe.answer;
  }

  // 3. MCP Task Assistant
  if (
    q.includes("fastmcp") ||
    q.includes("mcp") ||
    q.includes("model context protocol") ||
    q.includes("tool call") ||
    q.includes("crud tool")
  ) {
    return MANISH_KNOWLEDGE.mcp.answer;
  }

  // 4. Pulse
  if (
    q.includes("pulse") ||
    q.includes("virtual scroll") ||
    q.includes("web worker") ||
    q.includes("log stream") ||
    q.includes("observability") ||
    q.includes("10,000") ||
    q.includes("dom virtualization")
  ) {
    return MANISH_KNOWLEDGE.pulse.answer;
  }

  // 5. NovaUI
  if (
    q.includes("novaui") ||
    q.includes("nova") ||
    q.includes("tenant") ||
    q.includes("entropy") ||
    q.includes("shannon") ||
    q.includes("design token")
  ) {
    return MANISH_KNOWLEDGE.novaui.answer;
  }

  // 6. All Projects Overview
  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("case stud") ||
    q.includes("portfolio work") ||
    q.includes("architecture system") ||
    q.includes("what did you make") ||
    q.includes("what did he build")
  ) {
    return MANISH_KNOWLEDGE.projects_overview.answer;
  }

  // 7. AMD & Enterprise Work
  if (
    q.includes("amd") ||
    q.includes("silicon") ||
    q.includes("fpga") ||
    q.includes("vivado") ||
    q.includes("rdi") ||
    q.includes("speedfile") ||
    q.includes("hardware script") ||
    q.includes("triage")
  ) {
    return MANISH_KNOWLEDGE.amd.answer;
  }

  // 8. Education & SNIST
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("degree") ||
    q.includes("snist") ||
    q.includes("sreenidhi") ||
    q.includes("btech") ||
    q.includes("b.tech") ||
    q.includes("university") ||
    q.includes("cgpa") ||
    q.includes("graduat") ||
    q.includes("study") ||
    q.includes("studied")
  ) {
    return MANISH_KNOWLEDGE.education.answer;
  }

  // 9. Work Experience & Career History
  if (
    q.includes("experience") ||
    q.includes("yoe") ||
    q.includes("years of") ||
    q.includes("mirafra") ||
    q.includes("work history") ||
    q.includes("career") ||
    q.includes("company") ||
    q.includes("job")
  ) {
    return MANISH_KNOWLEDGE.experience.answer;
  }

  // 10. Agentic AI & RAG Pipeline
  if (
    q.includes("agentic") ||
    q.includes("agent") ||
    q.includes("react") ||
    q.includes("evaluator") ||
    q.includes("optimizer") ||
    q.includes("rag") ||
    q.includes("vector") ||
    q.includes("faiss") ||
    q.includes("embedding") ||
    q.includes("multi-agent") ||
    q.includes("critic") ||
    q.includes("reviewer loop") ||
    q.includes("gemini")
  ) {
    return MANISH_KNOWLEDGE.agentic.answer;
  }

  // 11. Multi-Agent Execution Circuit (DAG Pipeline)
  if (
    q.includes("dag") ||
    q.includes("circuit") ||
    q.includes("pipeline") ||
    q.includes("simulation") ||
    q.includes("trace log") ||
    q.includes("flow map")
  ) {
    return MANISH_KNOWLEDGE.dag.answer;
  }

  // 12. Python Backend Deep Dive
  if (
    q.includes("fastapi") ||
    q.includes("django") ||
    q.includes("backend") ||
    q.includes("postgres") ||
    q.includes("sql") ||
    q.includes("sqlalchemy") ||
    q.includes("pydantic") ||
    q.includes("pytest") ||
    q.includes("api")
  ) {
    return MANISH_KNOWLEDGE.backend_focus.answer;
  }

  // 13. Frontend & UI/UX Deep Dive
  if (
    q.includes("frontend") ||
    q.includes("ui") ||
    q.includes("ux") ||
    q.includes("design system") ||
    q.includes("canvas") ||
    q.includes("react") ||
    q.includes("tailwind") ||
    q.includes("framer") ||
    q.includes("css") ||
    q.includes("behance")
  ) {
    return MANISH_KNOWLEDGE.frontend_focus.answer;
  }

  // 14. Skills & Technical Stack
  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("tool") ||
    q.includes("toolkit") ||
    q.includes("framework") ||
    q.includes("language")
  ) {
    return MANISH_KNOWLEDGE.skills.answer;
  }

  // 15. Contact, Hire & WhatsApp
  if (
    q.includes("hire") ||
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("whatsapp") ||
    q.includes("reach") ||
    q.includes("touch") ||
    q.includes("message") ||
    q.includes("interview") ||
    q.includes("collaborat") ||
    q.includes("opportunity")
  ) {
    return MANISH_KNOWLEDGE.contact.answer;
  }

  // 16. Location & Remote
  if (
    q.includes("location") ||
    q.includes("where is") ||
    q.includes("where are") ||
    q.includes("hyderabad") ||
    q.includes("india") ||
    q.includes("remote") ||
    q.includes("relocat")
  ) {
    return MANISH_KNOWLEDGE.location.answer;
  }

  // 17. Resume & CV
  if (
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("curriculum") ||
    q.includes("download") ||
    q.includes("pdf")
  ) {
    return MANISH_KNOWLEDGE.resume.answer;
  }

  // 18. Social Networks
  if (
    q.includes("github") ||
    q.includes("linkedin") ||
    q.includes("social") ||
    q.includes("profile") ||
    q.includes("link")
  ) {
    return "You can explore Manish's verified profiles:\n\n• **GitHub**: [github.com/noolimanish](https://github.com/noolimanish) (Code repos for CineScript, FinSafe, Pulse)\n• **LinkedIn**: [linkedin.com/in/noolimanish](https://www.linkedin.com/in/noolimanish/) (Professional network & endorsements)\n• **Behance**: [behance.net/nmanish](https://www.behance.net/nmanish) (UI/UX design systems & case studies)\n• **Email**: [nmanish10@gmail.com](mailto:nmanish10@gmail.com)\n• **Phone**: [+91 7569596435](tel:+917569596435)";
  }

  // 19. Intro & General
  if (
    q.includes("who") ||
    q.includes("intro") ||
    q.includes("about") ||
    q.includes("manish") ||
    q.includes("yourself") ||
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return MANISH_KNOWLEDGE.intro.answer;
  }

  // Default Fallback with Quick Suggestions
  return (
    "I am Manish's AI Assistant, loaded with his complete verified engineering credentials! Here are quick things you can ask me:\n\n" +
    "• **Who is Manish?** (Background, roles, and engineering ethos)\n" +
    "• **What did he build at AMD?** (Silicon RAG triage, FPGA pipelines, 500+ scripts)\n" +
    "• **Tell me about his 5 Projects** (CineScript, FinSafe, MCP Assistant, Pulse, NovaUI)\n" +
    "• **What is his Education?** (SNIST B.Tech in CSE 2020–2024, CGPA 8.0+)\n" +
    "• **Agentic AI & RAG Expertise** (ReAct loops, FAISS cosine search, Pydantic guardrails)\n" +
    "• **How do I contact or hire him?** (Email: nmanish10@gmail.com, Phone: +91 7569596435)"
  );
}

export default function PortfolioBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey! I'm **Manish's Portfolio AI Agent**.\n\nI can answer anything about his **enterprise AMD work**, his **5 production architectures** (CineScript, FinSafe AI, MCP, Pulse, NovaUI), his **SNIST CSE education**, or his full **Python & Agentic AI skill set**! What would you like to explore?",
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
    }, 380);
  };

  const quickChips = [
    { label: "👋 Who is Manish?", query: "Who is Manish?" },
    { label: "📂 All 5 Projects", query: "What projects has Manish built?" },
    { label: "⚙️ AMD Silicon Work", query: "What did Manish build at AMD?" },
    { label: "🎓 SNIST Education", query: "What is Manish's educational background?" },
    { label: "🧠 Agentic AI & RAG", query: "What is Manish's Agentic AI and RAG expertise?" },
    { label: "📬 Contact & Hire", query: "How can I contact or hire Manish?" },
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
            className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[440px] h-[580px] max-h-[82vh] rounded-3xl bg-[#031518]/95 border border-teal-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 text-sm shadow-inner">
                  🤖
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Manish AI Assistant
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      v2.5 Live
                    </span>
                  </h4>
                  <p className="text-[10px] font-mono text-teal-400/80">
                    Verified Engineering Knowledge Base
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

            {/* Quick Filter Chips Carousel */}
            <div className="px-3.5 py-2 border-b border-white/5 bg-white/[0.01] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.query)}
                  className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-teal-300/90 bg-teal-500/10 border border-teal-500/20 whitespace-nowrap hover:bg-teal-500/25 transition-all shrink-0 active:scale-95"
                >
                  {chip.label}
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
                    className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-black font-semibold rounded-tr-none shadow-md"
                        : "glacier-card border border-teal-500/20 text-slate-200 rounded-tl-none whitespace-pre-line shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
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
                placeholder="Ask about projects, AMD, education, skills..."
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
