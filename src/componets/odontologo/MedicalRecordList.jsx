import React, { useEffect, useState } from "react";
import MedicalRecordAdminControls from "./MedicalRecordAdminControls";

const MedicalRecordList = ({ pacienteId, isAdmin }) => {
  const [records, setRecords] = useState([]);
  const token = localStorage.getItem("token");

  const fetchRecords = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/records/${pacienteId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setRecords(data);
    } catch (error) {
      console.error("Error al obtener historia clínica");
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [pacienteId]);

  return (
    <div>
      <h3>Historia Clínica</h3>
      {records.map((record) => (
        <div key={record._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p><strong>Fecha:</strong> {new Date(record.fecha).toLocaleString()}</p>
          <p><strong>Descripción:</strong> {record.descripcion}</p>
          <p><strong>Registrado por:</strong> {record.creadoPor?.name} ({record.creadoPor?.role})</p>
          {record.imagenes.map((img, i) => (
            <img key={i} src={img} alt="historia" style={{ width: "100px", marginRight: "5px" }} />
          ))}
          {isAdmin && (
            <MedicalRecordAdminControls record={record} onUpdated={fetchRecords} />
          )}
        </div>
      ))}
    </div>
  );
};

export default MedicalRecordList;
