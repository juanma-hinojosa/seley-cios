import React, { useState } from "react";
import { toast } from 'react-toastify';

const CrearTratamientoForm = ({ onCreated }) => {
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("https://backend-cios.onrender.com/api/tratamientos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ categoria, nombre, precio }),
      });

      if (!res.ok) throw new Error("Error al crear tratamiento");

      // Limpiar campos después de crear el tratamiento
      setCategoria("");
      setNombre("");
      setPrecio("");

      // Notificar éxito
      toast.success("Tratamiento creado exitosamente");

      // Llamar al callback para notificar al componente padre
      onCreated();
    } catch (err) {
      console.error(err);
      // Notificar error
      toast.error("Error al crear tratamiento. Intente de nuevo.");
    }
  };

  return (
    <section className="crear-paciente">
      <h3 className="poppins-semibold">Crear nuevo tratamiento</h3>
      <div className="ui-form-container">
        <form className="ui-form poppins-light" onSubmit={handleSubmit}>
          <input
            className="ui-input"
            type="text"
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
          <input
            className="ui-input"
            type="text"
            placeholder="Nombre del tratamiento"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            className="ui-input"
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    </section>
  );
};


export default CrearTratamientoForm;
