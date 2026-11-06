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

// 3. SCALED PARTICLE AVATAR (With High-Speed Memory, LocalStorage & SessionStorage Caching)
let inMemoryParticlePoints = null;

function getCachedAvatarPoints(isMobile) {
  if (inMemoryParticlePoints) return inMemoryParticlePoints;
  const key = `nm_avatar_pts_${isMobile ? "m" : "d"}_v3`;
  try {
    const local = localStorage.getItem(key);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryParticlePoints = parsed;
        return parsed;
      }
    }
  } catch (e) {
    // LocalStorage unavailable
  }
  try {
    const stored = sessionStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryParticlePoints = parsed;
        return parsed;
      }
    }
  } catch (e) {
    // SessionStorage unavailable
  }
  return null;
}

function saveAvatarPoints(points, isMobile) {
  inMemoryParticlePoints = points;
  const key = `nm_avatar_pts_${isMobile ? "m" : "d"}_v3`;
  try {
    localStorage.setItem(key, JSON.stringify(points));
  } catch (e) {
    // Quota exceeded or private browsing
  }
  try {
    sessionStorage.setItem(key, JSON.stringify(points));
  } catch (e) {
    // Quota exceeded or private browsing
  }
}

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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const step = isMobile ? 5 : 4;

    const startAnimation = () => {
      let frameCount = 0;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        frameCount += 0.02;

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const radius = mouseRef.current.radius;
        const hasMouse = mx > -1000 && my > -1000;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (hasMouse) {
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

    const buildParticlesFromPoints = (pts) => {
      particles = pts.map((pt) => ({
        originX: pt[0],
        originY: pt[1],
        x: pt[0] + (Math.random() - 0.5) * 12,
        y: pt[1] + (Math.random() - 0.5) * 12,
        vx: 0,
        vy: 0,
        size: pt[2],
        color: `rgba(${pt[3]}, ${pt[4]}, ${pt[5]}, ${pt[6]})`,
        ease: 0.07 + Math.random() * 0.03,
        friction: 0.83,
        repelForce: 85 + Math.random() * 40,
        floatOffset: Math.random() * Math.PI * 2,
      }));
      startAnimation();
    };

    // 🚀 TIER 1: Check In-Memory & SessionStorage Cache (0ms Instant Load on reload/repeat visits!)
    const cachedPoints = getCachedAvatarPoints(isMobile);
    if (cachedPoints && cachedPoints.length > 0) {
      buildParticlesFromPoints(cachedPoints);
      return () => cancelAnimationFrame(animationFrameId);
    }

    // 🚀 TIER 2: If cold visit, sample image once and cache for all future visits
    const img = new Image();
    img.src = imageSrc;

    const initParticles = () => {
      try {
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
        const rawPoints = [];

        for (let y = 0; y < height; y += step) {
          for (let x = 0; x < width; x += step) {
            const idx = (y * width + x) * 4;
            const r = imgData[idx];
            const g = imgData[idx + 1];
            const b = imgData[idx + 2];
            const a = imgData[idx + 3];
            const brightness = (r + g + b) / 3;

            if (a > 30 && brightness > 8) {
              const size = isMobile ? Math.random() * 1.5 + 0.9 : Math.random() * 1.4 + 0.8;
              const alphaVal = Math.round((a / 255) * 0.95 * 100) / 100;
              rawPoints.push([x, y, Math.round(size * 10) / 10, r, g, b, alphaVal]);
            }
          }
        }

        saveAvatarPoints(rawPoints, isMobile);
        buildParticlesFromPoints(rawPoints);
      } catch (err) {
        console.error("ParticleAvatar init error:", err);
      }
    };

    if (img.complete && img.naturalWidth !== 0) {
      initParticles();
    } else {
      img.onload = initParticles;
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [imageSrc]);

  const updatePointer = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseRef.current.x = (clientX - rect.left) * scaleX;
    mouseRef.current.y = (clientY - rect.top) * scaleY;
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === "touch") return; // Keep mobile scroll smooth
    updatePointer(e.clientX, e.clientY);
  };

  const handlePointerDown = (e) => {
    updatePointer(e.clientX, e.clientY);
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
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
        className="relative z-20 cursor-crosshair drop-shadow-[0_0_30px_rgba(20,184,166,0.3)] touch-none max-w-full"
        style={{ width: "420px", height: "460px" }}
      />
    </div>
  );
}

