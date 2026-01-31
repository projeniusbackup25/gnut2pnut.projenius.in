import React, { useState } from 'react';
import './ProductCard.css';
import Modal from './Modal'; // Import the Modal component
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FiStar key={i} className={`star ${i < rating ? 'filled' : ''}`} />
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tagClass = product.tag.toLowerCase().replace(' ', '-');
  
  return (
    <>
      <div className="product-card">
        {/* The image placeholder is now a real image */}
        <div className="product-image-container">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <div className="product-header">
            <h3 className="product-name">{product.name}</h3>
            <span className={`product-tag ${tagClass}`}>{product.tag}</span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-price-rating">
            <span className="product-price">₹{product.price}/{product.unit}</span>
            <StarRating rating={product.rating} />
          </div>
          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="product-actions">
            {/* This button now opens the modal */}
            <button className="order-button" onClick={() => setIsModalOpen(true)}>
              <FiShoppingCart /> Order Now
            </button>
            <button className="details-button">Details</button>
          </div>
        </div>
      </div>
      
      {/* The Modal for the popup message */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>We are not available currently.</h2>
        <p>We will launch soon!</p>
      </Modal>
    </>
  );
};

export default ProductCard;