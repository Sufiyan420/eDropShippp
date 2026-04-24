import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShoppingCart, User, Menu, X, ChevronDown,
  Package, Zap, ShoppingBag, Heart, Cpu, Gem, Baby,
  Shirt, Dumbbell, Home, Flower2, Globe, BookOpen,
  Video, Newspaper, PhoneCall, HelpCircle, Star,
  BarChart2, Users, Briefcase, Tag, Award, Layers,
  ChevronRight, Bell
} from "lucide-react";

const PRODUCTS_MENU = [
  { label: "Adult", icon: <Users size={16} />, color: "#ff4d6d", href: "#" },
  { label: "Baby & Toddler", icon: <Baby size={16} />, color: "#f72585", href: "#" },
  { label: "Electronics", icon: <Cpu size={16} />, color: "#4361ee", href: "#" },
  { label: "Fashion & Lifestyle", icon: <Shirt size={16} />, color: "#7209b7", href: "#" },
  { label: "Health & Beauty", icon: <Heart size={16} />, color: "#e63946", href: "#" },
  { label: "Home & Garden", icon: <Home size={16} />, color: "#2a9d8f", href: "#" },
  { label: "Jewellery", icon: <Gem size={16} />, color: "#e9c46a", href: "#" },
  { label: "Pet Supplies", icon: <Star size={16} />, color: "#06d6a0", href: "#" },
  { label: "Sports & Outdoors", icon: <Dumbbell size={16} />, color: "#118ab2", href: "#" },
  { label: "Toys & Games", icon: <Package size={16} />, color: "#ff6b35", href: "#" },
  { label: "Flowers & Plants", icon: <Flower2 size={16} />, color: "#52b788", href: "#" },
  { label: "Food & Drink", icon: <ShoppingBag size={16} />, color: "#e76f51", href: "#" },
];

const INTEGRATIONS_MENU = [
  { label: "Amazon", color: "#ff9900", href: "#" },
  { label: "Shopify", color: "#96bf48", href: "#" },
  { label: "eBay", color: "#e53238", href: "#" },
  { label: "Etsy", color: "#f56400", href: "#" },
  { label: "OnBuy", color: "#0065bd", href: "#" },
  { label: "Fruugo", color: "#e00025", href: "#" },
  { label: "Wish", color: "#2fb7ec", href: "#" },
  { label: "TikTok Shop", color: "#010101", href: "#" },
  { label: "Facebook Shops", color: "#1877f2", href: "#" },
  { label: "InstaShop", color: "#c13584", href: "#" },
  { label: "Walmart", color: "#0071ce", href: "#" },
  { label: "WooCommerce", color: "#7f54b3", href: "#" },
];

const PARTNERS_MENU = [
  { label: "OnePiece Wholesaler", icon: <Package size={15} />, desc: "Bulk product sourcing", href: "#" },
  { label: "Bulk Wholesaler", icon: <Layers size={15} />, desc: "Large volume pricing", href: "#" },
  { label: "Franchise", icon: <Award size={15} />, desc: "Build your own franchise", href: "#" },
  { label: "Whitelabel", icon: <Tag size={15} />, desc: "Your brand, our platform", href: "#" },
  { label: "Investment", icon: <BarChart2 size={15} />, desc: "Partnership opportunities", href: "#" },
  { label: "Smartshop", icon: <Briefcase size={15} />, desc: "Smart retail solution", href: "#" },
];

const RESOURCES_MENU = [
  { label: "Platform Tour", icon: <Globe size={15} />, href: "#" },
  { label: "Academy", icon: <BookOpen size={15} />, href: "#" },
  { label: "Guru", icon: <Star size={15} />, href: "#" },
  { label: "Mobile App", icon: <Zap size={15} />, href: "#" },
  { label: "Webinars", icon: <Video size={15} />, href: "#" },
  { label: "Blogs", icon: <Newspaper size={15} />, href: "#" },
  { label: "Hot Products", icon: <Heart size={15} />, href: "#" },
  { label: "Contact", icon: <PhoneCall size={15} />, href: "#" },
  { label: "Free Tools", icon: <HelpCircle size={15} />, href: "#" },
  { label: "About Us", icon: <Users size={15} />, href: "#" },
];

