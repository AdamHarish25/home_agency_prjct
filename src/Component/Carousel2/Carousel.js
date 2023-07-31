// src/components/Carousel.js
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Carousel.css";
import RatingStar from "../Rating/RatingStar";

const Carousel2 = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getTransformStyle = (index) => {
    if (index === currentIndex) return { transform: "translateX(0)" };
    if (index === (currentIndex + 1) % items.length)
      return { transform: "translateX(100%)", opacity: "70%", height: "350px" };
    if (index === (currentIndex - 1 + items.length) % items.length)
      return {
        transform: "translateX(-100%)",
        opacity: "70%",
        height: "350px",
      };
    return { display: "none" };
  };

  return (
    <div className="carousel-container">
      <div className="current-item">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="item"
            style={getTransformStyle(index)}
            onClick={() => handleItemClick(index)}
          >
            <RatingStar rating={item.rating} />

            <p>{item.comment}</p>

            <div className="inner-card">
              <img
                className="card-img"
                src={item.img}
                alt={`${item.name}'s Pic`}
              />
              <div>
                <h2 className="card-name">{item.name}</h2>

                <p>{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: items.length }).map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel2;
