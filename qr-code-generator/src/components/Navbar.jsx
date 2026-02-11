import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Instagram, Wifi, User, Building2, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: "/qr-code-for-whatsapp", label: "WhatsApp", icon: <MessageCircle size={18} /> },
        { path: "/qr-code-for-instagram", label: "Instagram", icon: <Instagram size={18} /> },
        { path: "/wifi-qr-code-generator", label: "WiFi", icon: <Wifi size={18} /> },
        { path: "/vcard-qr-code", label: "vCard", icon: <User size={18} /> },
        { path: "/qr-code-for-business", label: "Business", icon: <Building2 size={18} /> },
    ];

    // Close mobile menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className={`navbar ${isOpen ? 'mobile-menu-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Neuro<span>QR</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links-desktop">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button
                    className="nav-hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Drawer */}
                <div className={`nav-mobile-drawer ${isOpen ? 'active' : ''}`}>
                    <div className="mobile-drawer-links">
                        <Link to="/" className="mobile-nav-logo" onClick={() => setIsOpen(false)}>
                            Neuro<span>QR</span>
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Overlay */}
                {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
            </div>
        </nav>
    );
}
