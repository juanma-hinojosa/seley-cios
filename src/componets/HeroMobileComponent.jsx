import ButtonComponent from "./ButtonComponent"
import '../css/mobile-hero.css'
/* eslint-disable react/prop-types */
function HeroMobile(props) {
    return(
    <section
      className="hero-mobile poppins-regular"
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
  )
}

export default HeroMobile