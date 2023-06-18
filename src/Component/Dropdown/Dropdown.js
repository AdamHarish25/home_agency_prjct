import React, { useState } from "react";
import "./Dropdown.css";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown-container">
      <button
        className={`dropdown-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dropdown-link">{selectedOption.title}</div>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <FaChevronDown />
        </span>
      </button>
      {isOpen && (
        <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
          {options.map((option) => (
            <li
              key={option.filter}
              className={`dropdown-item 
              ${selectedOption === option ? "hidden" : "block"}
              ${selectedOption.filter === option.filter ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              <p>{option.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
