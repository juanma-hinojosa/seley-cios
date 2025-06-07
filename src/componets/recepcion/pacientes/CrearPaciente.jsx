import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CrearPaciente = ({ onVolver }) => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    direccion: '',
    email: '',
    telefono: '',
    alergias: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/api/patients/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Paciente creado con éxito');
        setForm({
          nombre: '', apellido: '', dni: '', fechaNacimiento: '',
          direccion: '', email: '', telefono: '', alergias: ''
        });
      } else {
        toast.error(data.message || 'Error al crear paciente');
      }
    } catch (error) {
      toast.error('Error de conexión con el servidor');
    }
  };

  return (
    <div className="crear-paciente">
      <h3>Crear Paciente</h3>
      <form onSubmit={handleSubmit}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required />
        <input name="dni" value={form.dni} onChange={handleChange} placeholder="DNI" required />
        <input name="fechaNacimiento" type="date" value={form.fechaNacimiento} onChange={handleChange} required />
        <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" required />
        <textarea name="alergias" value={form.alergias} onChange={handleChange} placeholder="Alergias (si hay)" />
        <button type="submit">Guardar</button>
        <button type="button" onClick={onVolver}>Volver</button>
      </form>
    </div>
  );
};

export default CrearPaciente;
