import React, { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import './FAQs.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header" key={Math.random()}>
      <div className="faq__icon">
        <FaPlus />
      </div>

      <div className="question__answer " onClick={() => setIsActive(!isActive)}>
        <h4 className="text-[17px]">{title}</h4>
        <p className="mt-10 ">{isActive}</p>
        {isActive && <p className="text-[17px] text-black-100 font-light">{content}</p>}
      </div>

      {/* <div className="content"> */}
      {/* </div> */}
    </div>
  );
};

export default Accordion;