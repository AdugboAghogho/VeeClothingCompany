import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQs = () => {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
      faq.addEventListener('click', () => {
          faq.classList.toggle('open');
  
          // change icon
          const icon = faq.querySelector('.faq__icon i');
          if(icon.className === 'uil uil-plus'){
              icon.className = "uil uil-minus"
          } else {
              icon.className = "uil uil-plus";
          }
      })
  })

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
              <h4>{Ask.title}</h4>
              <p className="hero__subtitle" >{Ask.name}</p>
            </div>
              <FaMinus className='uil uil-minus' />
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
