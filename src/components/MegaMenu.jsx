import React from "react";
import { motion } from "framer-motion";
import {
  User, Baby, Laptop, Shirt, Sparkles, Gem, FileText, Car, Book,
  Hammer, UtensilsCrossed, Home as HomeIcon, Dumbbell, Dog,
  Layers, Box as BoxIcon, Building2, CheckCheck, Wallet, Bookmark,
  Compass, GraduationCap, HelpCircle, Smartphone, Video, Flame,
  MessageCircle, Wrench, Info, ArrowUpRight,
} from "lucide-react";

const PRODUCTS_MENU = [
  { name: "Adult", icon: User, color: "#ff4d6d" },
  { name: "Baby & Children", icon: Baby, color: "#7209b7" },
  { name: "Computer & Electronics", icon: Laptop, color: "#3a86ff" },
  { name: "Fashion & Lifestyle", icon: Shirt, color: "#ff006e" },
  { name: "Health & Beauty", icon: Sparkles, color: "#fb5607" },
  { name: "Jewellery & Accessories", icon: Gem, color: "#8338ec" },
  { name: "Stationery & Office", icon: FileText, color: "#06d6a0" },
  { name: "Automotive", icon: Car, color: "#ffbe0b" },
  { name: "Books", icon: Book, color: "#ef476f" },
  { name: "DIY & Tools", icon: Hammer, color: "#118ab2" },
  { name: "Food & Drink", icon: UtensilsCrossed, color: "#f72585" },
  { name: "Home & Garden", icon: HomeIcon, color: "#06ffa5" },
  { name: "Sports & Outdoors", icon: Dumbbell, color: "#3a86ff" },
  { name: "Pet Supplies", icon: Dog, color: "#ffbe0b" },
];

const INTEGRATIONS_MENU = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Shopify", color: "#95BF47" },
  { name: "eBay", color: "#E53238" },
  { name: "Etsy", color: "#F16521" },
  { name: "OnBuy", color: "#FF6B35" },
  { name: "Fruugo", color: "#E91E63" },
  { name: "Wish", color: "#00B0FF" },
  { name: "TikTok Shop", color: "#000000" },
  { name: "GumTree", color: "#72B01D" },
  { name: "Facebook Shops", color: "#1877F2" },
  { name: "Instagram Shop", color: "#E4405F" },
  { name: "WooCommerce", color: "#96588A" },
];

const PARTNERS_MENU = [
  { name: "OnePiece Wholesaler", icon: Layers, desc: "Single-unit wholesale access" },
  { name: "Bulk Wholesaler", icon: BoxIcon, desc: "High-volume bulk pricing" },
  { name: "Franchise", icon: Building2, desc: "Own an eDropShip franchise" },
  { name: "Whitelabel", icon: CheckCheck, desc: "Brand the platform as yours" },
  { name: "Investment", icon: Wallet, desc: "Invest & earn passive income" },
  { name: "Smartshop", icon: Bookmark, desc: "Smart curated storefronts" },
];

const RESOURCES_MENU = [
  { name: "Platform Tour", icon: Compass, desc: "Take a full guided tour" },
  { name: "eDropship Academy", icon: GraduationCap, desc: "Master dropshipping" },
  { name: "eDropship Guru", icon: HelpCircle, desc: "Expert consultations" },
  { name: "Mobile App", icon: Smartphone, desc: "iOS & Android apps" },
  { name: "Webinars", icon: Video, desc: "Live training sessions" },
  { name: "Blogs", icon: FileText, desc: "Strategies & insights" },
  { name: "Hot Products", icon: Flame, desc: "Trending right now" },
  { name: "Contact", icon: MessageCircle, desc: "Talk to our team" },
  { name: "Free Tools", icon: Wrench, desc: "Calculators & helpers" },
  { name: "About Us", icon: Info, desc: "Our story & mission" },
];

export default function MegaPanel({ type, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[90vw] max-w-5xl"
      onMouseLeave={onClose}
    >
      <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl p-6 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,77,109,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(114,9,183,0.15), transparent 50%)",
          }}
        />
        <div className="relative">
          {type === "products" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
              {PRODUCTS_MENU.map((item, i) => (
                <motion.a
                  key={item.name}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.8} />
                  </div>
                  <span className="text-sm text-white/80 group-hover:text-white">{item.name}</span>
                </motion.a>
              ))}
            </div>
          )}

          {type === "integrations" && (
            <>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">— Most popular selling channels</div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {INTEGRATIONS_MENU.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white"
                      style={{ background: item.color }}
                    >
                      {item.name[0]}
                    </div>
                    <span className="text-sm text-white/80 group-hover:text-white">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </>
          )}

          {type === "partners" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {PARTNERS_MENU.map((item, i) => (
                <motion.a
                  key={item.name}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7209b7]/30 to-[#560bad]/10 border border-[#7209b7]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5 text-[#a78bfa]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium mb-0.5">{item.name}</div>
                    <div className="text-xs text-white/50">{item.desc}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>
          )}

          {type === "resources" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {RESOURCES_MENU.map((item, i) => (
                <motion.a
                  key={item.name}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff4d6d]/20 to-[#c9184a]/10 border border-[#ff4d6d]/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#ff4d6d]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium">{item.name}</div>
                    <div className="text-[11px] text-white/50 truncate">{item.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}