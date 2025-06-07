import React, { useState } from "react";

const MedicalRecordAdminControls = ({ record, onUpdated }) => {
  const [editMode, setEditMode] = useState(false);
  const [descripcion, setDescripcion] = useState(record.descripcion);
  const token = localStorage.getItem("token");

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/records/${record._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ descripcion }),
      });

      if (!res.ok) throw new Error("Error al actualizar");
      setEditMode(false);
      onUpdated();
      alert("Entrada actualizada");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("¿Eliminar esta entrada?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/records/${record._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error al eliminar");
      onUpdated();
      alert("Entrada eliminada");
    } catch (err) {
      console.error(err);
      alert("Error al eliminar");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {editMode ? (
        <>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <button onClick={handleUpdate}>Guardar</button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default MedicalRecordAdminControls;
