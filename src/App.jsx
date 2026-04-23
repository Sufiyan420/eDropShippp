import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import {
  Headphones, TrendingUp, Share2, Download, Check, ArrowRight,
  ArrowUpRight, Package, Store, Globe, ShoppingBag, Shield,
  Users, Star, Search, ShoppingCart, User, ChevronDown, Menu, X,
  Phone, Mail, MapPin, Baby, Laptop, Shirt, Sparkles, Gem,
  FileText, Car, Book, Hammer, UtensilsCrossed, Home, Dumbbell,
  Dog, Layers, Box, Building2, CheckCheck, Wallet, Bookmark,
  Compass, GraduationCap, HelpCircle, Smartphone, Video, Flame,
  MessageCircle, Wrench, Info, ShieldCheck, Zap, Play,
  Quote, ChevronRight, Apple,
} from "lucide-react";

/* ---- Social icon fallbacks (not in all lucide versions) ---- */
const FacebookIcon = (props) => <Share2 {...props} />;
const InstagramIcon = (props) => <Share2 {...props} />;
const TwitterIcon = (props) => <Share2 {...props} />;
const YoutubeIcon = (props) => <Video {...props} />;

/* ---- Aliases ---- */
const HomeIcon = Home;
const BoxIcon = Box;

/* ---- Logo: simple inline SVG data URI ---- */
const LOGO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44">
    <text y="32" font-family="Inter,Arial,sans-serif" font-size="26" font-weight="700" fill="white" letter-spacing="-1">eDropShip</text>
  </svg>`
)}`;

