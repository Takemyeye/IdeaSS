import React, { useMemo, useContext} from "react";
import { HeaderUnit, Navigation } from "./headerUnit";
import translations from "../../utils/translations";
import ActiveContext from "../ActiveContext";

export function NavBar () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return  (
    <>
     <HeaderUnit 
      link='/about' 
      text={translation.about}/>
    <HeaderUnit 
      link="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com" 
      text={translation.contactUs}/>
     <Navigation text={translation.social}/>
     <Navigation text={translation.partner}/>
    </>
  )
}