import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';

import Accordion from './Accordion';

const FAQs = () => {


 return (
    <div className=" faqs flex__center bg-blue-100">
      <h1 className="hero__title pl-5">Faq</h1>
      <div className="flex-center  faqs__container">
        {Asks.map(({title, content}) => (
          <Accordion title={title} content={content}  />
        ))}
      </div>
    </div>
  ); 
};

export default FAQs;




//   </div>

ggvc
//     <h4 className='accordino-title'>{Ask.title}</h4>
//     <p className="hero__subtitle accordino-content" >{Ask.name}</p>
//   </div>
//     <FaMinus className='uil uil-minus' />
// </article>