import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Section from './components/Section';
import { LangProvider, LangContext } from './components/LangProvider';
import Favorites from './pages/Favorites';

function AppContent() {
  // Estado para las noticias
  const [noticias, setNoticias] = useState([]);
  const { language } = useContext(LangContext); 
  console.log('Idioma actual:', language); // Verificamos el idioma actual

  // Estado para los favoritos, inicializando desde localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  /**
   * 📰 Fetch de noticias con el idioma seleccionado y sincronización de favoritos
   */
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        console.log('Cargando noticias para el idioma:', language);
        const response = await fetch(`https://news-foniuhqsba-uc.a.run.app?lang=${language}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const noticiasConFavoritos = data.map((noticia) => ({
          ...noticia,
          isFavorito: favoritos.some((fav) => fav.id === noticia.id),
        }));
        setNoticias(noticiasConFavoritos);
      } catch (error) {
        console.error('Error al cargar noticias:', error);
      }
    };

    fetchNoticias();
  }, [language, favoritos]);

  /**
   * 💾 Sincronizar favoritos con localStorage
   */
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  /**
   * ⭐ Función para alternar favoritos
   */
  const toggleFavorito = (noticia) => {
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.some((fav) => fav.id === noticia.id)) {
        // Eliminar de favoritos
        return prevFavoritos.filter((fav) => fav.id !== noticia.id);
      } else {
        // Añadir a favoritos
        return [...prevFavoritos, noticia];
      }
    });

    // Actualizar el estado de noticias para reflejar cambios en favoritos
    setNoticias((prevNoticias) =>
      prevNoticias.map((item) =>
        item.id === noticia.id
          ? { ...item, isFavorito: !item.isFavorito }
          : item
      )
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            noticias={noticias}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        }
      />
      <Route
        path="/Section/:section"
        element={
          <Section
            noticias={noticias}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        }
      />
      <Route
        path="/Article/:id"
        element={
          <Article
            noticias={noticias}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        }
      />
      <Route
        path="/Favorites"
        element={
          <Favorites
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        }
      />
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
