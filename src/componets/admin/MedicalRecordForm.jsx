import React, { useState } from "react";

const MedicalRecordForm = ({ pacienteId, onRecordCreated }) => {
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("descripcion", descripcion);
    imagenes.forEach((img) => formData.append("imagenes", img));

    try {
      const res = await fetch(`http://localhost:5000/api/records/create/${pacienteId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Error al crear entrada");

      setDescripcion("");
      setImagenes([]);
      onRecordCreated();
      alert("Entrada creada correctamente.");
    } catch (err) {
      console.error(err);
      alert("Error al crear entrada");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Entrada a Historia Clínica</h3>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setImagenes(Array.from(e.target.files))}
      />
      <button type="submit">Guardar Entrada</button>
    </form>
  );
};

export default MedicalRecordForm;
