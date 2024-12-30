import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='navbar'>
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/Section/World News" className="nav-link">World News</Link>
      <Link to="/Section/Sport" className="nav-link">Sport</Link>
      <Link to="/Section/Finance" className="nav-link">Finance</Link>
      <Link to="/Section/Technology" className="nav-link">Technology</Link>
      <Link to="/Section/Entertainment" className="nav-link">Entertainment</Link>
      <Link to="/Favorites" className="nav-link">⭐ Favoritos</Link>
    </nav>
  );
}

export default Navbar;