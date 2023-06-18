import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Carousel.css";
import { useViewport } from "../Viewport";

const Carousel = (props) => {
  var { children, show } = props;

  const viewport = useViewport().windowSize;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Length, setLength] = useState(children && children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  const containerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setLength(children && children.length);
    const handleWinResize = () => {
      setCurrentIndex(0);
    }

    window.addEventListener('resize', handleWinResize);

    return() => {
      window.removeEventListener('resize', handleWinResize);
    }
  }, [children]);

  const next = () => {
    if (currentIndex < Length - show) {
      setCurrentIndex((prefState) => prefState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prefState) => prefState - 1);
    }
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
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };
  

   const handleDragStart = (e) => {
     setDragStartX(e.clientX);
     setIsDragging(true)
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
      const itemWidth = containerWidth / Length;
      const threshold = itemWidth * 0.3; // Adjust the threshold value as needed

      if (draggedDistance < -threshold) {
        next();
      } else if (draggedDistance > threshold) {
        prev();
      }

      setDraggedDistance(0);
      setIsDragging(false);
     }
   };

  var carouselCountDisplay;

  if (show > 2) {
    if (viewport.innerWidth < 1080 && viewport.innerWidth >= 780) {
      show = 2;
      carouselCountDisplay = `shows-${show}`;
    } else if (viewport.innerWidth < 780 && viewport.innerWidth >= 0) {
      show = 1;
      carouselCountDisplay = `shows-${show}`;
    } else if (viewport.innerWidth > 1600) {
      show = 4;
      carouselCountDisplay = `shows-${show}`;
    } else {
      carouselCountDisplay = `shows-${show}`;
    }
  } else {
    if (viewport.innerWidth <= 1000 && viewport.innerWidth > 0) {
      show = 1;
      carouselCountDisplay = `shows-${show}`;
    } else {
      carouselCountDisplay = `shows-${show}`;
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content ${carouselCountDisplay}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <div className="carousel-indicators">
            {Array.from({length: Length - show + 1}).map((_, index) => (
              <button key={index} className={`carousel-indicator ${currentIndex === index ? "active" : ""}`} onClick={() => setCurrentIndex(index)}/>

            ))}
      </div>

      <div className={`button-box ${viewport.innerWidth < 1024 ? "hidden" : ""}`}>
        <button
          onClick={prev}
          className={`left-arrow ${
            currentIndex > 0 && "opacity-100 cursor-pointer"
          } transition-opacity duration-300`}
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={next}
          className={`right-arrow ${
            currentIndex < Length - show && "opacity-100 cursor-pointer"
          } transition-opacity duration-300`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
