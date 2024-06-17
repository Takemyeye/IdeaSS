import React from "react";
import '../styles/Home.css'

const LeftPanel = () => {

  const text = ['Belance', 'Your Trusted Partner in Modern Web Application Development',
    'About Us','At Belance, we believe in the power of innovation. Our team of professionals specializes in creating high-quality web applications using the most advanced technologies.',
    'Our Services','React Development',
    'Angular Development','Next.js Applications',
    'Node.js Development','PHP Development',
  ];

  const img = ["img/angular.png","img/react.png","img/php.png",
    "img/node.png","img/next.png"
  ];

  return (
   <div className="leftPanel">
     <div className="belance-background">
        <div className="belance">
          <div className="belance-container">
            <div className="belance-title">
              {text[0]} 
              <div className="belance-logo"></div>
            </div>
            <div className="information">
              <div className="text">Services</div>
                {text[3]}
                <div className="services">
                  {text[4]}
                  <div className="skills">
                    <div className="ui">
                    <img 
                        src={img[1]} 
                        alt='img'
                        style={{
                        objectFit: "conver",
                        width: "100%",
                        height: "100%",
                        }}
                      />
                    </div>
                    <div className="language">{text[5]}</div>
                  </div>
                  <div className="skills">
                    <div className="ui">
                      <img 
                        src={img[0]} 
                        alt='img'
                        style={{
                        objectFit: "conver",
                        width: "100%",
                        height: "100%",
                        }}
                      />
                    </div>
                    <div className="language">{text[6]}</div>
                  </div>
                  <div className="skills">
                    <div className="ui">
                    <img 
                        src={img[4]} 
                        alt='img'
                        style={{
                        objectFit: "conver",
                        width: "100%",
                        height: "100%",
                        }}
                      />
                    </div>
                    <div className="language">{text[7]}</div>
                  </div>
                  <div className="skills">
                    <div className="ui">
                    <img 
                        src={img[3]} 
                        alt='img'
                        style={{
                        objectFit: "conver",
                        width: "100%",
                        height: "100%",
                        }}
                      />
                    </div>
                    <div className="language">{text[8]}</div>
                  </div>
                  <div className="skills">
                    <div className="ui">
                    <img 
                        src={img[2]} 
                        alt='img'
                        style={{
                        objectFit: "conver",
                        width: "100%",
                        height: "100%",
                        }}
                      />
                    </div>
                    <div className="language">{text[9]}</div>
                  </div>
                </div>
            </div>
          </div>
          <div className="belance-container">

          </div>
        </div>
      </div>
      <div className="description-container">
          <div className="description-background-left">
            <div className="description">

            </div>
          </div>
          <div className="description-background-right">
            <div className="description">
              
            </div>
          </div>
      </div>
   </div>
  );
};

export default LeftPanel;