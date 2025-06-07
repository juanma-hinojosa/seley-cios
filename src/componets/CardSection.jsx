import React from 'react';
import '../css/components/CardSection.css';

const CardSection = (props) => {
  return (
    <section className="office-section">
      <div className="office-container">
        <div className="office-content">
          <h2 data-aos="fade-up" className="office-title poppins-semibold">{props.h2}</h2>
          <p data-aos="fade-up" className="office-description poppins-regular">
            {props.p}
          </p>
          <button data-aos="fade-up" className="office-button poppins-regular">Haz un recorrido</button>
        </div>
        <div className="office-image-container"
        >
          <img
            data-aos="zoom-out"
            src={props.src}
            alt="Consultorio CIOS"
            className="office-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
