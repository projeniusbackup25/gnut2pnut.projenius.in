import React from 'react';
import './IssueCard.css';
import { FiAlertTriangle } from 'react-icons/fi';

const IssueCard = ({ title, subtitle, priority, currentPerf, optimalPerf, impact }) => {
  const priorityClass = priority.toLowerCase().replace(' ', '-');
  const isTemp = currentPerf.includes('°C');
  const isSpeed = currentPerf.includes('kg/h');

  return (
    <div className="issue-card">
      <div className="issue-card-header">
        <FiAlertTriangle className={`issue-icon ${priorityClass}`} />
        <div className="issue-title-group">
          <h3 className="issue-title">{title}</h3>
          <p className="issue-subtitle">{subtitle}</p>
        </div>
        <span className={`issue-priority-tag ${priorityClass}`}>{priority}</span>
      </div>
      <div className="issue-card-body">
        <div className="issue-metric">
          <span className="issue-metric-label">Current Performance</span>
          <span className={`issue-metric-value ${isTemp ? 'temp' : ''} ${isSpeed ? 'speed' : ''}`}>{currentPerf}</span>
        </div>
        <div className="issue-metric">
          <span className="issue-metric-label">Expected/Optimal</span>
          <span className="issue-metric-value optimal">{optimalPerf}</span>
        </div>
        <div className="issue-metric">
          <span className="issue-metric-label">Impact</span>
          <span className="issue-metric-value impact-text">{impact}</span>
          <button className="view-solutions-btn">View Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;