import HeaderAsideComponent from "../componets/HeaderAsideComponent";
import FotoError from "../images/error404.jpg";
import "../css/error.css";
import { Link } from "react-router-dom";
import HeaderTitleComponent from "../componets/HeaderTitleComponent";
function ErrorPage() {
  return (
    <>
      {/* <HeaderTitleComponent
        h2="No logramos encontrar lo que buscas"
        h3="Ups hubo un error"
        p="Por cualquier consulta o duda sobre nuestros tratamientos, turnos, valores, etc no dudes en contactarte con nosotros."
      /> */}
      <div
      style={{
        height:"100px"
      }}
      >

      </div>
      
      <section className="error-container">
        <div>
          {/* <HeaderAsideComponent
            h3="Ups hubo un error"
            h2="no logramos encontrar lo que buscas"
            p="Por cualquier consulta o duda sobre nuestros tratamientos, turnos, valores, etc no dudes en contactarte con nosotros"
          /> */}
          <HeaderTitleComponent
            h2="No logramos encontrar lo que buscas"
            h3="Ups hubo un error"
            p="Por cualquier consulta o duda sobre nuestros tratamientos, turnos, valores, etc no dudes en contactarte con nosotros."
          />
          <br />
          <Link className="return poppins-regular" to={"/"}>
            Inicio
          </Link>
        </div>

        <figcaption className="error-img">
          <img src={FotoError} alt="error 404 dentista" />
        </figcaption>
      </section>
    </>

  );
}

export default ErrorPage;
