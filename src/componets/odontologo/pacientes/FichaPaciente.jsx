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
      const res = await fetch(`https://backend-cios.onrender.com/api/patients/${form._id}`, {
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
    <div className='poppins-regular'>
      <h3>Ficha de Paciente</h3>
      <section className="ui-form-container">
        <form className='ui-form' onSubmit={handleSubmit}>
          <input
          className='ui-input'
            name="nombre"
            value={form.nombre || ''}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
          className='ui-input'
            name="apellido"
            value={form.apellido || ''}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
          <input
          className='ui-input'
            name="dni"
            value={form.dni || ''}
            onChange={handleChange}
            placeholder="DNI"
            required
          />
          <input
          className='ui-input'
            name="fechaNacimiento"
            type="date"
            value={form.fechaNacimiento?.slice(0, 10) || ''}
            onChange={handleChange}
            required
          />
          <input
          className='ui-input'
            name="direccion"
            value={form.direccion || ''}
            onChange={handleChange}
            placeholder="Dirección"
            required
          />
          <input
          className='ui-input'
            name="email"
            value={form.email || ''}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
          className='ui-input'
            name="telefono"
            value={form.telefono || ''}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />
          <input
          className='ui-input'
            name="alergias"
            value={form.alergias || ''}
            onChange={handleChange}
            placeholder="Alergias (opcional)"
          />
          <button style={{padding: "10px"}} type="submit">Actualizar Ficha</button>
          <button style={{padding: "10px"}} type="button" onClick={onBack}>Volver</button>
        </form>
      </section>

    </div>
  );
};

export default FichaPaciente;
