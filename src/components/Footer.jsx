import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Logo */}
        <div className="footer-column">
          {/* You should replace 'logo.png' with the actual path to your logo image */}
          <img src={logo} alt="TechCrusaderz Logo" className="footer-logo-img" />
        </div>

        {/* Column 2: About */}
        <div className="footer-column">
          <h3 className="footer-logo-text">TechCrusaderz</h3>
          <p className="footer-logo-p">Leading peanut processing technology for farmers and factories. Transforming agriculture with smart solutions.</p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#products">Products</a></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/predictions">Oil Predictions</Link></li>
            <li><Link to="/suggestions">Processing Tips</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><FaMapMarkerAlt className="icon" /> Karthi home, Madurai 16.</li>
            <li>
              <a href="tel:9025476322">
                <FaPhoneAlt className="icon" /> 9025476322
              </a>
            </li>
            <li>
              <a href="mailto:karthi@gmail.com">
                <FaEnvelope className="icon" /> gnut2pnut.projenius.in@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TechCrusaderz. All rights reserved.</p>
        <p> <span style={{ color: '#ff6600ff' }}>
          <a
            href="https://projenius.in/"
            target="_blank"
            rel="noopener noreferrer"
            className='footerbutton'
            style={{ color: 'black', textDecoration: 'none' }}
          >
            PROJENIUS
          </a>
        </span></p>
      </div>
    </footer>
  );
};

export default Footer;
