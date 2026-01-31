import React from 'react';
import './Contact.css';
import { FiPhone, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Get in touch with our expert team for technical support, business inquiries, or partnership opportunities.
        </p>
      </div>

      <div className="contact-cards-container">
        <div className="contact-card">
          <FiPhone className="contact-icon green" />
          <h3>Phone Support</h3>
          <p>Speak with our technical experts</p>
          <a href="tel:+919876543210" className="contact-detail">+91 98765 43210</a>
          <span className="contact-tag">24/7 Available</span>
          <button className="contact-button">Contact Now</button>
        </div>
        <div className="contact-card">
          <FiMail className="contact-icon blue" />
          <h3>Email Support</h3>
          <p>Get detailed technical assistance</p>
          <a href="mailto:support@techcrusaderz.com" className="contact-detail">support@techcrusaderz.com</a>
          <span className="contact-tag">Response within 2 hours</span>
          <button className="contact-button">Contact Now</button>
        </div>
        <div className="contact-card">
          <FiMessageSquare className="contact-icon purple" />
          <h3>Live Chat</h3>
          <p>Instant help with processing queries</p>
          <div className="contact-detail">Chat Now</div>
          <span className="contact-tag">9 AM - 9 PM IST</span>
          <button className="contact-button">Contact Now</button>
        </div>
      </div>

      <div className="contact-form-container">
        <div className="form-header">
          <FiSend />
          <h3>Send us a Message</h3>
        </div>
        <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="your.email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company/Organization</label>
            <input type="text" id="company" placeholder="Your company name (optional)" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="What can we help you with?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tell us more about your inquiry..."></textarea>
          </div>
          <button type="submit" className="send-button">
            <FiSend /> Send Message
          </button>
          <p className="form-disclaimer">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;