import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';
import { FiUserPlus } from 'react-icons/fi';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Get existing users from localStorage, or create an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      setError('An account with this email already exists.');
    } else {
      // Add new user to the array
      users.push({ email, password });
      // Save the updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(users));
      
      console.log('Sign Up successful, navigating to Sign In page...');
      // Navigate to the sign-in page after successful registration
      navigate('/signin');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create an Account</h2>
        <p className="auth-subtitle">Join us and start optimizing your production.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Create a strong password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            <FiUserPlus /> Sign Up
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;