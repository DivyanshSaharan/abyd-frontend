import React, { useState } from "react";
import "./OnboardingQuestions.css";
import assets from '../assets/assets'

const OnboardingQuestions = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const questions = [
    "What industry does your startup operate in?",
    "At what stage is your company currently?",
    "What type of business structure does your startup have?",
    "How many employees do you currently have?",
    "What are your main compliance goals or concerns?",
  ];

  const industries = ["Technology", "E-commerce", "Fintech", "Healthcare", "Education"];

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="onboarding-questions">
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index + 1 <= currentStep ? "active" : ""}`}
          ></div>
        ))}
      </div>
      <div className="below-progress">
        <button className="back-button" onClick={handlePrevious} disabled={currentStep === 1}>
          &lt; Previous
        </button>
        <img src={assets.abyd} alt="abyd logo" />
      </div>

      <div className="question-container">
        <h3>Question {currentStep}/{totalSteps}</h3>
        <h2>{questions[currentStep - 1]}</h2>
        <select className="dropdown">
          <option value="">Select the industry</option>
          {industries.map((industry, index) => (
            <option key={index} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingQuestions;
