import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ANIMATION } from "./tokens";

export const MagneticBtn = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  as = "button",
  href,
  type = "button",
  size = "md",
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, ANIMATION.springSoft);
  const sy = useSpring(y, ANIMATION.springSoft);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] shadow-[0_10px_40px_-10px_rgba(255,77,109,0.6)] hover:shadow-[0_15px_50px_-5px_rgba(255,77,109,0.9)]",
    purple:
      "text-white bg-gradient-to-r from-[#7209b7] to-[#560bad] shadow-[0_10px_40px_-10px_rgba(114,9,183,0.6)] hover:shadow-[0_15px_50px_-5px_rgba(114,9,183,0.9)]",
    ghost:
      "text-white/85 border border-white/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/30",
    white:
      "text-black bg-white hover:bg-white/90",
  };

  const base =
    "relative inline-flex items-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 select-none overflow-hidden";

  const Cmp = as === "a" ? motion.a : motion.button;
  return (
    <Cmp
      ref={ref}
      href={href}
      type={as === "button" ? type : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span className="relative flex items-center gap-2">{children}</span>
    </Cmp>
  );
};

export default MagneticBtn;