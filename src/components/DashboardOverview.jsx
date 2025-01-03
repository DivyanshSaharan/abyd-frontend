import React from 'react'
import assets from '../assets/assets'

const DashboardOverview = () => {
  return (
    <section className="overview">
      <div className="cards">
        <div className="card progress">
          <p>Compliance Progress</p>
          <div className="progress-circle">
            <span>80%</span>
          </div>
        </div>
        <div className="card ongoing-report">
          <div className="suggested-label">Suggested</div>
          <div className="top-content">
            <p>Ongoing Report</p>
            <span>Data Protection</span>
          </div>
          <button>Continue</button>
        </div>
        <div className="card document-builder suggested">
          <div className="suggested-label">Suggested</div>
          <div className="top-content">
            <p>AI Document Builder</p>
            <span>Generate Suggested Documents</span>
            <div className="document-tags">
              {/* <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                    <span>Terms of Use</span> */}
            </div>
          </div>
          <button>Create</button>
        </div>
      </div>

      <hr />
      <div className="cards-secondary">
        <div className="scard best-practices has-alert">
          <div className="alert-icon">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3181 1.48844L17.4435 12.6292C17.5521 12.799 17.6093 12.9918 17.6093 13.1879C17.6093 13.3841 17.5521 13.5768 17.4435 13.7467C17.3348 13.9165 17.1786 14.0576 16.9904 14.1557C16.8022 14.2538 16.5887 14.3054 16.3714 14.3054H2.12069C1.90339 14.3054 1.68993 14.2538 1.50174 14.1557C1.31356 14.0576 1.1573 13.9165 1.04865 13.7467C0.940007 13.5768 0.882811 13.3841 0.882813 13.1879C0.882814 12.9918 0.940013 12.799 1.04866 12.6292L8.17404 1.48844C8.65022 0.743437 9.84108 0.743437 10.3181 1.48844ZM9.24606 2.79219L2.83537 12.8154H15.6568L9.24606 2.79219ZM9.24606 10.3182C9.46494 10.3182 9.67485 10.3967 9.82962 10.5364C9.98438 10.6761 10.0713 10.8656 10.0713 11.0632C10.0713 11.2608 9.98438 11.4503 9.82962 11.59C9.67485 11.7297 9.46494 11.8082 9.24606 11.8082C9.02719 11.8082 8.81728 11.7297 8.66251 11.59C8.50774 11.4503 8.42079 11.2608 8.42079 11.0632C8.42079 10.8656 8.50774 10.6761 8.66251 10.5364C8.81728 10.3967 9.02719 10.3182 9.24606 10.3182ZM9.24606 5.10318C9.46494 5.10318 9.67485 5.18167 9.82962 5.32138C9.98438 5.4611 10.0713 5.65059 10.0713 5.84818V8.82818C10.0713 9.02577 9.98438 9.21526 9.82962 9.35497C9.67485 9.49469 9.46494 9.57318 9.24606 9.57318C9.02719 9.57318 8.81728 9.49469 8.66251 9.35497C8.50774 9.21526 8.42079 9.02577 8.42079 8.82818V5.84818C8.42079 5.65059 8.50774 5.4611 8.66251 5.32138C8.81728 5.18167 9.02719 5.10318 9.24606 5.10318Z" fill="#C62828" />
            </svg>
          </div>
          <p>Best Practices: Do's & Don'ts</p>
          <p className='mid-text'>There are compliance-related questions that need your response. Answering these will help keep your compliance progress on track</p>
          <button>View Details</button>
        </div>
        <div className="scard step-by-step-guide has-alert">
          <div className="alert-icon">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3181 1.48844L17.4435 12.6292C17.5521 12.799 17.6093 12.9918 17.6093 13.1879C17.6093 13.3841 17.5521 13.5768 17.4435 13.7467C17.3348 13.9165 17.1786 14.0576 16.9904 14.1557C16.8022 14.2538 16.5887 14.3054 16.3714 14.3054H2.12069C1.90339 14.3054 1.68993 14.2538 1.50174 14.1557C1.31356 14.0576 1.1573 13.9165 1.04865 13.7467C0.940007 13.5768 0.882811 13.3841 0.882813 13.1879C0.882814 12.9918 0.940013 12.799 1.04866 12.6292L8.17404 1.48844C8.65022 0.743437 9.84108 0.743437 10.3181 1.48844ZM9.24606 2.79219L2.83537 12.8154H15.6568L9.24606 2.79219ZM9.24606 10.3182C9.46494 10.3182 9.67485 10.3967 9.82962 10.5364C9.98438 10.6761 10.0713 10.8656 10.0713 11.0632C10.0713 11.2608 9.98438 11.4503 9.82962 11.59C9.67485 11.7297 9.46494 11.8082 9.24606 11.8082C9.02719 11.8082 8.81728 11.7297 8.66251 11.59C8.50774 11.4503 8.42079 11.2608 8.42079 11.0632C8.42079 10.8656 8.50774 10.6761 8.66251 10.5364C8.81728 10.3967 9.02719 10.3182 9.24606 10.3182ZM9.24606 5.10318C9.46494 5.10318 9.67485 5.18167 9.82962 5.32138C9.98438 5.4611 10.0713 5.65059 10.0713 5.84818V8.82818C10.0713 9.02577 9.98438 9.21526 9.82962 9.35497C9.67485 9.49469 9.46494 9.57318 9.24606 9.57318C9.02719 9.57318 8.81728 9.49469 8.66251 9.35497C8.50774 9.21526 8.42079 9.02577 8.42079 8.82818V5.84818C8.42079 5.65059 8.50774 5.4611 8.66251 5.32138C8.81728 5.18167 9.02719 5.10318 9.24606 5.10318Z" fill="#C62828" />
            </svg>
          </div>
          <div className='step-by-step-guide'>
            <p>Step-by-Step guide</p>
            <p className='mid-text'>Stay on top of your compliance journey with this step-by-step checklist, designed to guide you to full legal readiness</p>
          </div>
          <button>Review All</button>
        </div>
        <div className="scard alerts-updates">
          <p>Alerts and Updates</p>
          <p className='mid-text'>Stay informed on the latest regulatory updates and alerts. Make sure you're always compliant by addressing these changes.</p>
          <button>See Alerts</button>
        </div>
        <div className="scard licenses has-alert">
          <div className="alert-icon">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3181 1.48844L17.4435 12.6292C17.5521 12.799 17.6093 12.9918 17.6093 13.1879C17.6093 13.3841 17.5521 13.5768 17.4435 13.7467C17.3348 13.9165 17.1786 14.0576 16.9904 14.1557C16.8022 14.2538 16.5887 14.3054 16.3714 14.3054H2.12069C1.90339 14.3054 1.68993 14.2538 1.50174 14.1557C1.31356 14.0576 1.1573 13.9165 1.04865 13.7467C0.940007 13.5768 0.882811 13.3841 0.882813 13.1879C0.882814 12.9918 0.940013 12.799 1.04866 12.6292L8.17404 1.48844C8.65022 0.743437 9.84108 0.743437 10.3181 1.48844ZM9.24606 2.79219L2.83537 12.8154H15.6568L9.24606 2.79219ZM9.24606 10.3182C9.46494 10.3182 9.67485 10.3967 9.82962 10.5364C9.98438 10.6761 10.0713 10.8656 10.0713 11.0632C10.0713 11.2608 9.98438 11.4503 9.82962 11.59C9.67485 11.7297 9.46494 11.8082 9.24606 11.8082C9.02719 11.8082 8.81728 11.7297 8.66251 11.59C8.50774 11.4503 8.42079 11.2608 8.42079 11.0632C8.42079 10.8656 8.50774 10.6761 8.66251 10.5364C8.81728 10.3967 9.02719 10.3182 9.24606 10.3182ZM9.24606 5.10318C9.46494 5.10318 9.67485 5.18167 9.82962 5.32138C9.98438 5.4611 10.0713 5.65059 10.0713 5.84818V8.82818C10.0713 9.02577 9.98438 9.21526 9.82962 9.35497C9.67485 9.49469 9.46494 9.57318 9.24606 9.57318C9.02719 9.57318 8.81728 9.49469 8.66251 9.35497C8.50774 9.21526 8.42079 9.02577 8.42079 8.82818V5.84818C8.42079 5.65059 8.50774 5.4611 8.66251 5.32138C8.81728 5.18167 9.02719 5.10318 9.24606 5.10318Z" fill="#C62828" />
            </svg>
          </div>
          <p>Licenses and Certifications</p>
          <button>View Details</button>
          {/* <button onClick={openLicensesModal}>View Details</button> */}
          {/* <LicensesAndCertifications isOpen={isLicensesModalOpen} onClose={closeLicensesModal} /> */}
        </div>
      </div>
    </section>
  )
}

export default DashboardOverview
