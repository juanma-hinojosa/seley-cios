import React, { useState } from 'react';
import BuscarPacienteInput from './BuscarPaciente';
import { toast } from 'react-toastify';

const CrearHistoriaClinica = () => {
  const [paciente, setPaciente] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('paciente', paciente._id);
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    imagenes.forEach(img => formData.append('imagenes', img));

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('https://backend-cios.onrender.com/api/records/create', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      toast.success('Entrada creada en historia clinica');
      console.log(data);
    } catch (error) {
      toast.error('Error al crear historia clínica', error);
    }
  };

  return (
    <div>
      <h3 className='poppins-regular'>Crear nueva entrada</h3>
      <BuscarPacienteInput onSelect={setPaciente} />
      {paciente && (
        <section className='ui-form-container'>
          <form className='ui-form' onSubmit={handleSubmit}>
            <p className='poppins-light'>Paciente: {paciente.nombre} {paciente.apellido}</p>
            <input className='ui-input' type="text" placeholder="Título del tratamiento" value={titulo} onChange={e => setTitulo(e.target.value)} required />
            <textarea className='ui-textarea' placeholder="Descripción del tratamiento" value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
            <input className='ui-input' type="file" multiple onChange={e => setImagenes([...e.target.files])} />
            <button type="submit">Guardar entrada</button>
          </form>
        </section>

      )}
    </div>
  );
};

export default CrearHistoriaClinica;
