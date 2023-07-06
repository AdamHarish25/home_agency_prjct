import React, { useState } from "react";
import "./FaqAccordion.css"; // Import your CSS file for styling
import { FaCaretDown } from "react-icons/fa";

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${index === activeIndex ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            <p>{faq.question}</p>
            <span className={`arrow ${index === activeIndex ? "open" : ""}`}>
              <FaCaretDown />
            </span>
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: index === activeIndex ? "600px" : "0", // Use maxHeight to animate the height of the answer section
              opacity: index === activeIndex ? "1" : "0", // Use opacity to animate the opacity of the answer section
              padding: index === activeIndex ? "16px" : "0px"
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
