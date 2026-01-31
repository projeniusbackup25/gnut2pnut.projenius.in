import React from 'react';
import './PredictionCalculator.css';
import { FiFileText, FiClock } from 'react-icons/fi';

const PredictionCalculator = ({ onCalculate }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      quantity: formData.get('quantity'),
      variety: formData.get('variety'),
      grade: formData.get('grade'),
      moisture: formData.get('moisture'),
    };
    onCalculate(data);
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <FiFileText className="calculator-icon" />
        <div className="calculator-title-group">
          <h3 className="calculator-title">Prediction Calculator</h3>
          <p className="calculator-subtitle">Enter your peanut specifications to get oil yield predictions</p>
        </div>
      </div>
      <form className="calculator-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quantity">Input Quantity (kg)</label>
          <input type="number" id="quantity" name="quantity" placeholder="Enter quantity in kg" defaultValue="500" />
        </div>
        <div className="form-group">
          <label htmlFor="variety">Peanut Variety</label>
          <select id="variety" name="variety" defaultValue="Java">
            <option value="Java">Java (45-48%)</option>
            <option value="Bold">Bold (48-52%)</option>
            <option value="Spanish">Spanish (50-55%)</option>
            <option value="Runner">Runner (46-50%)</option>
            <option value="Valencia">Valencia (44-47%)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <select id="grade" name="grade" defaultValue="B">
            <option value="A">Grade A - Premium Quality</option>
            <option value="B">Grade B - Standard Quality</option>
            <option value="C">Grade C - Lower Quality</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="moisture">Moisture Content (%)</label>
          <input type="number" id="moisture" name="moisture" placeholder="Enter moisture percentage" defaultValue="20" />
          <small className="optimal-note">Optimal moisture content: 6-8%</small>
        </div>
        <button type="submit" className="calculate-btn">
          <FiClock /> Calculate Oil Yield
        </button>
      </form>
    </div>
  );
};

export default PredictionCalculator;