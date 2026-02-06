import React, { useState, useMemo } from 'react';
import './ProductsPage.css';
import ProductCard from '../components/ProductCard';
import { FiGrid, FiFeather, FiDroplet, FiStar, FiGitMerge } from 'react-icons/fi';
import { FaPhoneAlt } from "react-icons/fa";

// 1. Import your product images from the 'src/images' folder
//    (Replace these filenames with your actual image filenames)
import rawPeanutsImg from '../images/pre_raw_peanuts.webp';
import peanutOilImg from '../images/refined-groundnut-oil.webp';
import mealCakeImg from '../images/ground-nut-cake.webp';
import roastedPeanutsImg from '../images/dry-roasted-peanuts.webp';
import peanutShellsImg from '../images/groundnut_shell.jpg';
import blanchedPeanutsImg from '../images/Blanched_Peanuts.jpg';


// 2. Update the 'allProducts' array to use the imported images
const allProducts = [
  { id: 1, name: 'Premium Raw Peanuts', category: 'Raw Peanuts', tag: 'Grade A', description: 'High-quality raw peanuts, perfect for processing and direct consumption.', price: 85, unit: 'kg', rating: 5, features: ['Bold variety', 'Oil content: 48-52%', 'Moisture: 6-8%'], imageUrl: rawPeanutsImg },
  { id: 2, name: 'Refined Peanut Oil', category: 'Peanut Oil', tag: 'Premium', description: 'Pure, refined peanut oil with excellent cooking properties.', price: 180, unit: 'L', rating: 5, features: ['Cold pressed', 'Filtered', 'High smoke point'], imageUrl: peanutOilImg },
  { id: 3, name: 'Peanut Meal Cake', category: 'By-products', tag: 'Standard', description: 'Protein-rich cattle feed from oil extraction process.', price: 25, unit: 'kg', rating: 4, features: ['35% protein', 'Animal feed', 'Organic fertilizer'], imageUrl: mealCakeImg },
  { id: 4, name: 'Roasted Peanuts', category: 'Processed', tag: 'Premium', description: 'Perfectly roasted peanuts ready for consumption.', price: 120, unit: 'kg', rating: 5, features: ['Salted', 'Crispy texture', 'Extended shelf life'], imageUrl: roastedPeanutsImg },
  { id: 5, name: 'Peanut Shells', category: 'By-products', tag: 'Bulk', description: 'Natural peanut shells for various industrial applications.', price: 8, unit: 'kg', rating: 3, features: ['Biomass fuel', 'Packaging material', 'Garden mulch'], imageUrl: peanutShellsImg },
  { id: 6, name: 'Blanched Peanuts', category: 'Processed', tag: 'Grade A', description: 'Skin-removed peanuts for food processing industries.', price: 95, unit: 'kg', rating: 5, features: ['Uniform size', 'Food grade', 'Ready to use'], imageUrl: blanchedPeanutsImg },
];

const categories = [
    { name: 'All Products', icon: <FiGrid /> },
    { name: 'Raw Peanuts', icon: <FiFeather /> },
    { name: 'Peanut Oil', icon: <FiDroplet /> },
    { name: 'Processed', icon: <FiStar /> },
    { name: 'By-products', icon: <FiGitMerge /> },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="products-page">
      <div className="products-header">
        <h2 className="products-title">Our Products</h2>
        <p className="products-subtitle">
          Discover our comprehensive range of premium peanut products and by-products, processed with state-of-the-art technology for superior quality.
        </p>
      </div>

      <nav className="product-tabs">
        {categories.map(cat => (
          <button
            key={cat.name}
            className={`product-tab ${activeCategory === cat.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </nav>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="custom-products-banner">
        <h3>Need Custom Products?</h3>
        <p>We offer customized processing solutions for bulk orders and specific requirements. Contact our team for personalized quotations.</p>
        <div>
            
            <a href="/contact" className="quote-button">Request Quote</a>
            
            <a href="tel:9025476322" className="contact-team-button">
                            <FaPhoneAlt className="icon" /> Contact Sales Team
                          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;