import { Mail, Phone, MapPin, ArrowRight, ExternalLink, Globe, Share2, Rss, Send } from "lucide-react";

const footerSections = [
  { title: "Resources", links: ["Platform Tour", "Academy", "Guru", "Mobile App", "Webinars", "Blogs", "Hot Products", "Free Tools", "About Us"] },
  { title: "My Account", links: ["Login", "Register", "My Orders", "My Products", "My Earnings", "Settings", "Notifications"] },
  { title: "Important Information", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "GDPR", "Refund Policy", "Shipping Policy"] },
  { title: "Partner With Us", links: ["OnePiece Wholesaler", "Bulk Wholesaler", "Franchise", "Whitelabel", "Investment", "Smartshop"] },
  { title: "Quick Links", links: ["Become a Seller", "Become a Supplier", "All Categories", "Integrations", "Pricing", "Contact Us"] },
];

const socialLinks = [
  { icon: <Globe size={14} />, href: "#", label: "Website" },
  { icon: <Send size={14} />, href: "#", label: "Telegram" },
  { icon: <Share2 size={14} />, href: "#", label: "Social" },
  { icon: <Rss size={14} />, href: "#", label: "Blog" },
  { icon: <ExternalLink size={14} />, href: "#", label: "Links" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden" style={{ background: "rgba(5,2,15,0.98)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #7209b7, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #ff4d6d, transparent)" }} />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-14">
          <div className="lg:col-span-2">
            <img src="https://edropship.com/images/logos/8/new_logo_gvv7-6s.png" alt="eDropShip" className="h-9 w-auto mb-4"
              onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }} />
            <span className="hidden text-xl font-black text-white mb-4 block">e<span style={{ color: "#ff4d6d" }}>Drop</span>Ship</span>
            <p className="text-sm text-white/40 leading-relaxed mb-5">UK's No.1 fully automated dropshipping marketplace. Connect with verified suppliers and sell on all major platforms.</p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#ff4d6d" }} />
                <p className="text-xs text-white/40">Manchester, United Kingdom</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0" style={{ color: "#ff4d6d" }} />
                <a href="mailto:support@edropship.com" className="text-xs text-white/40 hover:text-white transition-colors">support@edropship.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0" style={{ color: "#ff4d6d" }} />
                <a href="tel:+447958557597" className="text-xs text-white/40 hover:text-white transition-colors">+44 7958 557597</a>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              {socialLinks.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all">{icon}</a>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}><a href="#" className="text-xs text-white/35 hover:text-white/80 transition-colors flex items-center gap-1 group"><span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200" style={{ color: "#ff4d6d" }}>›</span>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-6 mb-10 border border-white/5 flex flex-col md:flex-row items-center gap-6" style={{ background: "rgba(114,9,183,0.08)" }}>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-1">Stay in the loop</h3>
            <p className="text-xs text-white/40">Get weekly hot products, supplier deals, and platform updates.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 md:w-64 px-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-pink-500/50" />
            <button className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center gap-2 flex-shrink-0" style={{ background: "linear-gradient(135deg, #ff4d6d, #7209b7)" }}>Subscribe <ArrowRight size={14} /></button>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} eDropShip Ltd. All rights reserved. Company Registration No: 16859804</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}