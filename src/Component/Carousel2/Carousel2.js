import React, { useEffect, useState } from "react";
import RatingStar from "../Rating/RatingStar";
import './Carousel2.css'
import { useRef } from "react";

const Carousel2 = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [touchPosition, setTouchPosition] = useState(null);

  const containerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

   const handleTouchStart = (e) => {
     const touchDown = e.touches[0].clientX;
     setTouchPosition(touchDown);
   };

   const handleTouchMove = (e) => {
     const touchDown = touchPosition;

     if (touchDown === null) {
       return;
     }

     const currentTouch = e.touches[0].clientX;
     const diff = touchDown - currentTouch;

     if (diff > 5) {
       handleNext();
     }

     if (diff < -5) {
       handlePrev();
     }

     setTouchPosition(null);
   };

   const handleDragStart = (e) => {
     setDragStartX(e.clientX);
     setIsDragging(true);
   };

   const handleDrag = (e) => {
     if (isDragging) {
       const dragDistance = e.clientX - dragStartX;
       setDraggedDistance(dragDistance);
     }
   };

   const handleDragEnd = () => {
     if (isDragging) {
       const containerWidth = containerRef.current.offsetWidth;
       const itemWidth = containerWidth / items.length;
       const threshold = itemWidth * 0.3; // Adjust the threshold value as needed

       if (draggedDistance < -threshold) {
         handleNext();
       } else if (draggedDistance > threshold) {
         handlePrev();
       }

       setDraggedDistance(0);
       setIsDragging(false);
       setIsPaused(false)
     }
   };
  

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isPaused){
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
    <div className="carousel-container2">
      <div className="current-item">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="item"
            style={getTransformStyle(index)}
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleDragEnd}
            ref={containerRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <RatingStar rating={item.rating} />

            <p>{item.comment}</p>

            <div className="inner-card">
              <img
                draggable={false}
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

      <div className="carousel-indicators2">
        {Array.from({ length: items.length }).map((_, index) => (
          <button
            key={index}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`carousel-indicator2 ${
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
