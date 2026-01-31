import React from "react";
import "./CallToAction.css";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Whether you are a farmer looking to sell your produce or a factory
          seeking fresh supplies, we’ve got you covered.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-btn farmer-btn">Join as Farmer</Link>
          <a href="/signup" className="cta-btn factory-btn">Factory Registration</a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
