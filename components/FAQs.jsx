import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQs = () => {
  const accordinoItems = document.querySelectorAll('.accordino-item');

accordinoItems.forEach(item => {
  const title = item.querySelector('.accordino-title');
  const content = item.querySelector('.accordino-content');

  title.addEventListener('click', () => {
    accordinoItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      } else {
        item.classList.toggle('active');
      }
    });
  });
});















 return (
    <div className=" faqs flex__center bg-blue-100">
      <h1 className="hero__title pl-5">Faq</h1>
      <div className="flex-center  faqs__container">
        {Asks.map((Ask, index) => (
          <article key={index} className="faq">
            <div className="faq__icon">
              <FaPlus className='uil uil-plus'/>
            </div>

            <div className="question__answer">
              <h4 className='accordino-title'>{Ask.title}</h4>
              <p className="hero__subtitle accordino-content" >{Ask.name}</p>
            </div>
              <FaMinus className='uil uil-minus' />
          </article>
        ))}
      </div>
    </div>
  ); 
};

export default FAQs;
