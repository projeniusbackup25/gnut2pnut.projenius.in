import React from "react";
import "./HeroSection.css";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Revolutionizing <span>Peanut Processing</span>
        </h1>
        <p>
          TechCrusaderz brings cutting-edge technology to groundnut cultivation
          and processing. From farm to factory, we provide comprehensive
          solutions for the peanut industry.
        </p>
        <div className="tech-hero-buttons">
          <Link to="/signup" className="tech-btn-primary">Get Started →</Link>
<a href="/product" className="tech-btn-secondary">View Products</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
