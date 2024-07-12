/* eslint-disable react/prop-types */
import '../css/card-services.css'
function CardServicesComponent(props) {
  return (
    <figure data-aos='fade-up' className="service-card poppins-regular">
      <figcaption className='service-img-container'>
        <img src={props.img} alt="Tarjeta de servicio" />
      </figcaption>

      <article>
        <h1>{props.h1}</h1>
        <p>
            {props.p}
        </p>
      </article>
    </figure>
  );
}

export default CardServicesComponent