import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

/* ── Custom cursor ── */
function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const raf = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(id); };
  }, []);

  return (
    <>
      <div ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ background: "#ff4d6d", boxShadow: "0 0 8px #ff4d6d" }} />
      <div ref={ring}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden lg:block border border-white/20"
        style={{ transition: "width 0.2s, height 0.2s" }} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "#0a0514", minHeight: "100vh", color: "#fff" }}>
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}