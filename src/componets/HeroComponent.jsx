import ButtonComponent from "./ButtonComponent";

/* eslint-disable react/prop-types */
function HeroComponent(props) {
  return (
    <section
      className="hero-content poppins-regular"
      style={{
        backgroundImage: `  
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${props.img})`,
      }}
    >
      <div className="section-info">
        <article>
          <h1>{props.h1}</h1>
          <h2>{props.h2}</h2>
          <p className="poppins-semibold">{props.p}</p>
          <ButtonComponent
            nameLink="Contactanos"
            url="https://wa.me/541132160533"
          />
        </article>
      </div>
    </section>
  );
}

export default HeroComponent;
