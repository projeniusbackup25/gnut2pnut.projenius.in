import React from 'react';
import './OptimizationCard.css';
import { FiCheckCircle } from 'react-icons/fi';

const OptimizationCard = ({ title, description, impact, tags }) => {
  return (
    <div className="optimization-card">
      <div className="optimization-content">
        <h3 className="optimization-title">{title}</h3>
        <p className="optimization-description">{description}</p>
        <p className="optimization-impact">
          <strong>Expected Impact:</strong> {impact}
        </p>
      </div>
      <div className="optimization-actions">
        <div className="optimization-tags">
          {tags.map((tag, index) => (
            <span key={index} className={`opt-tag tag-${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>
          ))}
        </div>
        <button className="implement-btn">
          <FiCheckCircle /> Implement
        </button>
      </div>
    </div>
  );
};

export default OptimizationCard;