import React, { useState, useEffect } from "react";
import "./MarketRates.css";

// Helper function to generate a random number for price fluctuation
const getRandomFluctuation = () => (Math.random() * 0.5 - 0.25).toFixed(2);

const initialRates = [
  { name: "Premium Grade", price: 85.0, change: "+2.5%" },
  { name: "Standard Grade", price: 72.0, change: "+1.8%" },
  { name: "Commercial Grade", price: 58.0, change: "+0.5%" },
];

const MarketRates = () => {
  // 1. Set up state to hold the market rates
  const [rates, setRates] = useState(initialRates);

  // 2. Use useEffect to update the rates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates => 
        prevRates.map(rate => {
          const newPrice = (parseFloat(rate.price) + parseFloat(getRandomFluctuation())).toFixed(1);
          const newChange = (Math.random() * 2 + 0.5).toFixed(1);
          return { ...rate, price: newPrice, change: `+${newChange}%` };
        })
      );
    }, 5000); // Update every 5000 milliseconds (5 seconds)

    // 3. Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // The empty array [] ensures this effect runs only once

  return (
    <section className="market-section">
      <h2>Today's Market Rates</h2>
      <p>Live groundnut prices based on quality grades and market demand.</p>

      <div className="market-cards">
        {/* 4. Map over the state to render the cards dynamically */}
        {rates.map((rate) => (
          <div className="market-card" key={rate.name}>
            <h3>{rate.name}</h3>
            <div className="price">₹{rate.price}/kg</div>
            <div className="change">{rate.change}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketRates;