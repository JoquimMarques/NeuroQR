import QRGeneratorLayout from "../components/QRGeneratorLayout";
import { useEffect } from "react";
import { MessageCircle, Instagram, Wifi, User, Building2 } from "lucide-react";

const updateMeta = (title, description) => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
};

export function WhatsAppPage() {
    useEffect(() => {
        updateMeta(
            "Free WhatsApp QR Code Generator | HD SVG & Unlimited - NeuroQR",
            "Generate unlimited, professional QR codes for WhatsApp instantly. Custom colors, logo support, and high-resolution SVG/PNG downloads with NeuroQR."
        );
    }, []);

    return (
        <QRGeneratorLayout
            title="WhatsApp QR"
            subtitle="Connect instantly with a professional WhatsApp link"
            placeholder="wa.me/yournumber"
            themeClass="theme-whatsapp"
            icon={<MessageCircle size={40} />}
        />
    );
}

export function InstagramPage() {
    useEffect(() => {
        updateMeta(
            "Free Instagram QR Code Generator | HD Custom Designs - NeuroQR",
            "Create stunning, professional QR codes for your Instagram profile. Custom patterns, logo integration, and HD SVG exports for your brand."
        );
    }, []);

    return (
        <QRGeneratorLayout
            title="Instagram QR"
            subtitle="Grow your social presence with a custom Instagram scan"
            placeholder="instagram.com/yourusername"
            themeClass="theme-instagram"
            icon={<Instagram size={40} />}
        />
    );
}

export function WifiPage() {
    useEffect(() => {
        updateMeta(
            "Free WiFi QR Code Generator | Print & Share Safely - NeuroQR",
            "Generate professional WiFi QR codes for your home or business. Let customers scan and connect instantly without sharing passwords."
        );
    }, []);

    return (
        <QRGeneratorLayout
            title="WiFi QR"
            subtitle="Secure one-tap connection for guests and customers"
            placeholder="WIFI:S:NetworkName;T:WPA;P:Password;;"
            themeClass="theme-wifi"
            icon={<Wifi size={40} />}
        />
    );
}

export function VCardPage() {
    useEffect(() => {
        updateMeta(
            "Free vCard QR Code Generator | Digital Business Cards - NeuroQR",
            "Modernize your networking with a professional vCard QR code. Save contact details instantly with one scan. Unlimited uses."
        );
    }, []);

    return (
        <QRGeneratorLayout
            title="vCard QR"
            subtitle="The professional digital business card for your brand"
            placeholder="BEGIN:VCARD..."
            themeClass="theme-vcard"
            icon={<User size={40} />}
        />
    );
}

export function BusinessPage() {
    useEffect(() => {
        updateMeta(
            "Free Business QR Code Generator | High-Resolution Vector - NeuroQR",
            "Professional QR code solutions for businesses. High-resolution SVG vectors for printing on menus, flyers, and business cards."
        );
    }, []);

    return (
        <QRGeneratorLayout
            title="Business QR"
            subtitle="Elevate your business with professional-grade QR codes"
            placeholder="yourbusiness.com/deal"
            themeClass="theme-business"
            icon={<Building2 size={40} />}
        />
    );
}
