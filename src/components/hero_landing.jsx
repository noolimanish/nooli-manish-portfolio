import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

// 1. NEON GREEN CURSOR
function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const trailX = useSpring(mouseX, { stiffness: 180, damping: 25 });
  const trailY = useSpring(mouseY, { stiffness: 180, damping: 25 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <motion.div
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-14 h-14 rounded-full bg-emerald-400/20 blur-xl pointer-events-none"
      />
      <motion.div
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-8 h-8 rounded-full border border-emerald-400/40 pointer-events-none shadow-[0_0_12px_rgba(52,211,153,0.3)]"
      />
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981,0_0_20px_#34d399] pointer-events-none"
      />
    </div>
  );
}

// 2. NEURAL NETWORK BACKGROUND
function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -2000, y: -2000, radius: 170 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const nodeCount = Math.floor((width * height) / 13000);
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const dxMouse = mouse.x - a.x;
        const dyMouse = mouse.y - a.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          a.x -= (dxMouse / distMouse) * force * 2.5;
          a.y -= (dyMouse / distMouse) * force * 2.5;
        }
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const opacity = 1 - dist / 130;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity * 0.22})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.75)";
        ctx.shadowColor = "#10b981";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-60" />;
}

// 3. SCALED PARTICLE AVATAR
function ParticleAvatar({ imageSrc }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000, radius: 110 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let animationFrameId;

    const width = 420;
    const height = 460;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      offCanvas.width = width;
      offCanvas.height = height;

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.min(hRatio, vRatio) * 0.88;
      const shiftX = (width - img.width * ratio) / 2;
      const shiftY = (height - img.height * ratio) / 2;

      offCtx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        shiftX,
        shiftY,
        img.width * ratio,
        img.height * ratio
      );
      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const step = 4;
      particles = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const idx = (y * width + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];
          const brightness = (r + g + b) / 3;

          if (a > 30 && brightness > 8) {
            particles.push({
              originX: x,
              originY: y,
              x: x + (Math.random() - 0.5) * 12,
              y: y + (Math.random() - 0.5) * 12,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.4 + 0.8,
              color: `rgba(${r}, ${g}, ${b}, ${(a / 255) * 0.95})`,
              ease: 0.07 + Math.random() * 0.03,
              friction: 0.83,
              repelForce: 85 + Math.random() * 40,
              floatOffset: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      let frameCount = 0;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        frameCount += 0.02;

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const radius = mouseRef.current.radius;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const angle = Math.atan2(dy, dx);
            const force = (radius - dist) / radius;
            const push = force * p.repelForce;
            p.vx -= Math.cos(angle) * push;
            p.vy -= Math.sin(angle) * push;
          }
          const floatY = Math.sin(frameCount + p.floatOffset) * 0.45;
          const ax = (p.originX - p.x) * p.ease;
          const ay = (p.originY + floatY - p.y) * p.ease;
          p.vx = (p.vx + ax) * p.friction;
          p.vy = (p.vy + ay) * p.friction;
          p.x += p.vx;
          p.y += p.vy;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
        animationFrameId = requestAnimationFrame(render);
      };
      render();
    };
    return () => cancelAnimationFrame(animationFrameId);
  }, [imageSrc]);

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseRef.current.x = (e.clientX - rect.left) * scaleX;
    mouseRef.current.y = (e.clientY - rect.top) * scaleY;
  };
  const handlePointerLeave = () => {
    mouseRef.current.x = -2000;
    mouseRef.current.y = -2000;
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-[300px] h-[300px] bg-teal-500/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute w-[220px] h-[220px] bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none" />

      <div className="absolute w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full border border-teal-500/25 bg-teal-950/10 backdrop-blur-[2px] shadow-[inset_0_0_50px_rgba(20,184,166,0.1)] pointer-events-none">
        <div className="absolute inset-[-8px] rounded-full border border-dashed border-teal-400/25 animate-[spin_24s_linear_infinite]" />
      </div>

      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative z-20 cursor-crosshair drop-shadow-[0_0_30px_rgba(20,184,166,0.3)] touch-none max-w-full"
        style={{ width: "420px", height: "460px" }}
      />
    </div>
  );
}

