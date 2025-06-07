import React, { useState } from "react";

const ListaTurnosDisponibles = () => {
  const [turnos, setTurnos] = useState([]);
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [consultorioSeleccionado, setConsultorioSeleccionado] = useState("");
  const token = localStorage.getItem("token");

  const obtenerTurnosFiltrados = () => {
    if (!diaSeleccionado || !consultorioSeleccionado) return;

    const params = new URLSearchParams({
      dia: diaSeleccionado,
      consultorio: consultorioSeleccionado,
    });

    fetch(`http://localhost:5000/api/turnos-disponibles?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then(data => setTurnos(data))
      .catch(err => {
        console.error(err);
        alert("Error al obtener los turnos o no estás autorizado.");
      });
  };

  const eliminarTurno = async (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este turno?");
    if (!confirm) return;

    await fetch(`http://localhost:5000/api/turnos-disponibles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTurnos(turnos.filter(t => t._id !== id));
  };

  return (
    <div>
      <h3>Seleccionar Día y Consultorio</h3>
      <label>
        Día:{" "}
        <input
          type="date"
          value={diaSeleccionado}
          onChange={(e) => setDiaSeleccionado(e.target.value)}
        />
      </label>
      <br />
      <label>
        Consultorio:{" "}
        <select
          value={consultorioSeleccionado}
          onChange={(e) => setConsultorioSeleccionado(e.target.value)}
        >
          <option value="">-- Seleccione --</option>
          <option value="1">Consultorio 1</option>
          <option value="2">Consultorio 2</option>
          {/* <option value="3">Consultorio 3</option> */}
          {/* Agrega más consultorios según tu caso */}
        </select>
      </label>
      <br />
      <button onClick={obtenerTurnosFiltrados}>Buscar Turnos</button>

      <h3>Turnos Disponibles</h3>
      <ul>
        {turnos.length === 0 && <p>No hay turnos disponibles.</p>}
        {turnos.map(t => (
          <li key={t._id}>
            {t.dia} | Consultorio {t.consultorio} | {t.horarios.join(", ")}
            {/* <button onClick={() => eliminarTurno(t._id)}>Eliminar</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTurnosDisponibles;
