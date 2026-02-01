import { useState } from "react";
import QrGenerator from "./components/QrGenerator";
import Controls from "./components/Controls";
import "./styles/App.css";

export default function App() {
  const [options, setOptions] = useState({
    data: "",
    color: "#000000",
    bgColor: "#ffffff",
    style: "rounded",
    size: 300,
    logo: null,
    cornerSquareType: "extra-rounded",
    cornerDotType: "dot",
  });

  const [input, setInput] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [qrInstance, setQrInstance] = useState(null);

  const gerarQR = () => {
    if (input.trim() === "") return;
    setOptions({ ...options, data: input });
    setShowQR(true);
  };

  const handleDownload = (format) => {
    if (qrInstance) {
      qrInstance.download({ name: "neuro-qr-code", extension: format });
    }
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
      <div className="ad-container ad-top">Advertisement Space (728x90)</div>

      <header className="title-container">
        <h1 className="title">NeuroQR</h1>
        <p className="subtitle">Fast and Professional QR Code Generator</p>
      </header>

      <main className="main-card">
        <div className="input-section">
          <input
            type="text"
            placeholder="Paste your URL or text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && gerarQR()}
          />
          <button className="btn-generate" onClick={gerarQR}>Generate</button>
        </div>

        {showQR && (
          <>
            <div className="qr-display-area">
              <QrGenerator options={options} onInstanceReady={setQrInstance} />
              <div className="ad-container ad-sidebar">Banner AD</div>
            </div>
            <div className="controls-area">
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

      <div className="ad-container ad-bottom">Advertisement Space (Video or Display)</div>
    </div>
  );
}