/* ==================================================== */
/* Reveal animation wrapper                             */
/* ==================================================== */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ==================================================== */
/* Magnetic button                                      */
/* ==================================================== */
const MagneticBtn = ({ children, className = "", variant = "primary", onClick, as = "button", href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };

  const onLeave = () => { x.set(0); y.set(0); };

  const base = "relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 select-none overflow-hidden";

  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-[#ff4d6d] to-[#c9184a] shadow-[0_10px_40px_-10px_rgba(255,77,109,0.6)] hover:shadow-[0_15px_50px_-5px_rgba(255,77,109,0.9)]"
      : variant === "purple"
      ? "text-white bg-gradient-to-r from-[#7209b7] to-[#560bad] shadow-[0_10px_40px_-10px_rgba(114,9,183,0.6)] hover:shadow-[0_15px_50px_-5px_rgba(114,9,183,0.9)]"
      : "text-white/85 border border-white/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/30";

  const Cmp = as === "a" ? motion.a : motion.button;

  return (
    <Cmp
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative flex items-center gap-2">{children}</span>
    </Cmp>
  );
};

/* ==================================================== */
/* Announcement bar                                     */
/* ==================================================== */
const AnnouncementBar = () => (
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

/* ==================================================== */
/* MEGA MENU data                                       */
/* ==================================================== */
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

/* ==================================================== */
/* Mega menu panel                                      */
/* ==================================================== */
const MegaPanel = ({ type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[90vw] max-w-5xl"
    onMouseLeave={onClose}
  >
    <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl p-6 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,77,109,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(114,9,183,0.15), transparent 50%)",
      }} />
      <div className="relative">
        {type === "products" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {PRODUCTS_MENU.map((item, i) => (
              <motion.a
                key={item.name} href="#"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`, border: `1px solid ${item.color}30` }}>
                  <item.icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.8} />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white transition">{item.name}</span>
              </motion.a>
            ))}
          </div>
        )}
        {type === "integrations" && (
          <>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">— Most popular selling channels</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {INTEGRATIONS_MENU.map((item, i) => (
                <motion.a key={item.name} href="#"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white"
                    style={{ background: item.color }}>{item.name[0]}</div>
                  <span className="text-sm text-white/80 group-hover:text-white">{item.name}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-white/50">30+ integrations available</span>
              <a href="#" className="text-xs text-[#ff4d6d] hover:text-[#ff7a8f] flex items-center gap-1 transition">
                View all <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </>
        )}
        {type === "partners" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {PARTNERS_MENU.map((item, i) => (
              <motion.a key={item.name} href="#"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7209b7]/30 to-[#560bad]/10 border border-[#7209b7]/30 flex items-center justify-center shrink-0 transition-all group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-[#a78bfa]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-sm text-white font-medium mb-0.5">{item.name}</div>
                  <div className="text-xs text-white/50">{item.desc}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white ml-auto transition-all" />
              </motion.a>
            ))}
          </div>
        )}
        {type === "resources" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {RESOURCES_MENU.map((item, i) => (
              <motion.a key={item.name} href="#"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
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

/* ==================================================== */
/* Navigation                                           */
/* ==================================================== */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Products", key: "products" },
    { label: "Integrations", key: "integrations" },
    { label: "Partners", key: "partners" },
    { label: "Pricing", key: null, href: "#pricing" },
    { label: "Resources", key: "resources" },
  ];

  return (
    <>
      <AnnouncementBar />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img src={LOGO} alt="eDropShip" className="h-9 w-auto object-contain" />
          </a>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 focus-within:border-[#ff4d6d]/50 transition-all">
            <Search className="w-4 h-4 text-white/40" />
            <input type="text" placeholder="Search products..."
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-white/40" />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/40">⌘K</kbd>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => item.key && setOpenMenu(item.key)}>
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm text-white/75 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <button
                    onMouseEnter={() => setOpenMenu(item.key)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors ${openMenu === item.key ? "text-white" : "text-white/75 hover:text-white"}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === item.key ? "rotate-180" : ""}`} />
                  </button>
                )}
                <AnimatePresence>
                  {openMenu === item.key && item.key && (
                    <MegaPanel type={item.key} onClose={() => setOpenMenu(null)} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] items-center justify-center text-white hover:scale-105 transition-transform">
              <User className="w-4 h-4" />
            </button>
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-[#7209b7] to-[#560bad] items-center justify-center text-white hover:scale-105 transition-transform">
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0f]/95 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img src={LOGO} alt="eDropShip" className="h-8" />
              <button onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href || "#"} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-white/5 text-white text-lg">
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex gap-3">
                <MagneticBtn variant="primary" className="flex-1 justify-center">Sign in</MagneticBtn>
                <MagneticBtn variant="purple" className="flex-1 justify-center">Register</MagneticBtn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ==================================================== */
/* Hero                                                 */
/* ==================================================== */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-16 pb-24 overflow-hidden flex items-center">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-[#ff4d6d]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#7209b7]/25 blur-[130px]" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-[#3a86ff]/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }} />
      </div>

      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              top: `${15 + i * 10}%`, left: `${10 + (i * 13) % 80}%`,
              background: i % 2 ? "#ff4d6d" : "#a78bfa",
              boxShadow: `0 0 20px ${i % 2 ? "#ff4d6d" : "#a78bfa"}`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs text-white/80 mb-7">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-emerald-300">LIVE</span>
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>The UK's No. 1 automated marketplace</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.04em] leading-[1] text-white mb-6">
            The Automated{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ff4d6d] via-[#c9184a] to-[#ff4d6d] bg-clip-text text-transparent">
                UK's No 1
              </span>
            </span>
            <br />
            DropShipping{" "}
            <span className="italic font-light bg-gradient-to-r from-[#a78bfa] to-[#7209b7] bg-clip-text text-transparent"
              style={{ fontFamily: "'Times New Roman', serif" }}>
              Marketplace.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-white/60 max-w-xl mb-4 leading-relaxed">
            <span className="text-white font-medium">Become a Seller or Supplier Today!</span>
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-base text-white/55 max-w-xl mb-10 leading-relaxed">
            Join the UK's Only Fully Automated Dropshipping Platform and take your business to the next level.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-12">
            <MagneticBtn variant="primary">Become Seller <ArrowRight className="w-4 h-4" /></MagneticBtn>
            <MagneticBtn variant="purple">Become Supplier <ArrowRight className="w-4 h-4" /></MagneticBtn>
          </motion.div>

          {/* Trust indicators */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#ff4d6d", "#7209b7", "#3a86ff", "#06d6a0"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-[10px] text-white font-semibold"
                  style={{ background: c }}>
                  {["S", "M", "J", "R"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400" fill="currentColor" />
                ))}
                <span className="text-xs text-white font-medium ml-1">4.9</span>
              </div>
              <div className="text-xs text-white/50">From 23,684+ happy clients</div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }} className="lg:col-span-6 relative">
          <div className="relative">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-5 shadow-[0_40px_100px_-20px_rgba(255,77,109,0.3)]">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <div className="ml-3 text-[10px] text-white/40 font-mono">dashboard.edropship.com</div>
              </div>

              <div className="flex gap-3 mb-4">
                {[
                  { label: "Sales", value: "£48.2K", change: "+12.4%", color: "#ff4d6d" },
                  { label: "Orders", value: "1,284", change: "+8.2%", color: "#7209b7" },
                  { label: "AOV", value: "£37.5", change: "+3.1%", color: "#3a86ff" },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 rounded-lg p-3"
                    style={{ background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}05)`, border: `1px solid ${stat.color}30` }}>
                    <div className="text-[10px] text-white/50 mb-1">{stat.label}</div>
                    <div className="text-lg font-semibold text-white">{stat.value}</div>
                    <div className="text-[10px] text-emerald-400">{stat.change}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-white/[0.03] border border-white/5 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-white/70 font-medium">Analytics</div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-white/50">
                      <div className="w-2 h-2 rounded-full bg-[#ff4d6d]" /> Revenue
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-white/50">
                      <div className="w-2 h-2 rounded-full bg-[#7209b7]" /> Orders
                    </div>
                  </div>
                </div>
                <svg viewBox="0 0 300 100" className="w-full h-28">
                  <defs>
                    <linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    d="M0 70 L40 55 L80 60 L120 40 L160 45 L200 25 L240 30 L300 15"
                    fill="none" stroke="#ff4d6d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0 70 L40 55 L80 60 L120 40 L160 45 L200 25 L240 30 L300 15 L300 100 L0 100 Z"
                    fill="url(#hg1)" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.3 }}
                    d="M0 85 L40 75 L80 70 L120 65 L160 58 L200 50 L240 55 L300 40"
                    fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 sm:-left-8 top-20 rounded-xl border border-white/10 bg-[#0f0f15]/95 backdrop-blur-xl p-3 shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-white/50">New order received</div>
                  <div className="text-sm text-white font-medium">£127.40</div>
                </div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 sm:-right-8 bottom-16 rounded-xl border border-white/10 bg-[#0f0f15]/95 backdrop-blur-xl p-3 shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff4d6d]/30 to-[#ff4d6d]/10 flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#ff4d6d]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/50">Auto-shipped today</div>
                  <div className="text-sm text-white font-medium">342 orders</div>
                </div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-3 right-4 rounded-full border border-[#ff4d6d]/40 bg-gradient-to-r from-[#ff4d6d]/20 to-[#7209b7]/20 backdrop-blur-xl px-3 py-1.5">
              <div className="flex items-center gap-1.5 text-[10px] text-white font-medium">
                <Sparkles className="w-3 h-3 text-amber-300" /> AI-Powered
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

/* ==================================================== */
/* Features                                             */
/* ==================================================== */
const Features = () => {
  const features = [
    { icon: Headphones, title: "24/7 Live Support", desc: "Reach out via live chat, text, or email. Our representatives are available round the clock to address your queries.", color: "#ff4d6d", gradient: "from-[#ff4d6d] to-[#c9184a]" },
    { icon: TrendingUp, title: "Progress Reports", desc: "Check weekly, monthly, and yearly progress of your online store on our dashboard — manageable and functional.", color: "#7209b7", gradient: "from-[#7209b7] to-[#560bad]" },
    { icon: Share2, title: "Multi Channel Selling", desc: "Integrates with Amazon, Shopify, eBay, Etsy, OnBuy, Fruugo, Wish, GumTree, fb Shops, InstaShop & more.", color: "#3a86ff", gradient: "from-[#3a86ff] to-[#1e4d9e]" },
    { icon: Download, title: "Download Apps", desc: "Smart mobile applications for our customers to shop and sell anywhere around the world — iOS & Android.", color: "#06d6a0", gradient: "from-[#06d6a0] to-[#04946e]" },
  ];

  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#ff4d6d]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d]">How can help you</span>
              <span className="w-8 h-px bg-[#ff4d6d]" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-[-0.03em]">
              Check Out Our{" "}
              <span className="italic font-light bg-gradient-to-r from-[#ff4d6d] to-[#7209b7] bg-clip-text text-transparent"
                style={{ fontFamily: "'Times New Roman', serif" }}>
                Exclusive Features
              </span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-2xl p-7 border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${f.color}20, transparent 60%)` }} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  style={{ boxShadow: `0 15px 40px -10px ${f.color}70` }}>
                  <f.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{f.desc}</p>
                <div className="flex items-center gap-2 text-xs text-white/50 group-hover:text-white transition">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==================================================== */
/* Integrations marquee                                 */
/* ==================================================== */
const Integrations = () => {
  const row1 = ["Amazon", "Shopify", "eBay", "Etsy", "OnBuy", "Fruugo", "Wish", "TikTok Shop"];
  const row2 = ["Facebook Shops", "InstaShop", "GumTree", "WooCommerce", "Walmart", "BigCommerce", "Wix", "Magento"];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <Reveal>
        <div className="text-center mb-12 px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d] mb-4">— Most popular selling channels</div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-6">
            We Offer Channel{" "}
            <span className="italic font-light bg-gradient-to-r from-[#7209b7] to-[#a78bfa] bg-clip-text text-transparent"
              style={{ fontFamily: "'Times New Roman', serif" }}>
              Integrations Across
            </span>
          </h2>
          <MagneticBtn variant="ghost">View All Integrations <ArrowRight className="w-4 h-4" /></MagneticBtn>
        </div>
      </Reveal>
      <div className="space-y-4">
        {[row1, row2].map((row, ri) => (
          <div key={ri} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
            <motion.div
              animate={{ x: ri === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: ri === 0 ? 30 : 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...row, ...row, ...row].map((logo, i) => (
                <div key={i} className={`flex items-center gap-3 px-7 py-4 rounded-2xl border shrink-0 transition-all ${
                  ri === 0
                    ? "border-white/[0.06] bg-white/[0.02] hover:border-[#ff4d6d]/30"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-[#7209b7]/30"
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    ri === 0 ? "bg-gradient-to-br from-[#ff4d6d]/20 to-[#c9184a]/10" : "bg-gradient-to-br from-[#7209b7]/20 to-[#560bad]/10"
                  }`}>
                    {ri === 0
                      ? <ShoppingBag className="w-4 h-4 text-[#ff4d6d]" />
                      : <Globe className="w-4 h-4 text-[#a78bfa]" />}
                  </div>
                  <span className="text-white/80 font-medium">{logo}</span>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ==================================================== */
/* Business Scale                                       */
/* ==================================================== */
const BusinessScale = () => (
  <section className="py-28 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="relative aspect-square max-w-md mx-auto">
          {[1, 0.75, 0.5, 0.25].map((scale, i) => (
            <motion.div key={i} animate={{ rotate: i % 2 ? 360 : -360 }}
              transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border"
              style={{ transform: `scale(${scale})`, borderColor: `rgba(255,77,109,${0.05 + i * 0.05})` }} />
          ))}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div key={i} animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full"
                    style={{ background: i % 2 ? "#ff4d6d" : "#a78bfa", boxShadow: `0 0 20px ${i % 2 ? "#ff4d6d" : "#a78bfa"}` }} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#ff4d6d] via-[#c9184a] to-[#7209b7] flex items-center justify-center shadow-[0_0_100px_-10px_rgba(255,77,109,0.8)]">
              <span className="text-white font-bold text-sm tracking-tight">eDropShip</span>
            </motion.div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[10px] uppercase tracking-[0.3em] text-[#ff4d6d] mb-5">
            — Business Scale
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-tight mb-6">
            See Your Business{" "}
            <span className="italic font-light bg-gradient-to-r from-[#ff4d6d] to-[#7209b7] bg-clip-text text-transparent"
              style={{ fontFamily: "'Times New Roman', serif" }}>
              Scale with eDropShip
            </span>
          </h2>
          <p className="text-white/55 leading-relaxed mb-5 text-[15px]">
            Whether you are a supplier, vendor, or seller, dropship via eDropShip and see your business skyrocket.
          </p>
          <p className="text-white/55 leading-relaxed mb-8 text-[15px]">
            We enable you to take control of your business and let it scale by dropshipping. We empower you with all the requisite tools from online store integration, access provision to suppliers, and automated payments, shipping, and orders.
          </p>
          <MagneticBtn variant="primary">Learn more <ArrowUpRight className="w-4 h-4" /></MagneticBtn>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==================================================== */
/* Inventory Management                                 */
/* ==================================================== */
const InventoryManagement = () => (
  <section className="py-28 px-6 relative">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <Reveal delay={0.1}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7209b7]/10 border border-[#7209b7]/20 text-[10px] uppercase tracking-[0.3em] text-[#a78bfa] mb-5">
            — Inventory detail
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-tight mb-6">
            Manage your Orders &{" "}
            <span className="italic font-light bg-gradient-to-r from-[#7209b7] to-[#a78bfa] bg-clip-text text-transparent"
              style={{ fontFamily: "'Times New Roman', serif" }}>
              Inventory Without Fuss
            </span>
          </h2>
          <p className="text-white/55 leading-relaxed mb-8 text-[15px]">
            Whether you are a seller or supplier, keep track of your orders and manage your inventory without much effort through our automated panel.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[{ v: "10M+", l: "SKUs tracked" }, { v: "99.9%", l: "Uptime" }, { v: "24/7", l: "Sync active" }].map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-semibold text-white mb-1 tracking-tight">{s.v}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
          <MagneticBtn variant="purple">Explore dashboard <ArrowUpRight className="w-4 h-4" /></MagneticBtn>
        </div>
      </Reveal>
      <Reveal>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 shadow-[0_40px_100px_-20px_rgba(114,9,183,0.3)]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-xs text-white/50 mb-1">Inventory overview</div>
              <div className="text-2xl font-semibold text-white">12,486 items</div>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400">All synced</div>
          </div>
          <div className="space-y-3">
            {[
              { name: "Wireless Headphones", sku: "WH-4821", stock: 142, price: "£79", color: "#ff4d6d" },
              { name: "Ceramic Coffee Mug", sku: "CM-2094", stock: 486, price: "£12", color: "#7209b7" },
              { name: "LED Desk Lamp", sku: "LL-7183", stock: 87, price: "£45", color: "#3a86ff" },
              { name: "Yoga Mat Premium", sku: "YM-3341", stock: 234, price: "£29", color: "#06d6a0" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                  <Package className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium truncate">{item.name}</div>
                  <div className="text-[10px] text-white/40 font-mono">{item.sku}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white font-medium">{item.price}</div>
                  <div className="text-[10px] text-white/50">{item.stock} in stock</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  </section>
);

/* ==================================================== */
/* Vendor / Seller                                      */
/* ==================================================== */
const VendorSeller = () => (
  <section id="signup" className="py-28 px-6 relative">
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Vendor card */}
      <Reveal>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff4d6d]/5 via-white/[0.02] to-transparent backdrop-blur-xl p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#ff4d6d]/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4d6d]/15 border border-[#ff4d6d]/30 text-[10px] uppercase tracking-[0.3em] text-[#ff4d6d] mb-5">
                — Vendor / Supplier
              </div>
              <h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-6">
                Sign up as a{" "}
                <span className="italic font-light text-[#ff4d6d]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  Vendor/Supplier
                </span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Enhance your clientele through eDropShip's wide customer base. Find potential customers to expand the market for your products.
              </p>
              <div className="space-y-3 mb-8">
                {["Accelerated order management", "Secured and automated payments", "Synchronized inventory"].map((p, i) => (
                  <motion.div key={p} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff4d6d]/20 border border-[#ff4d6d]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#ff4d6d]" strokeWidth={3} />
                    </div>
                    <span className="text-white/85">{p}</span>
                  </motion.div>
                ))}
              </div>
              <MagneticBtn variant="primary">Learn more <ArrowUpRight className="w-4 h-4" /></MagneticBtn>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Store, val: "12K+", label: "Active sellers" },
                { icon: Globe, val: "142", label: "Countries", mt: "mt-6" },
                { icon: Package, val: "3.2M", label: "Orders shipped", mt: "-mt-2" },
                { icon: ShieldCheck, val: "98%", label: "On-time rate", mt: "mt-4" },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className={`p-5 rounded-2xl bg-white/[0.04] border border-white/10 ${s.mt || ""}`}>
                  <s.icon className="w-8 h-8 text-[#ff4d6d] mb-3" strokeWidth={1.5} />
                  <div className="text-3xl font-semibold text-white mb-1 tracking-tight">{s.val}</div>
                  <div className="text-xs text-white/50">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Seller card */}
      <Reveal>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#7209b7]/5 via-white/[0.02] to-transparent backdrop-blur-xl p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#7209b7]/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7209b7]/15 border border-[#7209b7]/30 text-[10px] uppercase tracking-[0.3em] text-[#a78bfa] mb-5">
                — Selling online
              </div>
              <h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-6">
                Sign up as a{" "}
                <span className="italic font-light text-[#a78bfa]" style={{ fontFamily: "'Times New Roman', serif" }}>Seller</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Minimize the trouble and eliminate the worry of managing inventory and focus on attaining more customers. Automate the entire process to reduce cost and effort through our portal.
              </p>
              <div className="space-y-3 mb-8">
                {["30+ integration channels to optimize selling", "Only 10% commission with zero risk", "Automated invoicing"].map((p, i) => (
                  <motion.div key={p} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#7209b7]/20 border border-[#7209b7]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#a78bfa]" strokeWidth={3} />
                    </div>
                    <span className="text-white/85">{p}</span>
                  </motion.div>
                ))}
              </div>
              <MagneticBtn variant="purple">Learn more <ArrowUpRight className="w-4 h-4" /></MagneticBtn>
            </div>
            <div className="md:order-1 grid grid-cols-2 gap-4">
              {[
                { icon: Zap, val: "<10", label: "Min. setup", mt: "mt-4" },
                { icon: Wallet, val: "10%", label: "Commission" },
                { icon: Share2, val: "30+", label: "Channels", mt: "mt-6" },
                { icon: Sparkles, val: "£0", label: "Startup cost", mt: "-mt-2" },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className={`p-5 rounded-2xl bg-white/[0.04] border border-white/10 ${s.mt || ""}`}>
                  <s.icon className="w-8 h-8 text-[#a78bfa] mb-3" strokeWidth={1.5} />
                  <div className="text-3xl font-semibold text-white mb-1 tracking-tight">{s.val}</div>
                  <div className="text-xs text-white/50">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==================================================== */
/* Pricing / Approach                                   */
/* ==================================================== */
const Pricing = () => {
  const [selected, setSelected] = useState(0);
  const points = ["Simple Setup", "Verified UK Suppliers", "Easy-to-use Interface", "Automated Processing", "Easy Access"];
  const descriptions = [
    "Our streamlined onboarding takes less than 10 minutes. Pick a plan, set up your store, and start selling.",
    "Our wide base of suppliers go through a vetting process to ensure high-quality products with fast response and delivery.",
    "Intuitive dashboard designed for beginners yet powerful enough for enterprise-scale operations.",
    "Orders, shipping, invoicing, and returns — all handled automatically by our intelligent platform.",
    "Access your store anywhere, anytime. Mobile apps, desktop dashboard, and API access included.",
  ];

  return (
    <section id="pricing" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#ff4d6d]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d]">— Our approach</span>
              <span className="w-8 h-px bg-[#ff4d6d]" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-[-0.03em] mb-5">
              You Name It,{" "}
              <span className="italic font-light bg-gradient-to-r from-[#ff4d6d] to-[#7209b7] bg-clip-text text-transparent"
                style={{ fontFamily: "'Times New Roman', serif" }}>
                We got It
              </span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
              From diversifying your sales to sourcing quality suppliers, we have a plethora of options for you.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="space-y-2">
              {points.map((p, i) => (
                <motion.button key={p} onClick={() => setSelected(i)} whileHover={{ x: 4 }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl text-left transition-all ${
                    selected === i
                      ? "bg-gradient-to-r from-[#ff4d6d]/15 to-[#7209b7]/10 border border-[#ff4d6d]/30"
                      : "bg-white/[0.02] border border-white/5 hover:border-white/15"
                  }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono ${
                      selected === i ? "bg-[#ff4d6d] text-white" : "bg-white/5 text-white/60 border border-white/10"
                    }`}>0{i + 1}</div>
                    <span className={`text-lg font-medium ${selected === i ? "text-white" : "text-white/70"}`}>{p}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all ${selected === i ? "text-[#ff4d6d] translate-x-1" : "text-white/30"}`} />
                </motion.button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="sticky top-24">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-8 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff4d6d]/20 blur-3xl" />
                <div className="relative">
                  <motion.div key={selected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <div className="text-6xl font-semibold text-white/10 mb-4 font-mono">0{selected + 1}</div>
                    <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">{points[selected]}</h3>
                    <p className="text-white/60 leading-relaxed mb-8">{descriptions[selected]}</p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[{ v: "35+", l: "Download Apps" }, { v: "79+", l: "Projects" }, { v: "23K+", l: "Happy Clients" }].map((s, i) => (
                        <div key={i}>
                          <div className="text-3xl font-semibold text-white tracking-tight">{s.v}</div>
                          <div className="text-xs text-white/50 mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <MagneticBtn variant="primary">Get started now <ArrowUpRight className="w-4 h-4" /></MagneticBtn>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ==================================================== */
/* Testimonials                                         */
/* ==================================================== */
const Testimonials = () => {
  const items = [
    { quote: "You're the best! Thank you most graciously and appreciatively! eDropShip turned my idea into a real business in weeks.", name: "Michael", role: "Store owner", date: "11/14/2025", bg: "#ff4d6d" },
    { quote: "We went from 50 orders a month to 3,000. eDropShip handled everything in the background — we just focused on marketing.", name: "Sarah Chen", role: "Founder, Lumina Home", date: "10/22/2025", bg: "#7209b7" },
    { quote: "Finally a marketplace that treats suppliers fairly. Transparent fees, real-time payouts, genuine human support.", name: "Aisha Patel", role: "Director, BrightGoods", date: "09/08/2025", bg: "#3a86ff" },
  ];

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d] mb-5">— Testimonials</div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-6">
                What Our Clients{" "}
                <span className="italic font-light bg-gradient-to-r from-[#ff4d6d] to-[#7209b7] bg-clip-text text-transparent"
                  style={{ fontFamily: "'Times New Roman', serif" }}>
                  Say About Us
                </span>
              </h2>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 mt-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff4d6d] to-[#c9184a] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white tracking-tight">23,684</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Happy Clients</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-2 space-y-4">
            {items.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div whileHover={{ x: -4 }}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-7 group">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 group-hover:text-[#ff4d6d]/40 transition" />
                  <p className="text-white/80 leading-relaxed mb-6 text-[15px] pr-10">{t.quote}</p>
                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm text-white font-semibold"
                        style={{ backgroundColor: t.bg }}>{t.name[0]}</div>
                      <div>
                        <div className="text-sm text-white font-medium">{t.name}</div>
                        <div className="text-xs text-white/40">{t.role}</div>
                      </div>
                    </div>
                    <div className="text-xs text-white/40 font-mono">{t.date}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            <div className="flex items-center gap-3 justify-end pt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
              </div>
              <span className="text-sm text-white/70">4.9 on Trustpilot</span>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-white/5">
          <div className="text-center text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Trusted on every major marketplace</div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Amazon", "eBay", "Etsy", "FB Shops", "InstaShop", "Depop"].map((logo, i) => (
              <div key={i} className="text-lg font-semibold text-white/70">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================== */
/* Contact                                              */
/* ==================================================== */
const Contact = () => (
  <section id="contact" className="py-28 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#ff4d6d]/15 blur-[140px] -z-10" />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
      <Reveal>
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d] mb-5">— Send us message</div>
        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-4">Have Any Questions?</h2>
        <h3 className="text-3xl sm:text-4xl italic font-light text-white/50 mb-8" style={{ fontFamily: "'Times New Roman', serif" }}>
          Let's Start to Talk
        </h3>
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Our Location", value: "55B Derby Street, Manchester M8 8HW", color: "#ff4d6d" },
            { icon: Mail, label: "Email Address", value: "support@edropship.com", color: "#7209b7", href: "mailto:support@edropship.com" },
            { icon: Phone, label: "Urgent Call", value: "+44 7958 557597", color: "#3a86ff", href: "tel:+447958557597" },
          ].map((c, i) => (
            <motion.a key={i} href={c.href || "#"}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${c.color}20`, border: `1px solid ${c.color}40` }}>
                <c.icon className="w-5 h-5" style={{ color: c.color }} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-white font-medium truncate">{c.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition" />
            </motion.a>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name *"
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff4d6d]/60 transition" />
            <input type="tel" placeholder="Phone Number *"
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff4d6d]/60 transition" />
          </div>
          <input type="email" placeholder="Email Address *"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff4d6d]/60 transition" />
          <input type="text" placeholder="Subject *"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff4d6d]/60 transition" />
          <textarea rows={5} placeholder="Message"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#ff4d6d]/60 transition resize-none" />
          <MagneticBtn variant="primary" className="w-full justify-center">
            Send Message <ArrowRight className="w-4 h-4" />
          </MagneticBtn>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==================================================== */
/* Apps + Newsletter                                    */
/* ==================================================== */
const AppsNewsletter = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto space-y-8">
      <Reveal>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff4d6d]/10 via-[#7209b7]/5 to-[#3a86ff]/10 backdrop-blur-xl p-10 md:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,77,109,0.3), transparent 60%), radial-gradient(circle at 70% 70%, rgba(114,9,183,0.3), transparent 60%)",
          }} />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4d6d] mb-4">— Download Apps</div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em] mb-3">Get our apps very easily,</h2>
            <h3 className="text-3xl sm:text-4xl italic font-light text-white/60 mb-8" style={{ fontFamily: "'Times New Roman', serif" }}>
              we're available on store
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black/50 border border-white/15 hover:bg-black/70 transition">
                <Apple className="w-6 h-6 text-white" fill="white" />
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">Download on</div>
                  <div className="text-sm text-white font-medium">Apple Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black/50 border border-white/15 hover:bg-black/70 transition">
                <Play className="w-6 h-6 text-white" fill="white" />
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">Get it on</div>
                  <div className="text-sm text-white font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[#ff4d6d]/15 via-[#c9184a]/10 to-[#ff4d6d]/15 p-8 md:p-10 overflow-hidden">
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Subscribe Newsletters</h3>
              <p className="text-white/70 text-sm">Start your trial today! Hit us up if you need any guidance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter e-mail address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/40 transition" />
              <MagneticBtn variant="primary">Subscribe <ArrowRight className="w-4 h-4" /></MagneticBtn>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ==================================================== */
/* Footer                                               */
/* ==================================================== */
const Footer = () => {
  const cols = [
    { title: "Resources", links: ["Platform Tour", "eDropship Academy", "eDropship Guru", "Mobile App", "Blogs & Guides"] },
    { title: "Contact", links: ["About eDropship", "Contact & Support", "Help Center", "Franchise"] },
    { title: "My Account", links: ["Sign in", "Create account"] },
    { title: "Information", links: ["What is Dropshipping", "Cookies Policy", "Privacy Policy", "Terms & Conditions", "How DropShipping Works"] },
    { title: "Partner With Us", links: ["Apply for Seller", "Apply for Supplier", "Vendor Terms"] },
  ];

  const socials = [
    { icon: FacebookIcon, label: "Facebook" },
    { icon: InstagramIcon, label: "Instagram" },
    { icon: TwitterIcon, label: "Twitter" },
    { icon: YoutubeIcon, label: "Youtube" },
  ];

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-4">
            <img src={LOGO} alt="eDropShip" className="h-10 mb-5" />
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm">
              If you have any concerns or inquiries, a member of our support staff would be delighted to assist you. Feel free to contact us by phone or email.
            </p>
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Get social</div>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <a key={i} href="#" aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#ff4d6d]/50 hover:bg-[#ff4d6d]/10 transition">
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Contact Info</div>
              <a href="tel:+447958557597" className="block text-white font-medium hover:text-[#ff4d6d] transition">+44 7958 557597</a>
              <a href="mailto:support@edropship.com" className="block text-white/70 hover:text-[#ff4d6d] transition">support@edropship.com</a>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm text-white/70 hover:text-[#ff4d6d] transition">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 py-8 border-y border-white/5 mb-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Download App</div>
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 transition">
                <Apple className="w-4 h-4 text-white" fill="white" /><span className="text-xs text-white">Apple</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 transition">
                <Play className="w-4 h-4 text-white" fill="white" /><span className="text-xs text-white">Google Play</span>
              </a>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Digital Platforms and Market Places Limited</div>
            <div className="text-sm text-white/60 space-y-1">
              <div>Company Registration No: 16859804</div>
              <div>55B Derby Street, Manchester M8 8HW</div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/40">
          <div>© Copyright 2004 - 2026 Powered by eDropShip.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ==================================================== */
/* App root                                             */
/* ==================================================== */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans antialiased selection:bg-[#ff4d6d]/30 overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #ff4d6d, #7209b7); border-radius: 8px; }
      `}</style>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <BusinessScale />
        <InventoryManagement />
        <VendorSeller />
        <Pricing />
        <Testimonials />
        <Contact />
        <AppsNewsletter />
      </main>
      <Footer />
    </div>
  );
}