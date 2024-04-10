import React, { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import './FAQs.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header"  onClick={() => setIsActive(!isActive)}>
      <div className="faq__icon ml-[30px] mt-[32px]">
        {isActive ? <FaMinus /> : <FaPlus />}
      </div>

      <div className="question__answer" >
        <h4 className="text-[17px] font-bold mr-[50px] mt-[27px]">{title}</h4>
        <p className="mt-10 ">{isActive}</p>
        {isActive && <p className="text-[17px] text-black-100 font-light">{content}</p>}
      </div>
    </div>    
  );

  
};

export default Accordion;