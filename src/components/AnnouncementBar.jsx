import React from "react";
import { Phone, Mail } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative z-[60] border-b border-white/5 bg-gradient-to-r from-[#ff4d6d]/10 via-[#7209b7]/10 to-[#ff4d6d]/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[11px] text-white/70">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            <span className="font-medium text-white">£500 free credit</span> for new sellers this month
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+447958557597" className="flex items-center gap-1.5 hover:text-white transition">
            <Phone className="w-3 h-3" /> +44 7958 557597
          </a>
          <a href="mailto:support@edropship.com" className="flex items-center gap-1.5 hover:text-white transition">
            <Mail className="w-3 h-3" /> support@edropship.com
          </a>
        </div>
      </div>
    </div>
  );
}