function MegaMenuProducts({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-[680px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
          style={{ background: "rgba(15,10,30,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="p-5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Browse Categories</p>
            <div className="grid grid-cols-3 gap-2">
              {PRODUCTS_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color + "22", color: item.color }}>
                    {item.icon}
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
              <a href="/shop" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white"
                style={{ background: "linear-gradient(135deg, #ff4d6d, #7209b7)" }}>
                View All Products <ChevronRight size={14} />
              </a>
              <span className="text-xs text-white/40">12,000+ products available</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MegaMenuIntegrations({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-[500px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
          style={{ background: "rgba(15,10,30,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="p-5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Connected Platforms</p>
            <div className="grid grid-cols-2 gap-2">
              {INTEGRATIONS_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                  <ChevronRight size={12} className="ml-auto text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MegaMenuPartners({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-[400px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
          style={{ background: "rgba(15,10,30,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="p-5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Partnership Types</p>
            <div className="flex flex-col gap-1">
              {PARTNERS_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors font-medium">{item.label}</p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                  <ChevronRight size={14} className="ml-auto text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MegaMenuResources({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-[340px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
          style={{ background: "rgba(15,10,30,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="p-5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Resources & Support</p>
            <div className="grid grid-cols-2 gap-1">
              {RESOURCES_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="text-pink-400">{item.icon}</span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMenu = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const NavItem = ({ label, menuKey, children }) => (
    <div
      className="relative"
      onMouseEnter={() => openMenu(menuKey)}
      onMouseLeave={closeMenu}
    >
      <button
        className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all
          ${activeMenu === menuKey ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
      >
        {label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${activeMenu === menuKey ? "rotate-180 text-pink-400" : ""}`}
        />
      </button>
      {children}
    </div>
  );

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full text-center text-xs py-2 font-medium"
        style={{ background: "linear-gradient(90deg, #7209b7, #ff4d6d, #7209b7)" }}>
        <span className="text-white/90">📞 +44 7958 557597</span>
        <span className="text-white/40 mx-3">|</span>
        <span className="text-white/90">✉ support@edropship.com</span>
        <span className="text-white/40 mx-3">|</span>
        <span className="text-white font-semibold">🚀 UK's No.1 Dropshipping Marketplace — Join Free Today!</span>
      </div>

      {/* Main Nav */}
      <motion.header
        className="sticky top-0 z-50 w-full border-b border-white/5"
        style={{
          background: scrolled ? "rgba(10,5,20,0.95)" : "rgba(10,5,20,0.8)",
          backdropFilter: "blur(20px)",
          transition: "background 0.3s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-[68px] flex items-center gap-6" ref={menuRef}>
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://edropship.com/images/logos/8/new_logo_gvv7-6s.png"
              alt="eDropShip"
              className="h-9 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden text-xl font-black text-white">
              e<span style={{ color: "#ff4d6d" }}>Drop</span>Ship
            </span>
          </a>

          {/* Center Search */}
          <div className="flex-1 max-w-sm mx-auto hidden md:block">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search products, suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50 focus:bg-white/8 transition-all"
              />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem label="Products" menuKey="products">
              <MegaMenuProducts open={activeMenu === "products"} />
            </NavItem>
            <NavItem label="Integrations" menuKey="integrations">
              <MegaMenuIntegrations open={activeMenu === "integrations"} />
            </NavItem>
            <NavItem label="Partners" menuKey="partners">
              <MegaMenuPartners open={activeMenu === "partners"} />
            </NavItem>
            <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all">
              Pricing
            </a>
            <NavItem label="Resources" menuKey="resources">
              <MegaMenuResources open={activeMenu === "resources"} />
            </NavItem>
          </nav>

          {/* Right Icons */}
          <div className="ml-auto flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all lg:hidden"
              onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={16} />
            </button>
            <button className="relative w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500" />
            </button>
            <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: "rgba(255,77,109,0.2)", border: "1px solid rgba(255,77,109,0.3)" }}>
              <ShoppingCart size={16} style={{ color: "#ff4d6d" }} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                style={{ background: "#ff4d6d" }}>0</span>
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
              style={{ background: "rgba(114,9,183,0.2)", border: "1px solid rgba(114,9,183,0.3)" }}>
              <User size={16} style={{ color: "#a855f7" }} />
            </button>
            <button
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/5 lg:hidden"
            >
              <div className="px-4 py-3">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5"
              style={{ background: "rgba(10,5,20,0.98)" }}
            >
              <div className="px-4 py-4 space-y-1">
                {["Products", "Integrations", "Partners", "Pricing", "Resources"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
                  <a href="#" className="block text-center py-3 rounded-xl font-semibold text-white text-sm"
                    style={{ background: "linear-gradient(135deg, #ff4d6d, #c9184a)" }}>
                    Become a Seller
                  </a>
                  <a href="#" className="block text-center py-3 rounded-xl font-semibold text-white text-sm"
                    style={{ background: "linear-gradient(135deg, #7209b7, #3a0ca3)" }}>
                    Become a Supplier
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}