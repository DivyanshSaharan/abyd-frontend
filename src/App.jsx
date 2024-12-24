import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import ReportPage from './pages/ReportPage';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/Signup';
import { useEffect, useState } from 'react';
import AIDocBuilder from './pages/AIDocBuilder';
import OnboardingQuestions from './components/OnboardingQuestions';
import LandingPage from './pages/LandingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const payloadBase64 = token.split('.')[1];
        const payload = JSON.parse(atob(payloadBase64));
        const expirationTime = payload.exp;
        const currentTime = Date.now() / 1000;

        if (expirationTime < currentTime) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        {/* <Route path="/report" element={isAuthenticated ? <ReportPage /> : <Navigate to="/login" />} /> */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        {/* <Route path="/ai-doc-builder" element={isAuthenticated ? <AIDocBuilder /> : <Navigate to="/login" />} /> */}
        <Route path="/ai-doc-builder" element={<AIDocBuilder />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path='/onboarding' element={<OnboardingQuestions />} />
        <Route path='home' element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
