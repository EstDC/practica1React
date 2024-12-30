import { useEffect, useState, useContext } from 'react';
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import NewsGrid from '../components/NewsGrid';
import Footer from '../components/Footer';
import { LangContext } from '../components/LangProvider';


function Home ({ noticias, favoritos, toggleFavorito }){// Recibimos como props
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useContext(LangContext);

    console.log('Idioma actual en Home:', language);//Verificamos
    console.log('Favoritos en Home:', favoritos);//Verificamos
    console.log('toggleFavorito:', toggleFavorito); //Verificamos

    useEffect(() => {
      const fetchNoticias = async () => {
        try {
          const response = await fetch('https://news-foniuhqsba-uc.a.run.app');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setNoticias(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNoticias();
    }, []);

    //const sections = noticias ? [...new Set(noticias.map((noticia) => noticia.section))] : [];
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <Header noticias={noticias} />
        <Navbar />
        <NewsGrid noticias={noticias} favoritos={favoritos} toggleFavorito={toggleFavorito}/>
        <Footer />
        </div>
    );
}

export default Home;