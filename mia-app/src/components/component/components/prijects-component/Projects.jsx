import React, { useMemo, useContext } from "react";
import '../styles/projects.scss';
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";
import { ProjectUnit } from "./ProjectUnit";

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
        <ProjectUnit 
          link='https://impactium.fun'
          title='Impactium' 
          description={translation.descriptionWork1}
          image={img.impactium} />
        <ProjectUnit 
          link='https://example.com'
          title='Sushi Italia' 
          description={translation.descriptionWork2}
          image={img.sushi} />
        <ProjectUnit 
          link='https://soulswap-portfolio.netlify.app/'
          title='Soul Swap' 
          description={translation.descriptionWork3}
          image={img.ssPortfolio} />
      </div>
    </div>
  )
}

export default Proud;