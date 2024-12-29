import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NewsGrid from '../components/NewsGrid';
import Footer from './Footer';

function Section({ noticias }) {
  const { section } = useParams(); // Recupera la sección de la URL

  const noticiasFiltradas = noticias.filter((noticia) => noticia.section === section);

  return (
    <div>
      <Header noticias={noticias} />
      <Navbar />
      <div className="section-header">
        <h2 className='section-title'>{section}<span className="section-arrow">›</span></h2>
      </div>
      <NewsGrid noticias={noticiasFiltradas} />
      <Footer />
    </div>
  );
}

export default Section;