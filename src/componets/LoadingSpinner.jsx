// src/components/LoadingSpinner.jsx
import React from "react";
import "../css/components/LoadingSpinner.css"; // Estilos personalizados
import Logo from "/img/logo-violeta.png";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <img
        src={Logo} // Usa la ruta correcta de tu logo
        alt="Cargando..."
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingSpinner;
