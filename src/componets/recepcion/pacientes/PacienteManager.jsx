import React, { useState } from 'react';
import CrearPaciente from './CrearPaciente';
import FichaPaciente from './FichaPaciente';
import ListaPacientes from './ListaPacientes';


const PacienteManager = () => {
  const [vistaActual, setVistaActual] = useState('listar'); // '', 'crear', 'listar', 'ficha'
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const manejarVista = (vista) => {
    setVistaActual(vista);
    setPacienteSeleccionado(null); // reset por si estaba viendo ficha
  };

  return (
    <div className="paciente-manager">
      <h2>Gestión de Pacientes</h2>
      <div className="botones-manager">
        <button onClick={() => manejarVista('crear')}>Crear Paciente</button>
        <button onClick={() => manejarVista('listar')}>Listar Pacientes</button>
      </div>

      <div className="vista-dinamica">
        {vistaActual === 'crear' && <CrearPaciente onVolver={() => manejarVista('')} />}
        {vistaActual === 'listar' && (
          <ListaPacientes
            onVerFicha={(paciente) => {
              setPacienteSeleccionado(paciente);
              setVistaActual('ficha');
            }}
          />
        )}
        {vistaActual === 'ficha' && pacienteSeleccionado && (
          <FichaPaciente paciente={pacienteSeleccionado} onVolver={() => manejarVista('listar')} />
        )}
      </div>
    </div>
  );
};

export default PacienteManager;
