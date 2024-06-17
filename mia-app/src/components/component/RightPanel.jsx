import React, { useState, useEffect, useMemo } from "react";
import "../styles/Home.css";

const RightPanel = () => {
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
    <div className="rightPanel">
      <div className="developers-background">
        <div className="developers">
        </div>
      </div>
      <div className="works-scroll-background">
        <div className="back-blur">
          <div className="works-scroll">
            <div className="img">
              <img
                src={images[currentImageIndex]}
                alt={`img ${currentImageIndex + 1}`}
                style={{
                  objectFit: "conver",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;