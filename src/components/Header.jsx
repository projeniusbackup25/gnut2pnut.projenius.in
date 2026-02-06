import React from "react";
import { Link } from "react-router-dom";// Import NavLink
import "./Header.css";

const Header = () => {
  return (
    <header className="tech-header">
      <div className="tech-header-logo">TechCrusaderz</div>
      <nav className="tech-header-nav">
        <a href="/">Home</a>
        <a href="/product">Products</a>
        
        

        <a href="/dashboard">Dashboard</a>
        <a href="/predictions">Predictions</a>
        <a href="/suggestions">Suggestions</a>
        
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
     

        <Link to="/signin" className="tech-signin">Sign In</Link>
        <Link to="/signup" className="tech-signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;