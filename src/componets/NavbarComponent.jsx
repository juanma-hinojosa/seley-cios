import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
      <header className="header-container poppins-regular">
        <h1>LOGO</h1>
        <nav className="nav-container">

          <Link to="/">Home</Link>
          <Link to="/services">Servicios</Link>
        </nav>
        <a href="#">Contactanos</a>
      </header>
  );
}

export default NavbarComponent;
