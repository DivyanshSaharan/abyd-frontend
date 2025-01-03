import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardFirstTime from '../components/DashboardFirstTime';
import DashboardOverview from '../components/DashboardOverview';
import DashboardNewUserWelcome from '../components/DashboardNewUserWelcome';
import DashboardOldUserWelcome from '../components/DashboardOldUserWelcome';
import DashboardPendingQueries from '../components/DashboardPendingQueries';
import DashboardPendingReviews from '../components/DashboardPendingReviews';
import DashboardLicensesAndCertifications from '../components/DashboardLicensesAndCertifications';
import DashboardAlertsUpdates from '../components/DashboardAlertsUpdates';
import DashboardStepByStepGuide from '../components/DashboardStepByStepGuide';
import DashboardBestPractices from '../components/DashboardBestPractices';

const Dashboard = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const handleStartClick = () => {
    setFirstTime(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <Header />
        {firstTime ? <DashboardNewUserWelcome /> : <DashboardOldUserWelcome />}

        <div className="tabs">
          <span
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => handleTabClick('overview')}
          >
            OVERVIEW
          </span>
          <span
            className={`tab ${activeTab === 'pendingQueries' ? 'active' : ''}`}
            onClick={() => handleTabClick('pendingQueries')}
          >
            PENDING QUERIES
          </span>
          <span
            className={`tab ${activeTab === 'pendingReviews' ? 'active' : ''}`}
            onClick={() => handleTabClick('pendingReviews')}
          >
            PENDING REVIEWS
          </span>
          <span
            className={`tab ${activeTab === 'licensesCertifications' ? 'active' : ''}`}
            onClick={() => handleTabClick('licensesCertifications')}
          >
            LICENSE & CERTIFICATIONS
          </span>
          <span
            className={`tab ${activeTab === 'alertsUpdates' ? 'active' : ''}`}
            onClick={() => handleTabClick('alertsUpdates')}
          >
            ALERTS & UPDATES
          </span>
          <span
            className={`tab ${activeTab === 'stepByStepGuide' ? 'active' : ''}`}
            onClick={() => handleTabClick('stepByStepGuide')}
          >
            STEP-BY-STEP GUIDE
          </span>
          <span
            className={`tab ${activeTab === 'bestPractices' ? 'active' : ''}`}
            onClick={() => handleTabClick('bestPractices')}
          >
            BEST PRACTICES
          </span>
        </div>

        {firstTime && <DashboardFirstTime onStart={handleStartClick} />}
        {!firstTime && activeTab === 'overview' && <DashboardOverview />}
        {!firstTime && activeTab === 'pendingQueries' && <DashboardPendingQueries />}
        {!firstTime && activeTab === 'pendingReviews' && <DashboardPendingReviews />}
        {!firstTime && activeTab === 'licensesCertifications' && <DashboardLicensesAndCertifications />}
        {!firstTime && activeTab === 'alertsUpdates' && <DashboardAlertsUpdates />}
        {!firstTime && activeTab === 'stepByStepGuide' && <DashboardStepByStepGuide />}
        {!firstTime && activeTab === 'bestPractices' && <DashboardBestPractices />}
      </main>
    </div>
  );
};

export default Dashboard;