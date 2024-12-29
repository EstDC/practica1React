
import Search from "./Search";
import Translator from "./Translator";

function Header({ noticias }) {
  return (
    <header className="header-container">
      <div className="contenedorMainHeader">
        <Search noticias={noticias} />
        <div className="tituloMain">
          <h1 style={{ fontFamily: "'Chomsky Regular'", fontWeight: "normal", fontSize: "64px" }}>
            The New York Times
          </h1>
        </div>
        <Translator />
      </div>
    </header>
  );
}

export default Header;