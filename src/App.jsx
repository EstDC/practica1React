import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Section from './components/Section';
import { LangProvider, LangContext } from './components/LangProvider';

function AppContent() {
  const [noticias, setNoticias] = useState([]);
  const { language } = useContext(LangContext); //Correcto: dentro de un componente funcional, 
  //el useContext no se puede usar directamente en el return, me daba problemas al envolver todo en el LangProvider en el return
  console.log('Idioma actual:', language);//Verificamos que se haya cargado el idioma en el contexto

  useEffect(() => {
    const fetchNoticias = async () => {
      console.log('Cargando noticias para el idioma:', language); 
      const response = await fetch(`https://news-foniuhqsba-uc.a.run.app?lang=${language}`);
      const data = await response.json();
      setNoticias(data);
    };

    fetchNoticias();
  }, [language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home noticias={noticias} />} />
        <Route path="/Section/:section" element={<Section noticias={noticias} />} />
        <Route path="/Article/:id" element={<Article noticias={noticias} />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}

export default App
