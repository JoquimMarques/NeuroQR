import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  MessageCircle,
  Instagram,
  Wifi,
  User,
  Building2,
  Zap,
  Palette,
  Gem,
} from "lucide-react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import {
  WhatsAppPage,
  InstagramPage,
  WifiPage,
  VCardPage,
  BusinessPage
} from "./pages/SEOPages";
import "./styles/App.css";

function Home() {
  useEffect(() => {
    document.title = "Free Professional QR Code Generator | NeuroQR";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Generate unlimited, high-quality, professional QR codes for free with NeuroQR. Customize with logos and HD SVG exports.");
    }
  }, []);

  const triggerSelectionAd = () => {
    try {
      (function (s) { s.dataset.zone = '10599682', s.src = 'https://nap5k.com/tag.min.js' })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
    } catch (e) {
      console.error("Ad script failed", e);
    }
  };

  const qrTypes = [
    { path: "/qr-code-for-whatsapp", title: "WhatsApp", desc: "Direct link to chat", icon: <MessageCircle size={28} />, color: "#25D366" },
    { path: "/qr-code-for-instagram", title: "Instagram", desc: "Profile & posts", icon: <Instagram size={28} />, color: "#B02E6C" },
    { path: "/wifi-qr-code-generator", title: "WiFi", desc: "Share passwords", icon: <Wifi size={28} />, color: "#3498db" },
    { path: "/vcard-qr-code", title: "vCard", desc: "Digital contacts", icon: <User size={28} />, color: "#f1c40f" },
    { path: "/qr-code-for-business", title: "Business", desc: "Elevate brand", icon: <Building2 size={28} />, color: "#34495e" },
  ];

  return (
    <div className="home-container">
      <header className="home-hero">
        <h1 className="hero-title">Neuro<span>QR</span></h1>
        <p className="hero-subtitle">The most powerful and professional QR code platform</p>
      </header>

      <div className="selection-grid">
        {qrTypes.map((type) => (
          <Link
            key={type.path}
            to={type.path}
            className="selection-card"
            onClick={triggerSelectionAd}
          >
            <div className="card-icon" style={{ backgroundColor: type.color }}>{type.icon}</div>
            <div className="card-info">
              <h3>{type.title}</h3>
              <p>{type.desc}</p>
            </div>
            <div className="card-arrow">→</div>
          </Link>
        ))}
      </div>

      <section className="features-section">
        <div className="feature-item">
          <div className="feat-icon"><Zap size={32} color="#e63946" /></div>
          <h4>Fast Generation</h4>
          <p>Instant processing with real-time preview.</p>
        </div>
        <div className="feature-item">
          <div className="feat-icon"><Palette size={32} color="#e63946" /></div>
          <h4>Custom Brand</h4>
          <p>Add logos and unique colors to your codes.</p>
        </div>
        <div className="feature-item">
          <div className="feat-icon"><Gem size={32} color="#e63946" /></div>
          <h4>Premium Quality</h4>
          <p>High resolution SVG and PNG exports.</p>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr-code-for-whatsapp" element={<WhatsAppPage />} />
          <Route path="/qr-code-for-instagram" element={<InstagramPage />} />
          <Route path="/wifi-qr-code-generator" element={<WifiPage />} />
          <Route path="/vcard-qr-code" element={<VCardPage />} />
          <Route path="/qr-code-for-business" element={<BusinessPage />} />
          <Route path="/privacy" element={<PrivacyPolicy onBack={() => window.history.back()} />} />
          <Route path="/terms" element={<TermsOfService onBack={() => window.history.back()} />} />
        </Routes>

        <footer className="footer-premium">
          <div className="footer-bottom">
            <div className="footer-mini-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <p>© 2026 NeuroQR. Built for speed and SEO.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
