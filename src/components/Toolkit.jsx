import React from "react";
import { motion } from "framer-motion";

export default function Toolkit() {
  const tools = [
    {
      name: "Python 3.10+",
      sub: "AsyncIO & Backend",
      logo: `${import.meta.env.BASE_URL}logos/python.svg`,
      border: "border-blue-500/30",
      glow: "hover:border-blue-400 hover:shadow-[0_0_20px_rgba(56,126,184,0.35)]",
    },
    {
      name: "FastAPI",
      sub: "Microservices",
      logo: `${import.meta.env.BASE_URL}logos/fastapi.svg`,
      border: "border-teal-500/30",
      glow: "hover:border-teal-400 hover:shadow-[0_0_20px_rgba(5,153,139,0.35)]",
    },
    {
      name: "Django / DRF",
      sub: "REST APIs & ORM",
      logo: `${import.meta.env.BASE_URL}logos/django.svg`,
      border: "border-emerald-500/30",
      glow: "hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(68,183,139,0.35)]",
    },
    {
      name: "Gemini 2.5 Pro",
      sub: "LLM Orchestration",
      logo: `${import.meta.env.BASE_URL}logos/gemini.svg`,
      border: "border-purple-500/30",
      glow: "hover:border-purple-400 hover:shadow-[0_0_20px_rgba(155,81,224,0.35)]",
    },
    {
      name: "Pydantic v2",
      sub: "Strict Schemas",
      logo: `${import.meta.env.BASE_URL}logos/pydantic.svg`,
      border: "border-pink-500/30",
      glow: "hover:border-pink-400 hover:shadow-[0_0_20px_rgba(233,32,99,0.35)]",
    },
    {
      name: "FastMCP",
      sub: "Agent Protocol",
      logo: `${import.meta.env.BASE_URL}logos/mcp.svg`,
      border: "border-teal-500/30",
      glow: "hover:border-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]",
    },
    {
      name: "PostgreSQL",
      sub: "Relational DB",
      logo: `${import.meta.env.BASE_URL}logos/postgresql.svg`,
      border: "border-sky-500/30",
      glow: "hover:border-sky-400 hover:shadow-[0_0_20px_rgba(51,103,145,0.35)]",
    },
    {
      name: "Docker",
      sub: "Containerization",
      logo: `${import.meta.env.BASE_URL}logos/docker.svg`,
      border: "border-blue-500/30",
      glow: "hover:border-blue-400 hover:shadow-[0_0_20px_rgba(36,150,237,0.35)]",
    },
    {
      name: "Pytest",
      sub: "Automated QA",
      logo: `${import.meta.env.BASE_URL}logos/pytest.svg`,
      border: "border-yellow-500/30",
      glow: "hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,212,59,0.35)]",
    },
    {
      name: "React / Motion",
      sub: "60 FPS UIs",
      logo: `${import.meta.env.BASE_URL}logos/react.svg`,
      border: "border-cyan-500/30",
      glow: "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(97,218,251,0.35)]",
    },
    {
      name: "Tailwind CSS",
      sub: "Design Systems",
      logo: `${import.meta.env.BASE_URL}logos/tailwind.svg`,
      border: "border-sky-500/30",
      glow: "hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]",
    },
    {
      name: "Linux Systems",
      sub: "Bash & Scripting",
      logo: `${import.meta.env.BASE_URL}logos/linux.svg`,
      border: "border-slate-500/30",
      glow: "hover:border-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]",
    },
  ];

  const marqueeItems = [...tools, ...tools, ...tools];

  return (
    <section id="toolkit" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden border-t border-white/5 z-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 relative z-10 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-2.5 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>Core Engineering Stack</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
          Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">Tooling & Frameworks</span>
        </h2>
        <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-lg mx-auto mt-2 leading-relaxed">
          Industry-standard libraries and infrastructure powering Manish's production workflows.
        </p>
      </motion.div>

      <div className="absolute top-[130px] sm:top-[160px] left-0 w-16 sm:w-32 h-[130px] bg-gradient-to-r from-[#02090b] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-[130px] sm:top-[160px] right-0 w-16 sm:w-32 h-[130px] bg-gradient-to-l from-[#02090b] to-transparent z-20 pointer-events-none" />

      <div className="flex w-[max-content]">
        <motion.div 
          className="flex gap-4 sm:gap-6 md:gap-8 px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 28 
          }}
        >
          {marqueeItems.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer w-[80px] sm:w-[95px] md:w-[105px] shrink-0">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center p-3 border ${tool.border} bg-[#031518]/90 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:-translate-y-2 ${tool.glow} backdrop-blur-md`}>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <span className="block text-slate-200 font-mono text-[10px] sm:text-xs font-bold tracking-tight group-hover:text-teal-300 transition-colors truncate max-w-[95px]">
                  {tool.name}
                </span>
                <span className="block text-slate-500 font-mono text-[9px] truncate max-w-[95px]">
                  {tool.sub}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
