// src/components/Flyers/HeroFlyer.jsx
import React from "react";
import "../css/components/HeroFlyer.css";
import HeaderTitleComponent from "./HeaderTitleComponent";

const HeroFlyer = ({ flyer }) => {
  if (!flyer) return null;
  const formatDateLocal = (isoDate) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("T")[0].split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <section className="hero-flyer poppins-regular" aria-label={`Flyer destacado: ${flyer.title}`}>
      <div
        className="hero-flyer-content"
        style={{
          backgroundImage: `linear-gradient(rgba(214, 217, 219, 0.7), rgba(214, 217, 219, 0.8)),url(${flyer.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
         <HeaderTitleComponent
          h2={flyer.title}
          h3={`Válido hasta:  ${formatDateLocal(flyer.expirationDate)}`}
          p={flyer.paragraph}
        />
        {/* <div className="hero-text">
          <h1>{flyer.title}</h1>
          <p>{flyer.paragraph}</p>
          <p className="expiration">
            Válido hasta:  {formatDateLocal(flyer.expirationDate)}
            {new Date(flyer.expirationDate).toLocaleDateString()}
           
          </p>
        </div> */}

      </div>
    </section>
  );
};

export default HeroFlyer;
