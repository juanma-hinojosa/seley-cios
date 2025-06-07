import React, { useEffect, useState } from "react";

const PatientList = ({ setEditingPatient }) => {
  const [patients, setPatients] = useState([]);
  const token = localStorage.getItem("token");

  const fetchPatients = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/patients", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPatients(data);
    } catch (error) {
      console.error("Error al cargar pacientes:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Deseas eliminar esta ficha?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Error al eliminar ficha");

      alert("Ficha eliminada correctamente.");
      fetchPatients();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar ficha.");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Pacientes Registrados</h2>
      {patients.length === 0 ? (
        <p>No hay pacientes cargados.</p>
      ) : (
        <ul>
          {patients.map((patient) => (
            <li key={patient._id}>

              {patient.numeroPaciente} - {patient.nombre} {patient.apellido} - DNI: {patient.dni}
              <button onClick={() => setEditingPatient(patient)}>Editar</button>
              <button onClick={() => handleDelete(patient._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;
