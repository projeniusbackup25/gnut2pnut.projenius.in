import React from 'react';
import './PredictionPlaceholder.css';
// Import FaCalculator from 'react-icons/fa' instead
import { FaCalculator } from 'react-icons/fa';

const VarietyInfo = ({ name, description, range }) => (
  <div className="variety-item">
    <div className="variety-details">
      <h5 className="variety-name">{name}</h5>
      <p className="variety-description">{description}</p>
    </div>
    <span className="variety-range">{range}</span>
  </div>
);

const PredictionPlaceholder = () => {
  return (
    <>
      <div className="placeholder-card ready-card">
        {/* Use the new FaCalculator icon here */}
        <FaCalculator className="ready-icon" />
        <h4 className="ready-title">Ready to Calculate</h4>
        <p className="ready-text">Fill in the form on the left to get your oil yield prediction</p>
      </div>
      <div className="placeholder-card info-card">
        <h4 className="info-title">Variety Information</h4>
        <p className="info-subtitle">Oil content ranges for different peanut varieties</p>
        <div className="variety-list">
          <VarietyInfo name="Bold" description="High oil content variety" range="48-52%" />
          <VarietyInfo name="Java" description="Medium oil content, good quality" range="45-48%" />
          <VarietyInfo name="Spanish" description="Highest oil content variety" range="50-55%" />
          <VarietyInfo name="Runner" description="Balanced oil content and size" range="46-50%" />
          <VarietyInfo name="Valencia" description="Lower oil content, sweet variety" range="44-47%" />
        </div>
      </div>
    </>
  );
};

export default PredictionPlaceholder;