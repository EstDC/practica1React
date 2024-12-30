import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useContext } from 'react';
import { LangContext } from '../components/LangProvider';


function Article({ noticias, favoritos, toggleFavorito }) {
  const { id } = useParams();
  const { language } = useContext(LangContext); // Idioma actual desde el contexto
  const noticia = noticias.find((noticia) => noticia.id.toString() === id);
  

  if (!noticia) {
    return <p className="article-not-found">Article not found</p>;
  }
  // Comprobar si hay traducciones disponibles para el idioma seleccionado
  const translation = noticia.translations?.[language] || {};
  // Mostrar datos traducidos si existen, de lo contrario, mostrar el original
  const headline = translation.headline || noticia.headline;
  const abstract = translation.abstract || noticia.abstract;
  const body = translation.body || noticia.body;


  // Asegurarse de reemplazar saltos de línea con párrafos si es necesario, la API los incluye pero se renderizan como texto
  const formattedBody = body
    .replace(/\n\n/g, '</p><p>') // Reemplaza saltos dobles por cierre y apertura de <p>
    .replace(/^/, '<p>') // Abre el primer párrafo
    .replace(/$/, '</p>'); // Cierra el último párrafo

  return (
    <div>
      <Header noticias={noticias} />
      <Navbar />
      <div className="article-container">
        <h1 className="article-title">{headline}</h1>
        <div className="article-meta">
          <span><strong>Author:</strong> {noticia.author}</span>
          <span><strong>Date:</strong> {new Date(noticia.date).toLocaleDateString()}</span>
          <span><strong>Section:</strong> {noticia.section}</span>
        </div>
        <div className="article-image">
          <img src={noticia.image_url} alt={noticia.headline} />
        </div>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: formattedBody }}/>  
        {/*Lo anterior permite insertar contenido HTML directamente en un elemento DOM desde un string.
        Sin embargo, su nombre incluye la palabra "dangerously" porque si el contenido HTML proviene de una fuente 
        no confiable (como una API externa), puede exponer tu aplicación a ataques XSS
        Si no confías en la fuente, puedes usar una biblioteca como dompurify para evitar ataques.
        
        instaalar en consola: npm install dompurify
        
        import DOMPurify from 'dompurify';
        const sanitizedBody = DOMPurify.sanitize(formattedBody);*/}

        {/*Código sin usar dangerously pero que renderiza las <p> de la API: 
        <div className="article-body">
          <p>{noticia.body}</p>
        </div>*/}
      </div>
      <Footer />
    </div>
  );
}

export default Article;