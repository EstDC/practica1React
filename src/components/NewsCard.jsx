import { Link } from 'react-router-dom'; 
import { useEffect, useContext } from 'react';
import { LangContext } from './LangProvider';
console.log('El archivo Card.jsx se ha cargado')//Comprobación

function Card({ id, headline, date, body, section, image_url, author, translations, toggleFavorito, favoritos }) {
  //Comprobación de que se está cargando correctamente los datos
  console.log('Props recibidas en Card:', { id, headline, favoritos });
  useEffect(() => {
    console.log('El componente Card se montó con ID:', id);
  }, [id]);
  const handleClick = () => {
    console.log('Clic en la tarjeta con ID:', id);
  };
  //(Todo lo anteriro se puede borrar si se quiere, pero así puedo comprobar el correcto funcionamiento)
  //--------------------------------------------------------------------

   //Verificar si el artículo es favorito
   const isFavorito = Array.isArray(favoritos) && favoritos.some((item) => item.id === id);
   console.log('Botón de Favoritos clicado con ID:', id);
  
  const { language } = useContext(LangContext); // Obtener idioma actual
  const translation = translations?.[language] || {};// Buscar la traducción
  // Valores originales si no hay traducción
  const displayedHeadline = translation.headline || headline;
  const displayedBody = translation.abstract || body;

    return (
      <div className="card">
        <button 
          className={`favorito-button ${isFavorito ? 'active' : ''}`}
          onClick={() => toggleFavorito({
            id,
            headline,
            date,
            body,
            section,
            image_url,
            author,
            translations
          })}
        >
          {isFavorito ? '⭐' : '☆'}
        </button>
        <img src={image_url} alt={displayedHeadline} />
        <div className="card-content">
          <h3><Link to={`/Article/${id}`}>{displayedHeadline}</Link></h3>
          <div className="card-meta">
            <span>By {author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <p>{displayedBody}</p>
          <div className="card-footer">
            <span className="card-section">{section}</span>|
            <div className="read-more"><Link to={`/Article/${id}`}><strong>Read more</strong></Link></div> 
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;