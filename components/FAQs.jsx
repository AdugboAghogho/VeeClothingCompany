import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Asks } from './../constants/data';

import Accordion from './Accordion';

const FAQs = () => {



  d

 
  


 return (
    <div className=" faqs flex__center bg-blue-100">
      <h1 className="hero__title p-10">FAQs</h1>
      <div className="flex-center  faqs__container">
        {Asks.map(({title, content}) => (
          <Accordion title={title} content={content}  />
        ))}
      </div>

      <div className='mb-[5rem]'>
        <div className='mb-[5rem] h-[5rem]'></div>
      </div>
    </div>
  ); 
};

export default FAQs;








// </article>