import React, { useState } from "react";

const CrearTurnosDisponibles = () => {
  const [dia, setDia] = useState("");
  const [consultorio, setConsultorio] = useState("1");
  const [horarios, setHorarios] = useState("");

  const handleCrear = async () => {
    const token = localStorage.getItem('token');
    const horariosArray = horarios.split(",").map(h => h.trim());

    const res = await fetch("http://localhost:5000/api/turnos-disponibles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // <--- esto es clave
      },
      body: JSON.stringify({ dia, consultorio, horarios: horariosArray })
    });

    const data = await res.json();
    alert(data.message || "Turnos creados");
  };

  return (
    <div>
      <h3>Crear Turnos Disponibles</h3>
      <input type="date" value={dia} onChange={e => setDia(e.target.value)} />
      <select value={consultorio} onChange={e => setConsultorio(e.target.value)}>
        <option value="1">Consultorio 1</option>
        <option value="2">Consultorio 2</option>
      </select>
      <input
        type="text"
        placeholder="Ej: 09:30, 10:00, 10:30"
        value={horarios}
        onChange={e => setHorarios(e.target.value)}
      />
      <button onClick={handleCrear}>Crear</button>
    </div>
  );
};

export default CrearTurnosDisponibles;
