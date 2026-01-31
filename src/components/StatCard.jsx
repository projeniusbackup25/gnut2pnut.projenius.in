import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, target, belowTargetText }) => {
  const percentageValue = parseFloat(value);
  const progressWidth = (percentageValue / 100) * 100;
  
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <span className="stat-target">Target: {target}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-progress-bar-container">
        <div className="stat-progress-bar" style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className="stat-footer">{belowTargetText}</div>
    </div>
  );
};

export default StatCard;