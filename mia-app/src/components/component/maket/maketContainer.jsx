import React, { useMemo, useContext } from 'react';
import { ProjectUnit } from "../../../ui/ProjectUnit"
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

  const img = {
    landing_deploy: 'img/landing_deploy.png',
    landing_no_name: 'img/landing_no_name.jpg',
    landing_sushi_italy: "img/landing_sushi_italy.jpg",
    landing_dolce_vita: "img/DolceVita.png",
  }

export function MaketContainer () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="designContainer">
      <ProjectUnit 
        link='https://github.com/Takemyeye/LandingPage-deploy'
        title='Deploy.Ai'
        image={img.landing_deploy} 
        description={translation.landingPageReact}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/landingPage'
        title='No Name'
        image={img.landing_no_name} 
        description={translation.landingPageReact}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/Sushi-Italia'
        title='Sushi Italy'
        image={img.landing_sushi_italy} 
        description={translation.landingPageReact}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/landingPage'
        title='Sushi Italy'
        image={img.landing_dolce_vita} 
        description={translation.landingPageReact}
      />
    </div>
  )
}
