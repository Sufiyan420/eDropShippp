import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, SlidersHorizontal, Grid3X3, LayoutList,
  X, ChevronDown, Star, Heart, ShoppingCart, Eye,
  ChevronLeft, ChevronRight, Package, Zap
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import Breadcrumb from "../components/Breadcrumb";

const PINK = "#ff4d6d";
const PURPLE = "#7209b7";
const grad = `linear-gradient(135deg, ${PINK}, ${PURPLE})`;

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

const PRICE_RANGES = [
  { label: "Under £20", min: 0, max: 20 },
  { label: "£20 – £50", min: 20, max: 50 },
  { label: "£50 – £100", min: 50, max: 100 },
  { label: "Over £100", min: 100, max: Infinity },
];

function Badge({ label }) {
  const colors = {
    SALE: { bg: "#ff4d6d20", color: "#ff4d6d" },
    NEW: { bg: "#06d6a020", color: "#06d6a0" },
    BESTSELLER: { bg: "#f59e0b20", color: "#f59e0b" },
    HOT: { bg: "#ef444420", color: "#ef4444" },
  };
  const c = colors[label] || { bg: "#ffffff10", color: "rgba(255,255,255,0.5)" };
  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide"
      style={{ background: c.bg, color: c.color }}>
      {label}
    </span>
  );
}

