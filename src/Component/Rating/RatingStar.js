import React from "react";
import "./RatingStar.css";
import {FaStar} from 'react-icons/fa';

const RatingStar = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="rating-star">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
