export default function Controls({ options, setOptions, onDownload, onLogoChange, onLogoClear }) {
  const handleChange = (field, value) => {
    setOptions({ ...options, [field]: value });
  };

  return (
    <div className="controls">
      <div className="control-group">
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

      <div className="control-group">
        <label>Corner Squares</label>
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

      <div className="control-group">
        <label>Corner Dots</label>
        <div className="select-wrapper">
          <select
            value={options.cornerDotType}
            onChange={(e) => handleChange("cornerDotType", e.target.value)}
          >
            <option value="square">Square</option>
            <option value="dot">Dot</option>
          </select>
        </div>
      </div>

      <div className="control-group">
        <label>Size</label>
        <input
          type="range"
          min="200"
          max="340"
          step="10"
          value={options.size}
          onChange={(e) => handleChange("size", parseInt(e.target.value))}
        />
        <div className="range-display">
          <span>S</span>
          <span>{options.size}px</span>
          <span>XL</span>
        </div>
      </div>

      <div className="control-group">
        <label>Colors</label>
        <div className="color-pickers">
          <div className="color-input-wrapper" title="QR Color">
            <input
              type="color"
              value={options.color}
              onChange={(e) => handleChange("color", e.target.value)}
            />
            <span>Foreground</span>
          </div>
          <div className="color-input-wrapper" title="Background Color">
            <input
              type="color"
              value={options.bgColor}
              onChange={(e) => handleChange("bgColor", e.target.value)}
            />
            <span>Background</span>
          </div>
        </div>
      </div>

      <div className="control-group">
        <label>Brand Logo</label>
        <div className="logo-upload-wrapper">
          <input
            type="file"
            accept="image/*"
            onChange={onLogoChange}
            id="logo-upload"
            className="hidden-input"
          />
          <label htmlFor="logo-upload" className="btn-upload-logo">
            {options.logo ? "Change Logo" : "Upload Logo"}
          </label>
          {options.logo && (
            <button className="btn-clear-logo" onClick={onLogoClear}>
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="control-group">
        <label>Export</label>
        <div className="download-actions">
          <button
            className="btn-download primary"
            onClick={() => onDownload("png")}
          >
            Download PNG
          </button>
          <button
            className="btn-download"
            onClick={() => onDownload("svg")}
          >
            Download SVG
          </button>
        </div>
      </div>
    </div>
  );
}
