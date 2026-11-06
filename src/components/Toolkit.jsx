import React from "react";
import { motion } from "framer-motion";

export default function Toolkit() {
  const tools = [
    { name: "Gemini 2.5 Pro", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", icon: "✨" },
    { name: "Python 3.12", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", icon: "🐍" },
    { name: "ReAct Agents", color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10", icon: "🧠" },
    { name: "Sentence Transformers", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", icon: "🔍" },
    { name: "Django / DRF", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10", icon: "🌐" },
    { name: "FastAPI", color: "text-teal-300", border: "border-teal-400/30", bg: "bg-teal-400/10", icon: "⚡" },
    { name: "Pytest Suite", color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10", icon: "🛡️" },
    { name: "SQL & ORM", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10", icon: "🗄️" },
    { name: "React / Motion", color: "text-cyan-300", border: "border-cyan-400/30", bg: "bg-cyan-400/10", icon: "⚛️" },
    { name: "Web Workers", color: "text-teal-400", border: "border-teal-500/30", bg: "bg-teal-500/10", icon: "🧵" },
  ];

  const marqueeItems = [...tools, ...tools, ...tools];

  return (
    <section id="toolkit" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden border-t border-white/5 z-20 font-sans">
      
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 relative z-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-2.5 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>Core Engineering Stack</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
          AI & Backend Toolkit
        </h2>
      </div>

      <div className="absolute top-[130px] sm:top-[160px] left-0 w-16 sm:w-32 h-[120px] bg-gradient-to-r from-[#02090b] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-[130px] sm:top-[160px] right-0 w-16 sm:w-32 h-[120px] bg-gradient-to-l from-[#02090b] to-transparent z-20 pointer-events-none" />

      <div className="flex w-[max-content]">
        <motion.div 
          className="flex gap-4 sm:gap-8 md:gap-12 px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 24 
          }}
        >
          {marqueeItems.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer w-[70px] sm:w-[85px] md:w-[95px] shrink-0">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center border ${tool.border} ${tool.bg} shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] backdrop-blur-md`}>
                <span className={`font-mono font-bold text-lg sm:text-xl md:text-2xl ${tool.color}`}>
                  {tool.icon}
                </span>
              </div>
              <span className="text-slate-300 font-mono text-[10px] sm:text-xs tracking-wider text-center group-hover:text-teal-300 transition-colors truncate max-w-[85px]">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
