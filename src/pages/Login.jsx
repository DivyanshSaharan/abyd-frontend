import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import './Login.css';
import assets from '../assets/assets';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
        setError(response.data.message || 'Login successful');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img src={assets.abyd} alt="" />
          <p>A DIY Toolkit for Data Protection & Privacy Laws for Startups</p>
        </div>
        <div className="login-right">
          <h2>Log In</h2>
          <button className="google-login-button">
            <img className='google-icon' src={assets.googleIcon} alt="" />
            Sign Up using Google
          </button>
          <div className="separator">
            <div className="separator">
              <hr />
              <span>Or</span>
              <hr />
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <p className='email-login-title'>Log in using email address</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <div className="button-container">
              <button type="submit" className="login-button">Log In</button>
            </div>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
