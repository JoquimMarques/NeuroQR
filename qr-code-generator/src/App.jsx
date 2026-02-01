import { useState } from "react";
import QrGenerator from "./components/QrGenerator";
import Controls from "./components/Controls";
import ProcessingOverlay from "./components/ProcessingOverlay";
import "./styles/App.css";

export default function App() {
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

  const [input, setInput] = useState("");
  const [showQR, setShowQR] = useState(false);
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

  const gerarQR = async () => {
    if (input.trim() === "") return;

    await simulateProgress("Generating NeuroQR...");
    setOptions({ ...options, data: input });
    setShowQR(true);
  };

  const handleDownload = async (format) => {
    if (!qrInstance) return;

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
    <div className="app">
      {isProcessing && (
        <ProcessingOverlay
          progress={processingProgress}
          message={processingMessage}
        />
      )}



      <header className="title-container">
        <h1 className="title">NeuroQR</h1>
        <p className="subtitle">Fast and Professional QR Code Generator</p>
      </header>

      <main className="main-card">
        <div className="input-section">
          <input
            type="text"
            placeholder="Paste your URL or text here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && gerarQR()}
          />
          <button className="btn-generate" onClick={gerarQR} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Generate"}
          </button>
        </div>

        {showQR && (
          <>
            <div className="qr-display-area">
              <QrGenerator options={options} onInstanceReady={setQrInstance} />

            </div>
            <div className="controls-area" style={{ opacity: isProcessing ? 0.5 : 1, pointerEvents: isProcessing ? 'none' : 'auto' }}>
              <Controls
                options={options}
                setOptions={setOptions}
                onDownload={handleDownload}
                onLogoChange={handleLogoChange}
                onLogoClear={clearLogo}
              />
            </div>
          </>
        )}
      </main>


    </div>
  );
}
