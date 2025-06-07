import { Link } from "react-router-dom";
import "../css/components/DoctorProfile.css"
import doctorImage from '/img/seley-1.jpeg';
// // Asegúrate de renombrar o mover tu imagen correctamente
// import doctorImage from "../../public/img/seley-1"
function DoctorProfile(props) {
  const renderParagraph = (text) => {
    // Dividir el texto por los saltos de línea y renderizar cada parte en un <span>
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <figure className="doctor-image-wrapper">
          <img
            data-aos="zoom-in"
            src={doctorImage}
            alt="Dra. Seley with his dental team"
            className="doctor-image"
          />
          <figcaption className="doctor-caption poppins-regular">Dra. Seley</figcaption>
        </figure>

        <article className="doctor-content">
          <header>
            <h2 data-aos="zoom-in-up" className="doctor-subtitle poppins-bold">Conozca a la doctora</h2>
            <h1 data-aos="zoom-in-up" className="doctor-title poppins-light">Dra. Seley Rodriguez</h1>
          </header>
          <p data-aos="zoom-in-up" className="poppins-light">
            {renderParagraph(props.p)}
          </p>

          <p data-aos="fade-up" className="poppins-semibold">
            {props.bold}
          </p>


          <Link data-aos="fade-up" to={props.pathUrl} className="doctor-button poppins-regular">{props.path}</Link>
        </article>
      </div>
    </section>
  );
}
export default DoctorProfile;