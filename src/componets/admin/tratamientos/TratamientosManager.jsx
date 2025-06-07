import React, { useState, useEffect } from "react";
import CrearTratamientoForm from "./CrearTratamientoForm";
import EditarTratamientoForm from "./EditarTratamientoForm";
import ListaTratamientos from "./ListaTratamientos";
import BuscarTratamientos from "./BuscarTratamientos";
import { toast } from 'react-toastify';

const TratamientosManager = () => {
  const [accion, setAccion] = useState("listar"); // listar | crear | editar | buscar
  const [tratamientos, setTratamientos] = useState([]);
  const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState(null);

  const fetchTratamientos = async () => {
    try {
      const res = await fetch("https://backend-cios.onrender.com/api/tratamientos");
      const data = await res.json();
      setTratamientos(data);
      toast.success("Tratamientos cargados correctamente"); // Notificación de éxito al cargar los tratamientos
    } catch (err) {
      console.error("Error al obtener tratamientos", err);
      toast.error("Error al obtener los tratamientos"); // Notificación de error si falla la carga
    }
  };

  useEffect(() => {
    fetchTratamientos();
  }, []);

  const manejarEdicion = (tratamiento) => {
    setTratamientoSeleccionado(tratamiento);
    setAccion("editar");
    toast.info("Editando tratamiento"); // Notificación informativa cuando se selecciona un tratamiento para editar
  };

  const manejarEliminacion = async (id) => {
    if (confirm("¿Deseas eliminar este tratamiento?")) {
      const token = localStorage.getItem("token");
      try {
        await fetch(`https://backend-cios.onrender.com/api/tratamientos/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchTratamientos(); // Recargar los tratamientos después de eliminar
        toast.success("Tratamiento eliminado correctamente"); // Notificación de éxito al eliminar
      } catch (err) {
        console.error("Error al eliminar", err);
        toast.error("Error al eliminar el tratamiento"); // Notificación de error si falla la eliminación
      }
    }
  };


  return (
    <div className="tratamientos-manager">
      <div className="acciones"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          // padding: "2rem"
        }}
      >
        <button style={{ padding: "5px 10px" }} onClick={() => setAccion("listar")}>📋 Ver todos</button>
        <button style={{ padding: "5px 10px" }} onClick={() => setAccion("crear")}>➕ Crear nuevo</button>
        <button style={{ padding: "5px 10px" }} onClick={() => setAccion("buscar")}>🔍 Buscar</button>
      </div>
      <br />
      <hr />

      <div className="contenedor">
        {accion === "listar" && (
          <ListaTratamientos
            tratamientos={tratamientos}
            onEdit={manejarEdicion}
            onDelete={manejarEliminacion}
          />
        )}

        {accion === "crear" && (
          <CrearTratamientoForm
            onCreated={() => {
              fetchTratamientos();
              setAccion("listar");
            }}
          />
        )}

        {accion === "editar" && tratamientoSeleccionado && (
          <EditarTratamientoForm
            tratamiento={tratamientoSeleccionado}
            onUpdated={() => {
              fetchTratamientos();
              setAccion("listar");
            }}
          />
        )}

        {accion === "buscar" && (
          <BuscarTratamientos />
        )}
      </div>
    </div>
  );
};

export default TratamientosManager;
