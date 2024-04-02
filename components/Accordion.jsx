import React, { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fag" key={Math.random()}>
      <div className="faq__icon">
        <FaPlus />
      </div>

      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;