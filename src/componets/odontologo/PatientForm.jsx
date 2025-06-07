import React, { useState, useEffect } from "react";

const PatientForm = ({ fetchPatients, editingPatient, setEditingPatient }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaNacimiento: "",
    direccion: "",
    email: "",
    telefono: "",
    alergias: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (editingPatient) {
      setFormData({
        nombre: editingPatient.nombre,
        apellido: editingPatient.apellido,
        dni: editingPatient.dni,
        fechaNacimiento: editingPatient.fechaNacimiento?.slice(0, 10),
        direccion: editingPatient.direccion,
        email: editingPatient.email || "",
        telefono: editingPatient.telefono,
        alergias: editingPatient.alergias || "",
      });
    }
  }, [editingPatient]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingPatient
      ? `http://localhost:5000/api/patients/${editingPatient._id}`
      : "http://localhost:5000/api/patients/create";

    const method = editingPatient ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al guardar paciente");

      setFormData({
        nombre: "",
        apellido: "",
        dni: "",
        fechaNacimiento: "",
        direccion: "",
        email: "",
        telefono: "",
        alergias: "",
      });
      setEditingPatient(null);
      fetchPatients();
      alert("Ficha guardada correctamente.");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al guardar la ficha.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingPatient ? "Editar" : "Crear"} Paciente</h2>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder="DNI" required />
      <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
      <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (opcional)" />
      <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <input type="text" name="alergias" value={formData.alergias} onChange={handleChange} placeholder="Alergias (opcional)" />
      <button type="submit">{editingPatient ? "Actualizar" : "Crear"}</button>
    </form>
  );
};

export default PatientForm;
