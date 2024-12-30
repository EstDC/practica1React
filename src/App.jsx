import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Section from './components/Section';
import { LangProvider, LangContext } from './components/LangProvider';
import Favorites from './pages/Favorites';

function AppContent() {
  const [noticias, setNoticias] = useState([]);
  const { language } = useContext(LangContext); //Correcto: dentro de un componente funcional, 
  const [favoritos, setFavoritos] = useState([]);
  //el useContext no se puede usar directamente en el return, me daba problemas al envolver todo en el LangProvider en el return
  console.log('Idioma actual:', language);//Verificamos que se haya cargado el idioma en el contexto

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(savedFavorites);
  }, []);

  // Guardar favoritos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);
  const toggleFavorito = (noticia) => {
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.some((fav) => fav.id === noticia.id)) {
        return prevFavoritos.filter((fav) => fav.id !== noticia.id); // Eliminar de favoritos
      } else {
        return [...prevFavoritos, noticia]; // Añadir a favoritos
      }
    });
    // Actualizar el estado de las noticias para reflejar cambios
    setNoticias((prevNoticias) =>
      prevNoticias.map((item) =>
        item.id === noticia.id
          ? { ...item, isFavorito: !item.isFavorito }
          : item
      )
    );
  };


  useEffect(() => {
    const fetchNoticias = async () => {
      console.log('Cargando noticias para el idioma:', language); 
      const response = await fetch(`https://news-foniuhqsba-uc.a.run.app?lang=${language}`);
      const data = await response.json();
      const noticiasConFavoritos = data.map((noticia) => ({
        ...noticia,
        isFavorito: favoritos.some((fav) => fav.id === noticia.id),
      }));

      setNoticias(noticiasConFavoritos);
    };

    fetchNoticias();
  }, [language, favoritos]);

  return (
    <Routes>
      <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/Section/:section" element={<Section noticias={noticias} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/Article/:id" element={<Article noticias={noticias} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/Favorites" element={<Favorites favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
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
