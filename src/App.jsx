import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsMatrix from "./components/SkillsMatrix";
import AgenticDAG from "./components/AgenticDAG";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import PortfolioBot from "./components/PortfolioBot";

export default function App() {
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#02090b] text-white selection:bg-teal-400 selection:text-black overflow-x-clip">
      {/* 1. Global Custom Neon Cursor (trails across entire site) */}
      <CustomCursor />

      {/* 2. Global Neural Constellation Canvas (active across entire site) */}
      <NeuralBackground />

      {/* 3. Global Fixed Glacier Glassmorphism Navbar (hidden when studio is open to prevent overlap) */}
      <Navbar isHidden={isStudioOpen} />

      {/* 4. Portfolio Sections */}
      <main className="relative z-10 w-full">
        {/* Hero Landing + Particle Avatar + Scroll Animation */}
        <Hero />

        {/* Identity & About Me */}
        <About />

        {/* Work & Education Experience */}
        <Experience />

        {/* Expandable Glacier Projects (Main Project Big Block + Architecture Drawer) */}
        <Projects isStudioOpen={isStudioOpen} setIsStudioOpen={setIsStudioOpen} />

        {/* Verified Engineering Matrix (Skills Page) */}
        <SkillsMatrix />

        {/* Multi-Agent Execution DAG (Agentic AI Flow & Simulation) */}
        <AgenticDAG />

        {/* Core Stack & Toolkit Marquee */}
        <Toolkit />

        {/* 5. Contact Hub & Dispatcher */}
        <Contact />
      </main>

      {/* 6. Simple AI Assistant / Portfolio Bot (hidden when studio is open) */}
      {!isStudioOpen && <PortfolioBot />}

      {/* 7. Minimalist Cyberpunk Footer */}
      <footer className="relative z-10 w-full py-12 border-t border-white/5 bg-[#02090b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-white font-bold tracking-wider">NOOLI MANISH</span>
            <span>• Pure AI & Agentic Systems Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:nmanish10@gmail.com"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              nmanish10@gmail.com
            </a>
            <a
              href="https://github.com/noolimanish"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/noolimanish/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/nmanish"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
