import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../css/components/FlyerPopup.css";

const FlyerPopup = () => {
  const [flyer, setFlyer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("flyerPopupShown");

    const fetchFlyer = async () => {
      try {
        const res = await axios.get("https://backend-cios.onrender.com/api/flyers");
        const now = new Date();

        // Obtener flyers válidos
        const activeFlyers = res.data.filter(f =>
          new Date(f.expirationDate) > now
        );

        // Solo mostrar si hay un flyer activo y estamos en la página principal
        if (location.pathname === "/" && !alreadyShown && activeFlyers.length > 0) {
          const flyer = activeFlyers[0];

          // Verificación final de expiración por seguridad
          const expiration = new Date(flyer.expirationDate);
          if (now < expiration) {
            setFlyer(flyer);
            setShowPopup(true);
            sessionStorage.setItem("flyerPopupShown", "true");
          }
        }
      } catch (err) {
        console.error("Error al cargar el flyer:", err);
      }
    };

    fetchFlyer();
  }, [location.pathname]);

  // 🔒 Evita renderizar si el popup ya no debe mostrarse
  if (!showPopup || !flyer) return null;

  const formatDateLocal = (isoDate) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("T")[0].split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flyer-popup-overlay">
      <div className="flyer-popup-content"
        style={{
          backgroundImage: `linear-gradient(rgba(214, 217, 219, 0.7), rgba(214, 217, 219, 0.8)),url(${flyer.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <button className="close-btn-flyer" onClick={() => setShowPopup(false)}>
          ×
        </button>
        <img src={flyer.image} alt={flyer.title} className="popup-image" />
        <div className="popup-text poppins-regular">
          <h2>{flyer.title}</h2>
          <p>{flyer.paragraph}</p>
          <p className="expiration">
            Válido hasta: {formatDateLocal(flyer.expirationDate)}
            {/* {new Date(flyer.expirationDate).toLocaleDateString()} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlyerPopup;
