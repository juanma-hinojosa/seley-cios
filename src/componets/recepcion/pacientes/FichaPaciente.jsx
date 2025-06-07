import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const FichaPaciente = ({ paciente, onBack }) => {
  const [form, setForm] = useState(paciente || {});
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (paciente) {
      setForm(paciente);
    }
  }, [paciente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/patients/${form._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Ficha actualizada');
        onBack(); // Vuelve al listado u origen
      } else {
        toast.error(data.message || 'Error al actualizar');
      }
    } catch (error) {
      toast.error('Error al conectar con el servidor');
    }
  };

  return (
    <div>
      <h3>Ficha de Paciente</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          value={form.nombre || ''}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          name="apellido"
          value={form.apellido || ''}
          onChange={handleChange}
          placeholder="Apellido"
          required
        />
        <input
          name="dni"
          value={form.dni || ''}
          onChange={handleChange}
          placeholder="DNI"
          required
        />
        <input
          name="fechaNacimiento"
          type="date"
          value={form.fechaNacimiento?.slice(0, 10) || ''}
          onChange={handleChange}
          required
        />
        <input
          name="direccion"
          value={form.direccion || ''}
          onChange={handleChange}
          placeholder="Dirección"
          required
        />
        <input
          name="email"
          value={form.email || ''}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="telefono"
          value={form.telefono || ''}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <input
          name="alergias"
          value={form.alergias || ''}
          onChange={handleChange}
          placeholder="Alergias (opcional)"
        />
        <button type="submit">Actualizar Ficha</button>
        <button type="button" onClick={onBack}>Volver</button>
      </form>
    </div>
  );
};

export default FichaPaciente;
