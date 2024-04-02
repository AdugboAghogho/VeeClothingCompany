import React, { useState } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQs = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleFAQToggle = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="faqs flex__center bg-blue-100">
      <h1 className="hero__title pl-5">Faq</h1>
      <div className="flex-center faqs__container">
        {Asks.map((Ask, index) => (
          <article key={index} className="faq h-20">
            <div
              className="faq__icon"
              onClick={() => handleFAQToggle(index)}
            >
              {expandedIndexes.includes(index) ? (
                <FaMinus className="uil uil-minus" />
              ) : (
                <FaPlus className="uil uil-plus" />
              )}
            </div>
            <div className="question__answer">
              <h4 className="accordino-title">{Ask.title}</h4>
              <p
                className={`hero__subtitle accordino-content ${
                  expandedIndexes.includes(index) ? 'show' : ''
                }`}
              >
                {Ask.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
