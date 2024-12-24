import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import assets from '../assets/assets';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/signup', {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <p>Sign Up with your work Google account or use the form</p>
        <button className="google-login-button">
          <img className='google-icon' src={assets.googleIcon} alt="" />
          Sign Up using Google
        </button>
        <div className="divider">Or</div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Startup name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Business email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
