import React from 'react';
import { Icon } from '@iconify/react';
import Logo from "/img/logo-violeta.png";
import "../css/components/ContactInfoComponent.css"


const ContactInfo = () => {
  return (
    <section className="rd-contact-section">
      <div className="rd-container">
        <header className="rd-header">
          <img src={Logo} alt="Consultorio Logo" className="rd-logo" />
          <h1 className="rd-tagline poppins-light">Odontologia Laser {"  "} <span>  "C.I.O.S."</span> Dental</h1>
        </header>

        <div className="rd-contact-grid">
          <article className="rd-contact-item">
            <Icon icon="mdi:map-marker-outline" className="rd-icon" />
            <h2 className="rd-label poppins-semibold">Ubicacion</h2>
            <address className="rd-details poppins-light">
              Beauchef 1612<br />
              Ciudad Autonoma de Buenos Aires
            </address>
          </article>

          <article className="rd-contact-item">
            <Icon icon="mdi:phone-outline" className="rd-icon" />
            <h2 className="rd-label poppins-semibold">Telefono</h2>
            <p className="rd-details poppins-light">
              Llame Hoy<br />
              <a href="tel:1132160533">1132160533</a>
            </p>
          </article>

          <article className="rd-contact-item">
            <Icon icon="mdi:email-outline" className="rd-icon" />
            <h2 className="rd-label poppins-semibold">Email</h2>
            <p className="rd-details poppins-light">
              Envie un mail<br />
              <a href="mailto:cios.dental.rr@gmail.com">cios.dental.rr@gmail.com</a>
            </p>
          </article>

          {/* <article className="rd-contact-item">
            <Icon icon="streamline-plump:insurance-hand" className="rd-icon" />
            <h2 className="rd-label poppins-semibold">Obra Sociales</h2>
            <p className="rd-details poppins-light">
              Trabajamos<br />
              <a href="https://www.osde.com.ar/">OSDE</a>
            </p>
          </article> */}

          <article className="rd-contact-item">
            <Icon icon="mingcute:hand-card-line" className="rd-icon" />
            <h2 className="rd-label poppins-semibold">Medios de pago</h2>
            <p className="rd-details poppins-light">
              Aceptamos<br />
              <a href="#">Efectivo</a>
              <br />
              <a href="#">Mercado Pago</a><br />
              <a href="#">Transferencia</a><br />
              <a href="#">Tarjeta de Debito</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
