import React from 'react';
import './AiRecommendationCard.css';
import { FiCheckCircle } from 'react-icons/fi';

const AiRecommendationCard = ({ title, description }) => {
  return (
    <div className="ai-rec-item">
      <FiCheckCircle className="ai-rec-icon" />
      <div className="ai-rec-content">
        <h4 className="ai-rec-title">{title}</h4>
        <p className="ai-rec-description">{description}</p>
      </div>
    </div>
  );
};

export default AiRecommendationCard;