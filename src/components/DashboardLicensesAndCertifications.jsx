import React from 'react';
import './DashboardLicensesAndCertifications.css';

const DashboardLicensesAndCertifications = () => {
  return (
    <div className="dashboard-lc-container">
      <div className="section">
        <h3 className="section-title required">Required</h3>
        <div className="certification-item">
          <div className="certification-details">
            <span className="certification-title">TRUSTe Enterprise Privacy Certification</span>
            <span className="certification-subtitle">ISO 9003:2018</span>
          </div>
          <input type="checkbox" className="checkbox" />
        </div>
      </div>

      <div className="section">
        <h3 className="section-title already-have">Already Have</h3>
        <div className="certification-item">
          <div className="certification-details">
            <span className="certification-title">Privacy Certification</span>
            <span className="certification-subtitle">ISO 9003:2018</span>
          </div>
          <input type="checkbox" className="checkbox" checked readOnly />
        </div>
      </div>
    </div>
  );
};

export default DashboardLicensesAndCertifications;
