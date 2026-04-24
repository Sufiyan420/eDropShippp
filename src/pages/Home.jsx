import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap, HeadphonesIcon, BarChart2, Layers, Download,
  Star, ChevronRight, ArrowRight, Check, Package,
  ShoppingBag, Globe, TrendingUp, Shield, Clock,
  Users, Award, Play, Sparkles, ChevronDown,
  Cpu, Gem, Heart, Home as HomeIcon, Shirt,
  Baby, Dumbbell, Flower2
} from "lucide-react";

/* ── helpers ── */
const PINK = "#ff4d6d";
const PURPLE = "#7209b7";
const grad = `linear-gradient(135deg, ${PINK}, ${PURPLE})`;

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * 6;
    const ry = ((x - cx) / cx) * -6;
    ref.current.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  const [word, setWord] = useState(0);
  const words = ["Automated.", "Profitable.", "Scalable.", "Effortless."];

  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-10 pb-20"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(114,9,183,0.25), transparent)" }}>
      {/* Animated bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              width: `${200 + i * 80}px`, height: `${200 + i * 80}px`,
              background: i % 2 === 0 ? PURPLE : PINK,
              left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              UK's No. 1 Dropshipping Marketplace
              <span className="w-px h-3 bg-white/20" />
              <span className="text-pink-400 font-semibold">LIVE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-3"
            >
              <span className="text-white">The</span>{" "}
              <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Automated
              </span>
              <br />
              <span className="text-white">Dropshipping</span>
              <br />
              <span className="text-white">Platform That's </span>
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {words[word]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/50 mb-8 leading-relaxed max-w-lg"
            >
              Become a Seller or Supplier Today! Join the UK's Only Fully Automated Dropshipping Platform and Take Your Business to the Next Level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg"
                style={{ background: "linear-gradient(135deg, #ff4d6d, #c9184a)", boxShadow: "0 8px 30px rgba(255,77,109,0.3)" }}>
                Become a Seller <ArrowRight size={16} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg"
                style={{ background: "linear-gradient(135deg, #7209b7, #3a0ca3)", boxShadow: "0 8px 30px rgba(114,9,183,0.3)" }}>
                Become a Supplier <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Stats ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {[
                { val: "12K+", label: "Active Sellers" },
                { val: "500+", label: "Suppliers" },
                { val: "100K+", label: "Products" },
                { val: "99.9%", label: "Uptime" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/35">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
                <div className="px-5 py-4 border-b border-white/5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {["#ff5f56", "#febc2e", "#28c840"].map((c) => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-xs text-white/30 ml-2">eDropShip Dashboard</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {/* Revenue chart bars */}
                  <div>
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-xs text-white/40">Revenue</span>
                      <span className="text-sm font-bold text-white">£48,291 <span className="text-green-400 text-xs">+12.4%</span></span>
                    </div>
                    <div className="flex items-end gap-1.5 h-20">
                      {[40, 65, 45, 80, 60, 90, 55, 75, 85, 70, 95, 88].map((h, i) => (
                        <motion.div key={i}
                          className="flex-1 rounded-sm"
                          style={{ background: i === 10 ? grad : "rgba(255,255,255,0.08)" }}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Orders", val: "1,284", color: PINK },
                      { label: "Products", val: "4,829", color: PURPLE },
                      { label: "Suppliers", val: "127", color: "#06d6a0" },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="rounded-xl p-3" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                        <div className="text-lg font-bold text-white">{val}</div>
                        <div className="text-xs" style={{ color }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Recent orders */}
                  <div>
                    <p className="text-xs text-white/30 mb-2">Recent Orders</p>
                    {[
                      { id: "#4821", product: "Nike Air Force 1", amount: "£89.99", status: "Shipped" },
                      { id: "#4820", product: "Samsung Earbuds", amount: "£44.99", status: "Processing" },
                      { id: "#4819", product: "Gold Bracelet", amount: "£129.99", status: "Delivered" },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center gap-3 py-1.5">
                        <span className="text-xs text-white/30 w-10">{order.id}</span>
                        <span className="text-xs text-white/60 flex-1 truncate">{order.product}</span>
                        <span className="text-xs font-semibold text-white">{order.amount}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium
                          ${order.status === "Shipped" ? "bg-blue-500/20 text-blue-400" :
                            order.status === "Processing" ? "bg-amber-500/20 text-amber-400" :
                            "bg-green-500/20 text-green-400"}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-6 rounded-xl px-4 py-2.5 border border-white/10 shadow-xl"
                style={{ background: "rgba(255,77,109,0.15)", backdropFilter: "blur(12px)" }}
              >
                <div className="text-xs text-white/50">New Order</div>
                <div className="text-sm font-bold text-white">£239.00</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-xl px-4 py-2.5 border border-white/10 shadow-xl"
                style={{ background: "rgba(114,9,183,0.15)", backdropFilter: "blur(12px)" }}
              >
                <div className="text-xs text-white/50">Auto-fulfilled</div>
                <div className="text-sm font-bold text-white">12 orders ✓</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── FEATURES BENTO ── */
function Features() {
  const features = [
    {
      icon: <HeadphonesIcon size={28} />, title: "24/7 Live Support", color: PINK,
      desc: "Expert help around the clock. Our support team is always ready to solve your problems instantly.",
      large: true,
    },
    {
      icon: <Zap size={28} />, title: "Fastest Delivery", color: "#f59e0b",
      desc: "Lightning-fast UK fulfilment. Products reach your customers in 1–3 working days.",
      large: false,
    },
    {
      icon: <Layers size={28} />, title: "Auto Fulfilment", color: PURPLE,
      desc: "Orders are automatically processed, packed, and shipped the moment they come in.",
      large: false,
    },
    {
      icon: <BarChart2 size={28} />, title: "Multi-Channel Selling", color: "#06d6a0",
      desc: "Sell on Amazon, eBay, Etsy, Shopify and 30+ platforms from one dashboard.",
      large: false,
    },
    {
      icon: <Download size={28} />, title: "Download Apps", color: "#4361ee",
      desc: "iOS and Android apps to manage your store from anywhere in the world.",
      large: false,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Exclusive Features</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Everything you need to{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              scale
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            A fully integrated platform built for dropshippers who want to grow fast without the headaches.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card */}
          <Reveal delay={0.1} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <GlassCard className="h-full rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${PINK}20`, color: PINK }}>
                  <HeadphonesIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">24/7 Live Support</h3>
                <p className="text-white/45 leading-relaxed">
                  Expert help around the clock. Our support team is always ready to solve your problems instantly. Real humans, real solutions.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold" style={{ color: PINK }}>
                Get in touch <ArrowRight size={16} />
              </div>
            </GlassCard>
          </Reveal>

          {[features[1], features[2], features[3], features[4]].map((f, i) => (
            <Reveal key={f.title} delay={0.15 + i * 0.08}>
              <GlassCard className="rounded-2xl p-6 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${f.color}20`, color: f.color }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── INTEGRATIONS MARQUEE ── */
function Integrations() {
  const platforms = [
    "Amazon", "Shopify", "eBay", "Etsy", "OnBuy", "Fruugo",
    "Wish", "TikTok Shop", "Facebook", "Walmart", "WooCommerce",
    "Magento", "BigCommerce", "Wix", "Squarespace", "InstaShop",
  ];

  const Row = ({ reverse = false }) => (
    <div className="overflow-hidden flex">
      <motion.div
        className="flex gap-4 flex-shrink-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...platforms, ...platforms].map((p, i) => (
          <div key={i}
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-white/8 text-white/50 text-sm font-medium hover:text-white hover:border-white/20 transition-all cursor-default"
            style={{ background: "rgba(255,255,255,0.03)" }}>
            {p}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Channel Integrations</span>
          <h2 className="text-4xl font-black text-white mt-3">
            Connect your{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              entire ecosystem
            </span>
          </h2>
        </Reveal>
      </div>
      <div className="space-y-4">
        <Row />
        <Row reverse />
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0a0514, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #0a0514, transparent)" }} />
    </section>
  );
}

/* ── VENDOR vs SELLER ── */
function VendorSeller() {
  const [active, setActive] = useState("seller");

  const sellerPoints = [
    "Access 100,000+ ready-to-sell products",
    "No inventory or warehousing needed",
    "Automatic order fulfilment",
    "Sell on 30+ marketplaces",
    "Real-time profit tracking",
    "Dedicated account manager",
    "Free setup & onboarding",
    "Custom branded packaging",
  ];

  const supplierPoints = [
    "Reach 12,000+ active UK sellers",
    "Zero listing fees or commissions",
    "Automated order management",
    "Inventory sync across channels",
    "Detailed analytics dashboard",
    "Protected pricing & margins",
    "Verified supplier badge",
    "Priority support & exposure",
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Choose Your Path</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            Vendor / Supplier{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              or Seller?
            </span>
          </h2>
        </Reveal>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-2xl p-1.5 border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
            {["seller", "supplier"].map((tab) => (
              <button key={tab} onClick={() => setActive(tab)}
                className="relative px-8 py-3 rounded-xl text-sm font-bold capitalize transition-all"
                style={{ color: active === tab ? "#fff" : "rgba(255,255,255,0.4)" }}
              >
                {active === tab && (
                  <motion.span layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: grad }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard className="rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: active === "seller" ? `${PINK}20` : `${PURPLE}20`, color: active === "seller" ? PINK : PURPLE }}>
                    {active === "seller" ? <ShoppingBag size={30} /> : <Package size={30} />}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">
                    {active === "seller" ? "Start Selling Today" : "Become a Supplier"}
                  </h3>
                  <p className="text-white/45 leading-relaxed mb-8">
                    {active === "seller"
                      ? "Join thousands of successful sellers using eDropShip to build profitable online businesses without holding any stock."
                      : "List your products on eDropShip and reach thousands of active UK sellers who will sell your products across 30+ channels."}
                  </p>
                  <motion.a href="#" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm"
                    style={{ background: active === "seller" ? "linear-gradient(135deg, #ff4d6d, #c9184a)" : "linear-gradient(135deg, #7209b7, #3a0ca3)" }}>
                    {active === "seller" ? "Register as Seller" : "Apply as Supplier"} <ArrowRight size={16} />
                  </motion.a>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-3">
                    {(active === "seller" ? sellerPoints : supplierPoints).map((point, i) => (
                      <motion.div key={point}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: active === "seller" ? `${PINK}25` : `${PURPLE}25` }}>
                          <Check size={11} style={{ color: active === "seller" ? PINK : PURPLE }} />
                        </div>
                        <span className="text-sm text-white/65">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── YOU NAME IT ── */
function YouNameIt() {
  const items = [
    { label: "Simple Setup", icon: <Zap size={20} />, desc: "Be live in under 15 minutes. No technical skills required." },
    { label: "Verified UK Suppliers", icon: <Shield size={20} />, desc: "All suppliers are manually vetted and UK-based." },
    { label: "Easy-to-use Interface", icon: <Sparkles size={20} />, desc: "A dashboard so simple, your nan could use it." },
    { label: "Automated Processing", icon: <Layers size={20} />, desc: "From order to fulfilment — fully on autopilot." },
    { label: "Easy Access", icon: <Globe size={20} />, desc: "Access from any device, anywhere in the world." },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-24" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Platform Highlights</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            You Name It,{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We Got It
            </span>
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* List */}
          <div className="space-y-2">
            {items.map((item, i) => (
              <button key={item.label} onClick={() => setSelected(i)}
                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all flex items-center gap-4 ${
                  selected === i
                    ? "border-pink-500/30 bg-pink-500/5"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/5"
                }`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: selected === i ? `${PINK}20` : "rgba(255,255,255,0.05)", color: selected === i ? PINK : "rgba(255,255,255,0.4)" }}>
                  {item.icon}
                </div>
                <span className={`font-semibold text-base ${selected === i ? "text-white" : "text-white/50"}`}>
                  {item.label}
                </span>
                <ChevronRight size={16} className={`ml-auto transition-colors ${selected === i ? "text-pink-400" : "text-white/20"}`} />
              </button>
            ))}
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard className="rounded-2xl p-10 h-full flex flex-col justify-center min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${PINK}20`, color: PINK }}>
                  {items[selected].icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{items[selected].label}</h3>
                <p className="text-white/50 leading-relaxed text-lg">{items[selected].desc}</p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ── STATS ── */
function Stats() {
  const stats = [
    { val: "35+", label: "App Downloads (K)", sub: "iOS & Android combined" },
    { val: "79+", label: "Projects Complete", sub: "Platform milestones" },
    { val: "12K+", label: "Active Sellers", sub: "Growing every day" },
    { val: "23K+", label: "Happy Clients", sub: "And counting" },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ val, label, sub }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <GlassCard className="rounded-2xl p-7 text-center">
                <div className="text-5xl font-black mb-2"
                  style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {val}
                </div>
                <div className="text-white/80 font-semibold text-base mb-1">{label}</div>
                <div className="text-white/35 text-xs">{sub}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
function Testimonials() {
  const reviews = [
    {
      name: "Sarah Mitchell", role: "Shopify Seller, London",
      avatar: "SM", color: PINK,
      text: "eDropShip completely transformed my business. I went from £0 to £8,000/month in just 3 months. The automation is incredible.",
      stars: 5,
    },
    {
      name: "James Patel", role: "Amazon FBA, Manchester",
      avatar: "JP", color: PURPLE,
      text: "Finally a dropshipping platform that actually works in the UK. Supplier quality is top-notch and support responds in minutes.",
      stars: 5,
    },
    {
      name: "Emma Thompson", role: "Multi-Channel Seller, Leeds",
      avatar: "ET", color: "#06d6a0",
      text: "The multi-channel integration saved me 15 hours a week. Now I focus on growing, not managing. Best investment ever.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Social Proof</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            What Our Clients{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Say About Us
            </span>
          </h2>
          <p className="text-white/40 mt-3 text-sm">Trusted by 23,684+ sellers across the UK</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <GlassCard className="rounded-2xl p-7 flex flex-col gap-5 h-full">
                <div className="flex gap-1">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} size={14} fill={r.color} stroke="none" />
                  ))}
                </div>
                <p className="text-white/65 leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `${r.color}30`, border: `2px solid ${r.color}50`, color: r.color }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-white/35">{r.role}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING ── */
function Pricing() {
  const plans = [
    {
      name: "Starter", price: "Free", period: "",
      color: "#4361ee",
      features: ["Up to 50 products", "3 marketplace integrations", "Basic analytics", "Email support", "Mobile app access"],
      cta: "Get Started Free",
    },
    {
      name: "Pro", price: "£49", period: "/mo",
      color: PINK,
      popular: true,
      features: ["Unlimited products", "All integrations", "Advanced analytics", "24/7 live support", "Custom branding", "Priority fulfilment"],
      cta: "Start Pro Trial",
    },
    {
      name: "Enterprise", price: "£149", period: "/mo",
      color: PURPLE,
      features: ["Everything in Pro", "Dedicated account manager", "White-label option", "API access", "Custom integrations", "SLA guarantee"],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="py-24" id="pricing">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3">
            Choose the{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Best Package
            </span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto">No hidden fees. Cancel anytime. Start free today.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <GlassCard
                className={`rounded-2xl p-8 flex flex-col gap-6 h-full relative ${plan.popular ? "border-pink-500/30" : ""}`}
                style={plan.popular ? { border: "1px solid rgba(255,77,109,0.3)", background: "rgba(255,77,109,0.04)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: grad }}>
                    Most Popular
                  </div>
                )}
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: plan.color }}>{plan.name}</div>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-white/40 text-lg mb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                      <Check size={14} style={{ color: plan.color }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="block text-center py-3.5 rounded-xl font-bold text-sm text-white transition-all"
                  style={{
                    background: plan.popular ? grad : `${plan.color}20`,
                    border: plan.popular ? "none" : `1px solid ${plan.color}40`,
                    color: plan.popular ? "#fff" : plan.color,
                  }}>
                  {plan.cta}
                </motion.a>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Get In Touch</span>
            <h2 className="text-4xl font-black text-white mt-3 mb-6">
              Ready to{" "}
              <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                get started?
              </span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8">
              Our team of dropshipping experts is ready to help you launch and scale. Reach out today.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Globe size={16} />, label: "Manchester, United Kingdom" },
                { icon: <Heart size={16} />, label: "support@edropship.com" },
                { icon: <Clock size={16} />, label: "+44 7958 557597" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-white/50">
                  <span style={{ color: PINK }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard className="rounded-2xl p-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((p) => (
                    <input key={p} type="text" placeholder={p}
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/25 text-sm focus:outline-none focus:border-pink-500/40 transition-all" />
                  ))}
                </div>
                <input type="email" placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/25 text-sm focus:outline-none focus:border-pink-500/40 transition-all" />
                <textarea placeholder="Your message..." rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/25 text-sm focus:outline-none focus:border-pink-500/40 resize-none transition-all" />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white"
                  style={{ background: grad }}>
                  Send Message <ArrowRight size={14} className="inline ml-1" />
                </motion.button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── CTA BANNER ── */
function CTABanner() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,77,109,0.15), rgba(114,9,183,0.2))", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              {[...Array(4)].map((_, i) => (
                <motion.div key={i}
                  className="absolute rounded-full opacity-20 blur-3xl"
                  style={{ width: 200, height: 200, background: i % 2 === 0 ? PINK : PURPLE, left: `${i * 25}%`, top: "50%", transform: "translateY(-50%)" }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                />
              ))}
            </div>
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Start your journey{" "}
                <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  today
                </span>
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">Join 12,000+ UK sellers already making money with eDropShip. Zero risk, infinite potential.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl text-white font-bold"
                  style={{ background: grad, boxShadow: "0 8px 40px rgba(255,77,109,0.3)" }}>
                  Start for Free — No Credit Card
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl text-white/80 font-bold border border-white/15 flex items-center gap-2 hover:bg-white/5 transition-all">
                  <Play size={16} /> Watch Demo
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── MAIN EXPORT ── */
export default function Home() {
  return (
    <main style={{ background: "#0a0514" }}>
      <Hero />
      <Features />
      <Integrations />
      <VendorSeller />
      <YouNameIt />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Contact />
    </main>
  );
}