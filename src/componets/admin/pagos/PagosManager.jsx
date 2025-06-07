import React, { useState } from "react";
import { toast } from 'react-toastify';

const PagosManager = () => {
  const [terminoPaciente, setTerminoPaciente] = useState("");
  const [terminoTratamiento, setTerminoTratamiento] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [tratamientos, setTratamientos] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [tratamientosAsignados, setTratamientosAsignados] = useState([]);
  const [pago, setPago] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [errorPago, setErrorPago] = useState(""); // Estado para manejar el error

  const token = localStorage.getItem("token");

  // Buscar pacientes
  const buscarPaciente = async () => {
    const res = await fetch(
      `https://backend-cios.onrender.com/api/patient-treatments/buscar-paciente?termino=${terminoPaciente}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    setPacientes(data);
    setPacienteSeleccionado(null);
    setTratamientosAsignados([]);
    setTratamientos([]);
  };

  // Buscar tratamientos por nombre o categoría
  const buscarTratamiento = async () => {
    if (!pacienteSeleccionado) return;
    const res = await fetch(
      `https://backend-cios.onrender.com/api/patient-treatments/buscar-tratamiento?termino=${terminoTratamiento}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    setTratamientos(data);
  };

  // Obtener tratamientos asignados
  const cargarAsignados = async (pacienteId) => {
    const res = await fetch(
      `https://backend-cios.onrender.com/api/patient-treatments/paciente/${pacienteId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    setTratamientosAsignados(data);
  };

  // Seleccionar paciente
  const seleccionarPaciente = async (paciente) => {
    setPacienteSeleccionado(paciente);
    setTratamientos([]);
    setTerminoTratamiento("");
    await cargarAsignados(paciente._id);
  };

  const asignarTratamiento = async (tratamientoId) => {
    const res = await fetch("https://backend-cios.onrender.com/api/patient-treatments/asignar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pacienteId: pacienteSeleccionado._id,
        tratamientoId,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setMensaje("Tratamiento asignado");
      toast.success("Tratamiento asignado con éxito"); // Notificación de éxito
      await cargarAsignados(pacienteSeleccionado._id);
    } else {
      toast.error("Error al asignar tratamiento"); // Notificación de error si algo falla
    }
  };

  // Registrar pago
  const registrarPago = async (registroId) => {
    const monto = pago[registroId];
    if (!monto || monto <= 0) {
      toast.warn("El monto debe ser mayor a 0"); // Notificación de advertencia si el monto es inválido
      return;
    }

    const res = await fetch(
      `https://backend-cios.onrender.com/api/patient-treatments/pago/${registroId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ monto: parseFloat(monto) }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      setMensaje("Pago registrado");
      setPago({ ...pago, [registroId]: "" });
      toast.success("Pago registrado exitosamente"); // Notificación de éxito
      await cargarAsignados(pacienteSeleccionado._id);
    } else {
      toast.error("Error al registrar pago"); // Notificación de error
    }
  };

  return (
    <div className="pagos-manager poppins-regular">
      <h2 className="poppins-semibold">Gestión de Pagos de Tratamientos</h2>

      {/* Buscar Paciente */}
      <div>
        <input
          type="text"
          placeholder="Buscar paciente por DNI, nombre, apellido..."
          value={terminoPaciente}
          onChange={(e) => setTerminoPaciente(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button style={{ padding: "5px 10px" }} onClick={buscarPaciente}>Buscar Paciente</button>
      </div>

      {/* Resultados búsqueda */}
      {pacientes.length > 0 && (
        <div>
          <h3 className="poppins-regular">Resultados</h3>
          <ul>
            {pacientes.map((p) => (
              <li className="poppins-semibold" key={p._id}>
                {p.nombre} {p.apellido} - {p.dni}{" "}
                <button style={{ padding: "5px 10px" }} onClick={() => seleccionarPaciente(p)}>Ver</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Paciente seleccionado */}
      {pacienteSeleccionado && (
        <div>
          <h3 className="poppins-regular">
            Paciente: {pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido}
          </h3>

          {/* Buscar y asignar tratamiento */}
          <h4 className="poppins-regular">Buscar tratamiento para asignar</h4>
          <input
            type="text"
            placeholder="Buscar tratamiento por nombre o categoría"
            value={terminoTratamiento}
            onChange={(e) => setTerminoTratamiento(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <button style={{ padding: "5px 10px" }} onClick={buscarTratamiento}>Buscar Tratamientos</button>

          {/* Resultados de tratamientos */}
          <ul>
            {tratamientos.map((t) => (
              <li key={t._id}>
                {t.nombre} - ${t.precio}{" "}
                <button onClick={() => asignarTratamiento(t._id)}>Asignar</button>
              </li>
            ))}
          </ul>

          <br /><hr /><br />
          {/* Tratamientos asignados */}
          <h4 className="poppins-regular">Tratamientos asignados</h4>
          <ul>

            {tratamientosAsignados.map((t) => (
              <li style={{ listStyle: "none" }} key={t._id} className="poppins-regular">
                <br /><hr /><br />
                <strong>{t.tratamiento.nombre}</strong> | Total: ${t.precioTotal} | Pagado: $ {t.precioTotal - t.saldoPendiente} | Saldo: ${t.saldoPendiente} | Estado:{" "}
                {t.estado || "pendiente"}

                {/* Mostrar input solo si hay saldo pendiente */}
                {t.saldoPendiente > 0 && (
                  <div>
                    <input
                      style={{
                        marginRight: "10px",
                        padding: "5px",
                        // appearance: "none", // Desactivar las flechas
                        // MozAppearance: "textfield", // Para Firefox
                      }}
                      className="no-arrows"
                      type="number"
                      placeholder="Monto a pagar"
                      value={pago[t._id] || ""}
                      onChange={(e) => {
                        const valor = Math.min(e.target.value, t.saldoPendiente);
                        setPago({ ...pago, [t._id]: valor });

                        // Validación para el mensaje de error
                        if (parseFloat(e.target.value) > t.saldoPendiente) {
                          setErrorPago("El monto a pagar no puede superar el saldo pendiente.");
                        } else {
                          setErrorPago(""); // Si es válido, limpiar el error
                        }
                      }}
                      max={t.saldoPendiente} // Limitar el valor máximo
                    />
                    <button style={{ padding: "5px 10px" }} onClick={() => registrarPago(t._id)}>Registrar Pago</button>

                    {/* Mostrar mensaje de error si el monto es inválido */}
                    {errorPago && <p style={{ color: "red", fontSize: "12px" }}>{errorPago}</p>}
                  </div>
                )}

                {/* Mostrar historial de pagos */}
                {t.pagos && t.pagos.length > 0 && (
                  <div style={{ marginTop: "10px" }}>
                    <p><strong>Pagos realizados:</strong></p>
                    <ul style={{ listStyle: "none" }}>
                      {t.pagos.map((pago, index) => (
                        <li key={index}>
                           ${pago.monto} - {new Date(pago.fecha).toLocaleDateString()} {new Date(pago.fecha).toLocaleTimeString()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <br />
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mensaje */}
    </div>
  );
};

export default PagosManager;
