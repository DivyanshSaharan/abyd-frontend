import React from 'react'
import './Pricing.css';
function Pricing() {
  return (

    <div className="pricing section" id="pricing">
      <h2 className="section__title">Our Pricing</h2>
      <span className="section__subtitle">Choose the plan that suits you</span>
      <div className="pricing__container container grid">
        <div className="pricing__card">
          <h3 className="pricing__title">Basic Plan</h3>
          <p className="pricing__price">$10/month</p>
          <ul className="pricing__features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="pricing__button">Get Started</button>
        </div>
        <div className="pricing__card">
          <h3 className="pricing__title">Pro Plan</h3>
          <p className="pricing__price">$30/month</p>
          <ul className="pricing__features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className="pricing__button">Get Started</button>
        </div>
        <div className="pricing__card">
          <h3 className="pricing__title">Enterprise Plan</h3>
          <p className="pricing__price">Custom Pricing</p>
          <ul className="pricing__features">
            <li>All Pro Features</li>
            <li>Dedicated Support</li>
            <li>Custom Solutions</li>
          </ul>
          <button className="pricing__button">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing