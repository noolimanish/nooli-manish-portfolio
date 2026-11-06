import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

// NEON GREEN CURSOR
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
      <motion.div style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }} className="absolute w-14 h-14 rounded-full bg-emerald-400/20 blur-xl pointer-events-none" />
      <motion.div style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }} className="absolute w-8 h-8 rounded-full border border-emerald-400/40 pointer-events-none shadow-[0_0_12px_rgba(52,211,153,0.3)]" />
      <motion.div style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }} className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981,0_0_20px_#34d399] pointer-events-none" />
    </div>
  );
}

// NEURAL NETWORK BACKGROUND
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

// PARTICLE AVATAR
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
      offCtx.drawImage(img, 0, 0, img.width, img.height, shiftX, shiftY, img.width * ratio, img.height * ratio);
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
              originX: x, originY: y,
              x: x + (Math.random() - 0.5) * 12,
              y: y + (Math.random() - 0.5) * 12,
              vx: 0, vy: 0,
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
      <canvas ref={canvasRef} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} className="relative z-20 cursor-crosshair drop-shadow-[0_0_30px_rgba(20,184,166,0.3)] touch-none max-w-full" style={{ width: "420px", height: "460px" }} />
    </div>
  );
}

// MAIN LANDING TEST COMPONENT
export default function LandingTest() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

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

  // --- CHOREOGRAPHY ---
  const avatarX = useTransform(smoothProgress, [0, 0.5], ["0vw", "-22vw"]);
  const avatarY = useTransform(smoothProgress, [0, 0.5], ["8vh", "2vh"]);
  const avatarScale = useTransform(smoothProgress, [0, 0.5], [1, 0.82]);

  const textX = useTransform(smoothProgress, [0.15, 0.4], ["-50px", "0px"]);
  const textY = useTransform(smoothProgress, [0.15, 0.4], ["20px", "-10px"]);
  const textOpacity = useTransform(smoothProgress, [0.15, 0.3, 0.6, 0.75], [0, 1, 1, 0]);

  const introCardX = useTransform(smoothProgress, [0, 0.5], ["0vw", "-22vw"]);
  const introCardY = useTransform(smoothProgress, [0, 0.5], ["-12.5vh", "-35.5vh"]);
  const introCardScale = useTransform(smoothProgress, [0, 0.5], [1, 0.88]);
  const introCardOpacity = useTransform(smoothProgress, [0.6, 0.75], [1, 0]);

  const card1X = useTransform(smoothProgress, [0.1, 0.5], ["0vw", "32vw"]);
  const card1Y = useTransform(smoothProgress, [0.1, 0.5], ["0vh", "-10vh"]);
  const card2X = useTransform(smoothProgress, [0.12, 0.5], ["0vw", "35vw"]);
  const card2Y = useTransform(smoothProgress, [0.12, 0.5], ["0vh", "8vh"]);
  const card3X = useTransform(smoothProgress, [0.1, 0.5], ["0vw", "20vw"]);
  const card3Y = useTransform(smoothProgress, [0.1, 0.5], ["0vh", "-14vh"]);
  const card4X = useTransform(smoothProgress, [0.12, 0.5], ["0vw", "22vw"]);
  const card4Y = useTransform(smoothProgress, [0.12, 0.5], ["0vh", "12vh"]);

  const cardsOpacity = useTransform(smoothProgress, [0.6, 0.75], [1, 0]);
  const heroOpacity = useTransform(smoothProgress, [0.75, 0.95], [1, 0]);

  const dragConstraints = { left: -600, right: 600, top: -350, bottom: 350 };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[150vh] w-full bg-[#02090b] text-white selection:bg-teal-400 selection:text-black overflow-x-hidden"
    >
      <CustomCursor />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between" style={{ perspective: "1000px" }}>
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0">
          <NeuralBackground />
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-teal-500 opacity-[0.05] blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500 opacity-[0.05] blur-[150px]" />
          </div>

          {/* NAVBAR */}
          <nav className="relative z-50 w-[95%] max-w-6xl mx-auto mt-6 flex items-center justify-between px-6 sm:px-8 py-3.5 glacier-card rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="font-heading font-black text-xl tracking-wide text-teal-400">NOOLI MANISH</div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <a href="#" className="text-teal-300 bg-white/10 border border-teal-400/30 px-4 py-1.5 rounded-full shadow-inner">Home</a>
              <a href="#about" className="hover:text-teal-300 py-1.5 transition-colors">About</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-teal-400 to-emerald-400 text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(45,212,191,0.4)]">
              Contact Me →
            </a>
          </nav>

          {/* BG TEXT */}
          <motion.div style={{ x: bgTextX, y: bgTextY }} className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-[0.035] select-none">
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">NOOLI</h1>
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">MANISH</h1>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 flex items-center justify-between py-2">
          
          {/* LEFT CARDS */}
          <div className="hidden lg:flex flex-col gap-6 z-20 w-[290px]">
            <motion.div style={{ x: card1X, y: card1Y, opacity: cardsOpacity }} animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80" />
                    <span className="text-[11px] text-teal-300/60 ml-2 font-mono">engine.py</span>
                  </div>
                  <div className="p-4 text-xs font-mono leading-relaxed text-slate-300">
                    <span className="text-teal-400">class</span> <span className="text-yellow-300">ManishNooli</span>:<br />
                    &nbsp;&nbsp;mindset = <span className="text-emerald-300">"Code + Creative"</span><br />
                    &nbsp;&nbsp;loop = <span className="text-emerald-300">"Never stuck in one"</span><br />
                    &nbsp;&nbsp;<span className="text-cyan-400">def</span> <span className="text-emerald-200">deliver</span>(self):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">return</span> <span className="text-emerald-300">"Solid Logic + Clean Wrapper"</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: card2X, y: card2Y, opacity: cardsOpacity }} animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}>
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 text-base shadow-inner">🎬</div>
                    <div>
                      <h3 className="text-sm font-bold text-white">The Storyteller's Block</h3>
                      <p className="text-[10px] text-teal-400 uppercase tracking-widest font-mono">UI/UX & Filmography</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">In my colony of ideas, one corner writes scripts and explores filmography. I bring cinematic pacing into software architecture.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CENTER AVATAR */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
            <motion.div style={{ x: avatarX, y: avatarY, scale: avatarScale }} className="relative pointer-events-none">
              <motion.div style={{ rotateX: headRotateX, rotateY: headRotateY, transformStyle: "preserve-3d" }} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }} className="relative pointer-events-auto">
                <ParticleAvatar imageSrc="/manish-avatar.png" />
              </motion.div>
            </motion.div>

            {/* INTRO CARD */}
            <motion.div style={{ x: introCardX, y: introCardY, scale: introCardScale, opacity: introCardOpacity }} className="relative z-30 mt-3 max-w-[340px] w-[90%]">
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.04, cursor: "grabbing" }} animate={{ y: [0, -6, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} className="glacier-card p-5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)] cursor-grab active:cursor-grabbing border border-teal-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold">Backend Architect & Storyteller</span>
                </div>
                <p className="text-xs text-slate-200 leading-snug">
                  Hey, I'm <strong className="text-white">Manish</strong>. I engineer scalable Python backends for enterprise systems at <strong className="text-white">AMD</strong>, then switch gears to architect multi-layer GenAI pipelines in <strong className="text-teal-300">CineScript</strong>.
                  <br /><br />
                  <span className="text-[10px] text-teal-400/90 font-mono block">✨ Hover avatar to scatter dots. Drag this anywhere.</span>
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CARDS */}
          <div className="hidden lg:flex flex-col gap-6 z-20 w-[290px]">
            <motion.div style={{ x: card3X, y: card3Y, opacity: cardsOpacity }} animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }} transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}>
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

            <motion.div style={{ x: card4X, y: card4Y, opacity: cardsOpacity }} animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 7.2, ease: "easeInOut", delay: 0.3 }}>
              <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                <div className="glacier-card p-5 rounded-2xl border-yellow-500/30">
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400" />
                  <h3 className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    The Philosophy
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    People judge by the cover—and they should. A robust engine deserves a breathtaking wrapper. I connect <span className="text-teal-400 font-semibold">clean code</span> with <span className="text-yellow-400 font-semibold">visual understanding</span>.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* PHASE 2 HEADLINE */}
          <motion.div style={{ x: textX, y: textY, opacity: textOpacity }} className="absolute left-6 md:left-20 top-[52%] -translate-y-1/2 z-20 max-w-lg pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider mb-4">
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight mb-4 tracking-tight">
              Code + Creative <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">Wrappers.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Engineering high-throughput backend infrastructure, wrapped in intentional design. Scroll down to enter my world.
            </p>
          </motion.div>

        </div>

        <div className="relative z-20 pb-5 text-teal-400/40 text-xs font-mono tracking-widest uppercase flex flex-col items-center gap-1.5 pointer-events-none">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}