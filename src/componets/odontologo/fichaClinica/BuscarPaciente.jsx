import React, { useState, useEffect } from 'react';

const BuscarPacienteInput = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://backend-cios.onrender.com/api/patients', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setPacientes(data);
      } catch (error) {
        console.error('Error al obtener pacientes', error);
      }
    };
    fetchPacientes();
  }, []);

  useEffect(() => {
    if (query.length < 2) return setResultados([]);
    const filtro = pacientes.filter(p =>
      p.nombre.toLowerCase().includes(query.toLowerCase()) ||
      p.apellido.toLowerCase().includes(query.toLowerCase()) ||
      p.dni.includes(query) ||
      p.numeroPaciente.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(filtro);
  }, [query, pacientes]);

  return (
   <div>
      <input
       
        type="text"
        placeholder="Buscar por nombre, apellido, DNI o número"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      {resultados.length > 0 && (
        <ul>
          {resultados.map(p => (
            <li style={{cursor: "pointer", animation:"ease-in-out"}} className='poppins-regular' key={p._id} onClick={() => onSelect(p)}>
              {p.numeroPaciente} - {p.nombre} {p.apellido} ({p.dni})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BuscarPacienteInput;