// 4. MAIN HERO COMPONENT (HARDWARE FIXED PINNING)
export default function LandingTest() {
  const containerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);

  // Always start at top on page reload
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Locks the screen using position:fixed until the scroll animation completes (0.99),
  // then anchors it at the bottom of the 240vh track so About Me scrolls up naturally!
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.99) {
      setIsPinned(false);
    } else {
      setIsPinned(true);
    }
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  // Live simulation telemetry for orchestrator card
  const [traceIndex, setTraceIndex] = useState(0);
  const [tokSpeed, setTokSpeed] = useState(86);

  const traceLogs = [
    "> Retrieved 3 chunks [sim: 0.94, 0.89, 0.86] from SQLite Index",
    "> Verified AMD XML pipeline: 100% schema match",
    "> Synthesized ReAct plan: [THOUGHT] -> [ACTION]",
    "> Pytest regression suite: 48 passed (0 regressions)",
  ];

  useEffect(() => {
    const traceInterval = setInterval(() => {
      setTraceIndex((prev) => (prev + 1) % traceLogs.length);
      setTokSpeed(Math.floor(Math.random() * 8) + 84);
    }, 2800);
    return () => clearInterval(traceInterval);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
  const bgTextX = useTransform(mouseX, [-0.5, 0.5], ["2.5%", "-2.5%"]);
  const bgTextY = useTransform(mouseY, [-0.5, 0.5], ["2.5%", "-2.5%"]);
  const headRotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const headRotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set(clientX / innerWidth - 0.5);
    y.set(clientY / innerHeight - 0.5);
  };

  // --- SCROLL ANIMATION CHOREOGRAPHY ---
  // 1. Avatar glides left on top of text
  const avatarX = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "-26vw"]);
  const avatarY = useTransform(smoothProgress, [0.05, 0.7], ["2vh", "-12vh"]);
  const avatarScale = useTransform(smoothProgress, [0.05, 0.7], [1, 0.72]);

  // 2. Intro Card moves above the intro text (shifted up & right)
  const introCardX = useTransform(smoothProgress, [0.05, 0.7], ["2.5vw", "-10vw"]);
  const introCardY = useTransform(smoothProgress, [0.05, 0.7], ["-3vh", "-28vh"]);
  const introCardScale = useTransform(smoothProgress, [0.05, 0.7], [1, 0.85]);

  // 3. Intro Text appears on the left
  const textX = useTransform(smoothProgress, [0.2, 0.7], ["-30px", "0px"]);
  const textY = useTransform(smoothProgress, [0.2, 0.7], ["20px", "0px"]);
  const textOpacity = useTransform(smoothProgress, [0.25, 0.6], [0, 1]);

  // 4. All 4 Cards float to the right and sway like balloons
  const card1X = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "50vw"]);
  const card1Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "-14vh"]);
  const card2X = useTransform(smoothProgress, [0.08, 0.7], ["0vw", "52vw"]);
  const card2Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "10vh"]);
  const card3X = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "2vw"]);
  const card3Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "-16vh"]);
  const card4X = useTransform(smoothProgress, [0.08, 0.7], ["0vw", "4vw"]);
  const card4Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "12vh"]);

  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  const dragConstraints = { left: -600, right: 600, top: -350, bottom: 350 };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[240vh] w-full bg-[#02090b] text-white selection:bg-teal-400 selection:text-black"
    >
      <CustomCursor />

      {/* 🚀 HARDWARE VIEWPORT LOCK: Stays fixed on screen until scrollYProgress reaches 0.99 */}
      <div
        className={`${
          isPinned ? "fixed top-0 left-0" : "absolute bottom-0 left-0"
        } h-screen w-full overflow-hidden flex flex-col justify-between z-20`}
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 z-0">
          <NeuralBackground />

          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-teal-500 opacity-[0.05] blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500 opacity-[0.05] blur-[150px]" />
          </div>

          <nav className="relative z-50 w-[95%] max-w-6xl mx-auto mt-6 flex items-center justify-between px-6 sm:px-8 py-3.5 glacier-card rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="font-heading font-black text-xl tracking-wide text-teal-400">
              NOOLI MANISH
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <a href="#" className="text-teal-300 bg-white/10 border border-teal-400/30 px-4 py-1.5 rounded-full shadow-inner">
                Home
              </a>
              <a href="#about" className="hover:text-teal-300 py-1.5 transition-colors">About</a>
              <a href="#colony" className="hover:text-teal-300 py-1.5 transition-colors">Colony</a>
              <a href="#toolkit" className="hover:text-teal-300 py-1.5 transition-colors">Toolkit</a>
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-teal-400 to-emerald-400 text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(45,212,191,0.4)]"
            >
              Contact Me →
            </a>
          </nav>

          <motion.div
            style={{ x: bgTextX, y: bgTextY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-[0.035] select-none"
          >
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">NOOLI</h1>
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">MANISH</h1>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 flex items-center justify-between pb-12">
          
          {/* Left Cards */}
          <div className="hidden lg:flex flex-col gap-6 z-20 w-[310px] justify-center">
            <motion.div
              style={{ x: card1X, y: card1Y }}
              animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <motion.div
                drag
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                className="cursor-grab active:cursor-grabbing"
              >
                {/* Orchestrator & Live Simulation Card (Matches Image 2) */}
                <div className="glacier-card rounded-2xl overflow-hidden border border-teal-500/35 bg-[#031518]/85 shadow-[0_16px_36px_rgba(0,0,0,0.7)]">
                  {/* Top Bar with window controls & tok/s */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80" />
                      <span className="text-[11px] text-teal-300 font-mono ml-2 font-bold">
                        agent_orchestrator.py
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-teal-400 font-bold">
                      {tokSpeed} tok/s
                    </span>
                  </div>

                  {/* Class Code */}
                  <div className="p-4 text-xs font-mono leading-relaxed text-slate-200">
                    <span className="text-cyan-400 font-bold">class</span>{" "}
                    <span className="text-yellow-300 font-bold">AgenticArchitect</span>
                    <span className="text-slate-300">(Manish):</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-300">llm</span> ={" "}
                    <span className="text-emerald-300">"Gemini-2.5-Pro"</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-300">memory</span> ={" "}
                    <span className="text-purple-300 font-semibold">FourTierRAG()</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-300">self_critique</span> ={" "}
                    <span className="text-cyan-400 font-bold">True</span>
                  </div>

                  {/* Sub-box: Live ReAct Simulation Trace */}
                  <div className="mx-3.5 mb-3.5 p-3 rounded-xl bg-black/55 border border-white/10 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">
                        LIVE REACT TRACE:
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/35 text-purple-300 font-bold uppercase">
                        [OBSERVATION]
                      </span>
                    </div>

                    <div className="min-h-[34px] flex items-center relative">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={traceIndex}
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -3 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] font-mono text-slate-200 leading-snug"
                        >
                          {traceLogs[traceIndex]}
                        </motion.p>
                      </AnimatePresence>

                      {/* Glowing Pulse indicator in center */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                        <span className="w-4 h-4 rounded-full bg-teal-400/25 animate-ping absolute" />
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ x: card2X, y: card2Y }}
              animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
            >
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 text-base shadow-inner">🎬</div>
                    <div>
                      <h3 className="text-sm font-bold text-white">The Storyteller's Block</h3>
                      <p className="text-[10px] text-teal-400 uppercase tracking-widest font-mono">UI/UX & Filmography</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    In my colony of ideas, one corner writes scripts and explores filmography. I bring cinematic pacing into software architecture.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center Avatar & Intro Card */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center h-full">
            <motion.div 
              style={{ x: avatarX, y: avatarY, scale: avatarScale }}
              className="relative pointer-events-none"
            >
              <motion.div
                style={{ rotateX: headRotateX, rotateY: headRotateY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="relative pointer-events-auto"
              >
                <ParticleAvatar imageSrc={`${import.meta.env.BASE_URL}manish-avatar.png`} />
              </motion.div>
            </motion.div>

            {/* Intro Content Box (Shifted little up & little right) */}
            <motion.div
              style={{ x: introCardX, y: introCardY, scale: introCardScale }}
              className="relative z-30 -mt-3 sm:-mt-5 ml-4 sm:ml-8 max-w-[380px] w-[92%]"
            >
              <motion.div
                drag
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                whileDrag={{ scale: 1.04, cursor: "grabbing" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="glacier-card bg-blueprint p-5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing border border-teal-400/35 bg-[#031518]/90 backdrop-blur-xl"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf] animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                      AI & PYTHON BACKEND ENGINEER
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/35 text-purple-300 font-bold">
                    RAG + Agents
                  </span>
                </div>

                {/* Body Text with crisp font */}
                <p className="text-xs sm:text-[13px] font-sans text-slate-100 leading-relaxed">
                  Hey, I'm <strong className="font-bold text-white">Nooli Manish</strong>. I engineer enterprise Python/Django backends for <strong className="font-bold text-teal-300">AMD</strong> and architect multi-tier GenAI & screenwriting agents in <strong className="font-bold text-purple-300">CineScript Studio</strong>.
                </p>

                {/* Subtle Divider */}
                <div className="w-full h-[1px] bg-white/10 my-3" />

                {/* Footer Row */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-teal-400/90 flex items-center gap-1.5">
                    <span>✨</span>
                    <span>Hover avatar to scatter particles</span>
                  </span>

                  <a
                    href="#agentic-dag"
                    className="text-teal-300 hover:text-teal-200 underline underline-offset-2 flex items-center gap-1 font-bold transition-colors pointer-events-auto"
                  >
                    Inspect DAG ↓
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="hidden lg:flex flex-col gap-6 z-20 w-[290px] justify-center">
            <motion.div
              style={{ x: card3X, y: card3Y }}
              animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            >
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-500 p-[1.5px] shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                      <div className="w-full h-full bg-[#031518]/90 rounded-[10px] flex flex-col items-center justify-center text-[11px] font-black text-teal-400 leading-none">
                        <span>2+</span>
                        <span className="text-[8px] text-teal-200/70 tracking-tighter mt-0.5">YEARS</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">Software Engineer I</h3>
                      <p className="text-[11px] text-teal-400/70 font-mono mt-0.5">Mirafra Tech</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-2.5 border border-white/5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-300 mb-1.5">
                      <span>Current Client</span>
                      <span className="text-teal-400 font-bold">AMD</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Reviewer Agent Loop Card (Matches Image 2) */}
            <motion.div
              style={{ x: card4X, y: card4Y }}
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 7.2, ease: "easeInOut", delay: 0.3 }}
            >
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card p-5 rounded-2xl border-yellow-500/30 bg-[#031518]/90 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400 rounded-l" />
                  
                  {/* Top Row: Tag + Pass Metric (Matches Image 2) */}
                  <div className="flex items-center justify-between mb-2.5 pl-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse" />
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                        REVIEWER AGENT LOOP
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                      PASS: 99.4%
                    </span>
                  </div>

                  {/* Body Content (Matches Image 2) */}
                  <p className="text-xs text-slate-200 leading-relaxed pl-1.5 font-sans">
                    Zero generic AI output. I engineer{" "}
                    <span className="text-teal-300 font-bold">dual–LLM verification loops</span>{" "}
                    and{" "}
                    <span className="text-amber-300 font-bold">Pytest guardrails</span>{" "}
                    that critique continuity, schema compliance, and style before API delivery.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Phase 2 Transition Text (Matches Image 1, width: max-content) */}
          <motion.div 
            style={{ x: textX, y: textY, opacity: textOpacity }}
            className="absolute left-6 md:left-14 lg:left-20 bottom-10 md:bottom-14 z-20 w-[max-content] max-w-[92vw] pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest font-bold mb-3 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>GENAI & BACKEND ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.08] mb-3 tracking-tight w-[max-content] whitespace-nowrap">
              Autonomous Agents. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">
                Scalable Backends.
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-sans">
              From 4–tier vector retrieval and Gemini API orchestration to production Django/SQL pipelines at AMD—built for reliability, wrapped in high-craft UI.
            </p>
          </motion.div>

        </div>

        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="relative z-20 pb-5 text-teal-400/40 text-xs font-mono tracking-widest uppercase flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span>Scroll to explore</span>
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}