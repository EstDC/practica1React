import React from 'react';
import NewsCard from '../components/NewsCard';

function Favorites({ favoritos, toggleFavorito }) {
  return (
    <div>
      <h2>⭐ Noticias Favoritas</h2>
      {favoritos.length > 0 ? (
        favoritos.map((noticia) => (
          <NewsCard key={noticia.id} noticia={noticia} toggleFavorito={toggleFavorito} favoritos={favoritos} />
        ))
      ) : (
        <p>No tienes noticias favoritas aún.</p>
      )}
    </div>
  );
}

export default Favorites;