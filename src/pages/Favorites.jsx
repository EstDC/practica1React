import React from 'react';
import NewsCard from '../components/NewsCard';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Favorites({ favoritos, toggleFavorito }) {
    return (
      <div>
        <Header noticias={favoritos} />
        <Navbar />
        <div className="section-header">
        <h2 className='section-title'>⭐ Noticias Favoritas<span className="section-arrow">›</span></h2>
        </div>
        {favoritos.length > 0 ? (
          favoritos.map((noticia) => (
            <NewsCard
              key={noticia.id}
              id={noticia.id}
              headline={noticia.headline}
              date={noticia.date}
              body={noticia.body}
              section={noticia.section}
              image_url={noticia.image_url}
              author={noticia.author}
              translations={noticia.translations}
              isFavorito={true}
              toggleFavorito={toggleFavorito}
            />
          ))
        ) : (
          <p className='article-not-found'>No tienes noticias favoritas aún.</p>
        )}
        <Footer />
      </div>
    );
  }

export default Favorites;