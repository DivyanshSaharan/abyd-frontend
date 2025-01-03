import React from 'react';
import './DashboardStepByStepGuide.css';

const DashboardStepByStepGuide = () => {
  return (
    <div className="guide-container">
      <h1 className="guide-title">
        Here is your onboarding process with Affirmative User Consent Under DPDP Act: A Step-by-Step Guide
      </h1>
      <div className="guide-box">
        <h3 className="step-title">Step 1: Notice to Seek Consent (Rule 3, Section 5(1))</h3>
        <ul className="step-details">
          <li>
            Present a Notice Independently: Before requesting consent, provide a clear and separate notice to the user. This notice should not be bundled with other information or terms of service. <span className="guide-rule">[Rule 3(1)(a)]</span>
          </li>
          <li>
            Clarity and Understandability: The notice must be in plain language, easily understandable without referring to other documents. It should be electronically presentable and storable by both parties. <span className="guide-rule">[Rule 3(1)(a), (b)]</span>
          </li>
        </ul>

        <h3 className="step-title">Step 2: Obtaining Affirmative Consent (Section 6(1))</h3>
        <ul className="step-details">
          <li>
            Clear Affirmative Action: Implement a mechanism that requires users to explicitly agree to the processing of their data. This could involve checkboxes, toggles, or a clear "I Consent" button. Ensure that pre-ticked boxes or opt-out methods are not used.
          </li>
          <li>
            Granular Consent (Section 6(1), Illustration): Allow users to provide consent separately for different purposes and data categories. If processing personal data for multiple purposes, obtain distinct consent for each purpose. Avoid bundling unrelated purposes together.
          </li>
        </ul>
      </div>
      <button className="faq-button">FAQ's</button>
    </div>
  );
};

export default DashboardStepByStepGuide;
