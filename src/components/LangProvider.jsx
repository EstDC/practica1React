import React, { createContext, useState, useEffect } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    console.log('🛠️ Idioma inicial desde localStorage:', language); //Verificamos
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Persistencia del idioma en localStorage
    console.log('Idioma cambiado en LangProvider a:', newLanguage);//Verificamos
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
