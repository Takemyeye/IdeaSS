import React, { useState, useMemo, useContext, useEffect } from "react";
import { HeaderUnit, Navigation } from "./headerUnit";
import translations from "../../utils/translations";
import ActiveContext from "../ActiveContext";

export function NavBar() {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBar = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <HeaderUnit 
        link='/about' 
        text={translation.about} 
      />
      <HeaderUnit 
        link="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com" 
        text={translation.contactUs} 
      />
      {!isMobile && (
        <Navigation 
          text={translation.social} 
          isOpen={openDropdown === 1} 
          onClick={() => handleBar(1)} 
          telegramlink="https://t.me/takemyeye"
          instagramlink="https://www.instagram.com/takemyeyehz/"
          faInstagram="faInstagram"
          instagram="Instagram"
          telegram="Telegram"
        />
      )}
    </>
  );
}
