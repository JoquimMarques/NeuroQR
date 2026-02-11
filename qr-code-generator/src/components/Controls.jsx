export default function Controls({ options, setOptions, onDownload, onLogoChange, onLogoClear }) {
  const handleChange = (field, value) => {
    setOptions({ ...options, [field]: value });
  };

  return (
    <div className="controls">
      <div className="control-row">
        <div className="control-group half">
          <label>Pattern Style</label>
          <div className="select-wrapper">
            <select
              value={options.style}
              onChange={(e) => handleChange("style", e.target.value)}
            >
              <option value="square">Square</option>
              <option value="dots">Dots</option>
              <option value="rounded">Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
              <option value="classy">Classy</option>
            </select>
          </div>
        </div>

        <div className="control-group half">
          <label>Corners</label>
          <div className="select-wrapper">
            <select
              value={options.cornerSquareType}
              onChange={(e) => handleChange("cornerSquareType", e.target.value)}
            >
              <option value="square">Square</option>
              <option value="dot">Dot</option>
              <option value="extra-rounded">Extra Rounded</option>
            </select>
          </div>
        </div>
      </div>

      <div className="control-group">
        <div className="label-row">
          <label>Size</label>
          <span className="current-value">{options.size}px</span>
        </div>
        <div className="slider-wrapper">
          <span className="slider-label">S</span>
          <input
            type="range"
            min="200"
            max="340"
            step="10"
            value={options.size}
            onChange={(e) => handleChange("size", parseInt(e.target.value))}
          />
          <span className="slider-label">XL</span>
        </div>
      </div>

      <div className="control-group">
        <label>Colors</label>
        <div className="color-pickers-modern">
          <div className="color-chip" title="QR Color">
            <input
              type="color"
              value={options.color}
              onChange={(e) => handleChange("color", e.target.value)}
            />
            <div className="color-label">
              <span>Foreground</span>
              <code>{options.color}</code>
            </div>
          </div>
          <div className="color-chip" title="Background Color">
            <input
              type="color"
              value={options.bgColor}
              onChange={(e) => handleChange("bgColor", e.target.value)}
            />
            <div className="color-label">
              <span>Background</span>
              <code>{options.bgColor}</code>
            </div>
          </div>
        </div>
      </div>

      <div className="control-group">
        <label>Brand Identity</label>
        <div className="logo-section">
          <input
            type="file"
            accept="image/*"
            onChange={onLogoChange}
            id="logo-upload"
            className="logo-input-hidden"
          />
          <label htmlFor="logo-upload" className="btn-upload-modern">
            {options.logo ? "Change Logo" : "Upload Logo"}
          </label>
          {options.logo && (
            <button className="btn-remove-logo" onClick={onLogoClear}>
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="export-section">
        <label>Export File</label>
        <div className="download-grid">
          <button
            className="btn-download-premium-sm active"
            onClick={() => onDownload("png")}
          >
            Download PNG
          </button>
          <button
            className="btn-download-premium-sm"
            onClick={() => onDownload("svg")}
          >
            Download SVG
          </button>
        </div>
      </div>
    </div>
  );
}
