import React from "react";

const TermsOfService = ({ onBack }) => {
    return (
        <div className="legal-page">
            <button className="btn-back" onClick={onBack}>← Back to Generator</button>
            <h2>Terms of Service</h2>
            <p>Last updated: February 01, 2026</p>

            <section>
                <h3>1. Use of Service</h3>
                <p>By using NeuroQR, you agree to generate QR codes only for lawful purposes. We are not responsible for the content encoded in the QR codes created by users.</p>
            </section>

            <section>
                <h3>2. Ownership</h3>
                <p>The generated QR codes are yours to use. The platform, design, and code of NeuroQR are the property of its creators.</p>
            </section>

            <section>
                <h3>3. Limitation of Liability</h3>
                <p>NeuroQR is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use our service.</p>
            </section>
        </div>
    );
};

export default TermsOfService;
