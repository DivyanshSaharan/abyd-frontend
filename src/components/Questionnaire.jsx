import React, { useState, useEffect } from 'react';
import './Questionnaire.css';

const Questionnaire = ({ onUpdate }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    license: 'NO',
    businessActivities: [],
    cddFramework: 'NO',
    guidelines: [],
    practices: [],
    certifications: [],
    documents: [],
  });

  const [bitString, setBitString] = useState('');
  const [questionDesc, setQuestionDesc] = useState('Loading question...');
  const [keywords, setKeywords] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [showTip, setShowTip] = useState(false);
  const [tip, setTip] = useState('');

  const userId = "user1";
  const emailId = "user1@gmail.com";
  const company = "companyName";
  const industry = "Fintech";
  const subIndustry = "FintechSub";

  useEffect(() => {
    fetchQuestion(0);
  }, []);

  const fetchQuestion = async (step) => {
    const requestBody = {
      user_id: userId,
      email_id: emailId,
      company: company,
      industry: industry,
      sub_industry: subIndustry,
      question_no: step,
      keywords: selectedKeywords.length > 0 ? selectedKeywords : ["no"],
      bit_string: '0'
    };

    try {
      const response = await fetch('http://localhost:8000/get-questions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        setBitString(data.output.bit_string);
        setCurrentStep(data.output.question_no - 1);
        setQuestionDesc(data.output.question_desc);
        setKeywords(data.output.keywords);
        setSelectedKeywords([]);

        if (data.output.tip) {
          setTip(data.output.tip);
        } else {
          setTip('');
        }

        // Update the report data with guidelines, practices, certifications, and documents
        onUpdate({
          ...answers,
          bit_string: data.output.bit_string,
          guidelines: data.output.guidelines || [],
          practices: data.output.practices || [],
          certifications: data.output.certifications || [],
          documents: data.output.documents || [],
          currentQuestionDesc: data.output.question_desc,
        });
      } else {
        console.error('Error fetching question:', data.message);
      }
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  const handleKeywordChange = (event) => {
    const { value, checked } = event.target;

    const updatedKeywords = checked
      ? [...selectedKeywords, value]
      : selectedKeywords.filter(keyword => keyword !== value);

    setSelectedKeywords(updatedKeywords);
  };

  const handleNext = async () => {
    // Update the report data only when saving and moving to the next question
    onUpdate({
      ...answers,
      businessActivities: selectedKeywords,
      bit_string: bitString,
      currentQuestionDesc: questionDesc,
    });

    fetchQuestion(currentStep + 1);
  };

  const toggleTipPopup = () => {
    setShowTip(!showTip);
  };

  const renderQuestion = () => {
    return (
      <div className="question">
        <label>{questionDesc}</label>
        <div>
          {keywords.map((keyword, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="businessActivities"
                value={keyword}
                onChange={handleKeywordChange}
                checked={selectedKeywords.includes(keyword)}
              />
              {keyword}
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="questionnaire-container">
      <h2>Question {currentStep + 1}</h2>
      {renderQuestion() || "Placeholder for Question"}
      {tip && (
        <span className="tip-icon" onClick={toggleTipPopup}>
          ❓
        </span>
      )}
      {showTip && (
        <div className="tip-popup">
          <p>{tip}</p>
          <button onClick={toggleTipPopup}>Close</button>
        </div>
      )}

      <button className="save-button" onClick={handleNext}>Save and Next</button>
    </div>
  );
};

export default Questionnaire;
