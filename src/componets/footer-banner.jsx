import React from 'react';
import '../css/components/footeBanner.css';
import stakeLogo from '/img/stake.webp'; // Ajusta esta ruta según tu estructura

const Footerbanner = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-banner">
            <div className="footer-container-banner">
                <div className="footer-left-banner">
                    <a href="https://stakedev.net/" target="_blank" rel="noopener noreferrer">
                        <img src={stakeLogo} alt="Stake Dev's Logo" className="footer-logo-banner" />
                    </a>
                    <span>Sitio creado por <strong>Stake Dev's</strong></span>

                </div>
                <div className="footer-right-banner">
                    &copy; {currentYear} Stake Dev's. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footerbanner;
