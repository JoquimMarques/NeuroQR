import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Target } from "lucide-react";
import QrGenerator from "./QrGenerator";
import Controls from "./Controls";
import ProcessingOverlay from "./ProcessingOverlay";
import Navbar from "./Navbar";
import "../styles/App.css";

export default function QRGeneratorLayout({ title, subtitle, placeholder, initialInput = "", themeClass = "theme-default", icon = <Zap size={40} /> }) {
    const [options, setOptions] = useState({
        data: "",
        color: "#000000",
        bgColor: "#ffffff",
        style: "rounded",
        size: 250,
        logo: null,
        cornerSquareType: "extra-rounded",
        cornerDotType: "dot",
    });

    const [input, setInput] = useState(initialInput);
    const [showQR, setShowQR] = useState(initialInput !== "");
    const [qrInstance, setQrInstance] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingProgress, setProcessingProgress] = useState(0);
    const [processingMessage, setProcessingMessage] = useState("");

    const simulateProgress = (message, duration = 2000) => {
        return new Promise((resolve) => {
            setIsProcessing(true);
            setProcessingMessage(message);
            setProcessingProgress(0);

            const interval = 20;
            const step = (100 / (duration / interval));
            let currentProgress = 0;

            const timer = setInterval(() => {
                currentProgress += step;
                if (currentProgress >= 100) {
                    clearInterval(timer);
                    setProcessingProgress(100);
                    setTimeout(() => {
                        setIsProcessing(false);
                        resolve();
                    }, 300);
                } else {
                    setProcessingProgress(currentProgress);
                }
            }, interval);
        });
    };

    const generateQR = async () => {
        if (input.trim() === "") return;

        await simulateProgress("Generating NeuroQR...");
        setOptions({ ...options, data: input });
        setShowQR(true);
    };

    const handleDownload = async (format) => {
        if (!qrInstance) return;

        // PropellerAds onclick script logic
        try {
            (function (s) { s.dataset.zone = '10599682', s.src = 'https://nap5k.com/tag.min.js' })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
        } catch (e) {
            console.error("Ad script failed", e);
        }

        await simulateProgress(`Optimizing ${format.toUpperCase()} Resolution...`, 1500);
        qrInstance.download({ name: "neuro-qr-code", extension: format });
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setOptions({ ...options, logo: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const clearLogo = () => {
        setOptions({ ...options, logo: null });
    };

    return (
        <div className={`layout-wrapper ${themeClass}`}>
            <Navbar />

            {isProcessing && (
                <ProcessingOverlay
                    progress={processingProgress}
                    message={processingMessage}
                />
            )}

            <div className="generator-content">
                <header className="page-header">
                    <div className="header-icon">{icon}</div>
                    <h1 className="page-title">{title || "NeuroQR"}</h1>
                    <p className="page-subtitle">{subtitle || "Fast and Professional QR Code Generator"}</p>
                </header>

                <main className="main-card-premium">
                    <div className="input-section-modern">
                        <input
                            type="text"
                            placeholder={placeholder || "Paste your URL or text here"}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && generateQR()}
                        />
                        <button className="btn-generate-premium" onClick={generateQR} disabled={isProcessing}>
                            {isProcessing ? "..." : "Generate QR"}
                        </button>
                    </div>

                    {showQR ? (
                        <div className="generator-grid">
                            <div className="qr-preview-card">
                                <QrGenerator options={options} onInstanceReady={setQrInstance} />
                            </div>
                            <div className="options-panel">
                                <Controls
                                    options={options}
                                    setOptions={setOptions}
                                    onDownload={handleDownload}
                                    onLogoChange={handleLogoChange}
                                    onLogoClear={clearLogo}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon"><Target size={48} /></div>
                            <p>Type above and click generate to create your custom QR code</p>
                        </div>
                    )}
                </main>

                <div className="back-nav-footer">
                    <Link to="/" className="btn-back-home">← Back to Selection</Link>
                </div>
            </div>
        </div>
    );
}
