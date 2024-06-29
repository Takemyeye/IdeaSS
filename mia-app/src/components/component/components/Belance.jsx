import React, { useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

const img = [
  'img/angular.png',
  'img/react.png',
  'img/php.png',
  'img/node.png',
  'img/next.png'
];

const languageDevelopment = [   
  'Angular Development',
  'React Development',
  'PHP Development',
  'Node.js Development',
  'Next.js Applications'
];

const Belance = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="belance-background">
      <div className="belance">
        <div className="belance-container">
          <div className="home-title">
            {translation.companyName}
            <div className="home-logo"></div>
          </div>
          <div className="information">
            <div className="about">
              <div className="text">{translation.servicesTitle}</div>
              {translation.aboutText}
              <div className="services">
                {translation.servicesTitle}
                <div className="skills-container">
                  {img.map((src, index) => (
                    <div className="skills" key={index}>
                      <div className="ui">
                        <img
                          src={src}
                          alt={`img ${index}`}
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }}
                        />
                      </div>
                      <div className="language">{languageDevelopment[index]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="belance-container">
          <div className="home-title">
            {translation.aboutTitle}
            <div className="home-logo"></div>
          </div>
          <div className="information">
            <div className="about">
              <div className="text">{translation.companyTitle}</div>
              <span>{translation.companyDescription}</span>
              <div className="text">{translation.whyBelanceTitle}</div>
              <span>{translation.whyBelanceText}</span>
              <Link to={'/about'}>
                <div className="more">{translation.moreButtonText}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belance;