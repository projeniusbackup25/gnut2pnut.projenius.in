import React from "react";
import "./Feature.css";
import { FaLeaf, FaChartLine, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Smart Processing",
      description:
        "Advanced peanut processing with AI-powered quality control and grading systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Analytics",
      description:
        "Real-time market rates and trend analysis for better pricing decisions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description:
        "Comprehensive quality control with multiple grading levels and certifications.",
    },
    {
      icon: <FaUserFriends />,
      title: "Farmer Network",
      description:
        "Connect directly with farmers and factories for seamless trade operations.",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose TechCrusaderz?</h2>
      <p className="features-subtitle">
        Comprehensive solutions for modern peanut processing and agricultural
        management.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
