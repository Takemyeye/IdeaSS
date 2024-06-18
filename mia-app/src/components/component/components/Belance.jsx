import React from "react";
import '../../styles/Home.css';

const Belance = () => {

  const text = [
    'Belance', 
    'Your Trusted Partner in Modern Web Application Development',
    'About',
    'At Belance, we believe in the power of innovation. Our team of professionals specializes in creating high-quality web applications using the most advanced technologies.',
    'Our Services',
    'React Development',
    'Angular Development',
    'Next.js Applications',
    'Node.js Development',
    'PHP Development',
    'Our Company',
    'Belance is a forward-thinking web development company dedicated to bringing your digital visions to life. Our mission is to deliver state-of-the-art web applications that not only meet but exceed your expectations. We combine creativity, technology, and a deep understanding of modern web development to provide solutions that are both innovative and reliable.',
    'Why Belance?',
    'Choosing Belance means partnering with a team that is dedicated to your success. We bring technical expertise, creative vision, and a client-centric approach to every project. Let us help you navigate the digital landscape and achieve your business objectives.',
    'Design and Advertising Services',
    'At Belance, we don’t just stop at web development. We also offer a full range of design and advertising services to ensure your brand stands out and reaches your target audience effectively.',
    'Design Services',
    'Our talented design team specializes in creating visually appealing and user-friendly designs that enhance your digital presence. Whether it’s a sleek website, engaging graphics, or a cohesive brand identity, we ensure that every design element reflects your brand\'s vision and values.',
    'Advertising Services',
    'We help you get noticed in the digital world. Our advertising experts craft targeted campaigns that drive traffic, increase engagement, and boost conversions. From social media marketing to search engine advertising, we use data-driven strategies to maximize your ROI.',
  ];

  const img = ["img/angular.png","img/react.png",
    "img/php.png","img/node.png","img/next.png"
  ];

  return(
    <div className="belance-background">
        <div className="belance">
          <div className="belance-container">
            <div className="belance-title">
              {text[0]} 
              <div className="belance-logo"></div>
            </div>
            <div className="information">
              <div className="abaut">
                <div className="text">Services</div>
                  {text[3]}
                  <div className="services">
                    {text[4]}
                    <div className="skills-container">
                      {img.map((src, index) => (
                        <div className="skills" key={index}>
                          <div className="ui">
                            <img 
                              src={src} 
                              alt={`img ${index}`}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%"
                              }}
                            />
                          </div>
                          <div className="language">{text[index + 5]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="belance-container">
            <div className="abaut-title">
              {text[2]}
              <div className="abaut-logo"></div>
            </div>
            <div className="information">
              <div className="abaut">
                <div className="text">{text[10]}</div>
                <span>{text[11]}</span>
                <div className="text">{text[12]}</div>
                <span>{text[13]}</span>
                <div className="more">More...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Belance;