import React from 'react';
import '../css/components/CardComponent.css';

const CardComponent = ({ img, title, p }) => {
  return (
    <article className="dental-card">
      <img src={img} alt={title} className="dental-card__image" />
      <div className="dental-card__content">
        <h2 className="dental-card__title poppins-regular">{title}</h2>
        <p className="dental-card__description poppins-light">{p}</p>
        {/* <a href={link} className="dental-card__link">Leer más »</a> */}
      </div>
    </article>
  );
};

export default CardComponent;
