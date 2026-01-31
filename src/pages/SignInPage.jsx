import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';
import { FiLogIn } from 'react-icons/fi';

const SignInPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find the user with the matching email
    const user = users.find(user => user.email === email);

    // Check if user exists and password is correct
    if (user && user.password === password) {
      console.log('Sign In successful, navigating to Dashboard...');
      navigate('/dashboard'); // Navigate to dashboard on success
    } else {
      // Show an error message if credentials are wrong
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            <FiLogIn /> Sign In
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;