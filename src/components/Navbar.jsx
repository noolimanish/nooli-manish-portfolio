import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isHidden = false }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Agentic AI", href: "#agentic-dag" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "agentic-dag", "toolkit", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 pointer-events-none flex flex-col items-center"
        >
          {/* Main Top Navbar Pill */}
          <nav className="pointer-events-auto w-full max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-8 py-2.5 sm:py-3 glacier-card rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-teal-500/25 bg-[#031518]/90 backdrop-blur-xl transition-all">
            {/* Brand / Logo */}
            <a
              href="#home"
              className="font-heading font-black text-sm sm:text-base md:text-lg tracking-wide text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2 group shrink-0"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] group-hover:scale-125 transition-transform" />
              <span>NOOLI MANISH</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-teal-300 bg-white/10 border border-teal-400/30 shadow-inner font-bold"
                        : "hover:text-teal-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <a
                href="#contact"
                className="hidden sm:inline-flex bg-gradient-to-r from-teal-400 to-emerald-400 text-black px-4 xl:px-5 py-1.5 xl:py-2 rounded-full font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_22px_rgba(45,212,191,0.35)] shrink-0"
              >
                Contact Me →
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-300 hover:text-teal-300 hover:bg-white/5 transition-all focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown (Vertical Responsive & Stacks Cleanly Below Navbar) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto w-full max-w-sm mt-2.5 glacier-card rounded-2xl p-3 sm:p-4 border border-teal-500/35 bg-[#031518]/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex flex-col gap-1 md:hidden max-h-[calc(100dvh-5.5rem)] overflow-y-auto scrollbar-none"
              >
                <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10 px-2 text-[10px] font-mono text-slate-400">
                  <span className="text-teal-400 font-bold uppercase tracking-wider">NAVIGATION MENU</span>
                  <span>TAP TO JUMP</span>
                </div>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-teal-500/20 text-teal-300 border border-teal-400/40 font-bold shadow-inner"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-teal-400 text-xs">●</span>}
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 text-center bg-gradient-to-r from-teal-400 to-emerald-400 text-black py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(45,212,191,0.35)] shrink-0"
                >
                  Contact Me →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

