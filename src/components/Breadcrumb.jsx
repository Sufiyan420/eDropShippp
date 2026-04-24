import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ crumbs = [] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-white/40">
      <a href="/" className="flex items-center gap-1 hover:text-white transition-colors">
        <Home size={12} />
        Home
      </a>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="text-white/20" />
          {crumb.href ? (
            <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
          ) : (
            <span className="text-white/60">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}