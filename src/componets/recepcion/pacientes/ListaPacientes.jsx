// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

// const ListaPacientes = ({ onEditar, onFicha }) => {
//   const [pacientes, setPacientes] = useState([]);
//   const [busqueda, setBusqueda] = useState('');

//   const token = localStorage.getItem('token');

//   const fetchPacientes = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/patients', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (res.ok) setPacientes(data);
//       else toast.error(data.message || 'Error al obtener pacientes');
//     } catch (err) {
//       toast.error('Error de conexión con el servidor');
//     }
//   };

//   useEffect(() => {
//     fetchPacientes();
//   }, []);

//   const eliminarPaciente = async (id) => {
//     if (!window.confirm('¿Estás seguro que deseas eliminar esta ficha?')) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/patients/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (res.ok) {
//         toast.success('Paciente eliminado');
//         setPacientes(pacientes.filter((p) => p._id !== id));
//       } else {
//         toast.error(data.message || 'Error al eliminar');
//       }
//     } catch (error) {
//       toast.error('Error en el servidor');
//     }
//   };

  

//   const pacientesFiltrados = pacientes.filter((p) => {
//     const str = `${p.apellido} ${p.dni} ${p.numeroPaciente}`.toLowerCase();
//     return str.includes(busqueda.toLowerCase());
//   });

//   return (
//     <div>
//       <h3>Listado de Pacientes</h3>
//       <input
//         type="text"
//         placeholder="Buscar por apellido, DNI o número"
//         value={busqueda}
//         onChange={(e) => setBusqueda(e.target.value)}
//       />
//       <ul>
//         {pacientesFiltrados.map((p) => (
//           <li key={p._id}>
//             {p.numeroPaciente} - {p.apellido}, {p.nombre} - DNI: {p.dni}
//             <button onClick={() => onFicha(p)}>Ver Ficha</button>
//             <button onClick={() => onEditar(p)}>Editar</button>
//             <button onClick={() => eliminarPaciente(p._id)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListaPacientes;


import React, { useEffect, useState } from 'react';
// import FichaPaciente from './FichaPaciente';
import { toast } from 'react-toastify';
import FichaPaciente from '../../admin/pacientes/FichaPaciente';

const ListaPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const token = localStorage.getItem('token');

  const obtenerPacientes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/patients/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPacientes(data);
    } catch (err) {
      toast.error('Error al obtener pacientes');
    }
  };

  useEffect(() => {
    obtenerPacientes();
  }, []);

  const filtrar = (paciente) => {
    const texto = busqueda.toLowerCase();
    return (
      paciente.numeroPaciente.toLowerCase().includes(texto) ||
      paciente.dni.toLowerCase().includes(texto) ||
      paciente.apellido.toLowerCase().includes(texto)
    );
  };

  const onEditar = (paciente) => {
    setPacienteSeleccionado(paciente);
  };

  const volverListado = () => {
    setPacienteSeleccionado(null);
    obtenerPacientes();
  };

  return (
    <div>
      {pacienteSeleccionado ? (
        <FichaPaciente paciente={pacienteSeleccionado} onBack={volverListado} />
      ) : (
        <>
          <h3>Lista de Pacientes</h3>
          <input
            placeholder="Buscar por apellido, DNI o número"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <ul>
            {pacientes.filter(filtrar).map((p) => (
              <li key={p._id}>
                {p.numeroPaciente} {p.apellido}, {p.nombre} - DNI: {p.dni}
                {/* <button onClick={() => onEditar(p)}>Editar</button> */}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
