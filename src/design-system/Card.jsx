import React from "react";

export const GlassCard = ({
  children,
  className = "",
  hover = true,
  as: As = "div",
  ...props
}) => (
  <As
    className={`relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl overflow-hidden ${
      hover ? "hover:border-white/20 transition-all duration-300" : ""
    } ${className}`}
    {...props}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    <div className="relative">{children}</div>
  </As>
);

export const Eyebrow = ({ children, className = "", color = "pink" }) => {
  const colors = {
    pink: "text-[#ff4d6d]",
    purple: "text-[#a78bfa]",
    blue: "text-[#3a86ff]",
  };
  return (
    <div
      className={`text-[10px] uppercase tracking-[0.4em] ${colors[color]} ${className}`}
    >
      — {children}
    </div>
  );
};

export const SerifAccent = ({ children, gradient = "pink" }) => {
  const gradients = {
    pink: "from-[#ff4d6d] to-[#7209b7]",
    purple: "from-[#7209b7] to-[#a78bfa]",
    pinkPurple: "from-[#ff4d6d] to-[#a78bfa]",
  };
  return (
    <span
      className={`italic font-light bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent`}
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
      {children}
    </span>
  );
};

export default GlassCard;