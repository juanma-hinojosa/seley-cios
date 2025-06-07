import React, { useState } from "react";
import ListaTurnosDisponibles from "./ListaTurnosDisponibles";
import AsignarTurno from "./AsignarTurno";
import ListaTurnosAsignados from "./ListarTurnosAsignados";
import CrearTurnosDisponibles from "./CrearTurnoDisponibles";
// import CrearTurnosDisponibles from "./CrearTurnosDisponibles";
// import ListaTurnosDisponibles from "./ListaTurnosDisponibles";
// import AsignarTurno from "./AsignarTurno";
// import ListaTurnosAsignados from "./ListaTurnosAsignados";
// import CrearTurnosDisponibles from "./CrearTurnoDisponibles";

const TurnosManager = () => {
  const [vista, setVista] = useState("asignados");

  return (
    <div>
      <h2>Gestión de Turnos</h2>
      <div>
        {/* <button onClick={() => setVista("crear")}>Crear Turnos Disponibles</button> */}
        <button onClick={() => setVista("disponibles")}>Ver Turnos Disponibles</button>
        <button onClick={() => setVista("asignar")}>Asignar Turno a Paciente</button>
        <button onClick={() => setVista("asignados")}>Turnos Asignados</button>
      </div>

      <hr />

      {vista === "crear" && <CrearTurnosDisponibles />}
      {vista === "disponibles" && <ListaTurnosDisponibles />}
      {vista === "asignar" && <AsignarTurno />}
      {vista === "asignados" && <ListaTurnosAsignados />}
    </div>
  );
};

export default TurnosManager;
