// import React, { useEffect, useState } from "react";

// const ListaTurnosAsignados = () => {
//   const [turnos, setTurnos] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:5000/api/turnos", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(res => {
//         if (!res.ok) throw new Error("No autorizado");
//         return res.json();
//       })
//       .then(data => setTurnos(data))
//       .catch(err => {
//         console.error(err);
//         alert("No autorizado. Inicie sesión nuevamente.");
//       });
//   }, []);

//   // const cancelarTurno = async (id) => {
//   //   await fetch(`http://localhost:5000/api/turnos/cancelar/${id}`, {
//   //     method: "DELETE",
//   //     headers: {
//   //       Authorization: `Bearer ${localStorage.getItem("token")}`
//   //     }
//   //   });
//   //   setTurnos(turnos.filter(t => t._id !== id));
//   // };
//   const cancelarTurno = async (id) => {
//     const confirmacion = window.confirm("¿Estás seguro que deseas cancelar este turno?");
//     if (!confirmacion) return;

//     await fetch(`http://localhost:5000/api/turnos/cancelar/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     });

//     setTurnos(turnos.filter(t => t._id !== id));
//   };
//   return (
//     <div>
//       <h3>Turnos Asignados</h3>
//       <ul>
//         {turnos.map(t => (
//           <li key={t._id} style={{ marginBottom: "10px" }}>
//             <strong>Paciente:</strong> {t.paciente?.nombre} {t.paciente?.apellido} ({t.paciente?.telefono})<br />
//             <strong>Odontóloga/o:</strong> {t.odontologo?.name}<br />
//             <strong>Día:</strong> {t.dia} | <strong>Hora:</strong> {t.horario} | <strong>Consultorio:</strong> {t.consultorio}
//             <br />
//             <button onClick={() => cancelarTurno(t._id)}>Cancelar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListaTurnosAsignados;
import React, { useEffect, useState } from "react";
import BuscarPacienteInput from "../fichaClinica/BuscarPaciente";

const ListaTurnosAsignados = () => {
  const [turnos, setTurnos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/turnos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then(data => setTurnos(data))
      .catch(err => {
        console.error(err);
        alert("No autorizado. Inicie sesión nuevamente.");
      });
  }, []);

  const cancelarTurno = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro que deseas cancelar este turno?");
    if (!confirmacion) return;

    await fetch(`http://localhost:5000/api/turnos/cancelar/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    setTurnos(turnos.filter(t => t._id !== id));
  };

  const getNext7Weekdays = () => {
    const fechas = [];
    let fecha = new Date();

    while (fechas.length < 7) {
      if (fecha.getDay() !== 0) { // Excluir domingos
        fechas.push(new Date(fecha));
      }
      fecha.setDate(fecha.getDate() + 1);
    }

    return fechas;
  };

  const formatearFecha = (fecha) => {
    return fecha.toISOString().split("T")[0]; // yyyy-mm-dd
  };

  const turnosFiltrados = turnos.filter(t => {
    const coincideBusqueda = filtro === "" ||
      t.paciente?.nombre?.toLowerCase().includes(filtro.toLowerCase()) ||
      t.paciente?.apellido?.toLowerCase().includes(filtro.toLowerCase()) ||
      t.paciente?.dni?.toString().includes(filtro) ||
      t.paciente?._id?.toString().includes(filtro);

    const coincideFecha = !fechaSeleccionada || t.dia === fechaSeleccionada;

    const coincidePacienteSeleccionado = !pacienteSeleccionado || t.paciente?._id === pacienteSeleccionado._id;

    return coincideBusqueda && coincideFecha && coincidePacienteSeleccionado;
  });


  return (
    <div>
      <h3>Turnos Asignados</h3>

      {/* Buscador */}
      {/* Buscador de paciente */}
      {/* <BuscarPacienteInput onSelect={paciente => setPacienteSeleccionado(paciente)} />
      {pacienteSeleccionado && (
        <div style={{ marginBottom: "10px" }}>
          <strong>Paciente seleccionado:</strong> {pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido} ({pacienteSeleccionado.dni})
          <button onClick={() => setPacienteSeleccionado(null)} style={{ marginLeft: "10px" }}>Quitar</button>
        </div>
      )} */}

      {/* Botones de fechas */}
      <div style={{ marginBottom: "15px" }}>
        {getNext7Weekdays().map((fecha, idx) => {
          const fechaStr = formatearFecha(fecha);
          return (
            <button
              key={idx}
              onClick={() => setFechaSeleccionada(fechaStr)}
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                backgroundColor: fechaStr === fechaSeleccionada ? "#4caf50" : "#e0e0e0",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {fecha.toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
                month: "short"
              })}
            </button>
          );
        })}
        <button
          onClick={() => setFechaSeleccionada(null)}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Ver todos
        </button>
      </div>

      {/* Lista de turnos */}
      <ul>
        {turnosFiltrados.map(t => (
          <li key={t._id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <strong>Paciente:</strong> {t.paciente?.nombre} {t.paciente?.apellido} ({t.paciente?.telefono})<br />
            <strong>Odontóloga/o:</strong> {t.odontologo?.name}<br />
            <strong>Día:</strong> {t.dia} | <strong>Hora:</strong> {t.horario} | <strong>Consultorio:</strong> {t.consultorio}
            <br />
            {/* <button
              onClick={() => cancelarTurno(t._id)}
              style={{
                marginTop: "5px",
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Cancelar
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTurnosAsignados;
