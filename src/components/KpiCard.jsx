import React from 'react';
import './KpiCard.css';

const KpiCard = ({ title, value, unit, change, description, icon: Icon, type }) => {
  const changeClass = change && change.includes('+') ? 'positive' : change && change.includes('-') ? 'negative' : '';

  return (
    <div className={`kpi-card ${type}`}>
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        {Icon && <Icon className="kpi-icon" />}
      </div>
      <div className="kpi-value">{value} {unit}</div>
      {change && (
        <div className={`kpi-change ${changeClass}`}>
          {change} {description}
        </div>
      )}
    </div>
  );
};

export default KpiCard;