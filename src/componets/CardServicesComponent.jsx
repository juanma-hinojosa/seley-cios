/* eslint-disable react/prop-types */
import '../css/card-services.css'

function CardServicesComponent(props) {
  return (
    <section className="implant-section" aria-labelledby="implant-title">
      <article data-aos={props.aosType} className={`implant-card ${props.className}`}>
        <figure className="implant-figure">
          <img
            src={props.img}
            alt="Ilustración de implantes dentales incrustados en la mandíbula"
            className="implant-image"
            loading="lazy"
          />
          <figcaption className="visually-hidden">
            Imagen representando cómo los implantes dentales se colocan en la mandíbula
          </figcaption>
        </figure>
        <div className="implant-text">
          <h2 id="implant-title" className='poppins-light'>{props.h2}</h2>
          <p className='poppins-light'>
            {props.p}
          </p>
        </div>
      </article>
    </section>
  );
}

export default CardServicesComponent

