import React from "react";
import "./LandingPage.css";
import assets from '../assets/assets'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">
          <img src={assets.abyd} alt="" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li className="last"><a href="#about">Contact Us</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="login-btn">Login</button>
          <button className="request-demo-btn">Request a Demo</button>
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-text">
          <h1>
            Stay Compliant, Stay Secure - A <span className="highlight">DIY Toolkit</span><br />
            for Data Protection & Privacy Laws For Startups
          </h1>
          <p>
            Navigate data protection laws with confidence, a compliance tools designed for founders by founders.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">See How It Works</button>
          </div>
        </div>
        {/* <div className="hero-illustrations">
          <img src={assets.duck} alt="Scale" className="icon" />
          <img src={assets.home} alt="Chart" className="icon" />
        </div> */}
      </main>

      <section className="about-us">
        <h3>About Us</h3>
        <div>
          <p>We are Datence Technologies building a DIY (Do It Yourself) Legal Compliance Toolkit called ABYD specifically for start-ups founders. This toolkit will assist in end-to-end legal compliance by providing access to all relevant laws, regulations, industry best practices, documents, and certifications necessary for start-ups. Our goal is to become the go-to legal compliance consultant for founders at all stages, transforming day-to-day legal compliance from a burden into a competitive advantage</p>
          <img src={assets.landingPageAbout} alt="" />
        </div>
      </section>

      <section className="how-it-works">
        <h3>How It Works</h3>
        <p>Just 3 easy steps to get legally compliant</p>
        <div className="outer">
          <div className="inner">
            <img src={assets.howItWorks1} alt="" />
            <p>Login and answer few questions</p>
          </div>
          <div className="inner">
            <img src={assets.howItWorks2} alt="" />
            <p>Get compliance report with step-by-step guide</p>
          </div>
          <div className="inner">
            <img src={assets.howItWorks3} alt="" />
            <p>Get Expert guidance to achieve end to end legal compliance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
