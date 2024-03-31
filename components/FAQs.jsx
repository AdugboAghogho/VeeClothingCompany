import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';

const FAQs = () => {
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  useEffect(() => {
    // Fetch FAQ data asynchronously here
    // ...
  }, []);

  const handleFAQToggle = (faqIndex) => {
    setExpandedFAQs((prevExpandedFAQs) =>
      prevExpandedFAQs.includes(faqIndex)
        ? prevExpandedFAQs.filter((index) => index !== faqIndex)
        : [...prevExpandedFAQs, faqIndex]
    );
  };

  return (
    <div className=" faqs flex__center bg-blue-100">
      <h2 className="hero__title">FAQs</h2>
      <div className="container1 faqs__container">
        {Asks.map((Ask, index) => (
          <article key={index} className="faq">
            <div className="faq__icon" onClick={() => handleFAQToggle(index)}>
              <i
                className={`uil ${
                  expandedFAQs.includes(index) ? 'uil-minus' : 'uil-plus'
                }`}
              ></i>
            </div>
            <div className="question__answer" aria-expanded={expandedFAQs.includes(index)}>
              <h4>{Ask.title}</h4>
              <p className="hero__subtitle" >{Ask.name}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
