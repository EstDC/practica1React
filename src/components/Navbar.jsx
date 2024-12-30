import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='navbar'>
      <Link to="/practica1React/" className="nav-link">Inicio</Link>
      <Link to="/practica1React/Section/World News" className="nav-link">World News</Link>
      <Link to="/practica1React/Section/Sport" className="nav-link">Sport</Link>
      <Link to="/practica1React/Section/Finance" className="nav-link">Finance</Link>
      <Link to="/practica1React/Section/Technology" className="nav-link">Technology</Link>
      <Link to="/practica1React/Section/Entertainment" className="nav-link">Entertainment</Link>
    </nav>
  );
}

export default Navbar;