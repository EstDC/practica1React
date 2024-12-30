import Card from './NewsCard';

function NewsGrid({ noticias }) {
  return (
    <div className="news-grid">
      {noticias.map((noticia) => (
        <Card
          key={noticia.id}
          id={noticia.id}
          headline={noticia.headline}
          date={noticia.date}
          body={noticia.abstract}
          section={noticia.section}
          image_url={noticia.image_url}
          author={noticia.author}
          translations={noticia.translations}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      ))}
    </div>
  );
}

export default NewsGrid;