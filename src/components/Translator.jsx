import React, { useContext } from 'react';
import { LangContext } from './LangProvider';

function Translator() {
  const { language, changeLanguage } = useContext(LangContext);
  console.log('Idioma actual en Translator:', language); //Verificamos

  // Lista de idiomas disponibles
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'ch', label: 'CH' },
    { code: 'fr', label: 'FR' },
    { code: 'pt', label: 'PT' },
    { code: 'it', label: 'IT' }
  ];

  return (
    <div className="translator">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`translator-button ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export default Translator;
  