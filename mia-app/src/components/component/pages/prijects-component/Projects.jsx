import React, { useMemo, useContext } from "react";
import '../styles/projects.scss';
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";
import { ProjectUnit } from "./ProjectUnit";

const img = {
  ssPortfolio: 'img/SS-Portfolio.png',
  sushi: 'img/Sushi-Italia.jpg',  
  ss: 'img/Soul-Swap.png',
  impactium: 'img/Impactium.jpg',
  compress: 'img/compress.png',
  dolcevita: 'img/DolceVita.png',
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
        <ProjectUnit 
          link='https://belance-compress.netlify.app/'
          title='Belance Compress' 
          description={translation.descriptionWork4}
          image={img.compress} />
        <ProjectUnit 
          link='https://dolce-vita.netlify.app/'
          title='Dolce Vita' 
          description={translation.descriptionWork5}
          image={img.dolcevita} />
      </div>
    </div>
  )
}

export default Proud;