function ProductCard({ product, view }) {
  const [wishlist, setWishlist] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (view === "list") {
    return (
      <motion.div layout
        className="flex gap-5 p-5 rounded-2xl border border-white/6 hover:border-white/12 transition-all"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="w-28 h-28 rounded-xl flex-shrink-0 flex items-center justify-center text-4xl"
          style={{ background: "rgba(255,255,255,0.04)" }}>
          {product.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-white/35 mb-1">{product.category}</p>
              <h3 className="font-semibold text-white text-sm leading-snug mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill={i < Math.floor(product.rating) ? "#f59e0b" : "transparent"} stroke="#f59e0b" />
                ))}
                <span className="text-xs text-white/35 ml-1">({product.reviews})</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-lg font-bold text-white">£{product.price}</div>
              {product.originalPrice && (
                <div className="text-xs text-white/30 line-through">£{product.originalPrice}</div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {product.badge && <Badge label={product.badge} />}
            <button className="ml-auto px-4 py-2 rounded-lg text-white text-xs font-bold"
              style={{ background: grad }}>Add to Cart</button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div layout
      className="group rounded-2xl overflow-hidden border border-white/6 hover:border-white/15 transition-all"
      style={{ background: "rgba(255,255,255,0.02)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
    >
      {/* Image area */}
      <div className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: "rgba(255,255,255,0.03)" }}>
        <span className="text-6xl">{product.emoji}</span>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge label={product.badge} />
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
            onClick={() => setWishlist(!wishlist)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            <Heart size={14} fill={wishlist ? PINK : "transparent"} stroke={wishlist ? PINK : "rgba(255,255,255,0.6)"} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
            transition={{ delay: 0.05 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            <Eye size={14} className="text-white/60" />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          className="absolute bottom-3 left-3 right-3"
        >
          <button className="w-full py-2 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5"
            style={{ background: grad, boxShadow: "0 4px 20px rgba(255,77,109,0.3)" }}>
            <ShoppingCart size={13} /> Add to Cart
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-white/30 mb-1">{product.category}</p>
        <h3 className="font-semibold text-white text-sm leading-snug mb-2 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill={i < Math.floor(product.rating) ? "#f59e0b" : "transparent"} stroke="#f59e0b" />
          ))}
          <span className="text-xs text-white/30 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-white text-base">£{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-white/25 line-through ml-2">£{product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-xs font-bold text-green-400">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const content = (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Category</h4>
        <div className="space-y-1">
          <button
            onClick={() => setFilters((f) => ({ ...f, category: "all" }))}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${
              filters.category === "all" ? "bg-pink-500/10 text-pink-400 font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            All Products <span className="text-xs text-white/25">{PRODUCTS.length}</span>
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.label).length;
            return (
              <button key={cat.label}
                onClick={() => setFilters((f) => ({ ...f, category: cat.label }))}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 justify-between ${
                  filters.category === cat.label ? "bg-pink-500/10 text-pink-400 font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{cat.emoji}</span> {cat.label}
                </span>
                <span className="text-xs text-white/25">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Price Range</h4>
        <div className="space-y-1">
          <button
            onClick={() => setFilters((f) => ({ ...f, priceRange: null }))}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${!filters.priceRange ? "text-pink-400 font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"}`}
          >
            Any Price
          </button>
          {PRICE_RANGES.map((r) => (
            <button key={r.label}
              onClick={() => setFilters((f) => ({ ...f, priceRange: r }))}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                filters.priceRange?.label === r.label ? "text-pink-400 font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Min Rating</h4>
        <div className="space-y-1">
          {[0, 3, 4, 4.5].map((r) => (
            <button key={r}
              onClick={() => setFilters((f) => ({ ...f, minRating: r }))}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                filters.minRating === r ? "text-pink-400 font-semibold" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {r === 0 ? "Any Rating" : (
                <>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={i < r ? "#f59e0b" : "transparent"} stroke="#f59e0b" />
                  ))}
                  <span className="text-xs">& up</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => setFilters({ category: "all", priceRange: null, minRating: 0 })}
        className="w-full py-2.5 rounded-xl border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/25 transition-all"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
        {content}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-50 lg:hidden overflow-y-auto p-6"
              style={{ background: "rgba(10,5,20,0.98)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white">Filters</h3>
                <button onClick={() => setMobileOpen(false)} className="text-white/40 hover:text-white">
                  <X size={18} />
                </button>
              </div>
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Shop() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [filters, setFilters] = useState({ category: "all", priceRange: null, minRating: 0 });
  const PER_PAGE = 12;

  const filtered = PRODUCTS
    .filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.priceRange && (p.price < filters.priceRange.min || p.price > filters.priceRange.max)) return false;
      if (p.rating < filters.minRating) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="min-h-screen" style={{ background: "#0a0514" }}>
      {/* Header */}
      <div className="border-b border-white/5 py-8"
        style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(114,9,183,0.12), transparent)" }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <Breadcrumb crumbs={[{ label: "Shop" }]} />
          <h1 className="text-4xl font-black text-white mt-4 mb-2">
            All{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Products
            </span>
          </h1>
          <p className="text-white/40 text-sm">{filtered.length} products found</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/3 text-white/60 text-sm"
          >
            <SlidersHorizontal size={15} /> Filters
          </button>

          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/25 text-sm focus:outline-none focus:border-pink-500/30 transition-all"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white/70 text-sm focus:outline-none cursor-pointer"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} style={{ background: "#1a0a2e" }}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          </div>

          {/* View toggle */}
          <div className="flex rounded-xl overflow-hidden border border-white/8 ml-auto">
            {[
              { key: "grid", icon: <Grid3X3 size={15} /> },
              { key: "list", icon: <LayoutList size={15} /> },
            ].map(({ key, icon }) => (
              <button key={key} onClick={() => setView(key)}
                className={`px-3 py-2.5 transition-all ${view === key ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"}`}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          <FilterSidebar filters={filters} setFilters={setFilters} mobileOpen={mobileFilters} setMobileOpen={setMobileFilters} />

          <div className="flex-1 min-w-0">
            {paged.length === 0 ? (
              <div className="text-center py-20">
                <Package size={40} className="text-white/15 mx-auto mb-4" />
                <p className="text-white/30 text-sm">No products found</p>
                <button onClick={() => { setSearch(""); setFilters({ category: "all", priceRange: null, minRating: 0 }); }}
                  className="mt-3 text-pink-400 text-sm hover:text-pink-300">Clear filters</button>
              </div>
            ) : (
              <>
                <motion.div layout
                  className={view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                    : "flex flex-col gap-3"}>
                  <AnimatePresence>
                    {paged.map((product, i) => (
                      <motion.div key={product.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ delay: i * 0.03 }}>
                        <ProductCard product={product} view={view} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-white/40 disabled:opacity-30 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all ${
                          page === i + 1
                            ? "text-white"
                            : "bg-white/5 border border-white/8 text-white/40 hover:bg-white/10 hover:text-white"
                        }`}
                        style={page === i + 1 ? { background: grad } : {}}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-white/40 disabled:opacity-30 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}