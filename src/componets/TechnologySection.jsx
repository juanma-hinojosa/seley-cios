import React from 'react';
import { Icon } from '@iconify/react';
import '../css/components/TechnologySection.css';

function TechnologySection() {
    return (
        <section className="tech-section" aria-labelledby="tech-title">
            <div className="tech-container">
                <header className="tech-header">
                    <h2 data-aos="zoom-in-up" id="tech-title" className='poppins-regular'>Tecnología avanzada para una atención más segura y mejor.</h2>
                    <p data-aos="zoom-in-up" className='poppins-light'>
                        La tecnología está en constante evolución. Nos esforzamos por satisfacer las
                        necesidades de nuestros pacientes mediante tecnología avanzada que nos ayuda
                        a diagnosticar y tratar mejor afecciones y enfermedades.
                    </p>
                </header>

                <ul className="tech-list" >
                    {/* <li data-aos="zoom-in-up" >
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Tomografía computarizada - Imágenes 3D</span>
                    </li> */}
                    <li data-aos="zoom-in-up" >
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Cirugia Laser</span>
                    </li>
                    <li data-aos="zoom-in-up">
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Radiografía periapical digital</span>
                    </li>
                    <li data-aos="zoom-in-up">
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Camara intra oral</span>
                    </li>
                    <li data-aos="zoom-in-up">
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Endodoncia mecanizada</span>
                    </li>
                    <li data-aos="zoom-in-up">
                        <Icon icon="mdi:check" className="tech-icon" />
                        <span className='poppins-semibold'>Ultra sonido</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default TechnologySection;