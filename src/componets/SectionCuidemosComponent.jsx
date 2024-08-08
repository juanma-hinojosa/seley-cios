import HeaderAsideComponent from "./HeaderAsideComponent";
import backgrounAside from "../images/card-component.jpg.jpg";
import "../css/cuidemos-dientes.css";
// import ButtonComponent from "./ButtonComponent";

function CuidemosComponent() {
  return (
    <section className="cuidemos-container">
      <figcaption>
        <img data-aos="zoom-in" src={backgrounAside} alt="Foto de cuidemos" />
      </figcaption>
      <div>
        <HeaderAsideComponent
          h3="Cuidemos los Dientes"
          h2="Comenzemos a cuidar tus dientes"
          p="Te brindaremos algunos consejos y recomendaciones para mejorar tu salud oral:"
        />
        <div className="setps poppins-regular">
          <p>1. Cepillarte de manera adecuada al menos 3 veces al dia y luego de cada comida.</p>
          <p>2. Usar cepillos de cerdas suaves para evitar lastimar tus encias</p>
          <p>3. Aplicar una correcta tecnica de cepillado</p>
          <p>4. Ademas de los dientes hay que cepillar la lengua para elimanar bacterias que se acumulan en esa zona</p>
          <p>5. Aplicar una correcta tecnica de enjuague bucal</p>
          <p>6. Usar hilo dental de manera adecuada entre diente y diente</p>
          <p>7. Evitar las comidas y bebidas dulces en exceso</p>
          <p>8. Concurre con tu odontologo de manera periodica para realizarte un control adecuado de tu salud oral</p>
          <p>9. Evitar Fumar en exceso</p>
          <p>10. Beber agua de forma regular para eliminar residuos diarios</p>
        </div>
        {/* <ButtonComponent nameLink="Instagram" /> */}
      </div>
    </section>
  );
}

export default CuidemosComponent;
