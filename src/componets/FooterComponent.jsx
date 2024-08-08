import "../css/footer-component.css";
import logo from "../images/logo-png.png";

function FooterComponent() {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="pie-pagina poppins-regular">
      <div className="grupo-1">
        <div className="box">
          <figure className="footer-img">
              <img
                src={logo}
                alt="logo seley odontologia cios"
              />
          </figure>
        </div>
        <div className="box">
          <h2>CONTACTOS</h2>

          <p>1132160533</p>
          <p>cios.dental.rr@gmail.com</p>
        </div>
        <div className="box">
          <h2>SIGUENOS EN NUESTRAS REDES</h2>
          <div className="red-social">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100093691209138&_rdc=1&_rdr" className="fa fa-facebook"></a>
            <a target="_blank" href="https://www.instagram.com/dental.cios.rr/" className="fa fa-instagram"></a>
            <a target="_blank" href="https://maps.app.goo.gl/9cKrbrwPJUt1XB6F6" className="fa-solid fa-location-dot"></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; {getYear()} <b>Seley C.I.O.S.</b> - Todos los Derechos
          Reservados.
        </small>
      </div>
    </footer>
  );
}

export default FooterComponent;
