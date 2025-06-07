import React, { useEffect, useState } from 'react';
import '../css/components/GoogleMapEmbed.css';

const GoogleMapEmbed = () => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        setHasError(true);
      }
    }, 10000);

    return () => clearTimeout(timer)
  }, [loaded, retryKey]);

  const handleRetry = () => {
    setLoaded(false);
    setHasError(false);
    setRetryKey(prev => prev + 1);
  }

  return (
    <div className="map-fullwidth-container">
      {!loaded && !hasError && (
        <div className="map-loader poppins-light">Cargando mapa...</div>
      )}
      {hasError ? (
        <div className="map-error poppins-light">
          <p>No se pudo cargar el mapa.</p>
          <br />
          <button onClick={handleRetry}>Reintentar</button>
        </div>
      ) : (
        <iframe
          key={retryKey}
          title="Ubicación consultorio"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7366108738292!2d-58.433484025144715!3d-34.636095759207336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb28ed0b10ad%3A0x16753264cd65baeb!2sOdontolog%C3%ADa%20Integral%20%22C.I.O.S%22!5e0!3m2!1ses-419!2sar!4v1720466203666!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default GoogleMapEmbed;
