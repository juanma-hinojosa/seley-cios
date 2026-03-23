import { useState } from "react";
// import PatientSearch from "./PatientSearch";
import OdontogramaManager from "./OdontogramaManager";
import PatientSearch from "./PacienteSearch";

export default function Odontograma() {
  const [paciente, setPaciente] = useState(null);

  const COLOR_INFO = [
    {
      categoria: "Principales",
      items: [
        {
          nombre: "Celeste",
          descripcion: "Tratamientos realizados y en buen estado",
          color: "#1D3557"
        },
        {
          nombre: "Rojo",
          descripcion: "Patologías, lesiones o tratamientos pendientes",
          color: "#E63946"
        }
      ]
    },
    {
      categoria: "Complementarios",
      items: [
        {
          nombre: "Verde",
          descripcion: "Tratamientos temporales",
          color: "#008000"
        },
        {
          nombre: "Negro",
          descripcion: "Ausencias naturales de piezas",
          color: "#000"
        },
        {
          nombre: "Amarillo",
          descripcion: "Sellantes de fosas y fisuras",
          color: "#FFFF00"
        },
        {
          nombre: "Naranja",
          descripcion: "Hallazgos particulares o materiales específicos",
          color: "#FFA500"
        }
      ]
    }
  ];


  return (
    <div className="poppins-regular" >
      {!paciente && <PatientSearch onSelect={setPaciente} />}

      {paciente && (
        <>
          <h2>{paciente.nombre} {paciente.apellido}</h2>
          <OdontogramaManager pacienteId={paciente._id} />
        </>
      )}


      {COLOR_INFO.map((grupo) => (
        <div key={grupo.categoria}>
          <h4 style={{margin:'20px 0 10px 0'}} >{grupo.categoria}</h4>

          {grupo.items.map((item) => (
            <div key={item.nombre} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: item.color,
                  border: "1px solid #000"
                }}
              />
              <strong>{item.nombre}:</strong> {item.descripcion}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}