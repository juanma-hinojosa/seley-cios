import HeaderAsideComponent from "./HeaderAsideComponent";
import backgrounAside from "../images/card-component.jpg.jpg";
import "../css/cuidemos-dientes.css";

function CuidemosComponent() {
  return (
    <section className="cuidemos-container">
      <figcaption>
        <img src={backgrounAside} alt="" />
      </figcaption>
      <HeaderAsideComponent
        h3="Cuidemos los Dientes"
        h2="Comenzemos a cuidar tus dientes"
        p="Algunas personas piensan que con limpiar los dientes un par de veces al dia es suficiente para cuidar los dientes. Creemos que una boca sana va de la mano con controles Mensuales para prevenir futuras caries y problemas."
      />
    </section>
  );
}

export default CuidemosComponent;
