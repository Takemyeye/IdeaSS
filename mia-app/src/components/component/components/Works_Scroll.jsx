import React, { useState, useEffect, useMemo } from "react";
import '../../styles/Home.css';

const RightPanelBottom = () => {
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
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightPanelBottom;