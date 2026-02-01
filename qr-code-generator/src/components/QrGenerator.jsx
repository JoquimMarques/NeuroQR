import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QrGenerator({ options = {}, onInstanceReady }) {
  const ref = useRef(null);
  const qr = useRef(null);

  const {
    size = 300,
    data = "https://example.com",
    color = "#000000",
    bgColor = "#ffffff",
    style = "rounded",
    logo = null,
    cornerSquareType = "extra-rounded",
    cornerDotType = "dot",
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    qr.current = new QRCodeStyling({
      width: size,
      height: size,
      data,
      image: logo,
      dotsOptions: {
        color,
        type: style,
      },
      cornersSquareOptions: {
        color,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color,
        type: cornerDotType,
      },
      backgroundOptions: {
        color: bgColor,
      },
      qrOptions: {
        errorCorrectionLevel: "H",
      },
    });

    qr.current.append(ref.current);

    if (onInstanceReady) {
      onInstanceReady(qr.current);
    }

    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (!qr.current) return;

    qr.current.update({
      data,
      width: size,
      height: size,
      dotsOptions: {
        color,
        type: style,
      },
      cornersSquareOptions: {
        color,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color,
        type: cornerDotType,
      },
      backgroundOptions: {
        color: bgColor,
      },
      image: logo,
    });
  }, [size, data, color, bgColor, style, logo, cornerSquareType, cornerDotType]);

  return <div ref={ref} />;
}
