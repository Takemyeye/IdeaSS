import React from "react";
import '../styles/about.css';

const aboutText = [
  'About Us',
  'Crafting Exceptional Web Experiences',
  'At Belance, we are a dedicated team of passionate web developers and designers, committed to crafting innovative and user-friendly websites. Our mission is to empower businesses and organizations by establishing a robust online presence and helping them achieve their digital objectives. Our comprehensive services include website development and promotion, ensuring that our clients` digital platforms are not only aesthetically pleasing but also highly functional and optimized for success.',
  'Our History',
  'Belance was founded in 2024 with a clear mission: to boost productivity in the web development industry and beyond. A team of passionate web developers and designers came together to create innovative and user-friendly digital solutions.',
]

const LeftPanel = () => {
  return (
    <div className="container-left">
      <div className="about-text-container">
        <span> {aboutText[1]} </span>
        <span> {aboutText[2]} </span>
      </div>
      <div className="about-text-container">
        <span> {aboutText[3]} </span>
        <span> {aboutText[4]} </span>
      </div>
    </div>
  );
}

export default LeftPanel;