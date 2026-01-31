import React from 'react';
import './AnalysisCard.css';

const AnalysisCard = ({ title, subtitle, icon: Icon, children }) => {
  return (
    <div className="analysis-card">
      <div className="analysis-card-header">
        <Icon className="analysis-card-icon" />
        <div className="analysis-title-group">
          <h3 className="analysis-title">{title}</h3>
          <p className="analysis-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="analysis-card-body">
        {children}
      </div>
    </div>
  );
};

export default AnalysisCard;