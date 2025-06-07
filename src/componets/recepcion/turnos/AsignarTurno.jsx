import React, { useState, useEffect } from "react";
import BuscarPacienteInput from "../fichaClinica/BuscarPaciente";

const AsignarTurno = () => {
  const [pacienteId, setPacienteId] = useState("");
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [turnos, setTurnos] = useState([]);
  const [turnoId, setTurnoId] = useState("");
  const [odontologos, setOdontologos] = useState([]);
  const [odontologoId, setOdontologoId] = useState("");
  const [fecha, setFecha] = useState("");

  // Obtener odontólogos
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setOdontologos(data))
      .catch(err => console.error("Error cargando odontólogos:", err));
  }, []);

  // Buscar turnos desde una fecha
  const buscarTurnos = async () => {
    if (!fecha) return alert("Seleccione una fecha primero");
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/turnos-disponibles?dia=${fecha}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTurnos(data);
    } catch (err) {
      console.error("Error buscando turnos:", err);
      alert("Error al buscar turnos");
    }
  };

  // Asignar turno
  const asignar = async () => {
    const token = localStorage.getItem("token");
    const turnoSeleccionado = JSON.parse(turnoId);

    const res = await fetch("http://localhost:5000/api/turnos/asignar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paciente: pacienteId,
        odontologo: odontologoId,
        consultorio: turnoSeleccionado.consultorio,
        dia: turnoSeleccionado.dia,
        horario: turnoSeleccionado.horario,
      }),
    });

    if (res.ok) {
      alert("Turno asignado exitosamente.");
      setPacienteSeleccionado(null);
      setPacienteId("");
      setTurnoId("");
      setOdontologoId("");
      setFecha("");
      setTurnos([]);
    } else {
      const error = await res.json();
      alert("Error al asignar turno: " + (error.message || "Intente nuevamente."));
    }
  };

  return (
    <div>
      <h3>Asignar Turno</h3>

      <BuscarPacienteInput
        onSelect={(p) => {
          setPacienteId(p._id);
          setPacienteSeleccionado(p);
        }}
      />

      {pacienteSeleccionado && (
        <div style={{ margin: "10px 0", fontWeight: "bold" }}>
          Paciente seleccionado: {pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido}
        </div>
      )}

      <h4>Seleccione un odontólogo</h4>
      <select value={odontologoId} onChange={(e) => setOdontologoId(e.target.value)}>
        <option value="">Seleccione un odontólogo</option>
        {odontologos.map((o) => (
          <option key={o._id} value={o._id}>
            {o.name} ({o.role})
          </option>
        ))}
      </select>

      <h4>Seleccione una fecha</h4>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button onClick={buscarTurnos}>Buscar turnos desde esta fecha</button>

      <h4>Seleccione un turno disponible</h4>
      <select onChange={(e) => setTurnoId(e.target.value)} value={turnoId}>
        <option value="">Seleccione un turno</option>
        {turnos.map((t) =>
          t.horarios.map((horario) => (
            <option key={`${t._id}-${horario}`} value={JSON.stringify({ ...t, horario })}>
              {t.dia} - {horario} - Consultorio: {t.consultorio}
            </option>
          ))
        )}
      </select>

      <br />
      <button
        onClick={asignar}
        disabled={!pacienteId || !turnoId || !odontologoId}
        style={{ marginTop: "10px" }}
      >
        Asignar Turno
      </button>
    </div>
  );
};

export default AsignarTurno;
