import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css';

const RightPanelBottom = () => {

  const text = ['Worked with']

  const images = useMemo(
    () => [
      'img/SS-Portfolio.png',
      'img/impactioum.jpg',
      'img/Sushi-Italia.jpg',
    ],
    []
  );

  const storedIndex = localStorage.getItem("currentImageIndex");
  const initialIndex = storedIndex ? Math.min(parseInt(storedIndex, 10), images.length - 1) : 0;

  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    localStorage.setItem("currentImageIndex", currentImageIndex.toString());
  }, [currentImageIndex]);

  return (
    <div className="works-scroll-background">
      <div className="works-scroll">
        <div className="img">
          <img
            src={images[currentImageIndex]}
            alt={`img ${currentImageIndex + 1}`}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="img-overlay">
          <div className="home-title"> 
            {text[0]}
            <div className="home-logo"></div>
          </div>
          <Link to={'/works'}>
            <div className="more"> See more... </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightPanelBottom;