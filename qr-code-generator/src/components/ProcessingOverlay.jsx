import React from 'react';

export default function ProcessingOverlay({ progress, message }) {
    return (
        <div className="processing-overlay">
            <div className="processing-content">
                <div className="loader-ring"></div>
                <h3>{message}</h3>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="progress-percentage">{Math.round(progress)}% Complete</p>
            </div>
        </div>
    );
}