// 3.5 FLOATING SOCIAL BLOCKS / CUBES CONFIGURATION
const SOCIAL_CUBES = [
  {
    id: "linkedin",
    name: "LinkedIn",
    shortName: "LinkedIn",
    sub: "Professional Network",
    url: "https://linkedin.com",
    color: "text-[#0077b5]",
    dotColor: "bg-[#0077b5]",
    glow: "shadow-[0_0_20px_rgba(0,119,181,0.25)]",
    border: "border-[#0077b5]/35 hover:border-[#0077b5]/80",
    bg: "bg-[#0077b5]/15",
    yFloat: [0, -8, 0],
    rotateFloat: [0, 3, -3, 0],
    duration: 5.5,
    icon: (
      <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    shortName: "GitHub",
    sub: "Code & Repositories",
    url: "https://github.com",
    color: "text-emerald-400",
    dotColor: "bg-emerald-400",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    border: "border-emerald-500/35 hover:border-emerald-400/80",
    bg: "bg-emerald-500/15",
    yFloat: [0, -10, 0],
    rotateFloat: [-2, 3, -2],
    duration: 6.2,
    icon: (
      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: "medium",
    name: "Medium",
    shortName: "Medium",
    sub: "AI & Tech Articles",
    url: "https://medium.com",
    color: "text-amber-400",
    dotColor: "bg-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    border: "border-amber-500/35 hover:border-amber-400/80",
    bg: "bg-amber-500/15",
    yFloat: [0, -9, 0],
    rotateFloat: [2, -3, 2],
    duration: 5.8,
    icon: (
      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    id: "email",
    name: "Email / Chat",
    shortName: "Email",
    sub: "Direct Dispatch",
    url: "mailto:manishnooli143@gmail.com",
    color: "text-cyan-300",
    dotColor: "bg-cyan-400",
    glow: "shadow-[0_0_20px_rgba(0,243,255,0.25)]",
    border: "border-cyan-500/35 hover:border-cyan-400/80",
    bg: "bg-cyan-500/15",
    yFloat: [0, -11, 0],
    rotateFloat: [-3, 2, -3],
    duration: 6.4,
    icon: (
      <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function FloatingSocialCubeCard({ cube, scrollX, scrollY, dragConstraints }) {
  return (
    <motion.div
      style={{ x: scrollX, y: scrollY }}
      className="hidden lg:block z-30 shrink-0"
    >
      <motion.div
        animate={{
          y: cube.yFloat,
          rotate: cube.rotateFloat,
        }}
        transition={{
          repeat: Infinity,
          duration: cube.duration,
          ease: "easeInOut",
        }}
      >
        <motion.a
          href={cube.url}
          target={cube.url.startsWith("mailto") ? "_self" : "_blank"}
          rel="noreferrer"
          drag
          dragConstraints={dragConstraints}
          dragElastic={0.25}
          whileHover={{ scale: 1.05, y: -2 }}
          whileDrag={{ scale: 1.08, cursor: "grabbing" }}
          whileTap={{ scale: 0.95 }}
          className={`glacier-card group relative px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl xl:rounded-2xl border ${cube.border} bg-[#031518]/90 backdrop-blur-xl ${cube.glow} flex items-center justify-between gap-2.5 cursor-grab active:cursor-grabbing hover:bg-[#031518] transition-all select-none`}
        >
          <div className="flex items-center gap-2.5">
            {/* Mini 3D-angled icon box */}
            <div
              className={`relative w-7 h-7 xl:w-7.5 xl:h-7.5 rounded-lg xl:rounded-xl ${cube.bg} border ${cube.border} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 rounded-lg xl:rounded-xl pointer-events-none" />
              {cube.icon}
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className={`text-[10px] xl:text-[11px] font-mono font-bold tracking-wider uppercase ${cube.color}`}>
                  {cube.name}
                </span>
                <span className="text-[9px] xl:text-[10px] text-slate-400 group-hover:text-cyan-300 transition-colors">↗</span>
              </div>
              <span className="text-[8.5px] xl:text-[9px] font-mono text-slate-400 tracking-tight">
                {cube.sub}
              </span>
            </div>
          </div>

          {/* Live status dot */}
          <span className={`w-1.5 h-1.5 rounded-full ${cube.dotColor} animate-pulse`} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

// 4. MAIN HERO COMPONENT (HARDWARE FIXED PINNING)
export default function LandingTest() {
  const containerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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
      setTokSpeed(Math.floor(Math.random() * 8) + 84); // 84 - 91 tok/s
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
  const avatarY = useTransform(smoothProgress, [0.05, 0.7], ["10vh", "5vh"]);
  const avatarScale = useTransform(smoothProgress, [0.05, 0.7], [1, 0.95]);

  // 2. Intro Card moves above the intro text (shifted up & right)
  const introCardX = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "-10vw"]);
  const introCardY = useTransform(smoothProgress, [0.05, 0.7], ["-3vh", "-34vh"]);
  const introCardScale = useTransform(smoothProgress, [0.05, 0.7], [1, 0.85]);

  // 3. Intro Text appears on the left
  const textX = useTransform(smoothProgress, [0.2, 0.7], ["-30px", "0px"]);
  const textY = useTransform(smoothProgress, [0.2, 0.7], ["20px", "0px"]);
  const textOpacity = useTransform(smoothProgress, [0.25, 0.6], [0, 1]);

  // 4. All 4 Cards float to the right and sway like balloons
  const card1X = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "44vw"]);
  const card1Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "0vh"]);
  const card2X = useTransform(smoothProgress, [0.08, 0.7], ["0vw", "46vw"]);
  const card2Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "0vh"]);
  const card3X = useTransform(smoothProgress, [0.05, 0.7], ["0vw", "5vw"]);
  const card3Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "0vh"]);
  const card4X = useTransform(smoothProgress, [0.08, 0.7], ["0vw", "4vw"]);
  const card4Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "0vh"]);

  // 4.5 Dedicated cube transforms that expand gently in Stage 2 to prevent any overlap
  const cube1X = card1X;
  const cube1Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "-2.5vh"]);
  const cube2X = card2X;
  const cube2Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "2.5vh"]);
  const cube3X = card3X;
  const cube3Y = useTransform(smoothProgress, [0.05, 0.7], ["0vh", "-2.5vh"]);
  const cube4X = card4X;
  const cube4Y = useTransform(smoothProgress, [0.08, 0.7], ["0vh", "2.5vh"]);

  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  const dragConstraints = { left: -600, right: 600, top: -350, bottom: 350 };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full bg-transparent text-white selection:bg-teal-400 selection:text-black ${
        isDesktop ? "h-[240vh]" : "min-h-[100dvh] pb-10 flex flex-col justify-between"
      }`}
    >
      {/* 🚀 HARDWARE VIEWPORT LOCK ON DESKTOP; NATURAL FLOW ON MOBILE */}
      <div
        className={`${
          isDesktop
            ? isPinned
              ? "fixed top-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-between z-20"
              : "absolute bottom-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-between z-20"
            : "relative w-full min-h-[100dvh] flex flex-col justify-between z-20"
        }`}
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-teal-500 opacity-[0.05] blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500 opacity-[0.05] blur-[150px]" />
          </div>

          <motion.div
            style={{ x: bgTextX, y: bgTextY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-[0.035] select-none"
          >
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">NOOLI</h1>
            <h1 className="text-[21vw] leading-[0.78] font-black tracking-tight text-teal-200">MANISH</h1>
          </motion.div>
        </div>

        {/* Top spacer to preserve layout height under global Navbar */}
        <div className="h-14 sm:h-16 lg:h-18 shrink-0 pointer-events-none" />

        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between pb-3 lg:pb-5">
          
          {/* Left Cards */}
          <div className="hidden lg:flex flex-col gap-2 xl:gap-2.5 z-20 w-[295px] xl:w-[315px] justify-center">
            {/* Floating Cube 1: LinkedIn (Draggable 3D Block) */}
            <FloatingSocialCubeCard
              cube={SOCIAL_CUBES[0]}
              scrollX={cube1X}
              scrollY={cube1Y}
              dragConstraints={dragConstraints}
            />

            <motion.div
              style={{ x: card1X, y: card1Y }}
              className="shrink-0"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <motion.div
                  drag
                  dragConstraints={dragConstraints}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  {/* Orchestrator & Live Simulation Card */}
                  <div className="glacier-card rounded-2xl overflow-hidden border border-teal-500/35 bg-[#031518]/85 shadow-[0_16px_36px_rgba(0,0,0,0.7)]">
                    {/* Top Bar with window controls & tok/s */}
                    <div className="flex items-center justify-between px-3.5 py-1.5 xl:py-2 border-b border-white/10 bg-white/[0.03]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-teal-400/80" />
                        <span className="text-[10px] xl:text-[11px] text-teal-300 font-mono ml-1.5 font-bold">
                          agent_orchestrator.py
                        </span>
                      </div>
                      <span className="text-[10px] xl:text-[11px] font-mono text-teal-400 font-bold">
                        {tokSpeed} tok/s
                      </span>
                    </div>

                    {/* Class Code */}
                    <div className="px-3.5 py-2 xl:py-2.5 text-[11px] xl:text-xs font-mono leading-relaxed text-slate-200">
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
                    <div className="mx-3 mb-2.5 xl:mb-3 p-2 xl:p-2.5 rounded-xl bg-black/55 border border-white/10 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] xl:text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">
                          LIVE REACT TRACE:
                        </span>
                        <span className="text-[8.5px] xl:text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/35 text-purple-300 font-bold uppercase">
                          [OBSERVATION]
                        </span>
                      </div>

                      <div className="min-h-[28px] flex items-center relative pr-4">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={traceIndex}
                            initial={{ opacity: 0, y: 2 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -2 }}
                            transition={{ duration: 0.18 }}
                            className="text-[10px] xl:text-[11px] font-mono text-slate-200 leading-snug truncate"
                          >
                            {traceLogs[traceIndex]}
                          </motion.p>
                        </AnimatePresence>

                        {/* Glowing Pulse indicator in center */}
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                          <span className="w-3.5 h-3.5 rounded-full bg-teal-400/25 animate-ping absolute" />
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ x: card2X, y: card2Y }}
              className="shrink-0"
            >
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut", delay: 0.5 }}
              >
                <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                  <div className="glacier-card p-3.5 xl:p-4 rounded-xl xl:rounded-2xl">
                    <div className="flex items-center gap-2.5 mb-1.5 xl:mb-2">
                      <div className="w-8 h-8 rounded-lg xl:rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 text-sm xl:text-base shadow-inner shrink-0">🎬</div>
                      <div>
                        <h3 className="text-xs xl:text-sm font-bold text-white leading-tight">The Storyteller's Block</h3>
                        <p className="text-[9px] xl:text-[10px] text-teal-400 uppercase tracking-widest font-mono">UI/UX & Filmography</p>
                      </div>
                    </div>
                    <p className="text-[11px] xl:text-xs text-slate-300 leading-relaxed font-sans">
                      In my colony of ideas, one corner writes scripts and explores filmography. I bring cinematic pacing into software architecture.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Cube 2: GitHub (Draggable 3D Block) */}
            <FloatingSocialCubeCard
              cube={SOCIAL_CUBES[1]}
              scrollX={cube2X}
              scrollY={cube2Y}
              dragConstraints={dragConstraints}
            />
          </div>

          {/* Center Avatar & Intro Card (Stable & centered on mobile; choreography active on desktop) */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center h-full my-auto">
            <motion.div 
              style={{
                x: isDesktop ? avatarX : 0,
                y: isDesktop ? avatarY : 0,
                scale: isDesktop ? avatarScale : 1,
              }}
              className="relative pointer-events-none"
            >
              <motion.div
                style={{
                  rotateX: isDesktop ? headRotateX : 0,
                  rotateY: isDesktop ? headRotateY : 0,
                  transformStyle: "preserve-3d"
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="relative pointer-events-auto"
              >
                <ParticleAvatar imageSrc={`${import.meta.env.BASE_URL}manish-avatar.png`} />
              </motion.div>
            </motion.div>

            {/* Intro Content Box (Shifted up & right on desktop on scroll; centered & stable on mobile) */}
            <motion.div
              style={{
                x: isDesktop ? introCardX : 0,
                y: isDesktop ? introCardY : 0,
                scale: isDesktop ? introCardScale : 1,
              }}
              className="relative z-30 -mt-2 sm:-mt-5 mx-auto lg:ml-8 lg:mx-0 max-w-[360px] sm:max-w-[380px] w-[92%]"
            >
              <motion.div
                drag={isDesktop}
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                whileDrag={{ scale: 1.04, cursor: "grabbing" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="glacier-card bg-blueprint p-4 sm:p-5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8)] border border-teal-400/35 bg-[#031518]/90 backdrop-blur-xl"
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

            {/* Square Icon-Only Cubes for Mobile/Tablet (Just Icon, No Name) */}
            <div className="flex lg:hidden items-center justify-center gap-3 mt-3.5 z-30 pointer-events-auto">
              {SOCIAL_CUBES.map((cube) => (
                <a
                  key={cube.id}
                  href={cube.url}
                  target={cube.url.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  aria-label={cube.name}
                  className={`w-10 h-10 rounded-xl glacier-card border ${cube.border} ${cube.bg} backdrop-blur-md flex items-center justify-center hover:border-cyan-400 active:scale-90 transition-all shadow-md group`}
                >
                  <div className="w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cube.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="hidden lg:flex flex-col gap-2 xl:gap-2.5 z-20 w-[285px] xl:w-[300px] justify-center">
            {/* Floating Cube 3: Medium (Draggable 3D Block) */}
            <FloatingSocialCubeCard
              cube={SOCIAL_CUBES[2]}
              scrollX={cube3X}
              scrollY={cube3Y}
              dragConstraints={dragConstraints}
            />

            <motion.div
              style={{ x: card3X, y: card3Y }}
              className="shrink-0"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
              >
                <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                  <div className="glacier-card p-3.5 xl:p-4 rounded-xl xl:rounded-2xl">
                    <div className="flex items-center gap-2.5 mb-2 xl:mb-2.5">
                      <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-lg xl:rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-500 p-[1.5px] shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                        <div className="w-full h-full bg-[#031518]/90 rounded-[8px] xl:rounded-[10px] flex flex-col items-center justify-center text-[10px] xl:text-[11px] font-black text-teal-400 leading-none">
                          <span>2+</span>
                          <span className="text-[7.5px] xl:text-[8px] text-teal-200/70 tracking-tighter mt-0.5">YEARS</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs xl:text-sm font-bold text-white leading-tight">Software Engineer I</h3>
                        <p className="text-[10px] xl:text-[11px] text-teal-400/70 font-mono mt-0.5">Mirafra Tech</p>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg xl:rounded-xl p-2 xl:p-2.5 border border-white/5">
                      <div className="flex justify-between items-center text-[9.5px] xl:text-[10px] font-mono text-slate-300 mb-1">
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
            </motion.div>

            {/* Reviewer Agent Loop Card */}
            <motion.div
              style={{ x: card4X, y: card4Y }}
              className="shrink-0"
            >
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.3 }}
              >
                <motion.div drag dragConstraints={dragConstraints} dragElastic={0.2} whileDrag={{ scale: 1.05, cursor: "grabbing" }} className="cursor-grab active:cursor-grabbing">
                  <div className="glacier-card p-3.5 xl:p-4 rounded-xl xl:rounded-2xl border-yellow-500/30 bg-[#031518]/90 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400 rounded-l" />
                    
                    {/* Top Row: Tag + Pass Metric */}
                    <div className="flex items-center justify-between mb-2 pl-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse" />
                        <span className="text-[10.5px] xl:text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                          REVIEWER AGENT LOOP
                        </span>
                      </div>
                      <span className="text-[10.5px] xl:text-xs font-mono text-emerald-400 font-bold tracking-wider">
                        PASS: 99.4%
                      </span>
                    </div>

                    {/* Body Content */}
                    <p className="text-[11px] xl:text-xs text-slate-200 leading-relaxed pl-1.5 font-sans">
                      Zero generic AI output. I engineer{" "}
                      <span className="text-teal-300 font-bold">dual–LLM verification loops</span>{" "}
                      and{" "}
                      <span className="text-amber-300 font-bold">Pytest guardrails</span>{" "}
                      that critique continuity, schema compliance, and style before API delivery.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Cube 4: Email / Chat (Draggable 3D Block) */}
            <FloatingSocialCubeCard
              cube={SOCIAL_CUBES[3]}
              scrollX={cube4X}
              scrollY={cube4Y}
              dragConstraints={dragConstraints}
            />
          </div>

          {/* Phase 2 Transition Text (Desktop Only, matches design) */}
          <motion.div 
            style={{ x: textX, y: textY, opacity: textOpacity }}
            className="hidden lg:block absolute left-6 md:left-14 lg:left-20 bottom-10 md:bottom-14 z-20 w-[max-content] max-w-[92vw] pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest font-bold mb-3 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>GENAI & BACKEND ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.08] mb-3 tracking-tight w-full sm:w-[max-content] whitespace-normal sm:whitespace-nowrap">
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
          style={{ opacity: isDesktop ? scrollIndicatorOpacity : 1 }}
          className="relative z-20 pb-2 sm:pb-3.5 shrink-0 text-teal-400/40 text-xs font-mono tracking-widest uppercase flex flex-col items-center gap-1 pointer-events-none"
        >
          <span>Scroll to explore</span>
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}