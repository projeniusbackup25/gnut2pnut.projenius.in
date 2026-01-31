import React from 'react';
import './RealtimeGradingAnalysis.css';
import { FiSliders } from 'react-icons/fi';

// The component now receives 'data' as a prop
const RealtimeGradingAnalysis = ({ data }) => {
  return (
    <div className="grading-analysis-card">
      <div className="card-header">
        <FiSliders className="card-icon" />
        <div className="card-title-group">
          <h3 className="card-title">Real-time Grading Analysis</h3>
          <p className="card-subtitle">Current batch sorting and grading results</p>
        </div>
      </div>

      <div className="grading-metrics">
        {data.grades.map((grade, index) => (
          <div className="grade-item" key={index}>
            <span className={`grade-percentage ${grade.color}`}>{grade.percentage}%</span>
            <span className="grade-label">{grade.label}</span>
            <div className="progress-bar-container">
              <div className={`progress-bar ${grade.color}`} style={{ width: `${grade.percentage}%` }}></div>
            </div>
            <span className="grade-weight">{grade.weight} kg</span>
          </div>
        ))}
      </div>

      <div className="current-batch-status">
        <h4 className="status-title">Current Batch Status</h4>
        <div className="status-row">
          <span className="status-label">Intake Quantity:</span>
          <span className="status-value">{data.batchStatus.intake} kg</span>
          <span className="status-label">Processing Time:</span>
          <span className="status-value">{data.batchStatus.time}</span>
        </div>
        <div className="status-row">
          <span className="status-label">Current Weight:</span>
          <span className="status-value green">{data.batchStatus.currentWeight} kg</span>
          <span className="status-label">Completion:</span>
          <span className="status-value">{data.batchStatus.completion}%</span>
        </div>
      </div>
    </div>
  );
};

export default RealtimeGradingAnalysis;