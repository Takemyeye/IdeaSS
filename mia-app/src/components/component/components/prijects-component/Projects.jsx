import React, { useMemo, useContext } from "react";
import '../styles/projects.scss';
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";

const img = {
  ssPortfolio: 'img/SS-Portfolio.png',
  sushi: 'img/Sushi-Italia.jpg',  
  ss: 'img/Soul-Swap.png',
  impactium: 'img/Impactium.jpg'
}

const Proud = () => {
  const { language } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="proud-container">
      <div className="title-container">
        <h5>{translation.ourWorks}</h5>
        <h1>{translation.ourProjectsTitle}</h1>
        <h3>{translation.projectsDescription1}</h3>
        <h3>{translation.projectsDescription2}</h3>
      </div>
      <div className="projects-container">
        <div className="projects">
          <div className="wallpaper">
            <a href="https://impactium.fun/" target="_blank" rel="noopener noreferrer">
              <img src={img.impactium} alt="Impactium" />
            </a>
          </div>
          <div className="description-projects">
            <h3>Impactium</h3>
            <h4>{translation.descriptionWork1}..</h4>
          </div>
        </div>
        <div className="projects">
          <div className="wallpaper">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src={img.sushi} alt="Sushi Italia" />
            </a>
          </div>
          <div className="description-projects">
            <h3>Sushi Italia</h3>
            <h4>{translation.descriptionWork2}..</h4>
          </div>
        </div>
        <div className="projects">
          <div className="wallpaper">
            <a href="https://soulswap-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={img.ssPortfolio} alt="Soul Swap" />
            </a>
          </div>
          <div className="description-projects">
            <h3>SS-Portfolio</h3>
            <h4>{translation.descriptionWork3}..</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proud;