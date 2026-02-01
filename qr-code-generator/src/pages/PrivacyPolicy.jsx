import React from "react";

const PrivacyPolicy = ({ onBack }) => {
    return (
        <div className="legal-page">
            <button className="btn-back" onClick={onBack}>← Back to Generator</button>
            <h2>Privacy Policy</h2>
            <p>Last updated: February 01, 2026</p>

            <section>
                <h3>1. Information Collection</h3>
                <p>NeuroQR does not store any of the data you use to generate QR codes. All generation happens locally in your browser or through temporary processes that do not persist your personal information.</p>
            </section>

            <section>
                <h3>2. Service Workers and Cookies</h3>
                <p>We use service workers (PropellerAds) to provide notifications and improve site performance. We may use cookies to understand site traffic through Google Analytics.</p>
            </section>

            <section>
                <h3>3. Third-Party Services</h3>
                <p>Our site uses PropellerAds for monetization and Google Analytics for traffic analysis. These services may collect data as outlined in their respective privacy policies.</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
