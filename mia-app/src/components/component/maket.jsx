import React, { useMemo, useContext } from 'react';
import { MaketContainer } from "./maket/maketContainer";
import ActiveContext from '../ActiveContext';
import translations from '../../utils/translations';
import { Text } from "./maket/Text";
import Header from "../Header";
import Footer from "./footer";
import "../styles/maket.scss";


const Maket = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <>
      <Header/>
      <div className="maket">
        <Text 
          h5={translation.templates}
          h1={translation.readyToUseTemplates}
          h3={translation.someTemplates}
          h3_2={translation.traditionalTemplates}
        />
        <MaketContainer/>
      </div>
      <Footer/>
    </>
  )
}

export default Maket;