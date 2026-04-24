import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const m = (e) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    const o = (e) => {
      const t = e.target;
      setHover(
        t.tagName === "A" ||
          t.tagName === "BUTTON" ||
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          !!t.closest("button") ||
          !!t.closest("a")
      );
    };
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseover", o);
    return () => {
      window.removeEventListener("mousemove", m);
      window.removeEventListener("mouseover", o);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
      >
        <motion.div
          animate={{
            scale: hover ? 2.2 : 1,
            opacity: hover ? 0.25 : 0.7,
          }}
          className="w-8 h-8 rounded-full border border-[#ff4d6d]/80"
        />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy, translateX: 12, translateY: 12 }}
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
      >
        <div className="w-2 h-2 rounded-full bg-[#ff4d6d]" />
      </motion.div>
    </>
  );
};

export const GlobalStyles = () => (
  <style>{`
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0a0a0f;
      color: white;
    }
    @media (min-width: 768px) {
      body, a, button, input, textarea, select { cursor: none !important; }
    }
    * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #0a0a0f; }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #ff4d6d, #7209b7);
      border-radius: 8px;
    }
  `}</style>
);

export default CustomCursor;