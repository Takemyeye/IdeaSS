import React, { createContext, useState, useEffect } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'it');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const updateUser = (user) => {
    setUser(user);
  };

  const clearUser = () => {
    setUser(null);
  };

  const logout = () => {
    clearUser();
    localStorage.removeItem('token');
  };

  return (
    <ActiveContext.Provider
      value={{
        language,
        handleLanguageChange,
        user,
        updateUser,
        logout, 
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
