import React, { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import './FAQs.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="fag" key={Math.random()}>
      <div className="faq__icon">
        <FaPlus />
      </div>

      <div className="question__answer" onClick={() => setIsActive(!isActive)}>
        <h4>{title}</h4>
        <p className="hero__subtitle">{isActive}</p>
        {isActive && <p className="hero__subtitle">{content}</p>}
      </div>

      {/* <div className="content"> */}
      {/* </div> */}
    </article>
  );
};

export default Accordion;