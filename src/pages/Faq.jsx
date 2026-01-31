import React, { useState, useMemo } from 'react';
import './Faq.css'; // Make sure you have the corresponding CSS file
import { 
    FiHelpCircle, FiStar, FiAward, FiBriefcase, FiPhone, FiSearch, 
    FiMessageSquare, FiDownload, FiEye, FiChevronDown, FiTool 
} from 'react-icons/fi';

// --- Accordion Item Component (included in the same file for simplicity) ---
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-question">
        <span>{question}</span>
        <FiChevronDown className="accordion-chevron" />
      </div>
      <div className="accordion-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

// --- All FAQ data is stored here for easy management ---
const faqData = [
  {
    category: 'General Questions',
    icon: <FiHelpCircle />,
    questions: [
      { q: 'What types of peanuts do you process?', a: 'We process a variety of peanuts including Bold, Java, Spanish, Runner, and Valencia, each selected for their unique oil content and quality.' },
      { q: 'What is the minimum order quantity?', a: 'Our minimum order quantity is 10 metric tons. For custom or smaller orders, please contact our sales team to discuss your specific needs.' },
      { q: 'Do you provide quality certificates?', a: 'Yes, all our shipments come with a comprehensive quality analysis certificate, detailing purity, moisture content, and other key metrics.' },
    ],
  },
  {
    category: 'Processing & Technology',
    icon: <FiStar />,
    questions: [
      { q: 'What is your oil extraction efficiency?', a: 'Our state-of-the-art machinery achieves an oil extraction efficiency of 48-52% on average, depending on the peanut variety and quality.' },
      { q: 'How do you ensure oil quality?', a: 'We use a multi-stage filtering process and regular quality checks to ensure the highest purity and quality of our peanut oil.' },
      { q: 'What happens to the by-products?', a: 'The peanut meal by-product is rich in protein and is processed into high-quality animal feed, ensuring a zero-waste production cycle.' },
      { q: 'How long does the processing take?', a: 'A standard batch of 10 tons is typically processed within 8-10 hours from cleaning to final oil extraction.' },
    ],
  },
  {
    category: 'Quality & Standards',
    icon: <FiAward />,
    questions: [
        { q: 'What quality grades do you offer?', a: 'We offer three primary grades: Grade A (Premium), Grade B (Standard), and Grade C (Economy), each with specific quality parameters.' },
        { q: 'How do you test oil purity?', a: 'Oil purity is tested in our in-house lab using gas chromatography to ensure it is free from contaminants and meets international standards.' },
        { q: 'What is your shelf life guarantee?', a: 'Our peanut oil is guaranteed a shelf life of at least 12 months from the date of manufacturing, thanks to our advanced processing and packaging.' },
    ]
  },
  {
    category: 'Business & Pricing',
    icon: <FiBriefcase />,
    questions: [
        { q: 'Do you offer contract farming?', a: 'Yes, we have contract farming programs available for large-scale and consistent supply. Please contact our business development team for more details.' },
        { q: 'What are your payment terms?', a: 'Our standard payment terms are 50% advance and 50% upon delivery. We also offer Letter of Credit (LC) options for international orders.' },
        { q: 'Do you provide transportation?', a: 'We can arrange for transportation and logistics at an additional cost. We partner with reliable logistics providers to ensure timely delivery.' },
        { q: 'Can I visit your processing facility?', a: 'Yes, we welcome our clients to visit our facility. Please schedule a visit with our team at least one week in advance.' },
    ]
  },
  {
    category: 'Technical Support',
    icon: <FiTool />,
    questions: [
        { q: 'What if my oil extraction rate is low?', a: 'Low extraction rates can be due to high moisture content or incorrect machine calibration. Our technical team can help diagnose the issue remotely or on-site.' },
        { q: 'How do I optimize my processing parameters?', a: 'We provide a detailed user manual with optimal settings for different peanut varieties. Our support team can also provide personalized recommendations.' },
        { q: 'What maintenance is required for equipment?', a: 'Regular maintenance includes cleaning the extraction chamber, checking belt tension, and monthly lubrication. A full schedule is provided upon purchase.' },
        { q: 'How do I handle equipment breakdowns?', a: 'In case of a breakdown, please contact our 24/7 technical support hotline. We offer immediate troubleshooting and can dispatch a technician if needed.' },
    ]
  }
];

// --- The Main FAQ Page Component ---
const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('General Questions');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = useMemo(() => {
    const categoryData = faqData.find(cat => cat.category === activeCategory);
    if (!categoryData) return [];
    if (!searchTerm) return categoryData.questions;

    return categoryData.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our peanut processing services, technology, and business operations.</p>
      </div>

      <div className="faq-search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for questions..."
          className="faq-search-bar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="faq-tabs">
        {faqData.map(cat => (
          <button
            key={cat.category}
            className={`faq-tab ${activeCategory === cat.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.icon} {cat.category}
          </button>
        ))}
      </div>

      <div className="faq-accordion">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(item => (
            <AccordionItem key={item.q} question={item.q} answer={item.a} />
          ))
        ) : (
          <p className="no-results">No questions found matching your search.</p>
        )}
      </div>

      <div className="faq-bottom-section">
        <div className="bottom-card help-card">
            <h3>Still Need Help?</h3>
            <p>Can't find what you're looking for? Our support team is here to help.</p>
            <button><FiMessageSquare/> Start Live Chat</button>
            <button><FiPhone/> Call Support: +91 98765 43210</button>
        </div>
        <div className="bottom-card docs-card">
            <h3>Technical Documentation</h3>
            <p>Access detailed technical guides and manuals.</p>
            <button><FiEye/> View Documentation</button>
            <button><FiDownload/> Download User Manual</button>
        </div>
      </div>
       <div className="most-popular">
          <h3>Most Popular Questions</h3>
          <div className="popular-grid">
              <div><h4>Processing Capacity</h4><p>Our facility can process 10-15 tons of peanuts per day with multiple processing lines.</p></div>
              <div><h4>Quality Guarantee</h4><p>We guarantee a minimum 45% oil extraction rate or provide a processing cost refund.</p></div>
              <div><h4>Delivery Time</h4><p>Standard orders are processed within 2-3 business days; rush orders within 24 hours.</p></div>
              <div><h4>Payment Security</h4><p>All payments are secured with bank-grade encryption, and we offer multiple payment options.</p></div>
          </div>
      </div>
    </section>
  );
};

export default Faq;