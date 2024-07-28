import { ProjectUnit } from "./pages/prijects-component/ProjectUnit";
import React from "react";
import Header from "../Header";
import Footer from "./footer";
import "../styles/maket.scss";

  const img = {
    deploy: 'img/landing_deploy.png',
  }

const Maket = () => {

  return (
    <>
    <Header/>
    <div className="maket">
      <div className="text">
        <h5>Наши макеты</h5>
        <h1>Макеты, готовые к использованию</h1>
        <h3>Некоторые макеты созданы с использованием React.js, HTML, CSS, SCSS, Less и TypeScript. Мы предлагаем разнообразные макеты, чтобы удовлетворить ваши уникальные потребности и предпочтения. Наши макеты подходят для различных проектов - от простых веб-страниц до сложных веб-приложений. Макеты на React.js обеспечивают динамичность и отзывчивость, что идеально подходит для современных веб-приложений.</h3>     
        <h3>Традиционные макеты, созданные с использованием HTML и CSS, легки в использовании и адаптации, подходящие для большинства веб-проектов. SCSS и Less позволяют создавать более организованные и поддерживаемые стили, что особенно полезно для крупных проектов.</h3>
      </div>
      <div className="maketContainer">
      <ProjectUnit 
        link='/'
        title='Deploy Maket'
        image={img.deploy} 
      />
      <ProjectUnit 
        link='/'
        title='Deploy Maket'
        image={img.deploy} 
      />
      <ProjectUnit 
        link='/'
        title='Deploy Maket'
        image={img.deploy} 
      />
      <ProjectUnit 
        link='/'
        title='Deploy Maket'
        image={img.deploy} 
      />
      <ProjectUnit 
        link='/'
        title='Deploy Maket'
        image={img.deploy} 
      />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Maket;