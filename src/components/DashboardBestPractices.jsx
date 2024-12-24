import React from 'react';
import './DashboardBestPractices.css';

const DashboardBestPractices = () => {
  return (
    <div className="best-practices-container">
      <h1 className="best-practices-title">
        Best Practices for Implementing Affirmative Consent Under DPDPA:
      </h1>

      <div className="section">
        <h2 className="section-title-do">Do's</h2>
        <div className="section-content">
          <ul className="best-practices-list">
            <li>
              Provide a clear and separate notice detailing the types of personal data collected, the purpose of processing, data retention periods, user rights, and communication channels for inquiries or complaints.
              <span className="bp-rule"> [Rule 3, Section 5(1)]</span>
            </li>
            <li>
              Use plain language in the notice and consent request, ensuring it's easily understandable without referring to other documents.
              <span className="bp-rule"> [Rule 3(1)(a), (b)]</span>
            </li>
            <li>
              Offer granular consent options, allowing users to consent to different processing purposes and data categories separately.
              <span className="bp-rule"> [Section 6(1), Illustration]</span>
            </li>
            <li>
              Use affirmative action mechanisms like checkboxes, toggles, or “I Consent” buttons that require explicit user action to indicate consent.
              <span className="bp-rule"> [Section 6(1)]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title-dont">Don'ts</h2>
        <div className="section-content">
          <ul className="best-practices-list">
            <li>
              Don't bundle the notice with other information or terms of service. It must be presented independently.
              <span className="bp-rule"> [Rule 3(1)(a)]</span>
            </li>
            <li>
              Don't use pre-ticked boxes or opt-out mechanisms for obtaining consent. Users must actively choose to give consent.
              <span className="bp-rule"> [Section 6(1)]</span>
            </li>
            <li>
              Don't bundle unrelated purposes together when requesting consent.
              <span className="bp-rule"> [Section 6(1)]</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardBestPractices;
