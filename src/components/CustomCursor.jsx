import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
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

