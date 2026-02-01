import { useState } from "react";
import QrGenerator from "../components/QrGenerator";
import Controls from "../components/Controls";

export default function Home() {
  const [options, setOptions] = useState({
    data: "https://example.com",
    color: "#000000",
    bgColor: "#ffffff",
    style: "rounded",
    size: 300,
    logo: null
  });

  return (
    <div>
      <h1>Gerador de QR Codes</h1>

      <QrGenerator options={options} />
      <Controls options={options} setOptions={setOptions} />
    </div>
  );
}
