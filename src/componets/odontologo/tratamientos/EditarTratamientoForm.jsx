import React, { useState } from "react";

const EditarTratamientoForm = ({ tratamiento, onUpdated }) => {
  const [categoria, setCategoria] = useState(tratamiento.categoria);
  const [nombre, setNombre] = useState(tratamiento.nombre);
  const [precio, setPrecio] = useState(tratamiento.precio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`https://backend-cios.onrender.com/api/tratamientos/${tratamiento._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ categoria, nombre, precio }),
      });

      if (!res.ok) throw new Error("Error al actualizar tratamiento");

      onUpdated(); // notificar al manager
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <h3 className="poppins-regular">Actulizar tratamiento</h3>
      <section className="ui-form-container">
        <form className="ui-form" onSubmit={handleSubmit}>
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
          <button style={{padding:"10px"}} type="submit">Actualizar</button>
        </form>
      </section>
    </>


  );
};

export default EditarTratamientoForm;
