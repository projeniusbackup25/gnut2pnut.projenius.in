import React from 'react';
import './MarketRatesCard.css';
import { FiDollarSign } from 'react-icons/fi';

// The component now receives 'data' as a prop
const MarketRatesCard = ({ data }) => {
  return (
    <div className="market-rates-card">
      <div className="card-header">
        <FiDollarSign className="card-icon" />
        <div className="card-title-group">
          <h3 className="card-title">Current Market Rates</h3>
          <p className="card-subtitle">Today's groundnut prices by variety and grade</p>
        </div>
      </div>
      <div className="rates-container">
        {data.map((rate, index) => (
          <div className="rate-item" key={index}>
            <h4 className="rate-variety">{rate.variety}</h4>
            <p className="rate-price">₹{rate.price}/kg</p>
            <p className={`rate-change ${rate.change > 0 ? 'positive' : 'no-change'}`}>
              {rate.change > 0 ? `+₹${rate.change} from yesterday` : 'No change'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketRatesCard;