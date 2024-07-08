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
          <figure>
            <a href="#">
              {/* <h1>LOGO</h1> */}
              <img
                // className="logo"
                src={logo}
                alt="logo seley odontologia cios"
              />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>CONTACTOS</h2>

          <p>1138393736</p>
          <p>hello@dental.com</p>
          <p>press@dental.com</p>
          <p>contact@dental.com</p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-youtube"></a>
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
