import React from 'react';
import './PredictionResult.css';
import { FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

const PredictionResult = ({ data }) => {
  return (
    <div className="result-card">
      <div className="result-header">
        <FiTrendingUp className="result-icon" />
        <h3 className="result-title">Prediction Results</h3>
      </div>

      <div className="main-result">
        <div className="result-value">{data.oilOutput} L</div>
        <div className="result-label">Expected Oil Output</div>
      </div>

      <div className="sub-results">
        <div className="sub-result-item">
          <div className="sub-result-value">{data.efficiency}%</div>
          <div className="sub-result-label">Extraction Efficiency</div>
        </div>
        <div className="sub-result-item">
          <div className="sub-result-value">₹{data.value.toLocaleString('en-IN')}</div>
          <div className="sub-result-label">Estimated Value</div>
        </div>
      </div>

      <div className="breakdown">
        <h4 className="breakdown-title">Calculation Breakdown</h4>
        <div className="breakdown-item">
          <span>Base Oil Content ({data.breakdown.variety}):</span>
          <span>{data.breakdown.base}%</span>
        </div>
        <div className="breakdown-item">
          <span>Grade Effect (Grade {data.breakdown.grade}):</span>
          <span>{data.breakdown.gradeEffect}%</span>
        </div>
        <div className="breakdown-item">
          <span>Moisture Adjustment:</span>
          <span>{data.breakdown.moistureEffect}%</span>
        </div>
      </div>

      <div className="notes">
        <FiAlertCircle className="notes-icon" />
        <div className="notes-content">
          <h4 className="notes-title">Important Notes</h4>
          <ul>
            <li>Results are estimates based on ideal conditions</li>
            <li>Actual yield may vary by ±5-10%</li>
            <li>Machine efficiency affects final output</li>
            <li>Regular calibration improves accuracy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;