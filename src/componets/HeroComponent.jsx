import React from 'react';
import '../css/hero-component.css'; // O puedes usar CSS-in-JS como styled-components

const HeroSection = (props) => {
  const phoneNumber = '541132160533'; // reemplaza con tu número de WhatsApp
  const message = 'Hola! Quisiera hacer una consulta.'; // mensaje opcional

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="hero-container ">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={props.video} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="hero-overlay">
        <p className="hero-subtitle poppins-regular">Centro Odontologico integral SELEY 'C.I.O.S'</p>
        <h1 className="hero-title poppins-light">
          Tu salud Oral
          <br className="hide-on-mobile" /> es nuestra principal prioridad
        </h1>
        <a href={url} target='_blank' className="hero-button poppins-light">CONTACTANOS</a>
      </div>
    </div>
  );
};

export default HeroSection;