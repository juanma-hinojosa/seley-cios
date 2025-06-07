import "../css/footer-component.css";
import { Icon } from '@iconify/react';
import Logo from "/img/logo-violeta.png";
import { Link } from 'react-router-dom';


const FooterComponent = () => {
  const phoneNumber = '541132160533'; // reemplaza con tu número de WhatsApp
  const message = 'Hola! Quisiera hacer una consulta.'; // mensaje opcional

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="footer poppins-light">
      <div className="footer-content container">
        <div className="footer-section">
          <h2>Paginas</h2>
          <ul>
            <li><Link to="/" >Inicio</Link></li>
            <li><Link to="/about" >Nosotros</Link></li>
            <li><Link to="/services" >Especialidades</Link></li>
            <li><Link to="/blogs" >Blogs</Link></li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h2>About</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h2>Redes Sociales</h2>
          <ul>
            <li>Seguinos</li>
            <li><a href="https://www.facebook.com/profile.php?id=100093691209138&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:facebook" /> Facebook</a></li>
            <li><a href="https://www.instagram.com/dental.cios.rr/" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:instagram" /> Instagram</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contactanos</h2>
          <p><strong>Whats App: </strong>
            <a href={url} target="_blank" rel="noopener noreferrer">
              1132160533
            </a>
          </p>
          <p><strong>Email:</strong> <a href="mailto:cios.dental.rr@gmail.com">cios.dental.rr@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p> &copy; {getYear()} <b>Seley C.I.O.S.</b> - Todos los Derechos Reservados.</p>

        {/* <div className="footer-links">
          <a href="/help">Ayuda</a>
          <a href="/terms">Terminos</a>
          <a href="/privacy">P</a>
        </div> */}
        <div className="footer-logo">
          {/* Reemplaza src con tu imagen de logo */}
          <img src={Logo} alt="Company Logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

