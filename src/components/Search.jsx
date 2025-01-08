import searchIcon from '../assets/icons8-search-128.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ noticias }) {
  const [isOpen, setIsOpen] = useState(false); // Controla el modal
  const [termino, setTermino] = useState(''); // Controla el input de búsqueda
  const [resultados, setResultados] = useState([]); // Almacena los resultados

  // Abrir/Cerrar Modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setTermino(''); // Limpia el término de búsqueda
    setResultados([]); // Limpia los resultados
  };

  // Manejar Búsqueda
  const handleSearch = (e) => {
    const valor = e.target.value;
    setTermino(valor);

    if (valor === '') {
      setResultados([]);
      return;
    }

    const filtrados = noticias.filter((noticia) =>
      noticia.headline.toLowerCase().includes(valor.toLowerCase()) ||
      noticia.body.toLowerCase().includes(valor.toLowerCase())
    );

    setResultados(filtrados);
  };

  return (
    <div className="search">
      {/* Botón de búsqueda */}
      <button className="search-button" onClick={toggleModal}>
        <img src={searchIcon} alt="Search" />
      </button>

      {/* Modal de búsqueda */}
      {isOpen && (
        <div className="search-modal">
          <div className="search-header">
            <input
              type="text"
              value={termino}
              onChange={handleSearch}
              placeholder="Buscar artículos..."
              autoFocus
            />
            <button className="close-button" onClick={toggleModal}>✖️</button>
          </div>
          <div className="search-results">
            {resultados.length > 0 ? (
              resultados.map((noticia) => (
                <div key={noticia.id} className="search-result-item">
                  <Link to={`/Article/${noticia.id}`}><img src={noticia.image_url} alt={noticia.headline} /></Link>
                  <div>
                    <h4><Link to={`/Article/${noticia.id}`}>{noticia.headline}</Link></h4>
                    <p><Link to={`/Article/${noticia.id}`}>{noticia.abstract.slice(0, 100)}...</Link></p>
                    <small>Hace {Math.floor(Math.random() * 12)} meses</small>
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
  export default Search;